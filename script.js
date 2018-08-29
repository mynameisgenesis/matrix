function printSentence(id, sentence){
  for(var i = 0; i < sentence.length; i++){
    (function(index) {
      setTimeout(function() {
        document.getElementById(id).innerHTML+=sentence[index];
      }, 500 * i);
      setTimeout(function() {
        document.getElementById(id).innerHTML="";
      },14000);
    })(i);
  }
}

function showText(id, sentence){
  setTimeout(function(){
    document.getElementById(id).innerHTML=sentence;
  },14000);
}


printSentence(1,"Wake up, Neo...");

setTimeout(function(){
  printSentence(1,"The Matrix has you...");
}, 14000);

setTimeout(function(){
  printSentence(1,"Follow the white rabbit.");
}, 30000);

setTimeout(function(){
  showText(1,"Knock, knock, Neo.");
}, 31000);
