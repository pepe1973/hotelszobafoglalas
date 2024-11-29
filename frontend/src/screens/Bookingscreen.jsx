import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Bookingscreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState({ imgurls: [] });

  const { roomid } = useParams();
  console.log(room.imgurls[0]);

  useEffect(() => {
    const fgv = async () => {
      setLoading(true); // Lekérdezés kezdetén set loading to true
      try {
        const data = await fetch("http://localhost:5000/api/rooms");
        if (data.ok) {
          const szobak = await data.json();
          const szobaK = szobak.rooms.filter(
            (element) => element._id === roomid
          );
          if (szobaK.length > 0) {
            setRoom(szobaK[0]);
          } else {
            setError(true); // Ha nem található a szoba
          }
        } else {
          setError(true); // Ha a válasz nem ok
        }
      } catch (error) {
        console.log(error);
        setError(true); // Hiba esetén
      } finally {
        setLoading(false); // Lekérdezés befejezése után állítsd false-ra
      }
    };

    fgv();
  }, [roomid]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error...</h1>
      ) : (
        <div>
          <div className="row">
            <div className="col-md-5">
              <h1>{room.name}</h1>
              {/* <img src={room.imgurls[0]} className="bigimg" /> */}
              {room.imgurls && room.imgurls.length > 0 ? (
                <img src={room.imgurls[0]} className="bigimg" alt={room.name} />
              ) : (
                <p>No image available</p> // Hibaüzenet, ha nincs kép
              )}
            </div>

            <div className="col-md-5">
              <div>
                <h1>Booking Details</h1>
                <hr />

                <b>
                  <p>Név: </p>
                  <p>Ettől: </p>
                  <p>Eddig: </p>
                  <p>Max count: {room.maxcount}</p>
                </b>
                <b>
                  <h1>Amount</h1>
                  <hr />
                  <p>Total days: </p>
                  <p>Rent per days: </p>
                  <p>Total amount</p>
                </b>
              </div>
              <div style={{ float: "left" }}>
                <button className="btn btn-primary">Fizetés</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookingscreen;
