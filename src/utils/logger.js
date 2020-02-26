/**
 * Created by K on 2019/10/25.
 */
let logger
let NODE_ENV

if (typeof process !== 'undefined') {
  NODE_ENV = process.env.NODE_ENV
}

if (NODE_ENV === 'development' && logger === void 0) {
  logger = console
} else {
  logger = {log () {}}
}

export default {
  log: logger.log,

  warn (msg) {
    logger.log(`%c[warn]:  ${msg}`, 'color: #dca60e; font-weight: bold')
  },

  error (msg) {
    console.error(msg)
    logger.log(`%c[error]: ${msg}`, 'color: #ea6464;background:#f9eded;')
  }
}
