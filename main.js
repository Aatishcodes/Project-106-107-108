// https://teachablemachine.withgoogle.com/models/23jBP6PT-/



function startclassifier() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/23jBP6PT-/model.json', modelready)
}


function modelready() {
    classifier.classify(gotresult)

}


function gotresult(error, results) {
    console.log(results)
    soundname = results[0].label
    soundconfidence = results[0].confidence

    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("labelitem").style.color = "rgb("+ random_number_r + ","+ random_number_b + "," + random_number_g +")";
    document.getElementById("confidence").style.color = "rgb("+ random_number_g + ","+ random_number_r + "," + random_number_b +")";

    document.getElementById("labelitem").innerHTML = "I can hear " + soundname
    document.getElementById("confidence").innerHTML = "Accuracy " + (soundconfidence * 100).toFixed(2) + '%'



    if (soundname == "Background Noise") {
        document.getElementById("backgroundnoise").src = "aliens-01.gif"
        document.getElementById("clapping").src = "aliens-02.png"
        document.getElementById("snapping").src = "aliens-03.png"
        document.getElementById("talking").src = "aliens-04.png"
    }

    else if (soundname == "Clapping") {
        document.getElementById("clapping").src = "aliens-02.gif"
        document.getElementById("backgroundnoise").src = "aliens-01.png"
        document.getElementById("snapping").src = "aliens-03.png"
        document.getElementById("talking").src = "aliens-04.png"
    }


    else if (soundname == "Snapping") {
        document.getElementById("snapping").src = "aliens-03.gif"
        document.getElementById("clapping").src = "aliens-02.png"
        document.getElementById("backgroundnoise").src = "aliens-01.png"
        document.getElementById("talking").src = "aliens-04.png"
    }

    else if (soundname == "Talking/Yelling") {
        document.getElementById("talking").src = "aliens-04.gif"
        document.getElementById("snapping").src = "aliens-03.png"
        document.getElementById("clapping").src = "aliens-02.png"
        document.getElementById("backgroundnoise").src = "aliens-01.png"
    }


}