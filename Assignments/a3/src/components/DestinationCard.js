import '../App.css';

function DestinationCard(props) {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 m-3">
            <div className="card p-2 bg-dark text-white">
                <img src={`${props.url}`}  className="card-img-top"/>
                <div className="card-body">
                <p className="card-text"><b>{props.city}:</b>{props.text}</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default DestinationCard;











