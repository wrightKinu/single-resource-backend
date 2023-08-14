const express = require("express");
const shows = express.Router();
const {getAllShows, getShow, createShow, deleteShow, updateShow,} = require ("../queries/shows")
const{getShowReviews} = require("../queries/reviews")
const { checkBoolean, checkTitle} = require("../validations/checkShow");

const reviewController = require("./reviewController.js");
shows.use("/:showId/reviews",reviewController)

// INDEX
shows.get("/", async(req, res) => {
    const allShows = await getAllShows();
    if (allShows[0]) {
      res.status(200).json(allShows);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });
  
    
 shows.get("/reviews", async(req, res) => {

  const { showId } = req.params;

    const allShowReviews = await getShowReviews();
    if (allShowReviews[0]) {
      res.status(200).json(allShowReviews);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });
  
  // SHOW
  shows.get("/:id", async (req, res) => {
    const { id } = req.params;
    const show = await getShow(id);
    if (show.title) {
      res.json(show);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });
  
  // CREATE
  shows.post("/", checkBoolean, checkTitle, async (req, res) => {
    try {
      const show = await createShow(req.body);
      res.json(show);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });
  
  // DELETE
  shows.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedShow = await deleteShow(id);
    if (deletedShow.id) {
      res.status(200).json(deletedShow);
    } else {
      res.status(404).json("show not found");
    }
  });
  
  // UPDATE
  shows.put("/:id",checkBoolean, checkTitle,  async (req, res) => {
    const { id } = req.params;
    const updatedShow = await updateShow(id, req.body);
    res.status(200).json(updatedShow);
  });

module.exports = shows;