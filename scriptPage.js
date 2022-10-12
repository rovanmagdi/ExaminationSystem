
var i = 0;
if (i == 0) {
  i = 1;
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 1000);
  
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      showRes();
      document.getElementById("flagSpace").style.display="none";
      i = 0;
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}

var user=document.getElementById("user");
user.innerHTML=" "+localStorage.getItem("firstname") +" "+ localStorage.getItem("lastname");
////////////////////////////////


function question(text,choices,answer)
{
  
  this.text=text;
  this.choices=choices;
  this.answer=answer;
}

question.prototype.correctAnswer =function (choice)
{
  return choice===this.answer;
}


