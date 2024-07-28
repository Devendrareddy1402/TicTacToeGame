let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msgContent = document.querySelector("#msg");
let newButton = document.querySelector("#new-btn");

const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let turnO = true;
let count = 0;

const gameDraw = ()=>{
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};



const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


const enableBoxes  = ()=>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};


const disableBoxes = ()=>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const showWinner = (winner)=>
{
    msg.innerText = `Congratulations!. Winner ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
    
const checkWinner = ()=>
{
    for(pattern of winningPatterns)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val == pos2val && pos2val == pos3val)
            {
                showWinner(pos1val);
                return true;
            }
        }
    }
}




boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.style.color = "#508AA8";
            box.innerText = "O";
            turnO = false;
            
        } 
        else
        {
            box.style.color = "#9C528B"
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner)
        {
            gameDraw();
        }
    });
});



newButton.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);