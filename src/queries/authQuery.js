const db = require ("../models/");
const { Op } = require ("sequelize");
const user = db.user

const registerQuery = async (email, fullname, password) => {
    try {
        const res = await user.create({
            email,
            fullname,
            password,
            roleId: 
        })
    }
}