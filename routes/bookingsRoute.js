const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking.js");
// const moment = require("moment");

router.post("/bookroom", async (req, res) => {
  const { room, fromdate, todate, totalamount, totaldays } = req.body;
  const rooms = req.body.bookingDetails.room;
  const others = req.body.bookingDetails;
  // console.log(req.body);

  try {
    const newbooking = new Booking({
      room: rooms.name,
      roomid: rooms._id,
      userid: "1",
      fromdate: moment(others.fromdate).format("MM-DD-YYYY"),
      todate: moment(others.todate).format("MM-DD-YYYY"),
      totalamount: Number(others.totalamount),
      totaldays: Number(others.totaldays),
      transactionId: "1234",
    });
    console.log(newbooking);

    const booking = await newbooking.save();
    console.log(booking);
    res.send("Sikeres szobafoglalás!");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
