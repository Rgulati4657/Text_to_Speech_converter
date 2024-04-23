let speech = new SpeechSynthesisUtterance(); /* SpeechSynthesisUtterance -- it is an interface of the web speech api represents the speech request .*/

let voices = [];
let voiceSelect = document.querySelector("Select");
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // work like a default voice

    voices.forEach((voice , i) => (voiceSelect.options[i] = new Option(voice.name , i)));
}

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
});
// lets add eventlistener to teh button for reading
document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
console.log("hi");