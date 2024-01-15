let count = 0;
let string = "0";
let msg = "";

document.getElementById("butn").addEventListener('click', function(){
    count += 1;
    document.getElementById('count-el').innerHTML = count;
});

document.getElementById('dbutn').addEventListener('click', function(){
    string = count.toString();
    count = 0;
    document.getElementById('count-el').innerHTML = 0;
    msg += string + " - ";
    document.getElementById('para').innerHTML = "Previous entries: " + msg;
})  