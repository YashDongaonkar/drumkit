function playSound(name) {
    let audio = new Audio(`./sounds/${name}.mp3`)
    audio.play()
}

function getAudioName(letter) {
    return audioNames[charNames.indexOf(letter)]
}

let charNames = ["w", "a", "s", "d", "j", "k", "l"]
let audioNames = ["tom-1", "tom-2", "tom-3", "tom-4", "snare", "crash", "kick-bass"]


// add event listener

let buttonList = document.querySelectorAll("button")

for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
        let letter = this.innerHTML
        let audioName = getAudioName(letter)
        playSound(audioName)
    })
}

document.addEventListener("keydown", function (event) {
    let letter = event.key

    // console.log(letter)

    if (charNames.includes(letter)) {
        let audioName = getAudioName(letter)
        playSound(audioName)
    }

})