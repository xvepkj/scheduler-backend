import Debug from "debug";
const debug = Debug("app:api");

import { Router } from "express";
import tagsController from "../controllers/tags.js";
import eventsController from "../controllers/events.js";
import templatesController from "../controllers/templates.js";
import activeTemplatesController from "../controllers/active-templates.js";

var apiRouter = Router();
apiRouter.post("/api/tags", tagsController.add);
apiRouter.get("/api/tags", tagsController.all);
apiRouter.post("/api/events", eventsController.add);
apiRouter.get("/api/events/:date", eventsController.all);
apiRouter.delete("/api/events", eventsController.delete);
apiRouter.put("/api/events", eventsController.update);

apiRouter.post("/api/templates/active", activeTemplatesController.add);
apiRouter.get("/api/templates/active", activeTemplatesController.all);
apiRouter.put("/api/templates/active", activeTemplatesController.update);
apiRouter.delete("/api/templates/active", activeTemplatesController.delete);
apiRouter.get("/api/templates/active/:id", activeTemplatesController.getById);

apiRouter.post("/api/templates", templatesController.add);
apiRouter.get("/api/templates", templatesController.all);
apiRouter.put("/api/templates", templatesController.update);
apiRouter.delete("/api/templates", templatesController.delete);
apiRouter.get("/api/templates/:id", templatesController.getById);

export default apiRouter;