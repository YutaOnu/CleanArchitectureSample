import express from "express";
const router = express.Router();
import { UserInjector } from "@/infra/http/express/injector/UserInjector";
import { toUserCreateRequest } from "@/infra/http/express/adapters/user/toCreateRequest";
const injector = new UserInjector();

router.post("/", (req: express.Request, res: express.Response) => {
  const userCreateRequest = toUserCreateRequest(req);
  const response = injector.getUserCreateController().handle(userCreateRequest);
  // ここは適当
  res.send("respond with a create" + JSON.stringify(response));
});
module.exports = router;

// 下記をターミナルで実行して、動作確認できます
// curl -X POST -H "Content-Type: application/json" \
// -d '{
//   "title": "サンプルタイトル",
//   "overview": "サンプルの概要"
// }' \
// http://localhost:3000/roadmaps
