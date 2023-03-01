class PluginController {
  constructor(pluginService) {
    this.pluginService = pluginService;
    this.createPlugin = this.createPlugin.bind(this);
    this.enablePlugin = this.enablePlugin.bind(this);
    this.disablePlugin = this.disablePlugin.bind(this);
    this.getAllPlugins = this.getAllPlugins.bind(this);
  }
  async createPlugin(req, res, next) {
    try {
      const plugin = await this.pluginService.create({ ...req.body });
      return res.status(201).json(plugin);
    } catch (exception) {
      console.log(exception);
      throw new Error(exception.message);
    }
  }
  async enablePlugin(req, res, next) {
    try {
      await this.pluginService.enable(req.params.plugin, req.auth.id);
      res.status(200).json("Enabled Success");
    } catch (exception) {
      console.log(exception);
      throw new Error(exception.message);
    }
  }
  async disablePlugin(req, res, next) {
    try {
      await this.pluginService.disable(req.params.plugin, req.auth.id);
      return res.status(200).json("Disabled Success");
    } catch (exception) {
      console.log(exception);
      throw new Error(exception.message);
    }
  }
  async getAllPlugins(req, res, next) {
    try {
      const plugins = await this.pluginService.findAll();
      return res.status(200).json(plugins);
    } catch (exception) {
      console.log(exception);
      throw new Error(exception.message);
    }
  }
}

module.exports = PluginController;
