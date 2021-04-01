const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
const passport = require("passport");
const Water = require('../../models/water');

// /api/water
router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    const { gender, weight, goal } = req.body;
    console.log(req.user.id);

    const newWater = new Water({
        gender: req.body.gender,
        weight: req.body.weight,
        goal: req.body.goal,
        current: 0,
        user: req.user.id
    });

    newWater.save()
        .then(water => res.json(water))
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    Water.findById(id)
        .then(water => res.json(water))
});



module.exports = router;