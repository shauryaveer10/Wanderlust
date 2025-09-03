const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listing.js")
const {isLoggedIn,isOwner,validateListing} =require("../middleware.js");
const multer = require("multer");
const {storage} =require("../cloudConfig.js")
const upload = multer({storage})

//Controller
const listingController  = require("../controllers/listing.js");

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync( listingController.addNewListing));


//Create Route
router.get("/new" ,isLoggedIn , listingController.renderNewForm)

router.route("/:id")
.get(wrapAsync( listingController.showListing))
.patch(isLoggedIn,isOwner,upload.single('listing[image]'), validateListing ,wrapAsync (listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync (listingController.deleteListing))

router.get("/category/:category", wrapAsync(listingController.categories));
//Update Route
router.get("/:id/edit" , isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));




module.exports = router;