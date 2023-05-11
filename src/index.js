import nx from '@jswork/next';
import fs from 'fs';

const NxRwJson = nx.declare('nx.RwJson', {
  statics: {
    read: function (inPath) {
      return JSON.parse(fs.readFileSync(inPath, 'utf-8').toString());
    },
    write: function (inPath, inData) {
      if (typeof inData === 'object') {
        inData = JSON.stringify(inData, null, 2);
      }
      fs.writeFileSync(inPath, inData);
    }
  }
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NxRwJson;
}

export default NxRwJson;
