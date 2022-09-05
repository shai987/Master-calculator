import mongoose from 'mongoose';

export const log_schema = new mongoose.Schema({
        method: {
                type: String,
                enum: {
                        values: ["GET", "POST"],
                        message: '{VALUE} is not supported'
                }
        },
        when: {
                type: Date,
                default: Date.now()
        },
        path: {
                type: String
        },
        body: {
                type: Object
        }
});