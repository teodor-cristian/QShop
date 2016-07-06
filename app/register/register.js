
function validateForm() {
  event.preventDefault();
  var userName=document.getElementById('username').value;
  if(userName==null || userName=="")
  {
    document.querySelector("form.q-form div.form-group label").style.color="red";
    document.querySelector("form.q-form div.form-group input").style.borderColor="red";
    document.querySelector("form.q-form div.form-group p").style.display="block";
  }
  else {
    document.querySelector("form.q-form div.form-group label").style.color="#333";
    document.querySelector("form.q-form div.form-group p").style.display="none";
  }

    var email=document.getElementById('email').value;
    if(email==null || email=="")
    {
      document.querySelector("form.q-form div.form-group:nth-child(2) label").style.color="red";
      document.querySelector("form.q-form div.form-group:nth-child(2) p").style.display="block";
    }
    else {
      document.querySelector("form.q-form div.form-group:nth-child(2) label").style.color="#333";
      document.querySelector("form.q-form div.form-group:nth-child(2) p").style.display="none";
      }

    var password=document.getElementById('password').value;
    if(password==null || password=="")
    {
      document.querySelector("form.q-form div.form-group:nth-child(3) label").style.color="red";
      document.querySelector("form.q-form div.form-group:nth-child(3) p").style.display="block";
    }
    else {
      document.querySelector("form.q-form div.form-group:nth-child(3) label").style.color="#333";
      document.querySelector("form.q-form div.form-group:nth-child(3) p").style.display="none";
      }

    var password2=document.getElementById('confirm-password').value;
    if(password2==null || password2=="")
    {
      document.querySelector("form.q-form div.form-group:nth-child(4) label").style.color="red";
      document.querySelector("form.q-form div.form-group:nth-child(4) p").style.display="block";
    }
    else {
      document.querySelector("form.q-form div.form-group:nth-child(4) label").style.color="#333";
            document.querySelector("form.q-form div.form-group:nth-child(4) p").style.display="none";
      }
}
