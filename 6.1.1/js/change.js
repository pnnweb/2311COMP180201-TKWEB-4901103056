        var button1 = document.getElementById("btn1");
        var button2 = document.getElementById("btn2");
        var div = document.getElementById('background');
        var a=0;
        button1.hidden;
        button2.addEventListener(
            "click",() => {
            button1.hidden = false;
            },
            false,
            );
        button1.addEventListener(
            "click",() => {
            button2.hidden = false;
            },
            false,
            );
        button1.onclick = function () {
            a=a-1;
            // document.getElementById("demo").innerHTML = a;
            switch(a) {
            case 1:
                div.style.backgroundImage = "url('images/dl.beatsnoop.com-ultra-R9sxaQiVXW.jpg')";
                break;
            case 2:
                div.style.backgroundImage = "url('images/1678166297_483_Hinh-nen-dai-duong-tuyet-dep.jpg')";
                break;
            case 3:
                div.style.backgroundImage = "url('images/03750995c7ba7228f42a1dfd4144f0a2.jpg')";
                break;
            default:
                div.style.backgroundImage = "url('images/anh-nen-duoi-day-dai-duong_110514767.jpg')"
            }
            if(a==0){
                button1.hidden = true;
            }
        };
        button2.onclick = function () {
            button1.hidden;
            a=a+1;
            // document.getElementById("demo").innerHTML = a;
            switch(a) {
            case 1:
                div.style.backgroundImage = "url('images/dl.beatsnoop.com-ultra-R9sxaQiVXW.jpg')";
                break;
            case 2:
                div.style.backgroundImage = "url('images/1678166297_483_Hinh-nen-dai-duong-tuyet-dep.jpg')";
                break;
            case 3:
                div.style.backgroundImage = "url('images/03750995c7ba7228f42a1dfd4144f0a2.jpg')";
                break;
            default:
                div.style.backgroundImage = "url('images/anh-nen-duoi-day-dai-duong_110514767.jpg')"
            }
            if(a==3){
                button2.hidden = true;
            }
        };
        let i=0;
        let sname="Âm thanh: Dưới đáy biển";
        var x = document.getElementById("myAudio");
        function check(){
        if(i==1){
        sname= "Nhạc Thư Giãn Với Tiếng Sóng Biển Và Đàn Piano Nhẹ Nhàng";
        x = document.getElementById("myAudio1"); 
        }
        if(i==2){
        sname= "Nhạc tình khúc về BIỂN hay nhất trong nhạc trữ tình";
        x = document.getElementById("myAudio2"); 
        }
        if(i==3){
            i=0;
            sname="Âm thanh: Dưới đáy biển";
            x = document.getElementById("myAudio"); 
        }
        document.getElementById("namesound").innerHTML = sname;
        }

        function playAudio() {
            pause.disabled = false;
            document.getElementById("pause").innerHTML = "Pause";
            iq=0;
            x.pause();
            check();
            i++;
            x.play(); 
            console.log(i);
        }
        let iq=0;
        function pauseAudio() {
            if(iq==0){
            x.pause();
            document.getElementById("pause").innerHTML = "Play";
            iq++;
            }
            else{
            x.play();
            document.getElementById("pause").innerHTML = "Pause";
            iq--;
            }
        }