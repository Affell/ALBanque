function submitRegister(){
	var login = document.getElementById("login").value;
	var password = document.getElementById("password").value;
	var e_mail = document.getElementById("email").value;
	var error_div = document.getElementById("error_div");
  	if (login == null || login == "" || password == null || password == "") {
  		error_div.innerHTML = "Veuillez remplir tous les champs";
    	$("#error_div").show();
    	return false;
  	} else {

	    $.ajax({
	          data : {
	             user : login,
	             password: password,
	             email: e_mail,
	                 },
	             type : 'POST',
	             url : '/api/register'
	    })
	        .done(function(data){	        	        
      		
      		if (data) {
	      		 	if (data == "mail") {
		      			error_div.innerHTML = "Adresse e-mail invalide ou déjà utilisée";
		      			$("#error_div").show();
	      			}
	      				else if (data == "sql") {
		      			error_div.innerHTML = "Nom d'utilisateur déjà existant ou base de donnée infonctionelle";
		      		$("#error_div").show();
	      			}
		            else if(data == "/"){
		            	window.location.href = data;
		            }
	        }
      		
    	});
 	}
	return false;
}
