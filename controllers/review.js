const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError =require("../utils/ExpressError.js");

module.exports.addNewReview = async(req,res) =>{
    let{id} =req.params;
    let listing =await Listing.findById(id);
    let review = new Review(req.body.review);
    review.author = req.user._id;
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    //console.log(review);
    req.flash("success" ,"New Review Created!" )
    res.redirect(`/listing/${id}`);
};
module.exports.deleteReview = async(req,res) =>{
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull :{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success" ,"New Review Deleted!" )
    res.redirect(`/listing/${id}`);
}