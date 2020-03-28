const express = require("express");

const OngCrontroller = require("./controllers/OngController");
const IncidentCrontroller = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const Sessiontroller = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", Sessiontroller.create);

routes.get("/ongs", OngCrontroller.index);
routes.post("/ongs", OngCrontroller.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentCrontroller.index);
routes.post("/incidents", IncidentCrontroller.create);
routes.delete("/incidents/:id", IncidentCrontroller.delete);

module.exports = routes;
