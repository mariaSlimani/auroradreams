import React from 'react';
import './comingSoon.css';
import gitPic from "./Images/github.png";
import liPic from "./Images/linkedin.png";
import fbPic from "./Images/fb.png";
import SheetDB from 'sheetdb-js';
function ComingSoon() {
  let email;
  function err()
  {
    document.getElementById("error-msg").style.display = "none";
  }
  function handleSubmit (event)
  {
    event.preventDefault();
    return false;
  }
  function validateForm()
  {
    const el_form = document.getElementById("mc-embedded-subscribe-form");
    el_form.action = "";
    var x = document.getElementById("mce-EMAIL").value;
   if (x === "") {
     document.getElementById("error-msg").style.display = "block";

   }
   else {
     if (validateEmail(x))
     {

        submit();
     }
     else {
       document.getElementById("error-msg").style.display = "block";
     }
   }
  }
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  function submit() {
    email= document.getElementById('mce-EMAIL').value;
    var form = document.getElementById('mc-embedded-subscribe-form');
    form.action = "https://sheetdb.io/api/v1/1ny19tpk7n040";
    form.onSubmit= ()=> {return false};
    form.addEventListener("submit", e => {
    e.preventDefault();
    /*fetch(form.action, {
        method : "POST",
        body: JSON.stringify(email),
        //new FormData(document.getElementById("mc-embedded-subscribe-form")),
    })*/
    SheetDB.write(form.action, { sheet: 'f1', data: {EMAIL: email} })
    /*.then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
})*/
  /*  .then(
      result =>result.json())*/.then((html) => {
      // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // open the modal
      modal.style.display = "flex";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
      window.location.reload();

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target !== modal) {
          modal.style.display = "none";
          window.location.reload();
        }
      }
    }


    });
  });
    form.reset();
  }

  return (
    <div className="body">
    <main className="container">
  <h1 className="title1">
    <a href="#">Seems like you've stumbled upon this page !</a>
  </h1>
  <h2 className="title2">
    <br /> Unfortunately we're still not ready yet . . . Weaving beautiful dreams takes some time !
    <br /> In the meantime, may you have <span className="shine">the sweetest of dreams !</span>
  </h2>

  </main>
  <div id="mc_embed_signup">

   <form method= "POST" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" noValidate onSubmit={handleSubmit}>
      <label className="label"><br /> Would you like to be informed when we are ready?<br /> </label>
      <div className="inputs">
   	  <input type="email" defaultValue="" name="data[EMAIL]" className="email" id="mce-EMAIL" placeholder="Email address" required onFocus={err}></input>
      <input type="submit"  value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" onClick={validateForm}></input>
      </div>
      <span id="error-msg" style= {{color:"#7FC7B3", display:"none", bottom:"0"}}> Please input a valid email address!</span>
  </form>
  </div>
  <footer className="contact">

  <div className="box">
    <a href="https://github.com/mariaSlimani">
      <img src={gitPic} alt="Github"></img>
    </a>
  </div>
    <div className="box">
  <a href="https://www.linkedin.com/in/wassila-maria-slimani/" >
  <img src={liPic} alt="LinkedIn"></img>
  </a>
</div>
  <div className="box">
    <a href="https://www.facebook.com/wassila.maria.slimani/" >
    <img src={fbPic} alt="Facebook"></img>
    </a>
  </div>
</footer>
<div id="myModal" className="modal">

  {/* Modal content*/}
  <div className="modal-content">
    <span className="close">&times;</span>
    <h3 id="thanks">Thank you for subscribing!</h3>
    <p id="th-txt"><br /> We'll make sure to inform you when we're up and running! Have a lovely day!</p>
  </div>

</div>

</div>
  );
}

export default ComingSoon;
