import { createContext, useState } from "react";


const RoomContext = createContext();

const Provider = (props) => {
    const [szobak, setSzobak] = useState([]);

    return (<RoomContext.Provider value={[szobak, setSzobak]}>{props.children}</RoomContext.Provider>);
};

export default RoomContext;