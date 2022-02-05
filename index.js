'use strict';

const ms = require('ms');

const Executor = require('@runnerty/module-core').Executor;

class waitExecutor extends Executor {
  constructor(process) {
    super(process);
  }

  async exec(params) {
    const endOptions = { end: 'end' };
    // Backward compatibility with version 1:
    if (params.seconds && !params.time) {
      params.time = params.seconds + 's';
    }
    // 60s default value:
    if (!params.seconds && !params.time) {
      params.time = '60 s';
    }

    if (params.output && params.output != '') {
      endOptions.messageLog = params.output;
      endOptions.data_output = params.output;
      endOptions.msg_output = params.output;
    }

    if (params.error && params.error != '') {
      endOptions.end = 'error';
      endOptions.messageLog = params.error;
      endOptions.err_output = params.error;
    }

    setTimeout(() => {
      this.end(endOptions);
    }, ms('' + params.time) || 0);
  }
}

module.exports = waitExecutor;
