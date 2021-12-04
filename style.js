function start_app()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/F5tGy4Z7u/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error){
        console.error(error);
    }
    else{
   console.log(results);
   random_no_r = Math.floor(Math.random() * 255 ) + 1;
   random_no_g = Math.floor(Math.random() * 255 ) + 1;
   random_no_b = Math.floor(Math.random() * 255 ) + 1;

   document.getElementById("result_label").innerHTML = ' I can hear - ' + results[0].label;
   document.getElementById("sound_label").innerHTML = ' Accuracy - ' + (results[0].confidence*100).toFixed(2)+ " % ";
   document.getElementById("result_label").style.color = "rgb ("+random_no_r+","+random_no_g+","+random_no_b+")";
   document.getElementById("sound_label").style.color = "rgb ("+random_no_r+","+random_no_g+","+random_no_b+")";

   image = document.getElementById("dog.jpg");
   image1 = document.getElementById("anfrycat.png");
   image2 = document.getElementById("unnamed.png");

      if(results[0].label == 'Bark'){
       image.src = 'bark.gif';
       image1.src = 'anfrycat.png';
       image2.src = 'unnamed.png';
   }
   else if(results[0].label == 'Cat/boocha'){
    image.src = 'dog.jpg';
    image1.src = 'watching-you-angry.gif';
    image2.src = 'unnamed.png';
   }
   else if(results[0].label == 'Roar'){
    image.src = 'dog.jpg';
    image1.src = 'anfrycat.png';
    image2.src = 'roar.gif';
   }
   else{
    image.src = 'dog.jpg';
    image1.src = 'anfrycat.png';
    image2.src = 'unnamed.png';
   }
}
    }
