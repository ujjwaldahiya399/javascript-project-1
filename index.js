$(document).ready( function() {
    setInterval(Time,1000)

    function Time() {
            let date = new Date()
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let period = "AM";
            if(hours>12){
            hours -= 12;
            period="PM";
            }
            hours = hours<10 ?"0"+hours:hours;
            minutes = minutes<10?"0"+minutes:minutes;
            seconds = seconds<10?"0"+seconds:seconds;
            var hoursElement = document.getElementById("hrs");
            hoursElement.innerHTML = hours;

            var minutesElement = document.getElementById("mnts");
            minutesElement.innerHTML = minutes;
            var secondsElement = document.getElementById("scnds");
            secondsElement.innerHTML = seconds;
            var prdElement = document.getElementById("prd");
            prdElement.innerHTML = period;
            if(hours>=12&&minutes>=0&&seconds>=0){
            // window.prompt("Good afternoon!");
            let wishElement = document.getElementById("wakeuptext");
            wishElement.innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP";
            let eatingElement = document.getElementById("eating");
            eatingElement.innerHTML = "LET'S HAVE SOME LUNCH !!";
            let imageElement = document.getElementById("image");
            imageElement.src = "Assets/Component 31 – 1.svg";
            }

            if(hours>=4&&minutes>=0&&seconds>=0){
            // window.prompt("Good evening!");
            let wishElement = document.getElementById("wakeuptext");
            wishElement.innerHTML = "GOOD EVENING!!";
            let eatingElement = document.getElementById("eating");
            eatingElement.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
            let imageElement = document.getElementById("image");
            imageElement.src = "Assets/lunch_image/lunch_image.png";
            }

            if(hours>=8&&minutes>=0&&seconds>=0){
            // window.prompt("Good evening!");
            let wishElement = document.getElementById("wakeuptext");
            wishElement.innerHTML = "GOOD NIGHT !!";
            let eatingElement = document.getElementById("eating");
            eatingElement.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
            let imageElement = document.getElementById("image");
            imageElement.src = "Assets/Component 32 – 1.svg";
            }

            console.log(hours, minutes, seconds)
            // document.getElementById("hrs").innerHTML = hours;
            // document.getElementById("mnts").innerHTML = minutes;
            // document.getElementById("scnds").innerHTML = seconds;
            // document.getElementById("prd").innerHTML = period;
            // console.log(hours)
        }
        
        
    }
    
);
console.log("khgjhg")