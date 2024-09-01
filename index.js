let box=document.querySelector("input");
let btn=document.querySelector("BUTTON");
let a=["a","s","d","h","j","g","c","i","p","u","m","n","q","w","e","r","x","z"];
let A=["A","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V"];
let n=[0,1,2,3,4,5,6,7,8,9];
let s=["@","!","#","%","&","*"]
btn.addEventListener("click",function(event){
let i=Math.floor(Math.random()*18);
let i1=Math.floor(Math.random()*24);
let i2=Math.floor(Math.random()*10);
let i3=Math.floor(Math.random()*5);
let combination=`${s[i3]}${n[i2]}${n[i3]}${A[i1]}${a[i2]}${a[i3]}${a[i]}${A[i]}${A[i1]}${a[i1]}${a[i]}${n[i3]}`
box.value=combination
box.style.fontSize="45px"
})