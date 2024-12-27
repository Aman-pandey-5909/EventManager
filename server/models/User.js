import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userInfo:{
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        memberSince: {
            type: Date,
            default: Date.now
        }
    },
    premiumInfo: {
        isPremium: {
            type: Boolean,
            default: false
        },
        expiryDate: {
            type: Date,
            default: () => Date.now() + 30 * 24 * 60 * 60 * 1000
        }
    }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;