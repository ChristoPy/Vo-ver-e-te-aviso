	
		// EU VO VE E TE AVISO

	
	window.setInterval('imagensPostFace()', 500);
	window.setInterval('imagensGeral()', 500);
	window.setInterval('imagensPerfilFace()', 500);

	function imagensGeral(){
		var x = document.getElementsByTagName("img");
		var i;
			    
		for (i = 0; i < x.length; i++) {
			x[i].src = "https://imgur.com/8jrEfw5.png";
		}
	}
	
	function imagensPostFace(){
		var x = document.getElementsByClassName("uiScaledImageContainer");
		var i;
			    
		for (i = 0; i < x.length; i++) {
			x[i].src = "https://imgur.com/8jrEfw5.png";
		}
	}

	function imagensPerfilFace(){
		var x = document.getElementsByClassName("_38vo");
		var i;
			    
		for (i = 0; i < x.length; i++) {
			x[i].src = "https://imgur.com/8jrEfw5.png";
		}
	}
	