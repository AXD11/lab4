function _200px(){
    var task1 = document.getElementById("Width");
    task1.style.width = "200px";
}
function _500px(){
    var task1 = document.getElementById("Width");
    task1.style.width = "500px";
}
function b_1px(){
    var task2 = document.getElementById("Width");
    task2.style.border = "1px solid black";
    
}
function b_10px(){
    var task2 = document.getElementById("Width");
    task2.style.border = "10px solid black";
    
}
function b_20px(){
    var task2 = document.getElementById("Width");
    task2.style.border = "20px solid black";
    
}
function reset(){
    var task4 = document.getElementById("Width");
    task4.style.width = "300px";
    task4.style.border = "1px solid black";
    task4.style.backgroundColor = "yellow";
    var tds = document.querySelectorAll('td');
    for(var i=0;i<tds.length;i++){
        tds[i].style.backgroundColor = "yellow";
    }
}
function _cc(color){
    var task3 = document.getElementById("Width");
    task3.style.backgroundColor = color;
    var tds = document.querySelectorAll('td');
    
    for(var i=0;i<tds.length;i++){
        tds[i].style.backgroundColor = color;
    }
}
