const express = require("express");
const router = express.Router();
const { GetBook } = require("../Controller/Book.Controller");

// GET all books
router.get("/", GetBook);

module.exports = router;
