let main = document.getElementById("main");
let count=1;
for(let i=0;i<25;i++){
  let p=document.createElement("p");
  p.innerText="Masai Student "+count;
  main.append(p);
  count++;
}
main.onscroll=()=>{

  var y1= main.scrollTop;
  var y = main.scrollHeight;
  if(y-y1===800){
    for(let i=0;i<25;i++){
  let p=document.createElement("p");
  p.innerText="Masai Student "+count;
  main.append(p);
  count++;
   
}
    
  }
 
}