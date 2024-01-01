const forma = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('numri');
const subject = document.getElementById('tema');
const message = document.getElementById('mesazhi');

function sendEmail(){
    const bodyMessage = `Full Name : ${fullName.value}<br>
    Email : ${email.value}<br> Phone Number: ${phone.value}<br>
    Tema: ${subject.value}<br>
    Message: ${message.value} `;

    Email.send({
        SecureToken: "9a310488-b86a-48ae-9ed7-c791e8ab5f91", 
        Host : "smtp.elasticemail.com",
        Username : "edonberisha52@gmail.com",
        Password : "EDC556A43E726F0D9D782AB47378DFE998BC",
        To : 'edonberisha52@gmail.com',
        From : "edonberisha52@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message =="OK"){
            Swal.fire({
                title: "Sukses!",
                text: "Mesazhi u dergua me sukses!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".eb-item");
    for (const item of items){
        if (item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != ""){
            checkEmail();
            checkPhone();
        }
        items[1].addEventListener("keyup",  () => {
            checkEmail();
            checkPhone();
        });


        item.addEventListener("keyup", () =>{
            if (item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }

};


function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".eb-error-txt.email");


if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != ""){
        errorTxtEmail.innerText = "Shkruani emailin ne menyre te duhur!";
    }
    else{
        errorTxtEmail.innerText = "Email Adresa nuk duhet te jete e zbrazet";
    }
}
else{
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
}
};

function checkPhone(){
    const phoneRegex = /[0-9]/;
    const errorTxtPhone = document.querySelector(".eb-error-txt.phone");

    if(!phone.value.match(phoneRegex)){
        phone.classList.add("error");
        phone.parentElement.classList.add("error");

        if(phone.value != ""){
            errorTxtPhone.innerText = "Numer i dhene gabim!";
        }
        else{
            errorTxtPhone.innerText = "Numri nuk duhet te jete i zbrazet!";
        }
    }
    else{
        phone.classList.remove("error");
        phone.parentElement.classList.remove("error");
    }
};



 

forma.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")){
        sendEmail();

        forma.reset();
        return false;
    }
});
