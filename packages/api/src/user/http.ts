import { User } from "@amosbastian/user";
import { HttpApiBuilder } from "@effect/platform";
import { Effect, Layer } from "effect";
import { Api } from "../api.js";

export const HttpUserLive = HttpApiBuilder.group(Api, "user", (handlers) =>
  Effect.gen(function* () {
    const user = yield* User;

    return handlers.handle("updateUser", () => {
      return user.test();
    });
  })
).pipe(Layer.provide([User.Default]));
