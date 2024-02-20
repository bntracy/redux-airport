import { useSelector } from "react-redux";

function AirlineTable() {
    const airlines = useSelector(store => store.airlines);
    // console.log(airlines);
    return (
        <tbody>
            {airlines.map((airline, index) => (<tr key={index}><td>{airline}</td></tr>))}
        </tbody>
    );
}

export default AirlineTable;