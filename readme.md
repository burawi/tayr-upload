# Installation
```
npm i tayr-upload
```

# Init
```javascript
var tayrUpload = require('tayr-upload')(app, T);
```
# Usage
```javascript
app.use('/upload', function (req, res) {
    var settings = {
        fields: ['avatar'], // Default: all fields
        types: ['bmp','png'], // Default: all types
        dist: './public/uploads', // Default: './uploads'
        maxSize: '1Mb', // Default: 2Mb
        together: false, // Default: true
        tableName: 'db_files', // Default: file
    };
    tayrUpload.upload(req,settings).then(function (files) {
        res.json({files: files});
    })
})
// returns: array of stored tayrs
```

# Options
**All Options Of:** [filerup](https://github.com/burawi/filerup)

**+:**

- tableName: files table name
