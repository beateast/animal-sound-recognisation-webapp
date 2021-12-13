function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hZaRndM-N/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(math.random() * 255) + 1;
        random_number_g = Math.floor(math.random() * 255) + 1;
        random_number_b = Math.floor(math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear you - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].label*100).toFixed(2)+' %';
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        
        img = document.getElementById("barking");
        img2 = document.getElementById("meowing");
        img3 = document.getElementById("mooing");
        img4 = document.getElementById("roar");

        if(results[0].label == "barking") {
            img.src = 'barking.gif';
            img2.src = 'meowing.png';
            img3.src = 'mooing.png';
            img4.src = 'roar.png';
        } else if(results[0].label == "meowing") {
           img.src = 'barking.png';
           img2.src = 'meowing.gif';
           img3.src = 'mooing.png';
           img4.src = 'roar.png';
        } else if(results[0].label == "mooing") {
            img.src = 'barking.png';
            img2.src = 'meowing.png';
            img3.src = 'mooing.gif';
            img4.src = 'roar.png';
        } else{
            img.src = 'barking.png';
            img2.src = 'meowing.png';
            img3.src = 'mooing.png';
            img4.src = 'roar.gif';
        }
    }
}
