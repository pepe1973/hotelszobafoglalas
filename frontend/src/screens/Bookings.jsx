import { useEffect, useState } from 'react';

const Bookings = () => {
    const user = JSON.parse(localStorage.getItem('currentUser')).user;
    console.log(user._id);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const foglalasleker = async () => {
            const response = await fetch('http://localhost:5000/api/bookings');

            const foglalasok = await response.json();

            if (response.ok) {
                console.log(foglalasok.bookings);

                setRooms(
                    foglalasok.bookings.filter(
                        (elem) => elem.userid === user._id
                    )
                );
            }
        };

        foglalasleker();
    }, []);

    return (
        <div>
            {rooms.map((elem) => (
                <div
                    className="szoba"
                    key={elem._id}
                >
                    <h1>{elem.room}</h1>
                </div>
            ))}
        </div>
    );
};

export default Bookings;
