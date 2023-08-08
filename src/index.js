import nx from '@jswork/next';
import fs from 'fs';
import json5 from 'json5';

const NxRwJson = nx.declare('nx.RwJson', {
  statics: {
    read: function (inPath) {
      return json5.parse(fs.readFileSync(inPath, 'utf-8').toString());
    },
    write: function (inPath, inData) {
      if (typeof inData === 'object') {
        inData = json5.stringify(inData, null, 2);
      }
      fs.writeFileSync(inPath, inData);
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxRwJson;
}

export default NxRwJson;
