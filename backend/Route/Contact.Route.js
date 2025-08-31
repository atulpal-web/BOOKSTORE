const express = require("express");
const { sendContactMail } = require("../Controller/Contact.Controller");
const router = express.Router();

router.post("/contact", sendContactMail);

module.exports = router;
