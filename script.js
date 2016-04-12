document.getElementById("age").addEventListener('', function(){
    document.getElementById("age").innerHTML=24;
});

document.getElementById("please").addEventListener('click', function(){
    document.getElementById("please").innerHTML = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLOVUyCVXzbpbavh8JVI8cbLp1IgZCU2PwNeVgjHxSykEzjJNyPAW9eqg'>"
});

document.getElementById("hobbies").addEventListener('mouseover', function(){
    document.getElementById("hobbies").innerHTML = "Hiking, Scuba Diving, Dogs"
});

document.querySelector("button").addEventListener('click', function(){
    document.body.style.backgroundColor="dodgerblue"});
    
document.getElementById("height").addEventListener('click', function(){
    document.getElementById("height").innerHTML= "too fast"
})

function change(){
    var x = document.getElementById("age");
    x.value = x.value.toUpperCase();
}

function profile(){
    document.getElementById("use").innerHTML="Worked!"
}
document.querySelector("img").addEventListener("click", profile);

function screenSize(){
    var x= window.outerWidth;
    var y= window.outerHeight;
    var size="Width:"+ x + "height: " + y;
    document.getElementById("comeOn").addEventListener('click',function() {
    document.getElementById("comeOn").innerHTML=size});
    return size;
}

//why is it not dynamic and changing?
document.write(screenSize());