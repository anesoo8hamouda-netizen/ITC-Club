
const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Submit a membership application
router.post("/", async (req, res) => {
    try {
        const {
            full_name,
            email,
            faculty,
            study_year,
            motivation,
        } = req.body;

        // Basic validation
        if (!full_name || !email) {
            return res.status(400).json({
                success: false,
                message: "Full name and email are required.",
            });
        }

        // Insert application into PostgreSQL
        const result = await pool.query(
            `INSERT INTO members
            (full_name, email, faculty, study_year, motivation)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, full_name, email, status, created_at`,
            [
                full_name.trim(),
                                        email.trim().toLowerCase(),
                                        faculty || null,
                                        study_year || null,
                                        motivation || null,
            ]
        );

        res.status(201).json({
            success: true,
            message: "Your application was submitted successfully!",
            application: result.rows[0],
        });

    } catch (error) {
        console.error("Application error:", error.message);

        if (error.code === "23505") {
            return res.status(409).json({
                success: false,
                message: "This email already has an application.",
            });
        }

        res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again.",
        });
    }
});

module.exports = router;
