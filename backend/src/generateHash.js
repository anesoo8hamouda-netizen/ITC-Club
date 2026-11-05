
const bcrypt = require("bcryptjs");

async function generateHash() {
    const password = "ITC2026";

    const hash = await bcrypt.hash(password, 12);

    console.log("Your password hash:");
    console.log(hash);
}

generateHash();
