const router = require('express').Router();
const User = require('../models/model')

// GetUser
router.get("/get", async(req, res) => {
    let query = await User.find();

    return res.json({
        code: 200,
        message: "get complete",
        success: true,
        data: query
    })
})

// PostUser
router.post("/post", async(req, res) => {
    let model = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
        Region: req.body.Region,
        DateOfBirth: req.body.DateOfBirth,
        Religion: req.body.Religion
    }


    let query = await User.create(model);

    return res.json({
        code: 201,
        message: "insert complete",
        success: true,
        data: query
    })
})

//EditUser
router.get("/edit/:id", async(req, res) => {
    User.findById({ _id: req.params.id })
        .then(data => res.send(data))
})


router.put("/edit", (req, res) => {
    User.update({ _id: req.query.id }, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword,
                Region: req.body.Region,
                DateOfBirth: req.body.DateOfBirth,
                Religion: req.body.Religion
            }
        })
        .then(data => {
            res.send('update complete')
        })
})


// DeleteUser
router.delete("/delete/", async(req, res) => {
    const id = req.query.id
    User.findByIdAndRemove(id)
        .then(data => res.send("delete complete"))
})
module.exports = router;