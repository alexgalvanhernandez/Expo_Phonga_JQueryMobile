// JavaScript Document
function suma()
 {
	 var n1=new Number(document.getElementById('txt1').value); 
     var n2=new Number(document.getElementById('txt2').value); 
	 var result= n1+n2;
	document.getElementById('res').value=result;
	document.getElementById('res').value=result;
	$("#ope").html("Suma");		
	
 }
 function resta()
 {
	 var n1=new Number(document.getElementById('txt1').value); 
     var n2=new Number(document.getElementById('txt2').value); 
	 var result= n1-n2;
	document.getElementById('res').value=result;
	document.getElementById('res').value=result;
	$("#ope").html("Resta");		
	
 }
 function multi()
 {
	 var n1=new Number(document.getElementById('txt1').value); 
     var n2=new Number(document.getElementById('txt2').value); 
	 var result= n1*n2;
	document.getElementById('res').value=result;	
	document.getElementById('res').value=result;
	$("#ope").html("Multiplicación");	
	
 }
 function div()
 {
	 var n1=new Number(document.getElementById('txt1').value); 
     var n2=new Number(document.getElementById('txt2').value); 
	 var result= n1/n2;
	document.getElementById('res').value=result;
	$("#ope").html("Divición");	
	
 }