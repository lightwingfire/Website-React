
let background = 0;

function mouth() {
    // alert("You clicked the 'mouth'");
    const elem = document.getElementById('mouth');
    if(elem.style.display == "none"){
        elem.style.display = "block";
    }else{
        elem.style.display = "none";
    }
    
  }

function changeBackground(){
    background = background + 1;
    if (background > 10) {
        background = 0;
    }
    if (background == 0){
        document.body.style.background = "white";
    } else if (background == 1){
        document.body.style.background = "black";
    } else if (background == 2){
        document.body.style.background = "red";
    } else if (background == 3){
        document.body.style.background = "orange";
    }else if (background == 4){
        document.body.style.background = "yellow";
    }else if (background == 5){
        document.body.style.background = "green";
    }else if (background == 6){
        document.body.style.background = "blue";
    } else if (background == 7){
        document.body.style.background = "indigo";
    } else if (background == 8){
        document.body.style.background = "violet";
    }
    
}

function registerMoveEvents(){
    var eyeBall = document.getElementById('eyeBall');
    var eyeBall2 = document.getElementById('eyeBall2');

    document.onmousemove = (event) => {
        var x = event.clientX * 100 / window.innerWidth + "%";
        var y = event.clientY * 100 / window.innerHeight + "%";
        
        eyeBall.style.transition = "0s";
        eyeBall.style.left = x;
        eyeBall.style.top = y;

        eyeBall2.style.transition = "0s";
        eyeBall2.style.left = x;
        eyeBall2.style.top = y;
    }

    document.onmouseout = (event) => {
        eyeBall.style.transition = "0.3s";
        eyeBall.style.left = "50%";
        eyeBall.style.top = "50%";
        eyeBall2.style.transition = "0.7s";
        eyeBall2.style.left = "50%";
        eyeBall2.style.top = "50%";
    }
}

export {registerMoveEvents, mouth};