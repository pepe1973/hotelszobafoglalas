import { useState, useEffect, useContext } from "react";
import Loader from "../components/Loader.jsx";
import Room from "../components/Room.jsx";

const Homescreen = () => {
  const [rooms, setRoom] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fgv = async () => {
      try {
        const data = await fetch("http://localhost:5000/api/rooms");

        if (data.ok) {
          const szobak = await data.json();
          localStorage.setItem("rooms", JSON.stringify(szobak.rooms));
          setRoom(szobak.rooms);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fgv();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-3">
                <Room room={room} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Homescreen;

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         {loading ? (
//           <h1>Loading....</h1>
//         ) : error ? (
//           <h1>Hiba történt a szobák betöltésekor!</h1>
//         ) : rooms.length > 0 ? (
//           rooms.map((room) => <Room key={room.id} room={room} />) // Használj Room komponenst
//         ) : (
//           <h1>Nincsenek elérhető szobák!</h1>
//         )}
//       </div>
//     </div>
//   );
