const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
       return `${acc} ${file} `;
     }, '');

     console.log(filesToString);
  });
};

module.exports.touch = () => {
  // your code here
  fs.writeFile('whatfile.txt', 'Hello file!', function (err) {
    if (err) throw err;
    console.log('file saved');
  });

};

module.exports.mkdir = () => {
  // your code here
  fs.mkdir('stuff', function(err){
   if (err) throw err;
   console.log('stuff dir created');
  });
};
