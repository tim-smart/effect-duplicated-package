import { DatabaseLive, PgDrizzle } from "@amosbastian/database";
import { userTable } from "@amosbastian/drizzle/schema";
import { eq } from "drizzle-orm";
import { Effect } from "effect";

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
