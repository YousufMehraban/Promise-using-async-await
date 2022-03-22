// Part One: Number Facts

// Question 1
const baseUrl = 'http://numbersapi.com/'

async function LuckyNum(num){
    let res = await axios.get(`${baseUrl}${num}`)
    console.log('this is the fact of the fav num --> ', res.data)
}
LuckyNum(7)


// Question 2
function makeList(data){
  
  for (let fact of data){
    let list = document.querySelector('#fact-list1')
    let li = document.createElement('li')
    li.innerText = fact
    list.append(li)
  }
}

async function multiNum(){
    let res = await axios.get(`${baseUrl}6..8,10`)
    makeList(Object.values(res.data))
  }

multiNum()



// Question 3
function AddtoList(value){
  let list = document.querySelector('#fact-list2')
  for (let num of value){
    let li = document.createElement('li')
    li.innerText = num.data
    list.append(li)
  }
}

async function multiSameNum(favNum){
    let res = await Promise.all(
      [axios.get(`${baseUrl}${favNum}`),
      axios.get(`${baseUrl}${favNum}`),
      axios.get(`${baseUrl}${favNum}`),
      axios.get(`${baseUrl}${favNum}`),]
    )
    AddtoList(res)
}
multiSameNum(99)


// Part 2: Deck of Cards

// Question 1
const cardUrl = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1'

async function drawCard(){
  let res = await axios.get(cardUrl)
  console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
}
drawCard()


// Question 2
async function newShuffleDeck(){
    let res = await axios.get(cardUrl)
    console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    let res2 = await axios.get(cardUrl)
    console.log(`${res2.data.cards[0].value} of ${res2.data.cards[0].suit}`)
}
newShuffleDeck()


// Question 3
// refer to card.js and display-card.html
