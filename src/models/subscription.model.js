import mongoose, { Schema } from "mongoose";
import { changeCurrentPassword } from "../controllers/user.controller";

const subscriptionSchema = new Schema(
    {
        subscriber:{
            type: Schema.Types.ObjectId, //who is subscribing
            ref :"User"
        },
        channel:{
            type: Schema.Types.ObjectId, //one whom "subscriber" is
            ref :"User"
        }

    },{
        timestamps: true
    })



export const Subscription = mongoose.model("Subscription" ,subscriptionSchema)