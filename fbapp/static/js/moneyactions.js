$(document).ready(function(){
  $("#addMoney").click(function(){


  
  var nb = prompt("Entre l'argent que tu veux ajouter", "");
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
$("#delMoney").click(function(){
 
  
  var nb = prompt("Entre l'argent que tu veux soustraire", "");
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
 


  