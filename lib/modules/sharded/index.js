const {
    default: AbstractShardedModule
} = require('mage-module-shard')

class ShardedModule extends AbstractShardedModule {
  setup(state, callback) {
    require('mage').logger.error
        .data([1, 2, 3])
        .log(new Error('test one'))
    require('mage').logger.error
    .data(new Error('test two')).log('hello')
    super.setup(state, callback)
  }

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