const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { vendorService } = require("../services");
const { Vendor } = require("../models");

const getVendors = catchAsync(async (req, res) => {
  const vendors = await vendorService.getVendors();
  res.status(httpStatus.OK).send(vendors)
});

const addVendor = catchAsync(async (req, res) => {
  if (await Vendor.nameExist(req.body.name)) {
    res.status(httpStatus.OK).send("Name already exists")
  } else {
    const vendor = await vendorService.createVendor(req.body);
    res.status(httpStatus.OK).send(vendor)
  }
});

const editVendor = catchAsync(async (req, res) => {
  const vendor = await vendorService.editVendor(req.body);
  res.status(httpStatus.OK).send(vendor);
});

const deleteVendor = catchAsync(async (req, res) => {
  const vendor = await vendorService.deleteVendor(req.body);
  const vendors = await vendorService.getVendors();
  res.status(httpStatus.OK).send(vendors)
});

module.exports = {
  getVendors,
  addVendor,
  editVendor,
  deleteVendor
}