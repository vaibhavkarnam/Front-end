function vaildateEmail(emailId){
      var url = /^([a-zA-Z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/;
    	return url.test(emailId);
}

function validate(){
  var email=emailvalidation.emailId.value;
    	if (vaildateEmail(email)) 
      {
      return true;
      } 
      else
      {                                                 document.getElementById("error_msg")
        .style.display="block";
      event.preventDefault();
      return false;
 	}
}