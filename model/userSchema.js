const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "username is string"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is string"],
        select: false
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function () {
    let salt = await bcrypt.genSalt(7)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function (pass) {
    return await bcrypt.compare(pass, this.password)
}

userSchema.methods.generateToken = async function () {
    return jwt.sign(
        { id: this._id },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "1h"
        }
    )
}

module.exports = model('user', userSchema)