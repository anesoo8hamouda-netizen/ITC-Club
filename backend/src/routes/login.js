
const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const bcrypt = require("bcryptjs");

const router = express.Router();

const usersFile = path.join(__dirname, "../../users.txt");

router.post("/", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (
            typeof username !== "string" ||
            typeof password !== "string" ||
            !username.trim() ||
            !password
        ) {
            return res.status(400).json({
                success: false,
                message: "Username and password are required."
            });
        }

        const fileContent = await fs.readFile(usersFile, "utf8");

        const users = fileContent
        .split(/\r?\n/)
        .filter(Boolean);

        const user = users.find((line) => {
            const separator = line.indexOf(":");
            return line.slice(0, separator) === username.trim();
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Incorrect username or password."
            });
        }

        const separator = user.indexOf(":");
        const storedHash = user.slice(separator + 1);

        const passwordMatches = await bcrypt.compare(
            password,
            storedHash
        );

        if (!passwordMatches) {
            return res.status(401).json({
                success: false,
                message: "Incorrect username or password."
            });
        }

        return res.json({
            success: true,
            message: "Login successful! Welcome to ITC Club."
        });

    } catch (error) {
        console.error("Login error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Something went wrong."
        });
    }
});

module.exports = router;
