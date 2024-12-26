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
        }
    },
    premiumInfo: {
        isPremium: {
            type: Boolean,
            default: false
        }
    }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;