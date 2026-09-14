// Enquiry storage is not configured on the Vercel deployment yet. The enquiry
// route catches this error and asks visitors to try again shortly.
export function getEnquiryDb(): D1Database{throw new Error("Enquiry storage is unavailable");}
