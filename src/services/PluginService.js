class PluginService {
  constructor(pluginRepository) {
    this.pluginRepository = pluginRepository;
  }
  async findAll() {
    return await this.pluginRepository.findAll();
  }
  async create({ name, description }) {
    return await this.pluginRepository.create({ name, description });
  }
  async enable(pluginName, user) {
    return await this.pluginRepository.enable(pluginName, user);
  }
  async disable(pluginName, user) {
    return await this.pluginRepository.disable(pluginName, user);
  }
}

module.exports = PluginService;
