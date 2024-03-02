const { Vendor } = require("../models");

const getVendors = async() => {
    let vendors = await Vendor.find({}).collation({locale: "en"}).sort({"name":1});
    return vendors
}

const createVendor = async(vendor) => {
    const addVendor = Vendor.create(vendor);
    return addVendor;
}

const editVendor = async(details) => {
    let vendor = await Vendor.findOne({_id: details.id})
    vendor.name = details.vendor.name;
    vendor.BankAccount = details.vendor.BankAccount;
    vendor.BankName = details.vendor.BankName;
    vendor.AddressLine1 = details.vendor.AddressLine1;
    vendor.AddressLine2 = details.vendor.AddressLine2;
    vendor.City = details.vendor.City;
    vendor.Country = details.vendor.Country;
    vendor.ZipCode = details.vendor.ZipCode;
    vendor.save();
    return vendor;
}

const deleteVendor = async(vendor) => {
    const deleteVendor = Vendor.findOneAndDelete({ _id: vendor.id })
    return deleteVendor;
}

module.exports = {
    getVendors,
    createVendor,
    editVendor,
    deleteVendor
}