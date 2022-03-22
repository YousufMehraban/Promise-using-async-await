

// Question 3

let id = null
async function deckID(){
    let res = await axios.get('http://deckofcardsapi.com/api/deck/new/')
    id = res.data.deck_id
}
deckID()
async function drawCard(){
  try{
    let res = await axios.get(`http://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    let div = document.querySelector('#cards')
    let img = document.createElement('img')
    img.src = res.data.cards[0].image
    div.append(img)
  }
  catch(e){
    console.log('No Card Left to Draw')
  }
}


document.querySelector('#button').addEventListener('click', function(){
    drawCard()
})