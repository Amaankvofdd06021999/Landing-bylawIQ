import { z } from "zod";
export const enquirySchema=z.object({
 requestId:z.string().uuid(),
 kind:z.enum(["demo","pricing","partner"]),
 email:z.string().trim().email().max(254),
 firstName:z.string().trim().min(1).max(80),
 lastName:z.string().trim().min(1).max(80),
 company:z.string().trim().min(1).max(160),
 role:z.enum(["Strata Manager","Council Member","Operations Manager","Managing Broker","Other"]),
 buildings:z.enum(["1 building","2–10 buildings","11–50 buildings","51–100 buildings","100+ buildings"]),
 notes:z.string().trim().max(1500).optional().default(""),
 website:z.string().max(0).optional().default("")
}).strict();
