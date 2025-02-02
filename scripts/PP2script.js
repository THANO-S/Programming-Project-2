const newConName = document.getElementById("newContactName");
const newConNum = document.getElementById("newContactNum");
const newConBtn = document.getElementById("newConBtn");
const savedContact = document.getElementById("savedCon");



newConBtn.addEventListener("click",saveConFunc);

function saveConFunc(){
    if(newConName.value !="" && newConNum.value !=""){
        const addCon= document.createElement("li")
        addCon.innerHTML= newConName.value + "......" + newConNum.value
        
        const xButton = document.createElement("button");
        xButton.textContent = "X";
        xButton.classList.add("close");

        addCon.appendChild(xButton);
        savedContact.appendChild(addCon);

        newConName.value = "";
        newConNum.value = "";

        xButton.addEventListener("click", function(){
            savedContact.removeChild(addCon);
        });


    } else{
        alert("Please provide a name and phone number.")
    }
};


