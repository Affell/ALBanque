

function generateArray(data) {
	
	var divHistorique = document.getElementById("historique");
	

	var content = "<table class='table table-dark' id='historique_table'><thead><tr>";
	
	var content = content + "<th>type</th>";
	var content = content + "<th>Date et Heure</th>";	
	var content = content + "<th>montant</th>";

	var content = content + "</tr></thead>";

	var content = content + "<tbody id='pagination_body'>"

	
  	
	for (var i =0; i<= data.historique.length - 1; i++) {
	 
	
	
	var content = content +"<tr>";

	var content = content + "<td>"+data.historique[i].type+"</td>";
	var content = content + "<td>"+data.historique[i].date_heure+"</td>";	
	var content = content + "<td class='column_align_right'>"+data.historique[i].montant+"€</td>";

	var content = content + "</tr>";
	

	}
	var content = content + "</tbody>"
	var content = content + "</table>";
	//var content = content + "<div class='col-md-12 text-center'><ul class='pagination pagination-lg pager' id='myPager'></ul></div>"
	divHistorique.innerHTML = content;


	$('#historique_table').DataTable();



	

}

$(document).ready(function(){
  $.get('/api/session', function(data){
  	user = data
  	lien = "/api/situation" 
    $.get(lien, function(data, status){
      generateArray(data);      
      var solde = document.getElementById("solde");
      var username = document.getElementById("username");
      solde.innerHTML = data.solde + " €";
      username.innerHTML = user
    });
  });  
  
  $("#disconnect").click(function(){
  	$.get('/api/session', function(data){
  		login = data
  		$.ajax({
	          data : {	                        
	                 },
	             type : 'POST',
	             url : '/disconnect'
	    })
	        .done(function(data){	        	        
      		
      		 if (data) {
	            // data.redirect contains the string URL to redirect to
	            window.location.href = data;
	        }
      		
    	});


});
});


	$(document).ajaxComplete(function () {     

		
	  $(document).ready(function () {
  		
  		});
    







        
    });









});




