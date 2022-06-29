//Code Challenge
//Make a base ball score board using the following rules and figma design: 
// https://www.figma.com/file/mHwnUy1yScDyv1Y4QjErS6/Basketball-Scoreboard-(Copy)
// 1. build from all HTML, CSS, and JS files from scratch, 2. Follow the design, 3. Makle all six buttones work
//Bonus: 4. Add "New Game button" 5. Highlight the leader, 6. Add more counters (Foul, timer, period)
let homeScore = 0
let guestScore = 0
let totalHomeScore = document.getElementById("totalHomeScore")
let totalGuestScore =  document.getElementById("totalGuestScore")

function add1Home() {
	homeScore = homeScore + 1
	totalHomeScore.innerText = homeScore
	console.log(homeScore)
}
function add2Home() {
	homeScore = homeScore + 2
	totalHomeScore.innerText = homeScore
	console.log(homeScore)
}
function add3Home() {
	homeScore = homeScore + 3
	totalHomeScore.innerText = homeScore
	console.log(homeScore)
}
function add1Guest() {
	guestScore = guestScore + 1
	totalGuestScore.innerText = guestScore
	console.log(guestScore)
}
function add2Guest() {
	guestScore = guestScore + 2
	totalGuestScore.innerText = guestScore
	console.log(guestScore)
}
function add3Guest() {
	guestScore = guestScore + 3
	totalGuestScore.innerText = guestScore
	console.log(guestScore)
}