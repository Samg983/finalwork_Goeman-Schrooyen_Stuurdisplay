//window.onload = function(){
//    alert('pagina geladen');
//}

window.addEventListener("load", eventWindowLoaded, false);

var backRightCounterOld = 0;
var upRechtsCounterOld = 0;
var downRechtsCounterOld = 0;
var btnRechtsCounterOld = 0;

var backLeftCounterOld = 0;
var upLinksCounterOld = 0;
var downLinksCounterOld = 0;
var btnLinksCounterOld = 0;


function counterEquals(result){
    btnRechtsCounterOld = result.btnRechtsCounter;
    upRechtsCounterOld = result.upRechtsCounter;
    downRechtsCounterOld = result.downRechtsCounter;
    backRightCounterOld = result.backRightCounter;
    
    btnLinksCounterOld = result.btnLinksCounter;
    upLinksCounterOld = result.upLinksCounter;
    downLinksCounterOld = result.downLinksCounter;
    backLeftCounterOld = result.backLeftCounter;
}

/*
function ajaxTimer(){
    $.ajax({url: "http://192.168.0.179:8080/Rapport/getRapport", success: function(result){
        console.log(result);
        
        if(result.backLeftCounter > backLeftCounterOld){
            if(!leftIsOpen){
                goToMenuLeft();
            } else{
                closeMenuLeft();
            }
           backLeftCounterOld = result.backLeftCounter;
        }
        
        if(result.upRechtsCounter > upRechtsCounterOld){
            if(rightIsOpen && !verbruikOpen && !bellenOpen && !radioOpen){
                rightMenuUp();
                upRechtsCounterOld = result.upRechtsCounter;
            }
            if(rightIsOpen && bellenOpen){
                bellenSelectionPos = 0;
                openBellen();
                upRechtsCounterOld = result.upRechtsCounter;
            }
            if(rightIsOpen && radioOpen){
            switch (radioSelectionPos){
                case 0:
                    radioSelectionPos = 0;
                    openRadio();
                    upRechtsCounterOld = result.upRechtsCounter;
                    break;
                case 1:
                    radioSelectionPos = 0;
                    openRadio();
                    upRechtsCounterOld = result.upRechtsCounter;
                    break;
                case 2:
                    radioSelectionPos = 1;
                    openRadio();
                    upRechtsCounterOld = result.upRechtsCounter;
                    break;
                }
            }
        }
        
        if(result.downRechtsCounter > downRechtsCounterOld){
            if(rightIsOpen && !verbruikOpen && !bellenOpen && !radioOpen){
                rightMenuDown();
                downRechtsCounterOld = result.downRechtsCounter;
            }
            if(rightIsOpen && bellenOpen){
                bellenSelectionPos = 1;
                openBellen();
                downRechtsCounterOld = result.downRechtsCounter;
            }
            if(rightIsOpen && radioOpen){
            switch (radioSelectionPos){
                case 0:
                    radioSelectionPos = 1;
                    openRadio();
                    downRechtsCounterOld = result.downRechtsCounter;
                    break;
                case 1:
                    radioSelectionPos = 2;
                    openRadio();
                    downRechtsCounterOld = result.downRechtsCounter;
                    break;
                case 2:
                    radioSelectionPos = 2;
                    openRadio();
                    downRechtsCounterOld = result.downRechtsCounter;
                    break;
                }
            }
        }
        
        if(result.btnRechtsCounter > btnRechtsCounterOld && !rightIsOpen){
                goToMenuRight();
                btnRechtsCounterOld = result.btnRechtsCounter;
        }
        
        if(result.btnRechtsCounter > btnRechtsCounterOld && rightIsOpen && rightSelectionPos === 2 && !verbruikOpen){
            openVerbruik();
            btnRechtsCounterOld = result.btnRechtsCounter;
        }
        if(result.btnRechtsCounter > btnRechtsCounterOld && rightIsOpen && bellenOpen && isAanHetBellen){
            belPersoon();
            btnRechtsCounterOld = result.btnRechtsCounter;
        }
        
        if(result.btnRechtsCounter > btnRechtsCounterOld && rightIsOpen && rightSelectionPos === 1 && !bellenOpen){
            openBellen();
            isAanHetBellen = true;
            btnRechtsCounterOld = result.btnRechtsCounter;
        }
        
        if(result.btnRechtsCounter > btnRechtsCounterOld && rightIsOpen && rightSelectionPos === 0 && !radioOpen){
            openRadio();
            btnRechtsCounterOld = result.btnRechtsCounter;
        }
        
        if(result.backRightCounter > backRightCounterOld && rightIsOpen && !bellenOpen && !radioOpen && !verbruikOpen){
                closeMenuRight();
           backRightCounterOld = result.backRightCounter;
        }
        
        if(result.backRightCounter > backRightCounterOld && rightIsOpen && rightSelectionPos === 2 && verbruikOpen){
            sluitVerbruik();
            backRightCounterOld = result.backRightCounter;
        }
        if(result.backRightCounter > backRightCounterOld && rightSelectionPos === 1 && bellenOpen){
            sluitBellen();
            backRightCounterOld = result.backRightCounter;
        }
        if(result.backRightCounter > backRightCounterOld && rightIsOpen && rightSelectionPos === 0 && radioOpen){
            sluitRadio();
            backRightCounterOld = result.backRightCounter;
        }
    }});
}
*/

function ajaxTimer(){
    $.ajax({url: "http://192.168.0.179:8080/Rapport/getRapport", success: function(result){
        console.log(result);
        
        
        if(result.backLeftCounter > backLeftCounterOld && leftIsOpen){
            closeMenuLeft();
            counterEquals(result);
        }
            
        if(result.btnLinksCounter > btnLinksCounterOld && leftIsOpen){
            switch(leftSelectionPos){
                case 0:
                    leftMode = 0;
                    break;
                case 1:
                    leftMode = 1;
                    break;
                case 2:
                    leftMode = 2;
                    break;
            }
            closeMenuLeft();
            counterEquals(result);
       }
        
        if(result.btnLinksCounter > btnLinksCounterOld && !leftIsOpen){
            goToMenuLeft();
            counterEquals(result);
        }
    
       if(result.upLinksCounter > upLinksCounterOld && leftIsOpen){
           leftMenuUp();
           counterEquals(result);
       }
        
        if(result.downLinksCounter > downLinksCounterOld && leftIsOpen){
            leftMenuDown();
            counterEquals(result);
       }
        
        if(result.upRechtsCounter > upRechtsCounterOld){
            if(rightIsOpen && !verbruikOpen && !bellenOpen && !radioOpen){
                rightMenuUp();
                counterEquals(result);
            }
            if(rightIsOpen && bellenOpen){
                bellenSelectionPos = 0;
                openBellen();
                counterEquals(result);
            }
            if(rightIsOpen && radioOpen){
            switch (radioSelectionPos){
                case 0:
                    radioSelectionPos = 0;
                    openRadio();
                    counterEquals(result);
                    break;
                case 1:
                    radioSelectionPos = 0;
                    openRadio();
                    counterEquals(result);
                    break;
                case 2:
                    radioSelectionPos = 1;
                    openRadio();
                    counterEquals(result);
                    break;
                }
            }
        }
        
        if(result.downRechtsCounter > downRechtsCounterOld){
            if(rightIsOpen && !verbruikOpen && !bellenOpen && !radioOpen){
                rightMenuDown();
                counterEquals(result);
            }
            if(rightIsOpen && bellenOpen){
                bellenSelectionPos = 1;
                openBellen();
                counterEquals(result);
            }
            if(rightIsOpen && radioOpen){
            switch (radioSelectionPos){
                case 0:
                    radioSelectionPos = 1;
                    openRadio();
                    counterEquals(result);
                    break;
                case 1:
                    radioSelectionPos = 2;
                    openRadio();
                    counterEquals(result);
                    break;
                case 2:
                    radioSelectionPos = 2;
                    openRadio();
                    counterEquals(result);
                    break;
                }
            }
        }
        
        if(result.btnRechtsCounter > btnRechtsCounterOld && !rightIsOpen){
                goToMenuRight();
                counterEquals(result);
        }
        
        if(result.btnRechtsCounter > btnRechtsCounterOld && rightIsOpen && rightSelectionPos === 2 && !verbruikOpen){
            openVerbruik();
            counterEquals(result);
        }
        if(result.btnRechtsCounter > btnRechtsCounterOld && rightIsOpen && bellenOpen && isAanHetBellen){
            belPersoon();
            counterEquals(result);
        }
        
        if(result.btnRechtsCounter > btnRechtsCounterOld && rightIsOpen && rightSelectionPos === 1 && !bellenOpen){
            openBellen();
            isAanHetBellen = true;
            counterEquals(result);
        }
        
        if(result.btnRechtsCounter > btnRechtsCounterOld && rightIsOpen && rightSelectionPos === 0 && !radioOpen){
            openRadio();
            counterEquals(result);
        }
        if(result.btnRechtsCounter > btnRechtsCounterOld && rightIsOpen && rightSelectionPos === 0 && radioOpen){
            sluitRadio();
            counterEquals(result);
        }
        
        if(result.backRightCounter > backRightCounterOld && rightIsOpen && !bellenOpen && !radioOpen && !verbruikOpen){
            closeMenuRight();
            counterEquals(result);
        }
        
        if(result.backRightCounter > backRightCounterOld && rightIsOpen && rightSelectionPos === 2 && verbruikOpen){
            sluitVerbruik();
            counterEquals(result);
        }
        if(result.backRightCounter > backRightCounterOld && rightSelectionPos === 1 && bellenOpen){
            sluitBellen();
            counterEquals(result);
        }
        if(result.backRightCounter > backRightCounterOld && rightIsOpen && rightSelectionPos === 0 && radioOpen){
            sluitRadio();
            counterEquals(result);
        }
        
    }});
}

var map;

var leftGaugeDiam = 1;
var leftGaugePosX = 0;
var leftGaugePosY = 0;
var leftGaugeSelectionLength = 0;
var leftIsOpen = false;
var leftSelectionPos = 1;
var leftMode = 0;

var rightGaugeDiam = 1;
var rightGaugePosX = 0;
var rightGaugePosY = 0;
var rightGaugeSelectionLength = 0;
var rightIsOpen = false;
var rightSelectionPos = 1;

var verbruikOpen = false;
var bellenOpen = false;
var radioOpen = false;

var bellenSelectionPos = 0;
var isAanHetBellen = false;

var radioSelectionPos = 0;


var oil = new Image;
    oil.src = "/images/1x/Asset 2.png";
    
var fuel = new Image;
    fuel.src = "/images/1x/Asset 1.png";

var call = new Image;
    call.src = "/images/1x/Asset 3.png";

var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

function eventWindowLoaded(){ //opstarten
    
    initMap();
    
    initCanvas();
    
    window.addEventListener('resize', resizeCanvas, false);
    
    window.addEventListener('keyup', function (e) {
       
        if(e.keyCode === 32 && !leftIsOpen){
           goToMenuLeft();
       }
        if(e.keyCode === 32 && leftIsOpen){
           closeMenuLeft();
       }
        
        if(e.keyCode === 68 && leftIsOpen){
            switch(leftSelectionPos){
                case 0:
                    leftMode = 0;
                    break;
                case 1:
                    leftMode = 1;
                    break;
                case 2:
                    leftMode = 2;
                    break;
            }
           closeMenuLeft();
       }
    
       if(e.keyCode === 90 && leftIsOpen){
            console.log(e.keyCode);
           leftMenuUp();
       }
        
        if(e.keyCode === 83 && leftIsOpen){
            console.log(e.keyCode);
           leftMenuDown();
       }
        
        
        
        if(e.keyCode === 13 && !rightIsOpen){
            goToMenuRight();
        }
        if(e.keyCode === 13 && rightIsOpen){
            closeMenuRight();
        }
        if(e.keyCode === 38 && rightIsOpen && !verbruikOpen && !bellenOpen && !radioOpen){
            rightMenuUp();
        }
        if(e.keyCode === 40 && rightIsOpen && !verbruikOpen && !bellenOpen && !radioOpen){
            rightMenuDown();
        }
        
        
        if(e.keyCode === 37 && rightIsOpen && rightSelectionPos === 2 && !verbruikOpen){
            openVerbruik();
        }
        if(e.keyCode === 39 && rightIsOpen && rightSelectionPos === 2 && verbruikOpen){
            sluitVerbruik();
        }
        
        if(e.keyCode === 37 && rightIsOpen && bellenOpen && isAanHetBellen){
            belPersoon();
        }
        
        if(e.keyCode === 37 && rightIsOpen && rightSelectionPos === 1 && !bellenOpen){
            openBellen();
            isAanHetBellen = true;
        }
        if(e.keyCode === 39 && rightIsOpen && rightSelectionPos === 1 && bellenOpen){
            sluitBellen();
        }
        if(e.keyCode === 38 && rightIsOpen && bellenOpen){
            bellenSelectionPos = 0;
            openBellen();
        }
        if(e.keyCode === 40 && rightIsOpen && bellenOpen){
            bellenSelectionPos = 1;
            openBellen();
        }
        
        
        
        
        
        if(e.keyCode === 37 && rightIsOpen && rightSelectionPos === 0 && !radioOpen){
            openRadio();
        }
        if(e.keyCode === 39 && rightIsOpen && rightSelectionPos === 0 && radioOpen){
            sluitRadio();
        }
        if(e.keyCode === 38 && rightIsOpen && radioOpen){
            switch (radioSelectionPos){
                case 0:
                    radioSelectionPos = 0;
                    openRadio();
                    break;
                case 1:
                    radioSelectionPos = 0;
                    openRadio();
                    break;
                case 2:
                    radioSelectionPos = 1;
                    openRadio();
                    break;
            }
        }
        if(e.keyCode === 40 && rightIsOpen && radioOpen){
            switch (radioSelectionPos){
                case 0:
                    radioSelectionPos = 1;
                    openRadio();
                    break;
                case 1:
                    radioSelectionPos = 2;
                    openRadio();
                    break;
                case 2:
                    radioSelectionPos = 2;
                    openRadio();
                    break;
            }
        }
        
   });
    
    gaugesInit();
    setInterval(ajaxTimer,200);
}
      

function initCanvas(){ //Canvas opstarten
    var gaugeLeft = document.getElementById('gaugeLeft');
    var gaugeRight = document.getElementById('gaugeRight');
    if(!gaugeLeft || !isCanvasSupported){
        return;
    }
    if(!gaugeRight || !isCanvasSupported){
        return;
    }
        
    console.log('test00');
    
    var date = new Date();

    
    document.getElementById("timetext").innerHTML = date.toDateString();

        
}

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 51.0543, lng: 3.7174},
          zoom: 17,
            disableDefaultUI: true,
            scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
            styles: [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4a3974"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#333333"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#333333"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#333333"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#333333"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#333333"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#333333"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#8c8c8c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
        });
      }

function gaugesInit(){
     
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    drawLeftGPS(ctxLeft);

    drawRightGPS(ctxRight);
    
}

function goToMenuLeft(){
    
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    leftSelectionPos = 1;
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    switch(leftMode){
        case 0:
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "white";
            ctxLeft.lineWidth = 3*leftGaugeDiam;
            ctxLeft.shadowColor = "white";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "white";
            ctxLeft.lineWidth = 8*leftGaugeDiam;
            ctxLeft.shadowColor = "white";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            break;
        case 1:
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "#87ff65";
            ctxLeft.lineWidth = 3*leftGaugeDiam;
            ctxLeft.shadowColor = "#87ff65";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "#87ff65";
            ctxLeft.lineWidth = 8*leftGaugeDiam;
            ctxLeft.shadowColor = "#87ff65";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            break;
        case 2:
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "#ee6055";
            ctxLeft.lineWidth = 3*leftGaugeDiam;
            ctxLeft.shadowColor = "#ee6055";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "#ee6055";
            ctxLeft.lineWidth = 8*leftGaugeDiam;
            ctxLeft.shadowColor = "#ee6055";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            break;
    }
    
    
    ctxLeft.beginPath();
    ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam, 2*Math.PI*0.26 , 2*Math.PI*0.49);
    ctxLeft.strokeStyle = "#E9B872";
    ctxLeft.lineWidth = 3*leftGaugeDiam;
    ctxLeft.shadowColor = "#E9B872";
    ctxLeft.shadowOffsetX = 0;
    ctxLeft.shadowOffsetY = 0;
    ctxLeft.shadowBlur = 10;
    ctxLeft.stroke();
    ctxLeft.closePath();
    
    ctxLeft.beginPath();
    ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam, 2*Math.PI*0.26 , 2*Math.PI*0.37);
    ctxLeft.strokeStyle = "#E9B872";
    ctxLeft.lineWidth = 5*leftGaugeDiam;
    ctxLeft.shadowColor = "#E9B872";
    ctxLeft.shadowOffsetX = 0;
    ctxLeft.shadowOffsetY = 0;
    ctxLeft.shadowBlur = 10;
    ctxLeft.stroke();
    ctxLeft.closePath();
    
    ctxLeft.beginPath();
    ctxLeft.arc(190,210,160,2*Math.PI * 0.36,2*Math.PI * (0.36 + leftGaugeSelectionLength));
    ctxLeft.strokeStyle = "white";
    ctxLeft.lineWidth = 3;
    ctxLeft.shadowColor = "white";
    ctxLeft.shadowOffsetX = 0;
    ctxLeft.shadowOffsetY = 0;
    ctxLeft.shadowBlur = 10;
    ctxLeft.stroke();
    ctxLeft.closePath();
    

    drawRightGPS(ctxRight);
    
    
    
    if(leftGaugeDiam > 0.3 && leftGaugePosX < 110 && leftGaugePosY < 170 && leftGaugeSelectionLength < 0.28){
        leftGaugeDiam = leftGaugeDiam - 0.05;
        leftGaugePosX = leftGaugePosX + 8;
        leftGaugePosY = leftGaugePosY + 11;
        leftGaugeSelectionLength = leftGaugeSelectionLength + 0.02;
        requestAnimationFrame(goToMenuLeft);
        
    }
    
    if(leftGaugeDiam <= 0.3){
        ctxLeft.beginPath();
        ctxLeft.shadowColor = "transparent";
        ctxLeft.font = "30px Open Sans"
        ctxLeft.textAlign = "center";
        ctxLeft.fillStyle = "white";
        ctxLeft.fillText("D",303,375);
        ctxLeft.closePath();
        leftIsOpen = true;
    }
    
    if(leftGaugeSelectionLength > 0.14 && leftGaugeSelectionLength < 0.28){
        ctxLeft.beginPath();
        ctxLeft.arc(190,210,160,2*Math.PI * 0.47,2*Math.PI * (0.47 + leftGaugeSelectionLength / 4));
        ctxLeft.strokeStyle = "white";
        ctxLeft.lineWidth = 8;
        ctxLeft.shadowColor = "white";
        ctxLeft.shadowOffsetX = 0;
        ctxLeft.shadowOffsetY = 0;
        ctxLeft.shadowBlur = 10;
        ctxLeft.stroke();
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.shadowColor = "transparent";
        ctxLeft.fillStyle = "rgba(255,255,255,0.30)"
        ctxLeft.fillRect(30,175,0 + (leftGaugeSelectionLength-0.14) * 1850,60)
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.shadowColor = "transparent";
        ctxLeft.font = "30px Open Sans"
        ctxLeft.textAlign = "center";
        ctxLeft.fillStyle = "white";
        ctxLeft.fillText("Eco Modus",160,215);
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.font = "25px Open Sans"
        ctxLeft.textAlign = "center";
        ctxLeft.fillStyle = "rgba(255,255,255,0.30)";
        ctxLeft.fillText("GPS Modus",160,145);
        ctxLeft.fillText("Sport Modus",160,285);
        ctxLeft.closePath();
    }
    
}

function closeMenuLeft(){
    console.log("menuleftclose");
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    switch(leftMode){
        case 0:
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "white";
            ctxLeft.lineWidth = 3*leftGaugeDiam;
            ctxLeft.shadowColor = "white";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "white";
            ctxLeft.lineWidth = 8*leftGaugeDiam;
            ctxLeft.shadowColor = "white";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            break;
        case 1:
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "#87ff65";
            ctxLeft.lineWidth = 3*leftGaugeDiam;
            ctxLeft.shadowColor = "#87ff65";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "#87ff65";
            ctxLeft.lineWidth = 8*leftGaugeDiam;
            ctxLeft.shadowColor = "#87ff65";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            break;
        case 2:
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "#ee6055";
            ctxLeft.lineWidth = 3*leftGaugeDiam;
            ctxLeft.shadowColor = "#ee6055";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "#ee6055";
            ctxLeft.lineWidth = 8*leftGaugeDiam;
            ctxLeft.shadowColor = "#ee6055";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            break;
    }
    
    ctxLeft.beginPath();
    ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam, 2*Math.PI*0.26 , 2*Math.PI*0.49);
    ctxLeft.strokeStyle = "#E9B872";
    ctxLeft.lineWidth = 3*leftGaugeDiam;
    ctxLeft.shadowColor = "#E9B872";
    ctxLeft.shadowOffsetX = 0;
    ctxLeft.shadowOffsetY = 0;
    ctxLeft.shadowBlur = 10;
    ctxLeft.stroke();
    ctxLeft.closePath();
    
    ctxLeft.beginPath();
    ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam, 2*Math.PI*0.26 , 2*Math.PI*0.37);
    ctxLeft.strokeStyle = "#E9B872";
    ctxLeft.lineWidth = 5*leftGaugeDiam;
    ctxLeft.shadowColor = "#E9B872";
    ctxLeft.shadowOffsetX = 0;
    ctxLeft.shadowOffsetY = 0;
    ctxLeft.shadowBlur = 10;
    ctxLeft.stroke();
    ctxLeft.closePath();
    
    ctxLeft.beginPath();
    ctxLeft.arc(190,210,160,2*Math.PI * 0.36,2*Math.PI * (0.36 + leftGaugeSelectionLength));
    ctxLeft.strokeStyle = "white";
    ctxLeft.lineWidth = 3;
    ctxLeft.shadowColor = "white";
    ctxLeft.shadowOffsetX = 0;
    ctxLeft.shadowOffsetY = 0;
    ctxLeft.shadowBlur = 10;
    ctxLeft.stroke();
    ctxLeft.closePath();
    
    
    drawRightGPS(ctxRight);
    
    
    
    if(leftGaugeDiam < 1 && leftGaugePosX > 0 && leftGaugePosY > 0 && leftGaugeSelectionLength > 0){
        leftGaugeDiam = leftGaugeDiam + 0.05;
        leftGaugePosX = leftGaugePosX - 8;
        leftGaugePosY = leftGaugePosY - 11;
        leftGaugeSelectionLength = leftGaugeSelectionLength - 0.02;
        requestAnimationFrame(closeMenuLeft);
        
    }
    
    if(leftGaugeDiam >= 1){
        ctxLeft.beginPath();
    ctxLeft.shadowColor = "transparent";
    ctxLeft.font = "100px Open Sans"
    ctxLeft.textAlign = "center";
    ctxLeft.fillStyle = "white";
    ctxLeft.fillText("D",190,210);
    ctxLeft.font = "13px Open Sans"
    ctxLeft.textAlign = "center";
    ctxLeft.fillText("P    R    N",190,290);
    
    ctxLeft.fillText("0",45,210);
    ctxLeft.fillText("1",78,125);
    ctxLeft.fillText("2",170,75);
    ctxLeft.fillText("3",265,95);
    ctxLeft.fillText("4",320,160);
    ctxLeft.fillText("5",330,240);
    ctxLeft.fillText("6",290,310);
    ctxLeft.fillText("7",210,355);
    
    
    ctxLeft.drawImage(oil, 140,380,30,26);
    
    
    ctxLeft.closePath();
        leftIsOpen = false;
    }
    
    
}

function leftMenuUp(){
    console.log("menuUp");
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    switch(leftMode){
        case 0:
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "white";
            ctxLeft.lineWidth = 3*leftGaugeDiam;
            ctxLeft.shadowColor = "white";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "white";
            ctxLeft.lineWidth = 8*leftGaugeDiam;
            ctxLeft.shadowColor = "white";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            break;
        case 1:
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "#87ff65";
            ctxLeft.lineWidth = 3*leftGaugeDiam;
            ctxLeft.shadowColor = "#87ff65";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "#87ff65";
            ctxLeft.lineWidth = 8*leftGaugeDiam;
            ctxLeft.shadowColor = "#87ff65";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            break;
        case 2:
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "#ee6055";
            ctxLeft.lineWidth = 3*leftGaugeDiam;
            ctxLeft.shadowColor = "#ee6055";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "#ee6055";
            ctxLeft.lineWidth = 8*leftGaugeDiam;
            ctxLeft.shadowColor = "#ee6055";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            break;
    }
    
    ctxLeft.beginPath();
    ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam, 2*Math.PI*0.26 , 2*Math.PI*0.49);
    ctxLeft.strokeStyle = "#E9B872";
    ctxLeft.lineWidth = 3*leftGaugeDiam;
    ctxLeft.shadowColor = "#E9B872";
    ctxLeft.shadowOffsetX = 0;
    ctxLeft.shadowOffsetY = 0;
    ctxLeft.shadowBlur = 10;
    ctxLeft.stroke();
    ctxLeft.closePath();
    
    ctxLeft.beginPath();
    ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam, 2*Math.PI*0.26 , 2*Math.PI*0.37);
    ctxLeft.strokeStyle = "#E9B872";
    ctxLeft.lineWidth = 5*leftGaugeDiam;
    ctxLeft.shadowColor = "#E9B872";
    ctxLeft.shadowOffsetX = 0;
    ctxLeft.shadowOffsetY = 0;
    ctxLeft.shadowBlur = 10;
    ctxLeft.stroke();
    ctxLeft.closePath();
    
    ctxLeft.beginPath();
    ctxLeft.arc(190,210,160,2*Math.PI * 0.36,2*Math.PI * (0.36 + leftGaugeSelectionLength));
    ctxLeft.strokeStyle = "white";
    ctxLeft.lineWidth = 3;
    ctxLeft.shadowColor = "white";
    ctxLeft.shadowOffsetX = 0;
    ctxLeft.shadowOffsetY = 0;
    ctxLeft.shadowBlur = 10;
    ctxLeft.stroke();
    ctxLeft.closePath();
    
    
    drawRightGPS(ctxRight);
    
        ctxLeft.beginPath();
        ctxLeft.shadowColor = "transparent";
        ctxLeft.font = "30px Open Sans"
        ctxLeft.textAlign = "center";
        ctxLeft.fillStyle = "white";
        ctxLeft.fillText("D",303,375);
        ctxLeft.closePath();
    
    if(leftSelectionPos == 0 || leftSelectionPos == 1){
        ctxLeft.beginPath();
        ctxLeft.arc(190,210,160,2*Math.PI * 0.545,2*Math.PI * (0.545 + leftGaugeSelectionLength / 4));
        ctxLeft.strokeStyle = "white";
        ctxLeft.lineWidth = 8;
        ctxLeft.shadowColor = "white";
        ctxLeft.shadowOffsetX = 0;
        ctxLeft.shadowOffsetY = 0;
        ctxLeft.shadowBlur = 10;
        ctxLeft.stroke();
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.shadowColor = "transparent";
        ctxLeft.fillStyle = "rgba(255,255,255,0.30)"
        ctxLeft.moveTo(63, 105);
        ctxLeft.lineTo(290, 105);
        ctxLeft.lineTo(290, 165);
        ctxLeft.lineTo(33, 165);
        ctxLeft.lineTo(63, 105);
        ctxLeft.fill();
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.shadowColor = "transparent";
        ctxLeft.font = "30px Open Sans"
        ctxLeft.textAlign = "center";
        ctxLeft.fillStyle = "white";
        ctxLeft.fillText("GPS Modus",160,145);
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.font = "25px Open Sans"
        ctxLeft.textAlign = "center";
        ctxLeft.fillStyle = "rgba(255,255,255,0.30)";
        ctxLeft.fillText("Eco Modus",160,215);
        ctxLeft.fillText("Sport Modus",160,285);
        ctxLeft.closePath();
        
        leftSelectionPos = 0;
    } else if (leftSelectionPos == 2){
        ctxLeft.beginPath();
        ctxLeft.arc(190,210,160,2*Math.PI * 0.47,2*Math.PI * (0.47 + leftGaugeSelectionLength / 4));
        ctxLeft.strokeStyle = "white";
        ctxLeft.lineWidth = 8;
        ctxLeft.shadowColor = "white";
        ctxLeft.shadowOffsetX = 0;
        ctxLeft.shadowOffsetY = 0;
        ctxLeft.shadowBlur = 10;
        ctxLeft.stroke();
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.shadowColor = "transparent";
        ctxLeft.fillStyle = "rgba(255,255,255,0.30)"
        ctxLeft.fillRect(30,175,0 + (leftGaugeSelectionLength-0.14) * 1850,60)
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.shadowColor = "transparent";
        ctxLeft.font = "30px Open Sans"
        ctxLeft.textAlign = "center";
        ctxLeft.fillStyle = "white";
        ctxLeft.fillText("Eco Modus",160,215);
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.font = "25px Open Sans"
        ctxLeft.textAlign = "center";
        ctxLeft.fillStyle = "rgba(255,255,255,0.30)";
        ctxLeft.fillText("GPS Modus",160,145);
        ctxLeft.fillText("Sport Modus",160,285);
        ctxLeft.closePath();
        leftSelectionPos = 1;
    }
    
    
    
}


function leftMenuDown(){
    console.log("menuDown");
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    switch(leftMode){
        case 0:
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "white";
            ctxLeft.lineWidth = 3*leftGaugeDiam;
            ctxLeft.shadowColor = "white";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "white";
            ctxLeft.lineWidth = 8*leftGaugeDiam;
            ctxLeft.shadowColor = "white";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            break;
        case 1:
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "#87ff65";
            ctxLeft.lineWidth = 3*leftGaugeDiam;
            ctxLeft.shadowColor = "#87ff65";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "#87ff65";
            ctxLeft.lineWidth = 8*leftGaugeDiam;
            ctxLeft.shadowColor = "#87ff65";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            break;
        case 2:
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "#ee6055";
            ctxLeft.lineWidth = 3*leftGaugeDiam;
            ctxLeft.shadowColor = "#ee6055";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "#ee6055";
            ctxLeft.lineWidth = 8*leftGaugeDiam;
            ctxLeft.shadowColor = "#ee6055";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            break;
    }
    
    ctxLeft.beginPath();
    ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam, 2*Math.PI*0.26 , 2*Math.PI*0.49);
    ctxLeft.strokeStyle = "#E9B872";
    ctxLeft.lineWidth = 3*leftGaugeDiam;
    ctxLeft.shadowColor = "#E9B872";
    ctxLeft.shadowOffsetX = 0;
    ctxLeft.shadowOffsetY = 0;
    ctxLeft.shadowBlur = 10;
    ctxLeft.stroke();
    ctxLeft.closePath();
    
    ctxLeft.beginPath();
    ctxLeft.arc(190+leftGaugePosX,210+leftGaugePosY,160*leftGaugeDiam, 2*Math.PI*0.26 , 2*Math.PI*0.37);
    ctxLeft.strokeStyle = "#E9B872";
    ctxLeft.lineWidth = 5*leftGaugeDiam;
    ctxLeft.shadowColor = "#E9B872";
    ctxLeft.shadowOffsetX = 0;
    ctxLeft.shadowOffsetY = 0;
    ctxLeft.shadowBlur = 10;
    ctxLeft.stroke();
    ctxLeft.closePath();
    
    ctxLeft.beginPath();
    ctxLeft.arc(190,210,160,2*Math.PI * 0.36,2*Math.PI * (0.36 + leftGaugeSelectionLength));
    ctxLeft.strokeStyle = "white";
    ctxLeft.lineWidth = 3;
    ctxLeft.shadowColor = "white";
    ctxLeft.shadowOffsetX = 0;
    ctxLeft.shadowOffsetY = 0;
    ctxLeft.shadowBlur = 10;
    ctxLeft.stroke();
    ctxLeft.closePath();
    
    
    drawRightGPS(ctxRight);
    
        ctxLeft.beginPath();
        ctxLeft.shadowColor = "transparent";
        ctxLeft.font = "30px Open Sans"
        ctxLeft.textAlign = "center";
        ctxLeft.fillStyle = "white";
        ctxLeft.fillText("D",303,375);
        ctxLeft.closePath();
    
    if(leftSelectionPos == 0){
        console.log("down");
        ctxLeft.beginPath();
        ctxLeft.arc(190,210,160,2*Math.PI * 0.47,2*Math.PI * (0.47 + leftGaugeSelectionLength / 4));
        ctxLeft.strokeStyle = "white";
        ctxLeft.lineWidth = 8;
        ctxLeft.shadowColor = "white";
        ctxLeft.shadowOffsetX = 0;
        ctxLeft.shadowOffsetY = 0;
        ctxLeft.shadowBlur = 10;
        ctxLeft.stroke();
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.shadowColor = "transparent";
        ctxLeft.fillStyle = "rgba(255,255,255,0.30)"
        ctxLeft.fillRect(30,175,0 + (leftGaugeSelectionLength-0.14) * 1850,60)
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.shadowColor = "transparent";
        ctxLeft.font = "30px Open Sans"
        ctxLeft.textAlign = "center";
        ctxLeft.fillStyle = "white";
        ctxLeft.fillText("Eco Modus",160,215);
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.font = "25px Open Sans"
        ctxLeft.textAlign = "center";
        ctxLeft.fillStyle = "rgba(255,255,255,0.30)";
        ctxLeft.fillText("GPS Modus",160,145);
        ctxLeft.fillText("Sport Modus",160,285);
        ctxLeft.closePath();
        
        leftSelectionPos = 1;
    } else if(leftSelectionPos == 1 || leftSelectionPos == 2){
        ctxLeft.beginPath();
        ctxLeft.arc(190,210,160,2*Math.PI * 0.395,2*Math.PI * (0.395 + leftGaugeSelectionLength / 4));
        ctxLeft.strokeStyle = "white";
        ctxLeft.lineWidth = 8;
        ctxLeft.shadowColor = "white";
        ctxLeft.shadowOffsetX = 0;
        ctxLeft.shadowOffsetY = 0;
        ctxLeft.shadowBlur = 10;
        ctxLeft.stroke();
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.shadowColor = "transparent";
        ctxLeft.fillStyle = "rgba(255,255,255,0.30)"
        ctxLeft.moveTo(33, 245);
        ctxLeft.lineTo(290, 245);
        ctxLeft.lineTo(290, 305);
        ctxLeft.lineTo(63, 305);
        ctxLeft.lineTo(33, 245);
        ctxLeft.fill();
        ctxLeft.closePath()
        
        ctxLeft.beginPath();
        ctxLeft.shadowColor = "transparent";
        ctxLeft.font = "30px Open Sans"
        ctxLeft.textAlign = "center";
        ctxLeft.fillStyle = "white";
        ctxLeft.fillText("Sport Modus",160,285);
        ctxLeft.closePath();
        
        ctxLeft.beginPath();
        ctxLeft.font = "25px Open Sans"
        ctxLeft.textAlign = "center";
        ctxLeft.fillStyle = "rgba(255,255,255,0.30)";
        ctxLeft.fillText("Eco Modus",160,215);
        ctxLeft.fillText("GPS Modus",160,145);
        ctxLeft.closePath();
        
        leftSelectionPos = 2;
    } 
    
    
}

function goToMenuRight(){
    console.log("menuright");
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    drawLeftGPS(ctxLeft);

    
    drawRightSmall(ctxRight);
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160,2*Math.PI * 0.86,2*Math.PI * (0.86 + rightGaugeSelectionLength));
    ctxRight.strokeStyle = "white";
    ctxRight.lineWidth = 3;
    ctxRight.shadowColor = "white";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    
    
    if(rightGaugeDiam > 0.3 && rightGaugePosX < 110 && rightGaugePosY < 170 && rightGaugeSelectionLength < 0.28){
        rightGaugeDiam = rightGaugeDiam - 0.05;
        rightGaugePosX = rightGaugePosX + 8;
        rightGaugePosY = rightGaugePosY + 11;
        rightGaugeSelectionLength = rightGaugeSelectionLength + 0.02;
        requestAnimationFrame(goToMenuRight);
        
    }
    
    if(rightGaugeDiam <= 0.3){
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "40px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("86",80,375);
        ctxRight.closePath();
        rightIsOpen = true;
    }
    
    if(rightGaugeSelectionLength > 0.14 && rightGaugeSelectionLength < 0.28){
        ctxRight.beginPath();
        ctxRight.arc(190,210,160,2*Math.PI * 0.96,2*Math.PI * (0.96 + rightGaugeSelectionLength / 4));
        ctxRight.strokeStyle = "white";
        ctxRight.lineWidth = 8;
        ctxRight.shadowColor = "white";
        ctxRight.shadowOffsetX = 0;
        ctxRight.shadowOffsetY = 0;
        ctxRight.shadowBlur = 10;
        ctxRight.stroke();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)"
        ctxRight.fillRect(350,175,0 - (rightGaugeSelectionLength-0.14) * 1850,60)
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "30px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("Bellen",210,215);
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.font = "25px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)";
        ctxRight.fillText("Radio",210,145);
        ctxRight.fillText("Verbruik",210,285);
        ctxRight.closePath();
    }
    
}

function closeMenuRight(){
    console.log("menuleftclose");
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    drawLeftGPS(ctxLeft);

     drawRightSmall(ctxRight);
    
   
    ctxRight.beginPath();
    ctxRight.arc(190,210,160,2*Math.PI * 0.86,2*Math.PI * (0.86 + rightGaugeSelectionLength));
    ctxRight.strokeStyle = "white";
    ctxRight.lineWidth = 3;
    ctxRight.shadowColor = "white";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    
    if(rightGaugeDiam < 1 && rightGaugePosX > 0 && rightGaugePosY > 0 && rightGaugeSelectionLength > 0){
        rightGaugeDiam = rightGaugeDiam + 0.05;
        rightGaugePosX = rightGaugePosX - 8;
        rightGaugePosY = rightGaugePosY - 11;
        rightGaugeSelectionLength = rightGaugeSelectionLength - 0.02;
        requestAnimationFrame(closeMenuRight);
        
    }
    
    if(rightGaugeDiam >= 1){
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "100px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("86",190,210);
        ctxRight.font = "13px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillText("km/h",190,290);

        ctxRight.fillText("0",185,355);
        ctxRight.fillText("20",120,335);
        ctxRight.fillText("40",75,295);
        ctxRight.fillText("60",50,245);
        ctxRight.fillText("80",50,185);
        ctxRight.fillText("100",70,135);
        ctxRight.fillText("120",110,90);
        ctxRight.fillText("140",170,70);
        ctxRight.fillText("160",237,75);
        ctxRight.fillText("180",290,110);
        ctxRight.fillText("200",320,160);


        ctxRight.drawImage(fuel,210,380,23,26);

        ctxRight.arc(50,370,25, 0 , 2*Math.PI);
        ctxRight.fillStyle = "white";
        ctxRight.strokeStyle = "red"
        ctxRight.lineWidth = 4;
        ctxRight.fill();
        ctxRight.stroke();
        ctxRight.font = "24px Open Sans"
        ctxRight.fillStyle = "black";
        ctxRight.fillText("90",50,379);
        ctxRight.closePath();
    
        rightIsOpen = false;
        isAanHetBellen = false;
        bellenOpen = false;
        verbruikOpen = false;
        radioOpen = false;
        rightSelectionPos = 1;
    }
    
    
}

function rightMenuUp(){
    console.log("menuUp");
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    drawLeftGPS(ctxLeft);

    drawRightSmall(ctxRight);
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160,2*Math.PI * 0.86,2*Math.PI * (0.86 + rightGaugeSelectionLength));
    ctxRight.strokeStyle = "white";
    ctxRight.lineWidth = 3;
    ctxRight.shadowColor = "white";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "40px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("86",80,375);
        ctxRight.closePath();
    
    
//    if(leftGaugeDiam > 0.3 && leftGaugePosX < 110 && leftGaugePosY < 130 && leftGaugeSelectionLength < 0.28){
//        leftGaugeDiam = leftGaugeDiam - 0.05;
//        leftGaugePosX = leftGaugePosX + 8;
//        leftGaugePosY = leftGaugePosY + 9;
//        leftGaugeSelectionLength = leftGaugeSelectionLength + 0.02;
//        requestAnimationFrame(goToMenuLeft);
//    }
    
    
    
    
    if(rightSelectionPos == 0 || rightSelectionPos == 1){
        ctxRight.beginPath();
        ctxRight.arc(190,210,160,2*Math.PI * 0.883,2*Math.PI * (0.883 + rightGaugeSelectionLength / 4));
        ctxRight.strokeStyle = "white";
        ctxRight.lineWidth = 8;
        ctxRight.shadowColor = "white";
        ctxRight.shadowOffsetX = 0;
        ctxRight.shadowOffsetY = 0;
        ctxRight.shadowBlur = 10;
        ctxRight.stroke();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)"
        ctxRight.moveTo(316, 105);
        ctxRight.lineTo(90, 105);
        ctxRight.lineTo(90, 165);
        ctxRight.lineTo(346, 165);
        ctxRight.lineTo(316, 105);
        ctxRight.fill();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "30px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("Radio",210,145);
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.font = "25px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)";
        ctxRight.fillText("Bellen",210,215);
        ctxRight.fillText("Verbruik",210,285);
        ctxRight.closePath();
        
        rightSelectionPos = 0;
    } else if (rightSelectionPos == 2){
        ctxRight.beginPath();
        ctxRight.arc(190,210,160,2*Math.PI * 0.96,2*Math.PI * (0.96 + rightGaugeSelectionLength / 4));
        ctxRight.strokeStyle = "white";
        ctxRight.lineWidth = 8;
        ctxRight.shadowColor = "white";
        ctxRight.shadowOffsetX = 0;
        ctxRight.shadowOffsetY = 0;
        ctxRight.shadowBlur = 10;
        ctxRight.stroke();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)"
        ctxRight.fillRect(350,175,0 - (rightGaugeSelectionLength-0.14) * 1850,60)
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "30px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("Bellen",210,215);
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.font = "25px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)";
        ctxRight.fillText("Radio",210,145);
        ctxRight.fillText("Verbruik",210,285);
        ctxRight.closePath();
        rightSelectionPos = 1;
    }
    
    
    
}


function rightMenuDown(){
    console.log("menuDown");
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    drawLeftGPS(ctxLeft);

    drawRightSmall(ctxRight);
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160,2*Math.PI * 0.86,2*Math.PI * (0.86 + rightGaugeSelectionLength));
    ctxRight.strokeStyle = "white";
    ctxRight.lineWidth = 3;
    ctxRight.shadowColor = "white";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "40px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("86",80,375);
        ctxRight.closePath();
    
    
    if(rightSelectionPos == 0){
        console.log("down");
        ctxRight.beginPath();
        ctxRight.arc(190,210,160,2*Math.PI * 0.96,2*Math.PI * (0.96 + rightGaugeSelectionLength / 4));
        ctxRight.strokeStyle = "white";
        ctxRight.lineWidth = 8;
        ctxRight.shadowColor = "white";
        ctxRight.shadowOffsetX = 0;
        ctxRight.shadowOffsetY = 0;
        ctxRight.shadowBlur = 10;
        ctxRight.stroke();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)"
        ctxRight.fillRect(350,175,0 - (rightGaugeSelectionLength-0.14) * 1850,60)
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "30px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("Bellen",210,215);
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.font = "25px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)";
        ctxRight.fillText("Radio",210,145);
        ctxRight.fillText("Verbruik",210,285);
        ctxRight.closePath();
        
        rightSelectionPos = 1;
    } else if(rightSelectionPos == 1 || rightSelectionPos == 2){
        ctxRight.beginPath();
        ctxRight.arc(190,210,160,2*Math.PI * 1.035,2*Math.PI * (1.035 + rightGaugeSelectionLength / 4));
        ctxRight.strokeStyle = "white";
        ctxRight.lineWidth = 8;
        ctxRight.shadowColor = "white";
        ctxRight.shadowOffsetX = 0;
        ctxRight.shadowOffsetY = 0;
        ctxRight.shadowBlur = 10;
        ctxRight.stroke();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)"
        ctxRight.moveTo(346, 245);
        ctxRight.lineTo(90, 245);
        ctxRight.lineTo(90, 305);
        ctxRight.lineTo(316, 305);
        ctxRight.lineTo(346, 245);
        ctxRight.fill();
        ctxRight.closePath()
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "30px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("Verbruik",210,285);
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.font = "25px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)";
        ctxRight.fillText("Bellen",210,215);
        ctxRight.fillText("Radio",210,145);
        ctxRight.closePath();
        
        rightSelectionPos = 2;
    } 
    
    
}

function openVerbruik(){
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    drawLeftGPS(ctxLeft);
    
   drawRightSmall(ctxRight);
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160,2*Math.PI * 0.86,2*Math.PI * (0.86 + rightGaugeSelectionLength));
    ctxRight.strokeStyle = "white";
    ctxRight.lineWidth = 3;
    ctxRight.shadowColor = "white";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.font = "40px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "white";
    ctxRight.fillText("86",80,375);
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.moveTo(347,180);
    ctxRight.lineTo(40,180);
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.font = "20px Open Sans";
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "white";
    ctxRight.fillText("Sinds laatste tankbeurt", 170, 100);
    ctxRight.font = "bold 16px Open Sans";
    ctxRight.fillText("Afstand       Totaal       Gemiddeld", 170, 130);
    ctxRight.font = "16px Open Sans";
    ctxRight.fillText("140", 65, 160);
    ctxRight.fillText("9.8", 155, 160);
    ctxRight.fillText("7.0", 230, 160);
    ctxRight.font = "12px Open Sans";
    ctxRight.fillText("km", 90, 160);
    ctxRight.fillText("l", 170, 160);
    ctxRight.fillText("l/100km", 270, 160);
    
    ctxRight.font = "20px Open Sans";
    ctxRight.fillText("Trips", 170, 210);
    ctxRight.font = "bold 16px Open Sans";
    ctxRight.fillText("Afstand       Totaal       Gemiddeld", 170, 240);
    ctxRight.font = "16px Open Sans";
    ctxRight.fillText("70", 65, 270);
    ctxRight.fillText("4.9", 155, 270);
    ctxRight.fillText("7.0", 230, 270);
    ctxRight.fillText("70", 65, 300);
    ctxRight.fillText("4.9", 155, 300);
    ctxRight.fillText("7.0", 230, 300);
    ctxRight.font = "12px Open Sans";
    ctxRight.fillText("km", 90, 270);
    ctxRight.fillText("l", 170, 270);
    ctxRight.fillText("l/100km", 270, 270);
    ctxRight.fillText("km", 90, 300);
    ctxRight.fillText("l", 170, 300);
    ctxRight.fillText("l/100km", 270, 300);
    
    verbruikOpen = true;
    
}

function sluitVerbruik(){
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    drawLeftGPS(ctxLeft);

    drawRightSmall(ctxRight);
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160,2*Math.PI * 0.86,2*Math.PI * (0.86 + rightGaugeSelectionLength));
    ctxRight.strokeStyle = "white";
    ctxRight.lineWidth = 3;
    ctxRight.shadowColor = "white";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.font = "40px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "white";
    ctxRight.fillText("86",80,375);
    ctxRight.closePath();
    
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160,2*Math.PI * 1.035,2*Math.PI * (1.035 + rightGaugeSelectionLength / 4));
    ctxRight.strokeStyle = "white";
    ctxRight.lineWidth = 8;
    ctxRight.shadowColor = "white";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.fillStyle = "rgba(255,255,255,0.30)"
    ctxRight.moveTo(346, 245);
    ctxRight.lineTo(90, 245);
    ctxRight.lineTo(90, 305);
    ctxRight.lineTo(316, 305);
    ctxRight.lineTo(346, 245);
    ctxRight.fill();
    ctxRight.closePath()
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.font = "30px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "white";
    ctxRight.fillText("Verbruik",210,285);
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.font = "25px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "rgba(255,255,255,0.30)";
    ctxRight.fillText("Bellen",210,215);
    ctxRight.fillText("Radio",210,145);
    ctxRight.closePath();
    
    
    verbruikOpen = false;
}


function openBellen(){
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    drawLeftGPS(ctxLeft);
    
    drawRightSmall(ctxRight);
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160,2*Math.PI * 0.86,2*Math.PI * (0.86 + rightGaugeSelectionLength));
    ctxRight.strokeStyle = "white";
    ctxRight.lineWidth = 3;
    ctxRight.shadowColor = "white";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.font = "40px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "white";
    ctxRight.fillText("86",80,375);
    ctxRight.closePath();
    
    if(bellenSelectionPos === 0){
        ctxRight.beginPath();
        ctxRight.arc(190,210,160,2*Math.PI * 0.89,2*Math.PI * (0.89 + rightGaugeSelectionLength / 4));
        ctxRight.strokeStyle = "white";
        ctxRight.lineWidth = 8;
        ctxRight.shadowColor = "white";
        ctxRight.shadowOffsetX = 0;
        ctxRight.shadowOffsetY = 0;
        ctxRight.shadowBlur = 10;
        ctxRight.stroke();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)"
        ctxRight.moveTo(320, 125);
        ctxRight.lineTo(90, 125);
        ctxRight.lineTo(90, 155);
        ctxRight.lineTo(340, 155);
        ctxRight.lineTo(320, 125);
        ctxRight.fill();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "20px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("Bram Schrooyen",210,145);
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "18px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)";
        ctxRight.fillText("Sam Goeman",210,175);
        ctxRight.closePath();
    } else{
        ctxRight.beginPath();
        ctxRight.arc(190,210,160,2*Math.PI * 0.925,2*Math.PI * (0.925 + rightGaugeSelectionLength / 4));
        ctxRight.strokeStyle = "white";
        ctxRight.lineWidth = 8;
        ctxRight.shadowColor = "white";
        ctxRight.shadowOffsetX = 0;
        ctxRight.shadowOffsetY = 0;
        ctxRight.shadowBlur = 10;
        ctxRight.stroke();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)"
        ctxRight.moveTo(338, 155);
        ctxRight.lineTo(90, 155);
        ctxRight.lineTo(90, 185);
        ctxRight.lineTo(350, 185);
        ctxRight.lineTo(338, 155);
        ctxRight.fill();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "20px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("Sam Goeman",210,175);
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "18px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)";
        ctxRight.fillText("Bram Schrooyen",210,145);
        ctxRight.closePath();
    }
    
    bellenOpen = true;
    

}

function belPersoon(){
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    drawLeftGPS(ctxLeft);
    
    drawRightSmall(ctxRight);
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160,2*Math.PI * 0.86,2*Math.PI * (0.86 + rightGaugeSelectionLength));
    ctxRight.strokeStyle = "white";
    ctxRight.lineWidth = 3;
    ctxRight.shadowColor = "white";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.font = "40px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "white";
    ctxRight.fillText("86",80,375);
    ctxRight.closePath();
    
    if(bellenSelectionPos === 0){

        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.drawImage(call,130,110,120,120);
        ctxRight.font = "30px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("Bram Schrooyen",200,280);
        ctxRight.closePath();
        
        
    } else{
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.drawImage(call,130,110,120,120);
        ctxRight.font = "30px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("Sam Goeman",200,280);
        ctxRight.closePath();
        
    }
}

function sluitBellen(){
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    drawLeftGPS(ctxLeft);

    drawRightSmall(ctxRight);
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160,2*Math.PI * 0.86,2*Math.PI * (0.86 + rightGaugeSelectionLength));
    ctxRight.strokeStyle = "white";
    ctxRight.lineWidth = 3;
    ctxRight.shadowColor = "white";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.font = "40px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "white";
    ctxRight.fillText("86",80,375);
    ctxRight.closePath();
    
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160,2*Math.PI * 0.96,2*Math.PI * (0.96 + rightGaugeSelectionLength / 4));
    ctxRight.strokeStyle = "white";
    ctxRight.lineWidth = 8;
    ctxRight.shadowColor = "white";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.fillStyle = "rgba(255,255,255,0.30)"
    ctxRight.fillRect(350,175,0 - (rightGaugeSelectionLength-0.14) * 1850,60)
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.font = "30px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "white";
    ctxRight.fillText("Bellen",210,215);
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.font = "25px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "rgba(255,255,255,0.30)";
    ctxRight.fillText("Radio",210,145);
    ctxRight.fillText("Verbruik",210,285);
    ctxRight.closePath();
    
    
    bellenOpen = false;
}

function openRadio(){
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    drawLeftGPS(ctxLeft);
    
    drawRightSmall(ctxRight);
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160,2*Math.PI * 0.86,2*Math.PI * (0.86 + rightGaugeSelectionLength));
    ctxRight.strokeStyle = "white";
    ctxRight.lineWidth = 3;
    ctxRight.shadowColor = "white";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.font = "40px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "white";
    ctxRight.fillText("86",80,375);
    ctxRight.closePath();

    
    if(radioSelectionPos === 0){
        ctxRight.beginPath();
        ctxRight.arc(190,210,160,2*Math.PI * 0.883,2*Math.PI * (0.883 + rightGaugeSelectionLength / 4));
        ctxRight.strokeStyle = "white";
        ctxRight.lineWidth = 8;
        ctxRight.shadowColor = "white";
        ctxRight.shadowOffsetX = 0;
        ctxRight.shadowOffsetY = 0;
        ctxRight.shadowBlur = 10;
        ctxRight.stroke();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)"
        ctxRight.moveTo(316, 105);
        ctxRight.lineTo(90, 105);
        ctxRight.lineTo(90, 165);
        ctxRight.lineTo(346, 165);
        ctxRight.lineTo(316, 105);
        ctxRight.fill();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "30px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("MNM",210,145);
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.font = "25px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)";
        ctxRight.fillText("Studio Brussel",210,215);
        ctxRight.fillText("Q-Music",210,285);
        ctxRight.closePath();
    } else if(radioSelectionPos === 1){
        ctxRight.beginPath();
        ctxRight.arc(190,210,160,2*Math.PI * 0.96,2*Math.PI * (0.96 + rightGaugeSelectionLength / 4));
        ctxRight.strokeStyle = "white";
        ctxRight.lineWidth = 8;
        ctxRight.shadowColor = "white";
        ctxRight.shadowOffsetX = 0;
        ctxRight.shadowOffsetY = 0;
        ctxRight.shadowBlur = 10;
        ctxRight.stroke();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)"
        ctxRight.fillRect(350,175,0 - (rightGaugeSelectionLength-0.14) * 1850,60)
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "30px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("Studio Brussel",210,215);
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.font = "25px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)";
        ctxRight.fillText("MNM",210,145);
        ctxRight.fillText("Q-Music",210,285);
        ctxRight.closePath();
    } else{
        ctxRight.beginPath();
        ctxRight.arc(190,210,160,2*Math.PI * 1.035,2*Math.PI * (1.035 + rightGaugeSelectionLength / 4));
        ctxRight.strokeStyle = "white";
        ctxRight.lineWidth = 8;
        ctxRight.shadowColor = "white";
        ctxRight.shadowOffsetX = 0;
        ctxRight.shadowOffsetY = 0;
        ctxRight.shadowBlur = 10;
        ctxRight.stroke();
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)"
        ctxRight.moveTo(346, 245);
        ctxRight.lineTo(90, 245);
        ctxRight.lineTo(90, 305);
        ctxRight.lineTo(316, 305);
        ctxRight.lineTo(346, 245);
        ctxRight.fill();
        ctxRight.closePath()
        
        ctxRight.beginPath();
        ctxRight.shadowColor = "transparent";
        ctxRight.font = "30px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "white";
        ctxRight.fillText("Q-Music",210,285);
        ctxRight.closePath();
        
        ctxRight.beginPath();
        ctxRight.font = "25px Open Sans"
        ctxRight.textAlign = "center";
        ctxRight.fillStyle = "rgba(255,255,255,0.30)";
        ctxRight.fillText("Studio Brussel",210,215);
        ctxRight.fillText("MNM",210,145);
        ctxRight.closePath();
    }
    
    
    
    radioOpen = true;
    
}

function sluitRadio(){
    var ctxLeft = gaugeLeft.getContext('2d');
    var ctxRight = gaugeRight.getContext('2d');
    
    
    ctxLeft.clearRect(0,0,500,500);
    ctxRight.clearRect(0,0,500,500);
    
    drawLeftGPS(ctxLeft);

    drawRightSmall(ctxRight);
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160,2*Math.PI * 0.86,2*Math.PI * (0.86 + rightGaugeSelectionLength));
    ctxRight.strokeStyle = "white";
    ctxRight.lineWidth = 3;
    ctxRight.shadowColor = "white";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.font = "40px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "white";
    ctxRight.fillText("86",80,375);
    ctxRight.closePath();
    
    
   ctxRight.beginPath();
   ctxRight.arc(190,210,160,2*Math.PI * 0.883,2*Math.PI * (0.883 + rightGaugeSelectionLength / 4));
   ctxRight.strokeStyle = "white";
   ctxRight.lineWidth = 8;
   ctxRight.shadowColor = "white";
   ctxRight.shadowOffsetX = 0;
   ctxRight.shadowOffsetY = 0;
   ctxRight.shadowBlur = 10;
   ctxRight.stroke();
   ctxRight.closePath();
   
   ctxRight.beginPath();
   ctxRight.shadowColor = "transparent";
   ctxRight.fillStyle = "rgba(255,255,255,0.30)"
   ctxRight.moveTo(316, 105);
   ctxRight.lineTo(90, 105);
   ctxRight.lineTo(90, 165);
   ctxRight.lineTo(346, 165);
   ctxRight.lineTo(316, 105);
   ctxRight.fill();
   ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.font = "30px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "white";
    ctxRight.fillText("Radio",210,145);
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.font = "25px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "rgba(255,255,255,0.30)";
    ctxRight.fillText("Bellen",210,215);
    ctxRight.fillText("Verbruik",210,285);
    ctxRight.closePath();
    
    
    radioOpen = false;
}



function drawLeftGPS(ctxLeft){
    
    switch(leftMode){
        case 0:
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "white";
            ctxLeft.lineWidth = 3;
            ctxLeft.shadowColor = "white";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "white";
            ctxLeft.lineWidth = 8;
            ctxLeft.shadowColor = "white";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160, 2*Math.PI*0.26 , 2*Math.PI*0.49);
            ctxLeft.strokeStyle = "#E9B872";
            ctxLeft.lineWidth = 3;
            ctxLeft.shadowColor = "#E9B872";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160, 2*Math.PI*0.26 , 2*Math.PI*0.37);
            ctxLeft.strokeStyle = "#E9B872";
            ctxLeft.lineWidth = 5;
            ctxLeft.shadowColor = "#E9B872";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
    
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160,2*Math.PI * 0.36,2*Math.PI * (0.36 + leftGaugeSelectionLength));
            ctxLeft.strokeStyle = "white";
            ctxLeft.lineWidth = 3;
            ctxLeft.shadowColor = "white";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.shadowColor = "transparent";
            ctxLeft.font = "100px Open Sans"
            ctxLeft.textAlign = "center";
            ctxLeft.fillStyle = "white";
            ctxLeft.fillText("D",190,210);
            ctxLeft.font = "13px Open Sans"
            ctxLeft.textAlign = "center";
            ctxLeft.fillText("P    R    N",190,290);
            
            ctxLeft.fillText("0",45,210);
            ctxLeft.fillText("1",78,125);
            ctxLeft.fillText("2",170,75);
            ctxLeft.fillText("3",265,95);
            ctxLeft.fillText("4",320,160);
            ctxLeft.fillText("5",330,240);
            ctxLeft.fillText("6",290,310);
            ctxLeft.fillText("7",210,355);
            
            
            ctxLeft.drawImage(oil, 140,380,30,26);
            
            ctxLeft.closePath();
            
            break;
        case 1:
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "#87ff65";
            ctxLeft.lineWidth = 3;
            ctxLeft.shadowColor = "#87ff65";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "#87ff65";
            ctxLeft.lineWidth = 8;
            ctxLeft.shadowColor = "#87ff65";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160, 2*Math.PI*0.26 , 2*Math.PI*0.49);
            ctxLeft.strokeStyle = "#E9B872";
            ctxLeft.lineWidth = 3;
            ctxLeft.shadowColor = "#E9B872";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160, 2*Math.PI*0.26 , 2*Math.PI*0.37);
            ctxLeft.strokeStyle = "#E9B872";
            ctxLeft.lineWidth = 5;
            ctxLeft.shadowColor = "#E9B872";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
    
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160,2*Math.PI * 0.36,2*Math.PI * (0.36 + leftGaugeSelectionLength));
            ctxLeft.strokeStyle = "#87ff65";
            ctxLeft.lineWidth = 3;
            ctxLeft.shadowColor = "#87ff65";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.shadowColor = "transparent";
            ctxLeft.font = "100px Open Sans"
            ctxLeft.textAlign = "center";
            ctxLeft.fillStyle = "white";
            ctxLeft.fillText("D",190,210);
            ctxLeft.font = "13px Open Sans"
            ctxLeft.textAlign = "center";
            ctxLeft.fillText("P    R    N",190,290);
            
            ctxLeft.fillText("0",45,210);
            ctxLeft.fillText("1",78,125);
            ctxLeft.fillText("2",170,75);
            ctxLeft.fillText("3",265,95);
            ctxLeft.fillText("4",320,160);
            ctxLeft.fillText("5",330,240);
            ctxLeft.fillText("6",290,310);
            ctxLeft.fillText("7",210,355);
            
            
            ctxLeft.drawImage(oil, 140,380,30,26);
            
            ctxLeft.closePath();
            
            break;
            
        case 2:
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160,2*Math.PI * 0.5,2*Math.PI * 0.25);
            ctxLeft.strokeStyle = "#ee6055";
            ctxLeft.lineWidth = 3;
            ctxLeft.shadowColor = "#ee6055";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160,2*Math.PI * 0.5,2*Math.PI * 0.9);
            ctxLeft.strokeStyle = "#ee6055";
            ctxLeft.lineWidth = 8;
            ctxLeft.shadowColor = "#ee6055";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160, 2*Math.PI*0.26 , 2*Math.PI*0.49);
            ctxLeft.strokeStyle = "#E9B872";
            ctxLeft.lineWidth = 3;
            ctxLeft.shadowColor = "#E9B872";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160, 2*Math.PI*0.26 , 2*Math.PI*0.37);
            ctxLeft.strokeStyle = "#E9B872";
            ctxLeft.lineWidth = 5;
            ctxLeft.shadowColor = "#E9B872";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
    
            ctxLeft.beginPath();
            ctxLeft.arc(190,210,160,2*Math.PI * 0.36,2*Math.PI * (0.36 + leftGaugeSelectionLength));
            ctxLeft.strokeStyle = "#ee6055";
            ctxLeft.lineWidth = 3;
            ctxLeft.shadowColor = "#ee6055";
            ctxLeft.shadowOffsetX = 0;
            ctxLeft.shadowOffsetY = 0;
            ctxLeft.shadowBlur = 10;
            ctxLeft.stroke();
            ctxLeft.closePath();
            
            ctxLeft.beginPath();
            ctxLeft.shadowColor = "transparent";
            ctxLeft.font = "100px Open Sans"
            ctxLeft.textAlign = "center";
            ctxLeft.fillStyle = "white";
            ctxLeft.fillText("D",190,210);
            ctxLeft.font = "13px Open Sans"
            ctxLeft.textAlign = "center";
            ctxLeft.fillText("P    R    N",190,290);
            
            ctxLeft.fillText("0",45,210);
            ctxLeft.fillText("1",78,125);
            ctxLeft.fillText("2",170,75);
            ctxLeft.fillText("3",265,95);
            ctxLeft.fillText("4",320,160);
            ctxLeft.fillText("5",330,240);
            ctxLeft.fillText("6",290,310);
            ctxLeft.fillText("7",210,355);
            
            
            ctxLeft.drawImage(oil, 140,380,30,26);
            
            ctxLeft.closePath();
            
            break;
                    
    }
    
    
}

function drawRightGPS(ctxRight){
    switch(leftMode){
        case 0:
            ctxRight.beginPath();
            ctxRight.arc(190,210,160,2*Math.PI * 0.25,2*Math.PI);
            ctxRight.strokeStyle = "white";
            ctxRight.lineWidth = 3;
            ctxRight.shadowColor = "white";
            ctxRight.shadowOffsetX = 0;
            ctxRight.shadowOffsetY = 0;
            ctxRight.shadowBlur = 10;
            ctxRight.stroke();
            ctxRight.closePath();
            
            ctxRight.beginPath();
            ctxRight.arc(190,210,160,2*Math.PI * 0.25,2*Math.PI * 0.55);
            ctxRight.strokeStyle = "white";
            ctxRight.lineWidth = 8;
            ctxRight.shadowColor = "white";
            ctxRight.shadowOffsetX = 0;
            ctxRight.shadowOffsetY = 0;
            ctxRight.shadowBlur = 10;
            ctxRight.stroke();
            ctxRight.closePath();
            break;
        case 1:
            ctxRight.beginPath();
            ctxRight.arc(190,210,160,2*Math.PI * 0.25,2*Math.PI);
            ctxRight.strokeStyle = "#87ff65";
            ctxRight.lineWidth = 3;
            ctxRight.shadowColor = "#87ff65";
            ctxRight.shadowOffsetX = 0;
            ctxRight.shadowOffsetY = 0;
            ctxRight.shadowBlur = 10;
            ctxRight.stroke();
            ctxRight.closePath();
            
            ctxRight.beginPath();
            ctxRight.arc(190,210,160,2*Math.PI * 0.25,2*Math.PI * 0.55);
            ctxRight.strokeStyle = "#87ff65";
            ctxRight.lineWidth = 8;
            ctxRight.shadowColor = "#87ff65";
            ctxRight.shadowOffsetX = 0;
            ctxRight.shadowOffsetY = 0;
            ctxRight.shadowBlur = 10;
            ctxRight.stroke();
            ctxRight.closePath();
            break;
        case 2:
            ctxRight.beginPath();
            ctxRight.arc(190,210,160,2*Math.PI * 0.25,2*Math.PI);
            ctxRight.strokeStyle = "#ee6055";
            ctxRight.lineWidth = 3;
            ctxRight.shadowColor = "#ee6055";
            ctxRight.shadowOffsetX = 0;
            ctxRight.shadowOffsetY = 0;
            ctxRight.shadowBlur = 10;
            ctxRight.stroke();
            ctxRight.closePath();
            
            ctxRight.beginPath();
            ctxRight.arc(190,210,160,2*Math.PI * 0.25,2*Math.PI * 0.55);
            ctxRight.strokeStyle = "#ee6055";
            ctxRight.lineWidth = 8;
            ctxRight.shadowColor = "#ee6055";
            ctxRight.shadowOffsetX = 0;
            ctxRight.shadowOffsetY = 0;
            ctxRight.shadowBlur = 10;
            ctxRight.stroke();
            ctxRight.closePath();
            break;
    }
    
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160, 2*Math.PI*0.01 , 2*Math.PI*0.24);
    ctxRight.strokeStyle = "#3E78B2";
    ctxRight.lineWidth = 3;
    ctxRight.shadowColor = "#3E78B2";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.arc(190,210,160, 2*Math.PI*0.14 , 2*Math.PI*0.24);
    ctxRight.strokeStyle = "#3E78B2";
    ctxRight.lineWidth = 5;
    ctxRight.shadowColor = "#3E78B2";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.shadowColor = "transparent";
    ctxRight.font = "100px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillStyle = "white";
    ctxRight.fillText("86",190,210);
    ctxRight.font = "13px Open Sans"
    ctxRight.textAlign = "center";
    ctxRight.fillText("km/h",190,290);
    
    ctxRight.fillText("0",185,355);
    ctxRight.fillText("20",120,335);
    ctxRight.fillText("40",75,295);
    ctxRight.fillText("60",50,245);
    ctxRight.fillText("80",50,185);
    ctxRight.fillText("100",70,135);
    ctxRight.fillText("120",110,90);
    ctxRight.fillText("140",170,70);
    ctxRight.fillText("160",237,75);
    ctxRight.fillText("180",290,110);
    ctxRight.fillText("200",320,160);
    
    
    ctxRight.drawImage(fuel,210,380,23,26);
    
    ctxRight.arc(50,370,25, 0 , 2*Math.PI);
    ctxRight.fillStyle = "white";
    ctxRight.strokeStyle = "red"
    ctxRight.lineWidth = 4;
    ctxRight.fill();
    ctxRight.stroke();
    ctxRight.font = "24px Open Sans"
    ctxRight.fillStyle = "black";
    ctxRight.fillText("90",50,379);
    ctxRight.closePath();
}

function drawRightSmall(ctxRight){
    switch(leftMode){
        case 0:
            ctxRight.beginPath();
            ctxRight.arc(190-rightGaugePosX,210+rightGaugePosY,160*rightGaugeDiam,2*Math.PI * 0.25,2*Math.PI);
            ctxRight.strokeStyle = "white";
            ctxRight.lineWidth = 3*rightGaugeDiam;
            ctxRight.shadowColor = "white";
            ctxRight.shadowOffsetX = 0;
            ctxRight.shadowOffsetY = 0;
            ctxRight.shadowBlur = 10;
            ctxRight.stroke();
            ctxRight.closePath();
            
            ctxRight.beginPath();
            ctxRight.arc(190-rightGaugePosX,210+rightGaugePosY,160*rightGaugeDiam,2*Math.PI * 0.25,2*Math.PI * 0.55);
            ctxRight.strokeStyle = "white";
            ctxRight.lineWidth = 8*rightGaugeDiam;
            ctxRight.shadowColor = "white";
            ctxRight.shadowOffsetX = 0;
            ctxRight.shadowOffsetY = 0;
            ctxRight.shadowBlur = 10;
            ctxRight.stroke();
            ctxRight.closePath();
            break;
        case 1:
            ctxRight.beginPath();
            ctxRight.arc(190-rightGaugePosX,210+rightGaugePosY,160*rightGaugeDiam,2*Math.PI * 0.25,2*Math.PI);
            ctxRight.strokeStyle = "#87ff65";
            ctxRight.lineWidth = 3*rightGaugeDiam;
            ctxRight.shadowColor = "#87ff65";
            ctxRight.shadowOffsetX = 0;
            ctxRight.shadowOffsetY = 0;
            ctxRight.shadowBlur = 10;
            ctxRight.stroke();
            ctxRight.closePath();
            
            ctxRight.beginPath();
            ctxRight.arc(190-rightGaugePosX,210+rightGaugePosY,160*rightGaugeDiam,2*Math.PI * 0.25,2*Math.PI * 0.55);
            ctxRight.strokeStyle = "#87ff65";
            ctxRight.lineWidth = 8*rightGaugeDiam;
            ctxRight.shadowColor = "#87ff65";
            ctxRight.shadowOffsetX = 0;
            ctxRight.shadowOffsetY = 0;
            ctxRight.shadowBlur = 10;
            ctxRight.stroke();
            ctxRight.closePath();
            break;
        case 2:
            ctxRight.beginPath();
            ctxRight.arc(190-rightGaugePosX,210+rightGaugePosY,160*rightGaugeDiam,2*Math.PI * 0.25,2*Math.PI);
            ctxRight.strokeStyle = "#ee6055";
            ctxRight.lineWidth = 3*rightGaugeDiam;
            ctxRight.shadowColor = "#ee6055";
            ctxRight.shadowOffsetX = 0;
            ctxRight.shadowOffsetY = 0;
            ctxRight.shadowBlur = 10;
            ctxRight.stroke();
            ctxRight.closePath();
            
            ctxRight.beginPath();
            ctxRight.arc(190-rightGaugePosX,210+rightGaugePosY,160*rightGaugeDiam,2*Math.PI * 0.25,2*Math.PI * 0.55);
            ctxRight.strokeStyle = "#ee6055";
            ctxRight.lineWidth = 8*rightGaugeDiam;
            ctxRight.shadowColor = "#ee6055";
            ctxRight.shadowOffsetX = 0;
            ctxRight.shadowOffsetY = 0;
            ctxRight.shadowBlur = 10;
            ctxRight.stroke();
            ctxRight.closePath();
            break;
    
    
    }
    
    ctxRight.beginPath();
    ctxRight.arc(190-rightGaugePosX,210+rightGaugePosY,160*rightGaugeDiam, 2*Math.PI*0.01 , 2*Math.PI*0.24);
    ctxRight.strokeStyle = "#3E78B2";
    ctxRight.lineWidth = 3*rightGaugeDiam;
    ctxRight.shadowColor = "#3E78B2";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
    
    ctxRight.beginPath();
    ctxRight.arc(190-rightGaugePosX,210+rightGaugePosY,160*rightGaugeDiam, 2*Math.PI*0.14 , 2*Math.PI*0.24);
    ctxRight.strokeStyle = "#3E78B2";
    ctxRight.lineWidth = 5*rightGaugeDiam;
    ctxRight.shadowColor = "#3E78B2";
    ctxRight.shadowOffsetX = 0;
    ctxRight.shadowOffsetY = 0;
    ctxRight.shadowBlur = 10;
    ctxRight.stroke();
    ctxRight.closePath();
}


function isCanvasSupported(){ //checken of canvas gesupport wordt
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}

function resizeCanvas() {
				gaugeLeft.width = 380;
				gaugeLeft.height = 420;
    
                gaugeRight.width = 380;
				gaugeRight.height = 420;
    
				gaugesInit();
			}

function redraw() {
				//context.strokeStyle = 'blue';
				//context.lineWidth = '5';
				//context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
			}

