const newConName = document.getElementById("newContactName");
const newConNum = document.getElementById("newContactNum");
const newConBtn = document.getElementById("newConBtn");
const savedContact = document.getElementById("savedCon");



newConBtn.addEventListener("click",saveConFunc);
function saveConFunc(){
    if(newConName.value !="" & newConNum.value !=""){
        const addCon= document.createElement("li")
        addCon.innerHTML= newConName.value + "......" + newConNum.value

        savedContact.appendChild(addCon)
        newConName.value =""
        newConNum.value = ""

    } 
};



