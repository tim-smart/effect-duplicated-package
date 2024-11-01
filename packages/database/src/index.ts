import { PgDrizzle, layer } from "@effect/sql-drizzle/Pg";
import { PgClient } from "@effect/sql-pg";
import { Config, Layer } from "effect";

const SqlLive = PgClient.layerConfig({
  url: Config.redacted("DATABASE_URL"),
});

const DrizzleLive = layer.pipe(Layer.provide(SqlLive));
export const DatabaseLive = Layer.mergeAll(SqlLive, DrizzleLive);

// Ensure PgDrizzle is exported
export { PgDrizzle };
