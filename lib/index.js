"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _storage = _interopRequireDefault(require("./storage"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Storage: _storage["default"],
  Store: _store["default"]
};
exports["default"] = _default;