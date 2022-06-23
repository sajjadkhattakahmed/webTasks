import AddForm from "./AddForm";
import DestinationCard from "./DestinationCard";
import destinations from "./destinations";
import {useState} from "react";
import SearchDestination from "./SearchDestination";

var destCards = destinations.map((result, index) =>{
    return (
        <DestinationCard url={result.url} city={result.city} text={result.text}/>
    );
})

function DestinationList() {

    const [destinationCards, setDestCards] = useState(destCards);

    return (
        <div>
            <SearchDestination trigger={setDestCards}/>
            <div>
                <div class="row row-cols-auto justify-content-around m-3" id="destList">
                    {destinationCards}
                </div>
            </div>
            <AddForm trigger={setDestCards}/>
        </div>
    );
}

export default DestinationList;