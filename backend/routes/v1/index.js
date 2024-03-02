const express = require("express");
const vendorRoute = require("./vendor.route");

const router = express.Router();

router.use("/vendors", vendorRoute)

module.exports = router;