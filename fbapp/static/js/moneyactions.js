$(document).ready(function(){
  $("#button_addMoney").click(function(){


  
  var nb = document.getElementById("input_addMoney").value;
  if (nb == null || nb == "") {
    window.alert("Entrez un nombre correct !");
  	} else {
	    $.ajax({
	          data : {	            
	             montant: nb,
	                 },
	             type : 'POST',
	             url : '/api/addMoney'
	    })
	        .done(function(data){
	        alert("Vous avez bien ajouté " + nb + " à votre compte !")
	        generateArray(data);
      		var solde = document.getElementById("solde");
      		solde.innerHTML = data.solde + " €";
 		}).fail(function(data){	        	        
      		
      		window.alert("Entrez un nombre correct !")
      		
    	});
 	}
 })
$("#button_removeMoney").click(function(){
 
  
  var nb = document.getElementById("input_removeMoney").value;
  if (nb == null || nb == "") {
    window.alert("Entrez un nombre correct !");
  	} else {

	    $.ajax({
	          data : {	            
	             montant: nb,
	                 },
	             type : 'POST',
	             url : '/api/removeMoney'
	    })
	        .done(function(data){
	        alert("Vous avez bien soustrait " + nb + " à votre compte !")	        
      		generateArray(data);
      		var solde = document.getElementById("solde");
      		solde.innerHTML = data.solde + " €";
      		
    }).fail(function(data){	        	        
      		
      		window.alert("Entrez un nombre correct !")
      		
    	});
 	}
 })
})
 


  