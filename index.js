//tableau
let depense =[
    {"Titre":"nourriture", "Montant":"200"},
    {"Titre":"café", "Montant":"100"},
];
const table1 = document.querySelector('.montab1');
const tbody1 =document.createElement("tbody");

function setDepense(depenses){
    localStorage.setItem("depense", JSON.stringify(depense));

}
// recuperer depuis le local storage
function getDepense(){
    return JSON.parse(localStorage.getItem('depense'));
}
setDepense(depense);
let initialDepense = getDepense();
// remplir la table
function createtable1(){

    for (let index = 0; index < 2; index++) {
        let row = document.createElement("tr");
        //creer le boutton de supression
        let buttonCell = document.createElement("td");
        let deletButton = document.createElement("button");
        let buttonText = document.createTextNode("supprimer");
        deletButton.setAttribute("class","delete-btn");
        deletButton.appendChild(buttonText);

        for (let element = 0; element < depense.length; element++) {
            const cellule = document.createElement("td");
            const cellText = document.createTextNode(Object.values(depense[index])[element]);
            deletButton.setAttribute("montantdepense", depense[index].Montant);
            buttonCell.appendChild(deletButton);
            cellule.appendChild(cellText);
            row.appendChild(cellule);
            row.appendChild(buttonCell); 
            row.setAttribute('id' , depense[index].Montant);
            
        }
        tbody1.appendChild(row);
       
    }
    table1.appendChild(tbody1);
    // document.body.appendChild(table1);                                             

}

createtable1();
let deletButton = document.querySelectorAll(".delete-btn");
deletButton.forEach(function(button) {
    button.addEventListener('click',function(){
        console.log('button clicked');
        const Montant = this.getAttribute("montantdepense");
        let row = document.getElementById(Montant);
        //row.parentNode.removeChild(row);
    })
    
});

//modal
let modal = document.getElementById("parent-modal");
let modalButton = document.getElementById("but1");
let close = document.querySelector('.close');
modalButton.onclick = function(){
    console.log('modal clicked');
    modal.style.display = "block";
}
close.onclick = function(){
    //console.log('modal clicked');
    modal.style.display = "none";
}
window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
}
//ajouter revenu
let addDepense = document.querySelector(".addDepense");
addDepense.onclick = function(event){
    event.preventDefault();
   // console.log("clicked");
    const Titre =document.getElementById('titre').value;
    const Montant =document.getElementById('montant').value;
    if(!Titre || !Montant){
        alert("merci de remplir");
        return;
    }
    setDepense(depense);
    //ajouter untr
    let row = document.createElement("tr");
    let cell0 = row.insertCell(0);
    const cell0Text =document.createTextNode(Titre);
    cell0.appendChild(cell0Text);
    row.appendChild(cell0);

    let cell1 = row.insertCell(1);
    const cell1Text =document.createTextNode(Montant);
    cell1.appendChild(cell1Text);
    row.appendChild(cell1);

    let buttonCell = document.createElement("td");
    let deletButton = document.createElement("button");
    let buttonText = document.createTextNode("supprimer");
    deletButton.setAttribute('class','delete-btn');
    deletButton.appendChild(buttonText);
    buttonCell.appendChild(deletButton);

           row.appendChild(buttonCell); 
            row.setAttribute('id' , Montant);
            tbody1.appendChild(row);
            table1.appendChild(tbody1);
            //Vider les input

    

}
/*let modal1 = document.getElementById("parent-modal1");
let modalButton1 = document.getElementById("but2");
let closee = document.querySelector('.close1');
modalButton1.onclick = function(){
    console.log('modal1 clicked');
    modal.style.display = "block";
}
closee.onclick = function(){
    console.log('modal clicked');
    modal.style.display = "none";
}*/