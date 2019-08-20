import express from 'express';
const router = express.Router();
import User from '../models/user';
import axios from 'axios';


router.get('/song/:bpm', (req, res) => {
    console.log("HIT THE song get ALLLLLL route!")
    // GET ALL USER Songs
    axios.get(`https://api.getsongbpm.com/tempo/?api_key=4a45338f3b72c92981ea4c26c94ebf61&bpm=${req.params.bpm}`)
    .then((response) => {
        console.log("second part of song route!")
        // console.log(response.data)
        // JSON.stringify(response.data);
        console.log(response.data.tempo);
        res.json(response.data.tempo);
    }).catch((err) => {
        console.log(err);
    }) 
})



export default router;