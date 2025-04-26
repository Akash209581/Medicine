const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    medicineName: String,
    time: String,
    frequency: String,
    notificationType: String,
    phoneNumber: String,
    personPhoneNumber: String,
    numDays: Number,
}, { timestamps: true });

module.exports = mongoose.model("Reminder", reminderSchema);
