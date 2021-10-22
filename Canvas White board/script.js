window.addEventListener("load", function(){
    //get canvas
    mycanvas = document.getElementById('mycanvas');
    mycanvas.width = window.innerWidth;
    mycanvas.height = window.innerHeight;

    //getcontext
    isdrawable = false
    mycontext = mycanvas.getContext('2d');
    mycanvas.addEventListener('mousemove', drawCircle);
    mycanvas.addEventListener('mouseup', disableDrawing);
    mycanvas.addEventListener('mousedown', enableDrawing);

    //Radius bar
    raduis =10;
    radiusvalue = document.getElementById('radiusvalue');
    incre = document.getElementById('incre');
    decre = document.getElementById('decre');
    incre.addEventListener('click', increaseRadius);
    decre.addEventListener('click', decreaseRadius);

    //save bar
    savebtn = document.getElementById('savebtn');
    savebtn.addEventListener('click', saveAsImg);

    //colors bar
    allcolors = document.querySelectorAll(".colorsbtn");
    for(var i = 0; i < allcolors.length; i++){
        allcolors[i].addEventListener('click', changeColor);
        if(allcolors[i].style.backgroundColor == localStorage.getItem('newColor')){
            allcolors[i].classList.add('active');
            mycontext.fillStyle = allcolors[i].style.backgroundColor;
        }
    }
});

function drawCircle(e){
    if(isdrawable){
        mycontext.beginPath();
        mycontext.arc(e.clientX, e.clientY, raduis, 0, Math.PI * 2);
        mycontext.fill();
        mycontext.closePath();
    }
}

function disableDrawing(){
    isdrawable = false;
}

function enableDrawing(){
    isdrawable = true;
}

function increaseRadius(){
    raduis++;
    radiusvalue.innerText = raduis;
}

function decreaseRadius(){
    raduis--;
    radiusvalue.innerText = raduis;
}

function saveAsImg(e){
    var link = document.createElement('a');
    link.download = 'download.png';
    link.href = mycanvas.toDataURL()
    link.click();
    link.delete;
}

function changeColor(e){
    var getOldSelectColor = document.getElementsByClassName('active')[0];
    if(getOldSelectColor != null)
        getOldSelectColor.classList.remove('active');

    var newSelectColor = e.target;
    newSelectColor.classList.add('active');
    mycontext.fillStyle = newSelectColor.style.backgroundColor;
    localStorage.setItem('newColor', newSelectColor.style.backgroundColor)
}

