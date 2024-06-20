function codingScoreCheck(marks, cutOffScore) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let sum = marks.reduce((acc, item) => acc + item, 0);
            let average = sum / marks.length;

            if (average >= cutOffScore) {
                resolve(average);
            } else {
                reject("Sorry you haven't clear the coding round!");
            }
        }, 2000);
    });
}

let marks = [25, 65, 45, 76, 89];
let cutoff = 56;
let first = codingScoreCheck(marks, cutoff);
   first
    .then(function(result) {
        console.log(result); 
    })
    .catch(function(error) {
        console.error(error); 
    });


    function HUKUMUScoreCheck(marks, cutOffScore) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                let sum = marks.reduce((acc, item) => acc + item, 0);
                let average = sum / marks.length;
    
                if (average >= cutOffScore) {
                    resolve(average);
                } else {
                    reject("Sorry you haven't clear the coding round!");
                }
            }, 2000);
        });
    }
    
    let marks1 = [25, 55, 45, 76, 80];
    let cutoff1 = 34;
    let second = HUKUMUScoreCheck(marks1, cutoff1);
       second
        .then(function(result) {
            console.log(result); 
        })
        .catch(function(error) {
            console.error(error); 
        });  
        
        function unitMovementCheck(first,second,cutoff){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                let average = (first+second)/2;
            if(average>cutoff){
                resolve(average);
            }
            else{
                reject("Sorry you haven't clear the coding round!");
            }
            },2000)
        })
        }

        let third = unitMovementCheck(first,second,cutoff);
       third
        .then(function(result) {
            console.log(result); 
        })
        .catch(function(error) {
            console.error(error); 
        });


       