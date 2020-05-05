// var timer = null;
// var countDownNumber = 3;

// var changeState = function (state) {
//     document.body.className = 'body-state'+state;

//     if (state == 2) {
         

//        timer = setInterval (function() {
//             document.getElementById('countdown').innerHTML = countDownNumber; 
//             countDownNumber = countDownNumber -1;
//             if (countDownNumber <= 0) {
//                 clearInterval(timer);
//                 changeState(3);
//             }
//         },1000);
//     };

//     }

// PRACTICE 1

// var countDownNumber = 3;
// var timer = null;


// var changeState = function (state) {

//     document.body.className = 'body-state'+state;
//     clearInterval(timer);
//     if(state == 2)  { 

//             timer = setInterval(function() {

//             document.getElementById('countdown').innerHTML = countDownNumber;
//             countDownNumber = countDownNumber-1;

//             if (countDownNumber <0) {
//                 changeState(3);
//             } else if ( state == 3) {

//                 var success = setTimeout(function() {
                    
//                 var randomNumber = Math.round(Math.random()*10);
//                 if (randomNumber > 5) {
//                     changeState(4);
//                 } else changeState(5);

        
//             },2000);
                 
            
//         }, 500);

// PRACTICE 2

var changeState = function (state) {
    
    document.body.className = 'body-state'+state;
    clearInterval(timer);
    countDown = 3;

    if (state == 2) {

        var timer = null;
        var countDown = 3;
        var randomNumber = Math.round(Math.random()*10);
        

        timer = setInterval(function(){

            document.getElementById('countdown').innerHTML = countDown;
            countDown = countDown-1;

            if (countDown <= 0) {

            changeState(3);

            console.log('randomNumber: '+randomNumber);
                   
    
            } else if ( state == 3) {
               
                var success = setTimeout (function(){

                    if (randomNumber > 5) {
                        changeState(4);

                    } else {changeState(5);
                    }

                },2000)

                
            }

        },500);

        


    } else {

        //do something

    }

}



        // if (countDownNumber <= -1) {
        //     changeState(3);
            
        // } else ( state == 3 ) {

        //     var success = setTimeout(function() {

        //         var randomNumber = Math.round(Math.random()*10);

        //         console.log(randomNumber)

        //         if (randomNumber > 5) {
        //             changeState(4);
        //         } else changeState(5);


        //     },2000);

        // }
       




//     }
// }
