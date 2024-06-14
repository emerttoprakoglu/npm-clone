var typed = new Typed('#element', {
    strings: ['First sentence.', 'Second sentence.', 'One sent.'],
    typeSpeed: 90,
    loop:true,
  });



  function openForm() {
    
    if (document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "block";
    }
  }




  function closeForm() {
    document.getElementById("myModal").style.display = "none";
  
  }

  
  function openForm2() {
    if (document.getElementById("myModal2")) {
      document.getElementById("myModal2").style.display = "block";
    }
  }



function closeForm2() {
  document.getElementById("myModal2").style.display = "none";

}




document.getElementById("form-open").addEventListener("click", openForm);
document.getElementById("form-open2").addEventListener("click", openForm2);








document.getElementById("signup").addEventListener("click", function(event) {
  if (event) {
    event.preventDefault(); 
    openForm2(); 
    if (document.getElementById("myModal").style.display === "block") {
      closeForm();
    }
  }
});

document.getElementById("signup2").addEventListener("click", function(event) {
  if (event) {
    event.preventDefault(); 
    openForm(); 
    if (document.getElementById("myModal2").style.display === "block") {
      closeForm2(); 
    }
  }
});





document.getElementsByClassName("close")[0].addEventListener("click", closeForm);
document.getElementsByClassName("close2")[0].addEventListener("click", closeForm2);





// ! window dışını çıkınca formu kapatma 


window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
});


window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("myModal2")) {
    document.getElementById("myModal2").style.display = "none";
  }
});






document.getElementById("form-open").addEventListener("click", function(event) {
  event.preventDefault(); // Bu satır butonun varsayılan davranışını engeller
 

  openForm();
 
});

document.getElementById("form-open2").addEventListener("click", function(event) {
  event.preventDefault(); // Bu satır butonun varsayılan davranışını engeller

  openForm2();
 
});