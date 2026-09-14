import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
export const enquiries=sqliteTable("enquiries",{
 id:text("id").primaryKey(),
 kind:text("kind").notNull(),
 email:text("email").notNull(),
 firstName:text("first_name").notNull(),
 lastName:text("last_name").notNull(),
 company:text("company").notNull(),
 role:text("role").notNull(),
 buildings:text("buildings").notNull(),
 notes:text("notes").notNull().default(""),
 createdAt:text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
