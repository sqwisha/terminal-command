const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (fileName, data) => {
  fs.writeFile(fileName, data, 'utf8', (err) => {
    if (err) throw err;
    console.log(`file ${fileName} saved`);
  } );
};

module.exports.mkdir = (path) => {
  fs.mkdir(path, (err) => {
    if (err) throw err;
    console.log('Directory created');
  });
};