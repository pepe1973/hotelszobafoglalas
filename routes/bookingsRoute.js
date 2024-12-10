const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
// const moment = require("moment");

router.post("/bookroom", async (req, res) => {
    const {
        room ,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays
    } = req.body

    try {
        const newbooking = new Booking({
            room : room.name,
            roomid : room._id,
            userid,
            fromdate : moment(fromdate).format("MM-DD-YYYY"),
            todate : moment(todate).format("MM-DD-YYYY"),
            totalamount,
            totaldays,
            transactionId : '1234' 
        })

        const booking = await newbooking.save()
        res.send("Sikeres szobafoglalás!")
    } catch (error) {
        return res.status(400).json({ error })
    }
});

module.exports = router;