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

```shell
npm run zookeeper
```

### Nodes

```
npm run cluster node1 mage
npm run cluster node2 mage
# ...
```

Feel free to start as many nodes as you want.

### Node0 (development console)

```shell
npm run cluster node0 develop
```

We will be emitting sharded calls to our cluster from
this REPL interface.

### Running a sharded module method

From node0's development console:

```javascript
```
