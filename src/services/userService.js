const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { registerQuery, keepLoginQuery } = require ("../queries/userQuery");
const { findUserQuery } = require ("../queries/userQuery");
const user = db.user;

const registerService = async ( email, password, fullname ) => {
    try {
        const check  = await findUserQuery({email, password, fullname});

        if (check) throw new Error("Email or fullname already exist");

        const salt = await bcrypt.genSalt(10);

        const hashPassword = await bcrypt.hash(password, salt);

        const res = await registerQuery(email, password, hashPassword);

        return res;
    } catch (err) {
        throw err;
    }
};


module.exports = {
    registerService,
};