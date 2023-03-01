const express = require("express");
const authenticate = require("../middleware/authenticate");
const router = express.Router();
const PluginController = require("../controllers/PluginController");
const PluginService = require("../services/PluginService");
const PluginRepository = require("../repositories/PluginRepository");

const pluginRepository = new PluginRepository();
const pluginService = new PluginService(pluginRepository);

const pluginController = new PluginController(pluginService);

//router.get()
router.post("/", authenticate, pluginController.createPlugin);
router.get("/", authenticate, pluginController.getAllPlugins);
router.put("/:plugin/enable", authenticate, pluginController.enablePlugin);
router.put("/:plugin/disable", authenticate, pluginController.disablePlugin);

module.exports = router;
