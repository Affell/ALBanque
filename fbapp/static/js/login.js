function submitLogin(){
	var login = document.getElementById("login").value;
	var password = document.getElementById("password").value;
  	if (login == null || login == "" || password == null || password == "") {
    	$("#error_div").show();
    	return false;
  	} else {

	    $.ajax({
	          data : {
	             user : login,
	             password: password,
	                 },
	             type : 'POST',
	             url : '/login'
	    })
	        .done(function(data){	        	        
      		
      		 if (data) {
	            // data.redirect contains the string URL to redirect to
	            window.location.href = data;
	        }
      		
    	}).fail(function(data){	        	        
      		
      		$("#error_div").show();
      		
    	});
 	}
	return false;
}

$(document).ready(function(){
	$("#create_account").click(function(){
		window.location.href = "/register"


	})
})

