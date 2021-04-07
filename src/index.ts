import ReliableTxtDocument from "./reliabletxt/ReliableTxtDocument";
import ReliableTxtDocumentServer from "./reliabletxt/ReliableTxtDocumentServer";
import ReliableTxtEncoding from "./reliabletxt/ReliableTxtEncoding";
import ReliableTxtException from "./reliabletxt/ReliableTxtException";
import ReliableTxtFile from "./reliabletxt/ReliableTxtFile";

import StringUtil from "./reliabletxt/StringUtil";

export default {
    ReliableTxtDocument,
    ReliableTxtDocumentServer,
    ReliableTxtEncoding,
    ReliableTxtException,
    ReliableTxtFile,

    StringUtil
};

const text = "abc xyz";
const reliableTxtDocument = new ReliableTxtDocumentServer(text);
console.log(reliableTxtDocument);
