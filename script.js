const griditems = document.querySelectorAll('.grid-items');
let container = document.getElementById('container');
let mainscreen = document.getElementById('mainscreen');
let choice_1 = document.querySelector('.choice-1')
let choice_2 = document.querySelector('.choice-2')
let choice_3 = document.querySelector('.choice-3')
let choice_4 = document.querySelector('.choice-4')
let choice_5 = document.querySelector('.choice-5')
let choice_6 = document.querySelector('.choice-6')
let choice_7 = document.querySelector('.choice-7')
let choice_8 = document.querySelector('.choice-8')
let choice_9 = document.querySelector('.choice-9')
let count=0;
let winner;
let playername1, playername2;
const button = document.querySelector('#btn');
button.addEventListener('click',(event)=>{
    event.preventDefault();
    playername1 = document.getElementById('player1').value;
    playername2 = document.getElementById('player2').value;

    if (playername1.trim() === '' || playername2.trim() === '') {
        alert('Please enter both player names');
    } else {
        mainscreen.style.display = "none";
        container.style.display = "grid";
    }
})


// const arr = Array.from(griditems);
// console.log(arr)
griditems.forEach(griditem=>{
    griditem.addEventListener('click',(game))
});
function game()
{
    if(this.innerHTML==="X" || this.innerHTML==="O") return;
        else
        {
            if(count%2===0)
            {
                this.innerHTML="X"
            }
            else
            {
                this.innerHTML="O"
            }
            count++;

          if(choice_1.innerHTML ==="X" && choice_2.innerHTML==="X" && choice_3.innerHTML==="X"
           ||choice_4.innerHTML ==="X" && choice_5.innerHTML==="X" && choice_6.innerHTML==="X" 
           ||choice_7.innerHTML ==="X" && choice_8.innerHTML==="X" && choice_9.innerHTML==="X"
           ||choice_1.innerHTML ==="X" && choice_4.innerHTML==="X" && choice_7.innerHTML==="X"
           ||choice_2.innerHTML ==="X" && choice_5.innerHTML==="X" && choice_8.innerHTML==="X"
           ||choice_3.innerHTML ==="X" && choice_6.innerHTML==="X" && choice_9.innerHTML==="X"
           ||choice_1.innerHTML ==="X" && choice_5.innerHTML==="X" && choice_9.innerHTML==="X"
           ||choice_3.innerHTML ==="X" && choice_5.innerHTML==="X" && choice_7.innerHTML==="X")
          {
            console.log(playername1+" Won");
            winner= playername1+" Won";
            gamewinner(winner);
            
          }
          else if(choice_1.innerHTML ==="O" && choice_2.innerHTML==="O" && choice_3.innerHTML==="O"
          ||choice_4.innerHTML ==="O" && choice_5.innerHTML==="O" && choice_6.innerHTML==="O" 
          ||choice_7.innerHTML ==="O" && choice_8.innerHTML==="O" && choice_9.innerHTML==="O"
          ||choice_1.innerHTML ==="O" && choice_4.innerHTML==="O" && choice_7.innerHTML==="O"
          ||choice_2.innerHTML ==="O" && choice_5.innerHTML==="O" && choice_8.innerHTML==="O"
          ||choice_3.innerHTML ==="O" && choice_6.innerHTML==="O" && choice_9.innerHTML==="O"
          ||choice_1.innerHTML ==="O" && choice_5.innerHTML==="O" && choice_9.innerHTML==="O"
          ||choice_3.innerHTML ==="O" && choice_5.innerHTML==="O" && choice_7.innerHTML==="O")
          {
            console.log(playername2+" Won");
            winner= playername2+" Won";
            gamewinner(winner)
          }
          else if(count===9)
          {
            console.log("Match Tied");
            winner= "Match Tied";
            gamewinner(winner);
            
          }


        }
}


function gamewinner(winner)
{
    if(winner === playername1+" Won")
    {
        alert(playername1+" Won");
    }
    else if(winner === playername2+" Won")
    {
        alert(playername2+" Won");
    }
    else
    {
        alert("Match Drawn")
    }
    setTimeout(function() {
        location.reload();
    }, 1000);
}