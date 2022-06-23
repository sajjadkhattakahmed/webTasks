import {useState} from "react";
import destinations from "./destinations";
import DestinationCard from "./DestinationCard";

function AddForm(props) {

    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [url, seturl] = useState("");

    function addDest(){
        if(!(title == "" & description == "" & url == "")){
            destinations.push({city:title,text:description,url:url});

            var destCards = destinations.map((result, index) =>{
                return (
                    <DestinationCard url={result.url} city={result.city} text={result.text}/>
                );
            });

            props.trigger(destCards);
        }
        else{
            alert("Input all values")
        }
    }

    return (
        <center>
            <div class="bg-dark m-3 p-5 w-20 text-white col-lg-6">
                <h3>Adding new Destination</h3>
                <div class="mb-3">
                <label for="Title" class="form-label">Title</label>
                <input type="text" class="form-control" id="Title" value={title} onChange={(e)=>settitle(e.target.value)}/>
                </div>
                <div class="mb-3">
                <label for="Description" class="form-label">Description</label>
                <input type="text" class="form-control" id="Description" value={description} onChange={(e)=>setdescription(e.target.value)}/>
                </div>
                <div class="mb-3">
                <label class="form-label" for="url">Picture URL</label>
                <input type="url" class="form-control" id="url" value={url} onChange={(e)=>seturl(e.target.value)}/>
                </div>
                <button class="btn text-white bg-secondary m-5 p-3" onClick={addDest}>+ Add New Destination</button>
            </div>
        </center>
    );
  }
  
  export default AddForm;

