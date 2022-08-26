let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

// Home Score Add
function addHome1() {
	homeScore += 1;
	homeScoreEl.textContent = homeScore;
}

function addHome2() {
	homeScore += 2;
	homeScoreEl.textContent = homeScore;
}

function addHome3() {
	homeScore += 3;
	homeScoreEl.textContent = homeScore;
}

// Home Score Subtract
function subtractHome1() {
	homeScore -= 1;
	homeScoreEl.textContent = homeScore;
}

function subtractHome2() {
	homeScore -= 2;
	homeScoreEl.textContent = homeScore;
}

function subtractHome3() {
	homeScore -= 3;
	homeScoreEl.textContent = homeScore;
}

// Guest Score Add
function addGuest1() {
	guestScore += 1;
	guestScoreEl.textContent = guestScore;
}

function addGuest2() {
	guestScore += 2;
	guestScoreEl.textContent = guestScore;
}

function addGuest3() {
	guestScore += 3;
	guestScoreEl.textContent = guestScore;
}

// Guest Score Subtract
function subtractGuest1() {
	guestScore -= 1;
	guestScoreEl.textContent = guestScore;
}

function subtractGuest2() {
	guestScore -= 2;
	guestScoreEl.textContent = guestScore;
}

function subtractGuest3() {
	guestScore -= 3;
	guestScoreEl.textContent = guestScore;
}

function startGame() {
	homeScore = 0;
	homeScoreEl.textContent = homeScore;
	guestScore = 0;
	guestScoreEl.textContent = guestScore;
}
