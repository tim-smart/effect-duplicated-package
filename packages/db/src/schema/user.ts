import { sql } from "drizzle-orm";
import { pgTable, text, uniqueIndex } from "drizzle-orm/pg-core";

export const userTable = pgTable(
  "user",
  {
    id: text("id"),
    email: text("email").notNull().unique(),
  },
  (t) => ({
    emailIdx: uniqueIndex("email_idx").on(sql`lower(${t.email})`),
  })
);
