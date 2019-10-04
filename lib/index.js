"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Storage", {
  enumerable: true,
  get: function get() {
    return _storage["default"];
  }
});
Object.defineProperty(exports, "Store", {
  enumerable: true,
  get: function get() {
    return _store["default"];
  }
});

var _storage = _interopRequireDefault(require("./storage"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }