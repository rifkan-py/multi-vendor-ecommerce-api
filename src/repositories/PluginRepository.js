const Plugin = require("../models/Plugin");

class PluginRepository {
  async findAll() {
    const plugins = await Plugin.find({});
    return plugins;
  }
  async create(plugin) {
    const newPlugin = await Plugin.create(plugin);
    return newPlugin;
  }
  async enable(pluginName, user) {
    const plugin = await Plugin.findOneAndUpdate(
      { name: pluginName },
      { $push: { users: user } },
      { new: true }
    );
    return plugin;
  }
  async disable(pluginName, user) {
    const plugin = await Plugin.findOneAndUpdate(
      { name: pluginName },
      { $pull: { users: user } },
      { new: true }
    );
    return plugin;
  }
}

module.exports = PluginRepository;
