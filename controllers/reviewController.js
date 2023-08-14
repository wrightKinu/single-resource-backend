const express = require("express");

const { getShow } = require("../queries/shows.js");
const reviews = express.Router({ mergeParams: true });
const {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews");

// reviews.get('/', async (req, res) => {
//   try {
//     const {show_id} = req.params; // Get show_id from query parameter
//     const sortByShowId = req.params.sortByShowId === 'true'; // Convert string to boolean

//     const reviews = await getAllReviews(show_id, sortByShowId);

//     res.json(reviews);
//   } catch (err) {
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });


// INDEX
reviews.get("/", async (req, res) => {
    const { showId } = req.params;
  
    try {
      const allReviews = await getAllReviews(showId);
      res.json(allReviews);
    } catch (err) {
      res.json(err);
    }
  });

// SHOW
reviews.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getReview(id);
  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
reviews.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedReview = await updateReview(id, req.body);
  if (updatedReview.id) {
    res.status(200).json(updatedReview);
  } else {
    res.status(404).json("Review not found");
  }
});

reviews.post("/", async (req, res) => {
  const review = await newReview(req.body);
  res.status(200).json(review);
});

// DELETE
reviews.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedReview = await deleteReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});


module.exports = reviews;