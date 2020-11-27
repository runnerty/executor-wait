'use strict';

const ms = require('ms');

const Execution = global.ExecutionClass;

class waitExecutor extends Execution {
  constructor(process) {
    super(process);
  }

  exec(params) {
    // Backward compatibility with version 1:
    if (params.seconds && !params.time) {
      params.time = `${params.seconds}`;
    }
    // 60s default value:
    if (!params.seconds && !params.time) {
      params.time = `60s`;
    }

    setTimeout(() => {
      this.end();
    }, ms(params.time) || 0);
  }
}

module.exports = waitExecutor;
