import express from "express";
const router = express.Router();
import { UserInjector } from "@/infra/injectors/UserInjector";
import { UserCreateRequestAdapter } from "@/infra/http/express/adapters/request/user/UserCreateRequestAdapter";
const injector = new UserInjector();

router.post("/", (req: express.Request, res: express.Response) => {
  const injector = new UserInjector();
  const adapter = new UserCreateRequestAdapter();
  const userCreateRequest = adapter.adapt(req);
  const response = injector.getUserCreateController().handle(userCreateRequest);
  // // ここは適当
  res.send("respond with a create" + JSON.stringify(response));
});
module.exports = router;

// 下記をターミナルで実行して、動作確認できます
// curl -X POST -H "Content-Type: application/json" \
// -d '{
//   "name": "太郎"
// }' \
// http://localhost:3000/users
