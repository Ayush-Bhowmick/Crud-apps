const express = require("express")
const { home, createUser, getUser, updateUser, deleteUser } = require("../controller/useControllers")

const router = express.Router()

router.get("/", home);
router.post("/createUser", createUser)
router.get("/getUser", getUser);
router.put("/updateUser/:id", updateUser)
router.delete("/deleteUser/:id", deleteUser)

module.exports = router

