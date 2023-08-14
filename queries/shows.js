const db = require("../db/dbConfig.js");

const getAllShows = async () => {
    try {
      const allShows = await db.any("SELECT * FROM shows");
      return allShows;
    } catch (error) {
      return error;
    }
  };

// ONE Show
const getShow = async (id) => {
    try {
      const oneShow = await db.one("SELECT * FROM shows WHERE id=$1", id);
      return oneShow;
    } catch (error) {
      return error;
    }
  };

// CREATE
const createShow = async (show) => {
    try {
      const newShow = await db.one(
        "INSERT INTO shows (image, title, genre, release_date, season_count, episode_count, cast, director, is_favorite) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
        [show.image, show.title, show.genre, show.release_date, show.season_count, show.episode_count, show.cast, show.director, show.is_favorite]
      );
      return newShow;
    } catch (error) {
      return error;
    }
  };
  
  const deleteShow = async (id) => {
    try {
    } catch (error) {
      return error;
    }
  };
  
  const updateShow = async (id, show) => {
    try {
      const updatedShow = await db.one(
        "UPDATE shows SET image=$1, title=$2, genre=$3, release_date=$4, season_count=$5, season_count=$6, cast=$7, director=$8, is_favorite=$9 where id=$10 RETURNING *",
        [show.image, show.title, show.genre, show.release_date, show.season_count, show.season_count, show.cast, show.director, show.is_favorite]
      );
      return updatedShow;
    } catch (error) {
      return error;
    }
  };

module.exports = {
    getAllShows,
    getShow,
    createShow,
    deleteShow,
    updateShow,
};