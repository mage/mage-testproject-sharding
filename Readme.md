# mage-testproject-sharding

Simple project demonstrating how the `mage-module-shard`
module can be used.

## Installation

```shell
git clone https://github.com/mage/mage-testproject-sharding.git
cd mage-testproject-sharding
npm install 
```

## Running a cluster

You will need to open multiple terminal windows.

### Zookeeper

Zookeeper will be used to coordinate the nodes between each others.

In a first terminal, run:

```shell
npm run zookeeper
```

### Nodes

In a second terminal, run

```shell
npm run cluster node1 start
npm run cluster node2 start
# ...
```

Feel free to start as many nodes as you want. Then, start one last node,
in development mode ''

```shell
npm run cluster node0 develop
```

We will be emitting sharded calls to our cluster from
this REPL interface.

### Running a sharded module method

From node0's development console:

```javascript
const mod = mage.sharded
shard = mod.createShard('4')
shard.getModuleId().then((id) => console.log(id))
```

License
-------

MIT
