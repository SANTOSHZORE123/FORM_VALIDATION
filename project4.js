const names=document.getElementById("name");
const email=document.getElementById("email")
const number=document.getElementById("number123");
console.log(names,email,number)
let validemail=false;
let validname=false;
let validnumber=false;

names.addEventListener("blur",()=>{
    console.log("name is blurred");
    let regex=/^[a-zA-Z]([0-9a-zA-Z_]){2,10}$/    //not started with number
    let str=names.value;
    if(regex.test(str)){
        console.log("it matched", str);
        names.classList.remove("is-invalid");
        validname=true;
    }
    else{
        console.log("not matched");
        names.classList.add("is-invalid");
    }
})
email.addEventListener("blur",()=>{
    console.log("email is blurred")
    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){0,5}$/   //not started with number
    let str=email.value;
    if(regex.test(str)){
        validemail=true;
        console.log("it matched", str);
        email.classList.remove("is-invalid");
    }
    else{
        console.log("not matched");
        email.classList.add("is-invalid");
    }
})
number.addEventListener("blur",()=>{
    let regex=/^[0-9]{10}$/   
    let str=number.value;
    if(regex.test(str)){
        validnumber=true;
        console.log("it matched", str);
        number.classList.remove("is-invalid");
    }
    else{
        console.log("not matched");
        number.classList.add("is-invalid");
    }
})

let submit=document.getElementById("submit");
submit.addEventListener("click",()=>{
    if(validemail&&validname&&validnumber){
        let display=document.getElementById("display");
        let html=` <div id="success" class="alert alert-success alert-dismissible fade" role="alert">
    <strong>success!</strong> form has been submitted successfully
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
    display.innerHTML=html;
    console.log(display);
    let text=document.getElementById("text");
    text.value="";
    let address=document.getElementById("Address");
    address.value="";
    let success=document.getElementById("success");
    number.value="";
    email.value="";
    names.value="";
    validemail=false;
    validname=false;
    validnumber=false;
    setTimeout(() => {
        success.classList.add("show");
    }, 0000);
    setTimeout(() => {
        success.classList.remove("show");
        display.innerHTML=null;
    }, 6000);
}
else{let display1=document.getElementById("display");let html1=` <div id="failure" class="alert alert-danger alert-dismissible fade" role="alert">
<strong>failure!</strong> form has not been submitted successfully
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;display1.innerHTML=html1;console.log(display1)
   let failure=document.getElementById("failure");let text=document.getElementById("text");
   text.value="";
   let address=document.getElementById("Address");
   address.value="";
   let success=document.getElementById("success");
   number.value="";
   email.value="";
   names.value="";
   setTimeout(() => {
   failure.classList.add("show");
}, 0000);
setTimeout(() => {
   failure.classList.remove("show");
   display1.innerHTML=null;
}, 4000);
}
})

