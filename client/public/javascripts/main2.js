// delayed ad display on continue reading page

let adContainer3 = document.getElementById('adContainer3')
let blankSideCR1 = document.getElementById("blank-side-leftCR")
let blankSideCR2 = document.getElementById("blank-side-rightCR")
let adContainer4 = document.getElementById("adContainer4")

window.addEventListener('load', loadAds)

function loadAds() {
    window.setTimeout(showAd3, 2 * 1000)
    fireSecondAd()
    window.setTimeout(hideAd3, 7 * 1000)
}

function showAd3() {
    adContainer3.style.display = 'block'
}

function hideAd3() {
    adContainer3.style.display = 'none'
}

function fireSecondAd() {
    window.setTimeout(showAd4, 6 * 1000)
}

function showAd4() {
    adContainer4.style.display = 'block'
    window.setTimeout(hideAd4, 5 * 1000)
}

function hideAd4() {
    adContainer4.style.display = 'none'
}
