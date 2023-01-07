let cards=[]
let hasBlackjack=false
let isAlive=false
let sum=0
let message=""

sumEl=document.getElementById("sum-el")
messageEl=document.getElementById("message-el")
cardEl=document.getElementById("card-el")
playerEl=document.getElementById("player-el")

playerEl.textContent=player.name+": $"+player.chips

function getRandomCard()
{
	let randomNumber=Math.floor(Math.random()*13)+1
	if(randomNumber===1)
	{
		return 11
	}
	else if(randomNumber>10)
	{
		return 10
	}
	else
	{
		return randomNumber
	}
}


function startGame()
{
	isAlive=true
	let firstCard=getRandomCard()
	let secondCard=getRandomCard()
	cards=[firstCard,secondCard]
	sum=firstCard+secondCard
	
	renderGame()
}

function renderGame()
{
	if(sum<21)
	{
	message="Do you want to draw another card?"
	}
	else if(sum===21)
	{
	message="You've got black jack"
	hasBlackjack=true
	}
	else
	{
	message="You are out of game!"
	isAlive=false
	}
	messageEl.textContent=message
	sumEl.textContent="Sum: "+sum
    cardEl.textContent="Card:"
    for(let i=0;i<cards.length;i++)
    {
    	cardEl.textContent+=" "+cards[i]
    }
}

function newCard()
{

	if(isAlive===true && hasBlackjack===false)
	{

		let card=getRandomCard()
		sum+=card
		cards.push(card)
		renderGame()	
	}
	
}
