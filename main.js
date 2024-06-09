//https://teachablemachine.withgoogle.com/models/yOvfOa-35/model.json

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="captured_image">';
});
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yOvfOa-35/model.json', modelLoaded);
function modelLoaded()
{
    console.log("model is loaded");
}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction Is " + prediction_1;
    speak_data_2 = "The Second Prediction Is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}