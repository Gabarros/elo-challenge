document.querySelector('#submit').addEventListener('click',
  function(event){
    event.preventDefault();
    handleSubmit();
  });
  const useSocialNetworks = document.querySelector('#social-yes');

  useSocialNetworks.addEventListener('click', ()=>{
    document.querySelectorAll('.social-check').forEach(check => {
      check.disabled = false;
    });
  } );

  document.querySelector('#social-no').addEventListener('click', () => {
    document.querySelectorAll('.social-check').forEach(check => {
      check.disabled = true;
    });
  });

  function handleSubmit(){
    const name = document.querySelector('#name').value;
    const telephone = document.querySelector('#telephone').value;
    const meetDescription = document.querySelector('#meet-description').value;
    let socialNetworks = [];

    if(useSocialNetworks.checked){
      document.querySelectorAll('.social-check').forEach(button => {
        if(button.checked){
          socialNetworks.push(button.value);
        }
      });
    }

    const formData = {
      name,
      telephone,
      meetDescription,
      "socialNetworks": socialNetworks
    };

    console.log(formData);
  };

  

