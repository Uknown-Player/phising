const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Direktori penyimpanan foto/video

// Middleware untuk melayani file HTML
app.use(express.static(path.join(__dirname)));

// Endpoint untuk menerima unggahan file
app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        res.status(200).send('File uploaded successfully');
    } else {
        res.status(400).send('File upload failed');
    }
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
