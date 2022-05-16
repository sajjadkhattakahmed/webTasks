var destList = document.getElementById('destList');

function addDest() {

    var divCol = document.createElement("div");
    divCol.classList.add("col-sm-6");
    divCol.classList.add("col-md-4");
    divCol.classList.add("col-lg-3");
    divCol.classList.add("m-3");

    var divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.classList.add("p-2");
    divCard.classList.add("bg-dark");
    divCard.classList.add("text-white");

    var divImg = document.createElement("img");
    divImg.src="https://cdn.theculturetrip.com/wp-content/uploads/2018/07/shutterstock_697606678.jpg";
    divImg.classList.add("card-img-top");

    divCard.appendChild(divImg);

    var divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    var divCardBodyP = document.createElement("p");
    divCardBodyP.classList.add("card-text");

    divCardBodyP.appendChild(document.createTextNode('Pakistan: Land of Pure. Attracts many.'));

    divCardBody.appendChild(divCardBodyP);

    divCard.appendChild(divCardBody);
    
    
       
    divCol.appendChild(divCard);
    destList.appendChild(divCol);

}
