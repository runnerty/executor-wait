"use strict";

var Execution = global.ExecutionClass;

class waitExecutor extends Execution {
  constructor(process) {
    super(process);
  }

  exec(params) {
    var _this = this;
    var seconds = params.seconds || 60;

    setTimeout(function () {
      _this.end();
    }, seconds * 1000 || 0);
  }
}

module.exports = waitExecutor;