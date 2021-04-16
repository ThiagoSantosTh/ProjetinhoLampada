const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function lampOn(){
    if(!isLampBroken () ){
        lamp.src = './image/ligada.jpg'
    }
    
}

function lampOff(){
    if(!isLampBroken () ){
        lamp.src = './image/desligada.jpg'
    }
}
function lampBroken(){
    lamp.src='./image/quebrada.jpg'
}

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}


//Capturar a função
turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)


//Paasar o mouse sobre a lâmpada
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)