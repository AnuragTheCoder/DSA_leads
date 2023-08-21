const endDate="22 August 2023 3:00 PM";

document.getElementById("end-date").innerText=endDate;

let inputs=document.getElementsByTagName("input");
const clock=()=>{
    const end=new Date(endDate);
    const now=new Date();
    //end-now is  in MIlliSecond;
    const diff=(end-now)/1000;
   
if(diff<0){
   return;
}

//diff is in second;
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor((diff/3600)%24);
    inputs[2].value=Math.floor((diff/60)%60);
    inputs[3].value=Math.floor(diff%60);




    //Convert Into 

}
clock();

setInterval(() => {
    clock();
}, 1000);
