function ContactForm(username,email,message){
  this.username = username;
  this.email = email;
  this.message = message;
}

const messages = [];

document.getElementById("contact-form").addEventListener("submit", function(event){
  event.preventDefault();
  let username = document.getElementById('exampleFormControlInput1').value;
  let email = document.getElementById('exampleFormControlInput2').value;
  let message = document.getElementById('exampleFormControlTextarea1').value;

  if (username == ''|| email == ''|| message == ''){

    document.getElementById("bttn-click").addEventListener("click",function (){
      (() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
      
            form.classList.add('was-validated')
          }, false)
        })
      })()
    })

  } else {

    let newUserMessage = new ContactForm(username,email,message)
    messages.push(newUserMessage)
    document.getElementById("contact-form").reset();
    console.log(messages)
  }
  
}) 




