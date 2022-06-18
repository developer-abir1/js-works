
const playerStyels =( player) =>{
   player.style.border= '1px solid red';
   player.style.margin ='10px';
   player.style.padding ='10px';
}
 
   const players = document.getElementsByClassName("player");
 for(const player of players){
   playerStyels(player);
   player.addEventListener("click" , function (){
      alert("hellow world")
   })
 }

const addPLayers =  () =>{
   const players = document.getElementById('players');
   const player= document.createElement('dev');
   player.classList.add('player')
   player.innerHTML = `
   
                        <h4 class="player-name">New player</h4>
                        <p>Quaerat ut impedit deserunt eos atque aut rem suscipit, hic sed nobis consequuntur porro, veniam exercitationem vitae, numquam tempore natus.</p>
                     
   
   
   `
playerStyels(player)
   players.appendChild(player)  
   console.log(player)
   console.log(players)
}