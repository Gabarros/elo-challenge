const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click',
  function (event) {
    event.preventDefault();
    handleSubmit();
  });
const useSocialNetworks = document.querySelector('#social-yes');

useSocialNetworks.addEventListener('click', () => {
  document.querySelectorAll('.social-check').forEach(check => {
    check.disabled = false;
  });
});

document.querySelector('#social-no').addEventListener('click', () => {
  document.querySelectorAll('.social-check').forEach(check => {
    check.disabled = true;
    check.checked = false;
  });
});

function handleSubmit() {
  const name = document.querySelector('#name').value;

  validateName(name);

  const telephone = document.querySelector('#telephone').value;
  
  validatePhone(telephone);
  
  const meetDescription = document.querySelector('#meet-description').value;
  let socialNetworks = [];
  let formData = {};

  if (useSocialNetworks.checked) {
    document.querySelectorAll('.social-check').forEach(button => {
      if (button.checked) {
        socialNetworks.push(button.value);
      }
    });

    formData = {
      name,
      telephone,
      meetDescription,
      "socialNetworks": socialNetworks,
    };
  } else {
    formData = {
      name,
      telephone,
      meetDescription,
    }
  };

  handlePost(formData);

};

function validateName(name){
  var regName = /[a-zA-Z]+ [a-zA-Z]*/;

  if(!regName.test(name)){
      alert('Insira seu nome completo (Nome e Sobrenome)!');
      document.getElementById('name').focus();
      return false;
  }
};

function validatePhone(phone){
  var regPhone = /[0-9]{2}-[0-9]{9}/;

  if(!regPhone.test(phone)){
      alert('O telefone deve seguir o formato: XX-XXXXXXXX!');
      document.getElementById('telephone').focus();
      return false;
  }

}

async function handlePost(formData){

  const Http = new XMLHttpRequest();
  const url = 'http://localhost:8080';
  Http.open("POST", url);
 
  Http.send(JSON.stringify(formData));

  Http.onreadystatechange = function() { 
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log("Success");
        submitButton.disabled = true;
    }
}
}





