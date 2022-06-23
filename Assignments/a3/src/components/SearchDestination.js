import {useState} from "react";
import destinations from "./destinations";
import DestinationCard from "./DestinationCard";

function SearchDestination(props) {

    const [title, settitle] = useState("");

    function searchDest(){
        if(!(title == "")){
            
            var destCards = destinations.map((result, index) =>{
                return (
                    (result.city.includes(title)) ? <DestinationCard url={result.url} city={result.city} text={result.text}/> : null
                );
            });

            props.trigger(destCards);
        }
        else{
            var destCards = destinations.map((result, index) =>{
                return (
                    <DestinationCard url={result.url} city={result.city} text={result.text}/>
                );
            });

            props.trigger(destCards);
        }
    }

    return (
        <div>
            <input type="search" placeholder="Search" className="p-2 m-1" value={title} onChange={(e)=>settitle(e.target.value)}/>
            <input type="button" className="btn bg-dark text-white m-1" value="Search" onClick={searchDest}/>
        </div>
    );
}

export default SearchDestination;