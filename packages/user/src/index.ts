import { DatabaseLive, PgDrizzle } from "@amosbastian/database";
import { eq, sql } from "drizzle-orm";
import { Effect } from "effect";
import { pgTable, text, uniqueIndex } from "drizzle-orm/pg-core";

export const userTable = pgTable(
  "user",
  {
    id: text("id"),
    email: text("email").notNull().unique(),
  },
  (t) => [{ emailIdx: uniqueIndex("email_idx").on(sql`lower(${t.email})`) }]
);

export class User extends Effect.Service<User>()("@core/User", {
  effect: Effect.gen(function* () {
    yield* Effect.log("User repository");
    const db = yield* PgDrizzle;

    const test = () =>
      Effect.gen(function* () {
        const user = yield* db
          .select()
          .from(userTable)
          .where(eq(userTable.id, "123"));
        yield* Effect.log({ user });
      }).pipe(Effect.catchTag("SqlError", (error) => Effect.die(error)));

    return {
      test,
    };
  }),
  dependencies: [DatabaseLive],
}) {}
