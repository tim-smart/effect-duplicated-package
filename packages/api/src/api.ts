import { HttpApi, OpenApi } from "@effect/platform";
import { UserApi } from "./user/api.js";

export class Api extends HttpApi.empty
  .add(UserApi)
  .annotate(OpenApi.Title, "amosbastian API") {}
