let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg  = document.querySelector("#msg");


let turnO = true; //playerx , player0
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]
const resetgame = () => {
    turnO = true;
    enableboxes ();
    msgcontainer.classList.add("hide");

};
boxes.forEach((box)=>{
    box.addEventListener("click", () =>
    {
        console.log("button clicked");
        if(turnO){ //playerO
            box.innerText = "O";
            turnO = false ; 
        }
        else{  //playerX
            box.innerText = "X";
            turnO = true ; 
        }
        box.disabled= true;
        checkwinner();
    });
});
const disableboxes = (  ) => {
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableboxes = (  ) => {
    for (let box of boxes){
        box.disabled= false ;
        box.innerText = "";
    }
}
const showwinner = (winner) =>{
    msg.innerText = `Congratulation! winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

};



const checkwinner = () =>{
    for( let pattern of winpattern){
        let posval1 =   boxes[pattern[0]].innerText;
        let posval2 =   boxes[pattern[1]].innerText;
        let posval3 =   boxes[pattern[2]].innerText; 
        if (posval1 != "" && posval2 != "" && posval3!= "" ) {
            if(posval1 === posval2 && posval2 === posval3){
             console.log("winner", posval1 );
             showwinner(posval1);
            }
            
            }
    }
};
newbtn.addEventListener("click", resetgame)
resetBtn.addEventListener("click", resetgame)