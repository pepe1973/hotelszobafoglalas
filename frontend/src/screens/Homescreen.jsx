import React, { useState, useEffect } from "react";
import Room from "../components/Room.jsx";

const Homescreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const fgv = async () => {
      try {
        const data = await fetch("http://localhost:5000/api/rooms");

        if (data.ok) {
          const szobak = await data.json();
          console.log(szobak.rooms);
          setRooms(szobak.rooms);
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
          <h1>Loading....</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-2" key={room._id}>
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
