var destList = document.getElementById('destList');
var title = document.getElementById('Title');
var description = document.getElementById('Description');
var url = document.getElementById('url');

function addDest(){
    if(title.value.length > 0 && description.value.length && url.value.length){
        addDestCard();
    }
    else{
        alert('Input all values.');
    }
}

function addDestCard() {
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
    divImg.src=url.value;
    divImg.classList.add("card-img-top");

    divCard.appendChild(divImg);

    var divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    var divCardBodyP = document.createElement("p");
    divCardBodyP.classList.add("card-text");

    divCardBodyP.appendChild(document.createTextNode(title.value+': '+description.value));

    divCardBody.appendChild(divCardBodyP);

    divCard.appendChild(divCardBody);
    
    
       
    divCol.appendChild(divCard);
    destList.appendChild(divCol);

    title.value = '';
    description.value = '';
    url.value = '';

}