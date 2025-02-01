const newConName = document.getElementById("newContactName");
const newConNum = document.getElementById("newContactNum");
const newConBtn = document.getElementById("newConBtn");
const savedContact = document.getElementById("savedCon");

const xButton = document.createElement("button");
xButton.textContent = "X";
xButton.classList.add("close");

newConBtn.addEventListener("click",saveConFunc);
function saveConFunc(){
    if(newConName.value !="" & newConNum.value !=""){
        const addCon= document.createElement("li")
        addCon.innerHTML= newConName.value + "......" + newConNum.value

        savedContact.appendChild(addCon)
        addCon.appendChild(xButton)
        newConName.value =""
        newConNum.value = ""

        xButton.onclick = function(){
            savedContact.removeChild(addCon);
        };
    } 
};



