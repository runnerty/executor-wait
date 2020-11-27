<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">Smart Processes Management</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
<a href="#badge">
  <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>

# Wait executor for [Runnerty]:
Module for the creation of waiting processes.
### Installation:
```bash
npm i @runnerty/executor-wait
```
### Configuration:
Add in [config.json]:
```json
{
  "id": "wait_default",
  "type": "@runnerty-executor-wait",
  "time": "1 min"
}
```
### Plan:
Add in [plan.json]:
```json
{
  "id": "wait_default",
  "time": "30s"
}
```

[Runnerty]: http://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/executor-wait.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/executor-wait
[npm-image]: https://img.shields.io/npm/v/@runnerty/executor-wait.svg
[config.json]: http://docs.runnerty.io/config/
[plan.json]: http://docs.runnerty.io/plan/

