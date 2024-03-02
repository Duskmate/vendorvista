const express = require("express");
const vendorController = require("../../controllers/vendor.controller");
const validate = require("../../middlewares/validate");
const vendorValidation = require("../../validations/vendor.validation")

const router = express.Router();

router.get("/" ,vendorController.getVendors);
router.put("/", validate(vendorValidation.register), vendorController.addVendor);
router.patch("/", validate(vendorValidation.update), vendorController.editVendor);
router.delete("/", validate(vendorValidation.update), vendorController.deleteVendor);

module.exports = router