function abreMenu() 
{
  document.getElementById("menu-lateral").style.width = "25%";
  document.getElementById("tudo").style.marginLeft = "25%";
  document.getElementById("btnHamburg").style.visibility="hidden";
}

function fechaMenu()
{
  document.getElementById("menu-lateral").style.width = "0%";
  document.getElementById("tudo").style.marginLeft= "0%";
  document.getElementById("btnHamburg").style.visibility="visible";
}

/*carrosel*/

    var contador = 1; //variável pública criada fora da function
	var img1="./img/bg1.png";
	var img2="./img/bg2.png";
	var img3="./img/bg3.png";
	var img4="./img/bg4.png";
	var tempo=3000; //2000(milessegundos) : 1000 (milessegundo) = 2s
	var exibir=setInterval("Exibindo()",tempo);
	  
	function Exibindo()
	{
	  	document.images["slide"].src=eval("img"+contador);
		
		if (contador<4)
			contador++;
		else
			contador=1;
	}
	  
	function Anterior()
	{
		if (contador == 4)
			contador = 3;
		else if (contador == 3)
		    contador=2;
		else if (contador == 2)
			contador=1;
		else
			contador=4;
			
		document.images["slide"].src=eval("img"+contador);
		
		clearInterval(exibir);//interrompe o looping
		exibir=setInterval("Exibindo()",tempo);
	}
	 
	 function Proximo()
	{
		
		document.images["slide"].src=eval("img"+contador);
		
		if (contador<3)
			contador++;
		else
			contador=1;
		
		clearInterval(exibir);//interrompe o looping 
		exibir=setInterval("Exibindo()",tempo);
	}