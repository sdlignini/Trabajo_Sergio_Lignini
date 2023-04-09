

const fullName = document.getElementById("fullName");
const locationInput = document.getElementById("location");
const phone = document.getElementById("phone");
const email= document.getElementById("email");
const cvFile = document.getElementById("cvFile");
const extraInfo = document.getElementById("extraInfo");
const disclaimer = document.getElementById("disclaimer");
const fullName1 = document.getElementById("fullName1");
const check = document.getElementById("check");
check.addEventListener("click", cambiarAttr);
function cambiarAttr(){
    btnForm[btnForm.length - 1].toggleAttribute("disabled");
}

const btnForm = document.getElementsByClassName("btn-form");
const form1 = document.getElementById("step1");
const form2 = document.getElementById("step2");
const form3 = document.getElementById("step3");
for(let i = 0; i < btnForm.length; i++){
(btnForm[i]).addEventListener("click", handleMultiStep);
}

function handleMultiStep(e){
 e.preventDefault();
 switch (e.target.id){
    case "btn-next-form1":
        form1.classList.toggle("d-none");
        form2.classList.toggle("d-none");
      break;
    case "btn-prev-form2":
        form1.classList.toggle("d-none");
        form2.classList.toggle("d-none");
      break;
    case "btn-next-form2":
        form2.classList.toggle("d-none");
        form3.classList.toggle("d-none");
      break;
    case "btn-prev-form3":  
        form2.classList.toggle("d-none");
        form3.classList.toggle("d-none");
      break;
    case "btn-submit-form3":  
        handleSubmit()
        default:
    return;        
 };
}

function handleSubmit(){
    console.log(fullName.value, location.value, phone.value, email.value, cvFile.value, extraInfo.value, disclaimer.value, fullName1, check.value);
    form1.reset();
    form2.reset();
    form3.reset();
    btnForm[btnForm.length - 1].toggleAttribute("disabled");
form3.classList.toggle("d-none");
form1.classList.toggle("d-none");
}



