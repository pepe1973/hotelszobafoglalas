const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const dbConfig = require("./db");

const PORT = process.env.PORT || 5000;
const roomsRoute = require("./routes/roomRoute");

app.use("/api/rooms", roomsRoute);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
