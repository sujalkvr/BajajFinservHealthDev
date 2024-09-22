# Bajaj Finserv Health Dev Challenge

This project is a submission for the **Bajaj Finserv Health Dev Challenge**, which focuses on building a full-stack application with a **Node.js backend** and a **React frontend** using **Vite**. The project processes JSON input and returns a response with segregated numbers and alphabets along with additional metadata.

## Live Demo
The project is hosted on Vercel and can be accessed here: [Live App](https://bajaj-finserv-health-dev-chi.vercel.app/)

## Features
- **Backend**: Built with Node.js and Express to handle POST requests.
  - Processes JSON data to separate numbers and alphabets.
  - Determines the highest lowercase alphabet.
  - Handles base64-encoded file data (currently not in use, set as default).
  - Provides metadata such as file size and type (if applicable).

- **Frontend**: Built with React using Vite for development speed.
  - Accepts user input in JSON format.
  - Displays the backend response in a structured format.
  - User-friendly UI with centralized layout.
  
## How It Works
1. The user inputs a JSON object with `data` (an array of mixed numbers and alphabets) and an optional `file_b64` field for base64-encoded files.
2. On submitting, the JSON is sent to the backend using a POST request.
3. The backend processes the data, separates numbers and alphabets, and returns the result.
4. The response includes:
   - A user ID, email, and roll number.
   - Separated numbers and alphabets.
   - The highest lowercase alphabet.
   - File-related metadata (if any file is included).

## Sample JSON for Testing

Use the following sample JSON object to test the app:

```json
{
    "data": ["a", "b", "c", "1", "2", "3"],
    "file_b64": ""
}
