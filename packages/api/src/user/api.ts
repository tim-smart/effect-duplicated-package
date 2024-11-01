import { HttpApiEndpoint, HttpApiGroup } from "@effect/platform";
import { Schema } from "effect";

export class UserApi extends HttpApiGroup.make("user")
  .add(
    HttpApiEndpoint.get("updateUser", "/update").addSuccess(Schema.Void, {
      status: 201,
    })
  )
  .prefix("/user") {}
