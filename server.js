import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import cors

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const { data, file_b64 } = req.body;
    let numbers = [];
    let alphabets = [];
    let highest_lowercase_alphabet = '';
    let is_success = true;

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
            if (item === item.toLowerCase() && (!highest_lowercase_alphabet || item > highest_lowercase_alphabet)) {
                highest_lowercase_alphabet = item;
            }
        }
    });

    const response = {
        is_success,
        user_id: "john_doe_17091999", // Change this with actual logic
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : [],
        file_valid: file_b64 ? true : false,
        file_mime_type: "image/png",
        file_size_kb: file_b64 ? Buffer.from(file_b64, 'base64').length / 1024 : 0
    };

    res.json(response);
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
