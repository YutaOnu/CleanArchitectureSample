import express from "express";
const router = express.Router();
import { UserInjector } from "@/infra/injectors/UserInjector";
import { UserCreateRequestAdapter } from "@/infra/http/express/adapters/request/user/UserCreateRequestAdapter";
import { InvalidArgumentError } from "@/errors/InvalidArgumentError";
import { UserCreateValidator } from "@/infra/http/express/validators/user/UserCreateValidator";

router.post(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      UserCreateValidator.validate(req);
      const adapter = new UserCreateRequestAdapter();
      const userCreateRequest = adapter.adapt(req);
      const controller = UserInjector.getUserCreateController();
      const response = controller.handle(userCreateRequest);

      res.json({
        message: "User created successfully",
        data: response,
      });
    } catch (error: any) {
      next(error);
    }
  }
);

// エラーハンドリングミドルウェア
router.use(
  (
    error: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (error instanceof InvalidArgumentError) {
      return res.status(400).json({ error: error.message });
    }
    // TODO: その他のエラー
    return res.status(500).json({ error: "Internal Server Error" });
  }
);

module.exports = router;
