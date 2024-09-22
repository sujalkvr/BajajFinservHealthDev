import { Buffer } from 'buffer';

export default function handler(req, res) {
    if (req.method === 'POST') {
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
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers,
            alphabets,
            highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : [],
            file_valid: file_b64 ? true : false,
            file_mime_type: "image/png",
            file_size_kb: file_b64 ? Buffer.from(file_b64, 'base64').length / 1024 : 0
        };

        res.status(200).json(response);
    } else {
        res.status(405).json({ message: 'Only POST requests are allowed' });
    }
}
