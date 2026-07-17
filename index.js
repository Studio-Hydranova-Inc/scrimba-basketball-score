
let homeCountDisplay = document.getElementById("home")
let homeCount = 0

let guestCountDisplay = document.getElementById("guest")
let guestCount = 0

function homeOne() {
    homeCount += 1
    homeCountDisplay.innerText = homeCount
}

function homeTwo() {
    homeCount += 2
    homeCountDisplay.innerText = homeCount
}

function homeThree() {
    homeCount += 3
    homeCountDisplay.innerText = homeCount
}

function guestOne() {
    guestCount += 1
    guestCountDisplay.innerText = guestCount
}

function guestTwo() {
    guestCount += 2
    guestCountDisplay.innerText = guestCount
}

function guestThree() {
    guestCount += 3
    guestCountDisplay.innerText = guestCount
}