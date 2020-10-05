
/* Variables*/ 

var menubtn=document.getElementById("menu-bars");

    mainlist=document.getElementById("main-nav");

/* Header */

/*this is function to show list*/

menubtn.onclick=function(){
	

	if(mainlist.style.display===""){
		mainlist.style.display="block";
	}
	else{
		mainlist.style.display="";
	}
	
}


