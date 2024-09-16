import express from "express";
const router = express.Router();
import { UserInjector } from "@/infra/injectors/UserInjector";
import { UserCreateRequestAdapter } from "@/infra/http/express/adapters/request/user/UserCreateRequestAdapter";
import { InvalidArgumentError } from "@/errors/InvalidArgumentError";
import { UserCreateValidator } from "@/infra/http/express/validators/user/UserCreateValidator";
router.post("/", (req: express.Request, res: express.Response) => {
  try {
    UserCreateValidator.validate(req);
    const adapter = new UserCreateRequestAdapter();
    const userCreateRequest = adapter.adapt(req);
    const injector = new UserInjector();
    const controller = injector.getUserCreateController();
    const response = controller.handle(userCreateRequest);
    // // ここは適当
    res.send("respond with a create" + JSON.stringify(response));
  } catch (error: any) {
    if (error instanceof InvalidArgumentError) {
      res.status(400).send({ error: error.message });
    }
    // TODO: その他エラー
  }
});
module.exports = router;