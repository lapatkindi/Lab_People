const fs = require('fs');

module.exports = {
    getDataFromJSONFile: ( fileName ) => {
        return JSON.parse(fs.readFileSync(fileName));
    },
    
    csvToList: ( fileContents ) => {
        let splitted = fileContents.split('\n');
        let firstLine = splitted[0];
        let headers = firstLine.split(';');
        headers = headers.map(i => (i || '').trim());
        let items = [];
        for (let i = 1; i < splitted.length; i++ ){
            let item = {};
            let line = splitted[i].split(';');
            for(let k = 0; k < headers.length; k++ ){
                if (!line[k] || line[k].trim() == ' ') continue;
                item[headers[k]] = (line[k] || '').trim();    
            }
            items.push(item);
        }
        return items;
    }
}