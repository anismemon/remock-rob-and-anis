// variables for homepage ads

let blankSide1 = document.getElementById("blank-side-left")
let adContainer1 = document.getElementById('adContainer1')
let blankSide2 = document.getElementById("blank-side-right")
let adContainer2 = document.getElementById('adContainer2')

// ad loading and delay functions for homepage

blankSide2.addEventListener('mouseenter', delayShowing)

function showAd() {
    adContainer1.style.display = 'flex'
}

blankSide2.addEventListener('mouseleave', delayHiding)

function hideAd() {
    adContainer1.style.display = 'none'
}

blankSide1.addEventListener('mouseenter', function () {
    adContainer2.style.display = 'flex'

})

blankSide1.addEventListener('mouseleave', function () {
    adContainer2.style.display = 'none'
})

function delayShowing() {
    window.setTimeout(showAd, 2 * 1000)
}

function delayHiding() {
    window.setTimeout(hideAd, 3 * 1000)
}

// link to continue reading page 

let continueReading = document.getElementById("continueReading")
let continueReading2 = document.getElementById("continueReading2")

continueReading.addEventListener('click', openPage)
continueReading2.addEventListener('click', openPage)

function openPage() {
    location.href = 'continue-reading.html'
}
