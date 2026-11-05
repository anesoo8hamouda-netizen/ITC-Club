
const express = require("express");
const cors = require("cors");

const loginRoutes = require("./routes/login");

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "ITC backend is working!"
    });
});

app.use("/api/login", loginRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`ITC backend running on port ${PORT}`);
});
