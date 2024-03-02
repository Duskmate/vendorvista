const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema(
  {
    name: {
      type: mongoose.Mixed,
      required: true,
      trim: true,
      lowercase: true,
    },
    BankAccount: {
      type: Number,
      required: true,
      trim: true,
    },
    BankName: {
      type: mongoose.Mixed,
      required: true,
      trim: true,
    },
    AddressLine1: {
      type: mongoose.Mixed,
      required: true,
      trim: true,
    },
    AddressLine2: {
      type: mongoose.Mixed,
      required: false,
      trim: true,
    },
    City: {
        type: mongoose.Mixed,
        required: true,
        trim: true,
    },
    Country: {
        type: mongoose.Mixed,
        required: true,
        trim: true,
    },
    ZipCode: {
        type: Number,
        required: true,
        trim: true,
    },
  },
  {
    timestamps: false,
  }
);

vendorSchema.statics.nameExist = async function(name) {
  return this.findOne({ name: name}).exec();
}

/**
 * @typedef Vendor
 */
const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = {Vendor}