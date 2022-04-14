import  express from "express";
import SM from "../model/Signup.js";

const router = express.Router();

const addData = async (req,res) => {

    const {Name,CMS} = req.body;  

    const signup = new SM({name:Name,cms:CMS})
    try {
        await signup.save();
        res.send("inserted successfully");
    } catch(err) {
        console.log(err)
    }

}

router.post('/',addData)

export default router;