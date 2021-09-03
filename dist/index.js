"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtil = exports.ReliableTxtFile = exports.ReliableTxtException = exports.ReliableTxtEncoding = exports.ReliableTxtDocumentServer = exports.ReliableTxtDocument = void 0;
const ReliableTxtDocument_1 = __importDefault(require("./reliabletxt/ReliableTxtDocument"));
exports.ReliableTxtDocument = ReliableTxtDocument_1.default;
const ReliableTxtDocumentServer_1 = __importDefault(require("./reliabletxt/ReliableTxtDocumentServer"));
exports.ReliableTxtDocumentServer = ReliableTxtDocumentServer_1.default;
const ReliableTxtEncoding_1 = __importDefault(require("./reliabletxt/ReliableTxtEncoding"));
exports.ReliableTxtEncoding = ReliableTxtEncoding_1.default;
const ReliableTxtException_1 = __importDefault(require("./reliabletxt/ReliableTxtException"));
exports.ReliableTxtException = ReliableTxtException_1.default;
const ReliableTxtFile_1 = __importDefault(require("./reliabletxt/ReliableTxtFile"));
exports.ReliableTxtFile = ReliableTxtFile_1.default;
const StringUtil_1 = __importDefault(require("./reliabletxt/StringUtil"));
exports.StringUtil = StringUtil_1.default;
const reliableTxtDocument = new ReliableTxtDocumentServer_1.default();
const encoding = reliableTxtDocument.getEncoding();
console.log(encoding); // utf8
//# sourceMappingURL=index.js.map