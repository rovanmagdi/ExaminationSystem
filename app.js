var questions=[
  new question(" What are JavaScript Data Types?",['Number','String','Boolean','Object'],"Object"),
  new question("What is the use of isNaN function?",['HTML','JS','NodeJs','C'],"C"),
  new question(" What are all the types of Pop up boxes available in JavaScript ?",['Alert','Confirm','Prompt','C'],"Alert"),
  new question("The function and var are known as : ",["Keywords","Data types","Declaration statements","Prototypes"],"Declaration statements"),
  new question("Which of the following type of a variable is volatile?",["Mutable variable","Dynamic variable","Volatile variable","Immutable variable"],"Mutable variable")
 

  
]
function  run() {
    if(quiz.isEnd())
    {
        //show score
        showScore();

    }
    else{
        //show ques
        var el=document.getElementById("question");
        el.innerHTML=quiz.getIndexQues().text;
    }


    //show choices

    var choices=quiz.getIndexQues().choices;
    for(var i=0 ;i<choices.length ;i++)
    {
        var el=document.getElementById("btn"+i);
        el.innerHTML=choices[i];
       guess("btn"+i ,choices[i])
       
        
     }
     showNumber();
}

function guess(id ,guess) {
  
    var btn=document.getElementById(id);
    btn.onclick=function () {
     
      quiz.guess(guess);
      run();
      checkAnswer();
    
      
    }
    
}
function checkAnswer() {

  
  for (var i = 0; i < choices.length; i++) {
      if(choices[i].checked) {
          // checkedAnswer = choices[i].value;
          choices[i].setAttribute("checked","checked");
          choices[i].checked = true;
      }
      else{
        choices[i].checked = false;

      }
  }
 
}
function showNumber() {
  var currentQuestion=quiz.index+1; //1 for not start from 0
  var el=document.getElementById("progress");
  el.innerHTML=currentQuestion ;
  
}

var next=document.getElementById("next");
  next.onclick=function () {
    quiz.next();
    document.getElementById("prev").style.visibility="visible";

    run();
    
  }

  var prev=document.getElementById("prev");
  prev.onclick=function () {
    quiz.prev();
    run();
  }

   
  function showRes() {
   
    window.location.replace("end.html");


   
  }


    var flag=document.getElementById("flag");
   flag.onclick= function () {
      var x = document.createElement("TABLE");
      x.setAttribute("id", "myTable");
      document.getElementById("flagSpace").appendChild(x);
    
      var y = document.createElement("TR");
      y.setAttribute("id", "myTr");
      document.getElementById("myTable").appendChild(y);
      var index = document.createTextNode(quiz.index+1+" Question ");
      y.append(index)
    
   

      var button2=document.createElement("button");
            button2.id="delete";
            var delet = document.createTextNode("delete");
            button2.append(delet); 
           
            var deletArr=[];

            var delet=document.getElementById("delete");

            button2.onclick=function deleteRow(){
                var i = button2.parentNode.parentNode.rowIndex;
                document.getElementById("myTable").deleteRow(i);
                deletArr.splice(i-1,1);
            }
            y.append(button2);


            var button1=document.createElement("button");
            button1.id="go";
            var go = document.createTextNode("go");
            button1.append(go); 
           
          
            button1.onclick=function goRow(){
              console.log(quiz.guess());
            

            }
            y.append(button1);
    }

    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
  }


  
  

var quiz=new quiz(questions);
shuffleArray(questions);
  run();

  
    