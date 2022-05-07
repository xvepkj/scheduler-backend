import Debug from "debug"
const debug = Debug("app:api")

import { Router } from "express";
import tagsController from "../controllers/tags.js"

var apiRouter = Router()
apiRouter.post("/api/tags", tagsController.add)
apiRouter.get("/api/tags", tagsController.all)

export default apiRouter;