window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const eleChute = document.getElementById("chute")

const recognition = new SpeechRecognition();
recognition.lang = "pt-bt"
recognition.start()

recognition.addEventListener("result", onSpeak)

var res = document.getElementById("res")

function onSpeak(evento){
    chute = evento.results[0][0].transcript
    exChuteTela(chute)
    verificaChuteValores(chute)
}

function exChuteTela(chute){
    eleChute.innerHTML = `
    <div>Você disee:</div>
    <samp class="box">${chute}</samp>`
}
recognition.addEventListener("end", () => recognition.start())
