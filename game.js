// 0-empty
// 1 -pac
// 2-coin 
// 3-heart 
// 4-bomb

let mapData=[
    [0,0,0,0,0,3,0,0,0,0],
    [0,3,0,0,4,0,0,0,4,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,2,0,0],
    [0,0,0,0,1,0,0,0,4,0],
    [3,0,0,0,0,4,0,0,4,0],
    [0,0,4,0,4,0,0,0,0,0],
    [0,0,0,3,0,0,4,0,2,0],
    [0,2,0,0,4,0,4,0,0,2]
]
let pr=5
let pc=4
let coins=0
let health=100


function render(){
    map.innerHTML=``
    for(let row=0;row<10;row++){
    for(let col=0;col<10;col++){
        if(mapData[row][col]==0){
            map.innerHTML+=`<div></div>`
        }
else if(mapData[row][col]==1){
    map.innerHTML+=`<div class="pac"></div>`
}
else if(mapData[row][col]==2){ 
    map.innerHTML+=`<div class="coin"></div>`}
    else if(mapData[row][col]==3){ 
        map.innerHTML+=`<div class="heart"></div>`}
        else if(mapData[row][col]==4){ 
            map.innerHTML+=`<div class="bomb"></div>`}
    }
    score.innerHTML=`Coins: ${coins}`
    score.innerHTML+=`<br>Health:${health}` 
     if(health<=0){
         score.innerHTML=`Game over bro!`
         mapData[pr][pc]=0  }
        
}
}
function move(){
     mapData[pr][pc]=0 
    switch(event.code){
        case "ArrowRight":pc<9? pc++:0; break;
        case "ArrowLeft":pc>0?pc--:0;  break;
        case "ArrowDown":pr<9? pr++:0; break;
        case "ArrowUp":pr>0? pr--:0;break;
       }
       if(mapData[pr][pc] == 2){coins+=5}
       else if(mapData[pr][pc] == 3){health+=10}
       else if (mapData[pr][pc] == 4){health-=20}
      
    mapData[pr][pc]=1 
    render()
}
render()