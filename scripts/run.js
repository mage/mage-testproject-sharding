const cp = require('child_process')
const mkdirp = require('mkdirp')

const args = process.argv.slice(2)
const nodeName = args.shift()

Object.assign(process.env, {
    MAGE_LOGPATH: `./nodes/${nodeName}`,
    MAGE_PIDFILE: `./nodes/${nodeName}/pid`,
    MAGE_SAVVY_SOCKFILE: `./nodes/${nodeName}/sockfile`
})

mkdirp.sync(process.env.MAGE_LOGPATH)

args.unshift('run')

cp.spawn('npm', args, {
    stdio: 'inherit'
})
