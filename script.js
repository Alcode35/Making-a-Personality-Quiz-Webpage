let score = 0;
let mob;
let mob_img;
let q1 = 0;
let q2 = 0;
let q3 = 0;
let q4 = 0;
let q5 = 0;

const selectable1 = document.getElementsByClassName("selectable1")
const selectable2 = document.getElementsByClassName("selectable2")
const selectable3 = document.getElementsByClassName("selectable3")
const selectable4 = document.getElementsByClassName("selectable4")
const selectable5 = document.getElementsByClassName("selectable5")

function processQuestion(questionNumber, answerChoice){
    if(questionNumber == 1){
        for(var i = 0; i < selectable1.length; i++ ){
            selectable1[i].style.backgroundColor="#e6f2ff" 
        }
    }

    if(questionNumber == 2){
        for(var i = 0; i < selectable2.length; i++ ){
            selectable2[i].style.backgroundColor="#e6f2ff" 
        }
    }

    if(questionNumber == 3){
        for(var i = 0; i < selectable3.length; i++ ){
            selectable3[i].style.backgroundColor="#e6f2ff" 
        }
    }

    if(questionNumber == 4){
        for(var i = 0; i < selectable4.length; i++ ){
            selectable4[i].style.backgroundColor="#e6f2ff" 
        }
    }

    if(questionNumber == 5){
        for(var i = 0; i < selectable5.length; i++ ){
            selectable5[i].style.backgroundColor="#e6f2ff" 
        }
    }

    if(questionNumber==1 && answerChoice==1){
        q1 = 1
    }

    else if(questionNumber==1 && answerChoice==2){
        q1 = 2
    }

    else if(questionNumber==1 && answerChoice==3){
        q1 = 3
    }

    else if(questionNumber==1 && answerChoice==4){
        q1 = 4
    }


    if(questionNumber==2 && answerChoice==1){
        q2 = 1
    }

    else if(questionNumber==2 && answerChoice==2){
        q2 = 2
    }

    else if(questionNumber==2 && answerChoice==3){
        q2 = 3
    }

    else if(questionNumber==2 && answerChoice==4){
        q2 = 4
    }


    if(questionNumber==3 && answerChoice==1){
        q3 = 1
    }

    else if(questionNumber==3 && answerChoice==2){
        q3 = 2
    }

    else if(questionNumber==3 && answerChoice==3){
        q3 = 3
    }

    else if(questionNumber==3 && answerChoice==4){
        q3 = 4
    }


    if(questionNumber==4 && answerChoice==1){
        q4 = 1
    }

    else if(questionNumber==4 && answerChoice==2){
        q4 = 2
    }

    else if(questionNumber==4 && answerChoice==3){
        q4 = 3
    }

    else if(questionNumber==4 && answerChoice==4){
        q4 = 4
    }


    if(questionNumber==5 && answerChoice==1){
        q5 = 1
    }

    else if(questionNumber==5 && answerChoice==2){
        q5 = 2
    }

    else if(questionNumber==5 && answerChoice==3){
        q5 = 3
    }

    else if(questionNumber==5 && answerChoice==4){
        q5 = 4
    }
}
    
function calculateResult(){
    score = q1 + q2 + q3 + q4 + q5

    if(score <= 6){
        mob = "villager"
        mob_img = "villager.webp"
     }
     
    else if(score >= 7 && score <= 9){
        mob = "cow"
        mob_img = "cow.webp"
     }
     
    else if(score >= 10 && score <= 13){
        mob = "enderman"
        mob_img = "enderman.webp"
     }
     
    else if(score >= 14 && score <= 17){
        mob = "zombie"
        mob_img = "zombie.webp"
     }
     
    else if(score >= 18 && score <= 20){
        mob = "creeper"
        mob_img = "creeper.png"
     }

    result.innerHTML= "A " + mob + ".";
    result_img.innerHTML= "<img src = '" + mob_img + "'>"
}

