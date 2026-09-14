import { enquirySchema } from "@/lib/enquiries";
import { getEnquiryDb } from "@/db/raw";

export async function POST(request:Request){
 const origin=request.headers.get("origin");
 if(origin&&origin!==new URL(request.url).origin)return Response.json({error:"Please submit the form from this website."},{status:403});
 if(!request.headers.get("content-type")?.includes("application/json"))return Response.json({error:"Use the website enquiry form."},{status:415});
 if(Number(request.headers.get("content-length")||0)>12000)return Response.json({error:"Your message is too long."},{status:413});
 let payload:unknown;
 try{const raw=await request.text();if(raw.length>12000)return Response.json({error:"Your message is too long."},{status:413});payload=JSON.parse(raw)}catch{return Response.json({error:"Please check the form and try again."},{status:400})}
 const parsed=enquirySchema.safeParse(payload);
 if(!parsed.success)return Response.json({error:"Please complete the required fields with valid details."},{status:400});
 const d=parsed.data;
 try{await getEnquiryDb().prepare("INSERT INTO enquiries (id, kind, email, first_name, last_name, company, role, buildings, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO NOTHING").bind(d.requestId,d.kind,d.email,d.firstName,d.lastName,d.company,d.role,d.buildings,d.notes).run();return Response.json({id:d.requestId,status:"recorded"},{status:201,headers:{"Cache-Control":"no-store"}})}catch(error){console.error("Enquiry save failed",error instanceof Error?error.message:"Storage error");return Response.json({error:"We couldn’t save your request. Your details are still in the form; please try again shortly."},{status:503});}
}
