console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards [2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log(cardsInPlay);
console.log("User flipped " + cardOne);
// console.log("User flipped " + cardFour);
console.log("user flipped " + cardsInPlay[1]);
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert = "you found a match!"
}
else {
	alert = "Sorry, try again."
}
console.log(alert)

