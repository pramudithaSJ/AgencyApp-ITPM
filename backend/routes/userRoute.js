const router = require("express").Router();
const { request } = require("express");
let  User = require("../models/userModel")




//User Registration
//http://localhost:8020/user/register
router.route("/register").post((req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const NIC = req.body.NIC;
    const email = req.body.email;
    const contact = req.body.contact;
    const password = req.body.password;


    const newUser = new  User({
        firstName,
        lastName,
        NIC,
        email,
        contact,
        password

    })

    newUser.save().then(()=>{
        res.json("User Registered Successfully")
    }).catch((err)=>{
        console.log(err);
    })
})

//fetch Users
//http://localhost:8020/user/
router.route("/").get((req,res)=>{
    User.find().then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })
})

//update user
//http://localhost:8090/user/update/:id
router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {name,age,gender,email,contact,password} = req.body;
    const updateUser = {
        name,
        age,
        gender,
        email,
        contact,
        password

    }

    const update = await User.findByIdAndUpdate(userId,updateUser).then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete user
//http://localhost:8020/user/delete/:id
router.route("/delete/:id").delete(async (req, res)=>{
    let userId = req.params.id;

    await User.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})



//User login
//http://localhost:8020/user/login
router.route("/login").post((req, res) => {
    const password = req.body.password;
    User.findOne({ email: req.body.email }).then(user => {
        // Check if Attendee exists
        if (!user) {
            return res.status(404).json({email: "Email not found"});
        } else {
            // Check password
            if (password === user.password) {
                res.send(user);
                
            } else {
                return res.status(400).json({password: "Password incorrect"});
            }
        }
    });
});


//get one of the user
//http://localhost:8020/user/get/:id
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    User.findById(id).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err);
    })
})

//Updateone
router.route("/updateOne/:id").put(async (req, res) => {
    let user = await User.findById(req.params.id);
    const data = {
        firstName: req.body.firstName || user.firstName,
        lastName: req.body.lastName || user.lastName,
        NIC: req.body.NIC || user.NIC,
        email: req.body.email || user.email,
        contact: req.body.contact || user.contact,
        password: req.body.password || user.password,


    };
    user = await User.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(user);
});


module.exports = router;