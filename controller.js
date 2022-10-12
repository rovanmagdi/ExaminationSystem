
function quiz(questions)
{
    this.score=0;
    this.questions=questions;
    this.index=0;
}
quiz.prototype.getIndexQues=function() {
return this.questions[this.index];
    
}
quiz.prototype.isEnd=function () {
    // return this.questions.length ===this.index;
    var submit=document.getElementById("submit");
    submit.onclick=function () {
         showRes();
         clearInterval(id);
        

        
    }
}

quiz.prototype.guess=function (answer) {
    // this.index++;
    if(this.getIndexQues().correctAnswer(answer))
        
        localStorage.setItem("score",this.score++);
      
    
}

quiz.prototype.next=function () {

         this.index++;
        
         while(this.questions.length === this.index)
         {
             this.index=0;
         }  
        
    // console.log("gh");
   
    
}

quiz.prototype.prev=function () {
   
   
        this.index--;
      
   console.log("prev");
   
}


