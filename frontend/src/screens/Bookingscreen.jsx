import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const  Bookingscreen = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [room, setRoom] = useState(null);

    const {roomid} = useParams();
    console.log(roomid);

    useEffect(() => {
      const fgv = async () => {
          console.log('UseEffect');
          try {
            const data = await fetch("http://localhost:5000/api/rooms");
    
            if (data.ok) {
              const szobak = await data.json();
              console.log(szobak.rooms);
              // setRoom(szobak.rooms);
            }
          } catch (error) {
            console.log(error);
          }
        };
    
        fgv();
      }, []);

    return (
        <div>
            {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error...</h1>) : (<div>

                <div className="row">

                    <div className="col-md-5">
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className='bigimg' />
                    </div>

                    <div className="col-md-5">
                        <h1>Booking Details</h1>
                        <hr />

                        <b>
                        <p>Név: </p>
                        <p>Ettől: </p>
                        <p>Eddig: </p>
                        <p>Max count: {room.maxcount}</p>
                        </b>

                    </div>

                    <div>
                        <h1>Amount</h1>
                        <hr />
                        <p>Total days: </p>
                        <p>Rent per days: </p>
                        <p>Total amount</p>
                    </div>

                    <div>
                        <button className='btn btn-primary'>Fizetés</button>
                    </div>

                </div>

            </div>)}
        </div>
    );  
}

export default Bookingscreen
