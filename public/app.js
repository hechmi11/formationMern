
const form =document.querySelector("#form");
const email =document.querySelector("#email");
const password =document.querySelector("#password");
const emailerror =document.querySelector("#emailError");
const passeworderror =document.querySelector("#passwordError");

console.log(form);
console.log(email);
console.log(password);
console.log(emailerror);
console.log(passeworderror);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const email=e.target[0].value;
    const password=e.target[1].value;
    


    console.log("email",email);
    console.log("password",password);



    if(email===""){
        emailerror.innerHTML = "veillez entrez l'adresse mail"
    }
    if(password===""){
        passeworderror.innerHTML="veillez entrez le mot de passe"
    }
})