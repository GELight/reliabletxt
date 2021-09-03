import ReliableTxtDocument from "./reliabletxt/ReliableTxtDocument";
import ReliableTxtDocumentServer from "./reliabletxt/ReliableTxtDocumentServer";
import ReliableTxtEncoding from "./reliabletxt/ReliableTxtEncoding";
import ReliableTxtException from "./reliabletxt/ReliableTxtException";
import ReliableTxtFile from "./reliabletxt/ReliableTxtFile";

import StringUtil from "./reliabletxt/StringUtil";

export {
    ReliableTxtDocument,
    ReliableTxtDocumentServer,
    ReliableTxtEncoding,
    ReliableTxtException,
    ReliableTxtFile,

    StringUtil
};

const reliableTxtDocument = new ReliableTxtDocumentServer();
const encoding: ReliableTxtEncoding = reliableTxtDocument.getEncoding();

console.log(encoding); // utf8
