// server.js
const express = require('express');
const app = express();

// Use Render's environment variable port, fallback to 3000 for local
const port = process.env.PORT || 3000;

// --- START: Replace the bracketed information with your required details ---
const fullName = "Nhel Algin M. Sangco"; // Replace with your Full Name
const classSection = "BSIT BA 4101"; // Replace with your Class Section
const individualQuotation = "The only way to do great work is to love what you do."; // Replace with your Individual Quotation
const appMessage = "SUCCESS: The Node.js back-end application is running!";
// --- END: Replace ---

// Main route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Simple Node.js App</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f4f4; }
        .container { background-color: #fff; padding: 25px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
        h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
        p { font-size: 1.1em; line-height: 1.6; }
        .label { font-weight: bold; color: #34495e; display: inline-block; width: 150px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${appMessage}</h1>
        <p><span class="label">Full Name:</span> ${fullName}</p>
        <p><span class="label">Class Section:</span> ${classSection}</p>
        <p><span class="label">Individual Quotation:</span> "${individualQuotation}"</p>
        <p><span class="label">Deployment Platform:</span> Render (PaaS)</p>
      </div>
    </body>
    </html>
  `);
});

// Start server
app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
});
