const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>DevOps Container Project</h1>
        <p>Application is running successfully.</p>
        <p>Version: 1.0.0</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        application: "devops-container-project"
    });
});

app.get("/info", (req, res) => {
    res.json({
        application: "DevOps Container Project",
        version: "1.0.0",
        environment: process.env.NODE_ENV || "development"
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Application running on port ${PORT}`);
    });
}

module.exports = app;