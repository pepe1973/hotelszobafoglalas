import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const  Bookingscreen = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [szoba, setSzoba] = useState(null);

    const {roomid} = useParams();

    const rooms = JSON.parse(localStorage.getItem('rooms'));
    console.log(rooms);
    
    console.log(roomid);
    
    const szobaT = rooms.filter(elem => elem._id === roomid);
    console.log(szobaT[0]);
    // setRoom(szoba[0]);
    useEffect(() => {
      setSzoba("almafa");
      // setSzoba(szobaT[0]);
    }, []);

    return (
        <div>
          {szoba}
            {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error...</h1>) : (<div>

                <div className="row">

                    <div className="col-md-5">
                        {/* <h1>{szoba.name}</h1> */}
                        {/* <img src={szoba.imageurls[0]} className='bigimg' /> */}
                    </div>

                    <div className="col-md-5">
                        <h1>Booking Details</h1>
                        <hr />

                        <b>
                        <p>Név: </p>
                        <p>Ettől: </p>
                        <p>Eddig: </p>
                        {/* <p>Max count: {szoba.maxcount}</p> */}
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
