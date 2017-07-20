const {
    default: AbstractShardedModule
} = require('mage-module-shard')

class ShardedModule extends AbstractShardedModule {
  throwsErrors() {
    throw new Error('I say what what')
  }

  async methodWithNoArguments() {
    return '1'
  }

  async methodWithScalarArguments(a, b) {
    const list = new Array(b)

    return list.fill(a).join(',')
  }

  async methodWithObjectArguments(a, b) {
    b.hello = a

    return b
  }

  async methodWithArrayArguments(a, b) {
    b.push(a)

    return b
  }

  async getModuleId() {
    return this.getMmrpNode().identity
  }
}

module.exports = new ShardedModule()