document.addEventListener("DOMContentLoaded", function(event) { 
    let newBurgerButton = document.getElementById("submitBurger");
    let devourButtons = document.getElementsByClassName("change-devoured");
    let notEatenLi = document.getElementsByClassName("not-eaten");
    let eatenLi = document.getElementsByClassName("eaten");

    if (notEatenLi !== null && eatenLi !== null){
        if(notEatenLi.length >= eatenLi.length){
            document.getElementById("notEatenWell").style.borderRight = "3px solid black";
        }else if(notEatenLi.length < eatenLi.length){
            document.getElementById("eatenWell").style.borderLeft = "3px solid black";
        }
    }
    
    let devourHandler = (e) =>{
        let id = e.target.attributes["1"].value;
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(() =>{
            location.reload();
        });
    }
    newBurgerButton.onclick = () =>{
        let burgerText = document.getElementById("newBurger").value;
        let newBurger = {
            name: burgerText
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then( (res) => {
            console.log(res);
            console.log("added burger");
            location.reload();
        });
    };

    for(let i = 0; i<devourButtons.length; i++){
        devourButtons[i].onclick = devourHandler;
    }
    

});