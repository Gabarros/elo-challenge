document.querySelector('#submit').addEventListener('click',
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
  const telephone = document.querySelector('#telephone').value;
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

async function handlePost(formData){

  const Http = new XMLHttpRequest();
  const url = 'http://localhost:8080';
  Http.open("POST", url);
 
  Http.send(JSON.stringify(formData));

  Http.onreadystatechange = function() { 
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log("Sucess");
    }
}
}





