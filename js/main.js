$(document).ready(function(){

 	createjs.Sound.registerSound("./sound/tkt.mp3", "sound");
 	createjs.Sound.registerSound("./sound/servietsky-petard.mp3", "sound");
 	createjs.Sound.registerSound("./sound/epatE.mp3", "sound");
 	createjs.Sound.registerSound("./sound/sacfait.mp3", "sound");
 	createjs.Sound.registerSound("./sound/Oh putain.mp3", "sound");
 	createjs.Sound.registerSound("./sound/peterwater.mp3", "sound");
 	createjs.Sound.registerSound("./sound/chier.mp3", "sound");
 	createjs.Sound.registerSound("./sound/avc.mp3", "sound");
 	createjs.Sound.registerSound("./sound/coucou.mp3", "sound");
  	createjs.Sound.registerSound("./sound/pelleteuse.mp3", "sound");
  	createjs.Sound.registerSound("./sound/par3.mp3", "sound");
  	createjs.Sound.registerSound("./sound/chatapoil.mp3", "sound");
  		
	console.log("coucou");
	var son = "son"
	
	
	$(".uk-overlay").click(function(){
	var instance = null;
	
	son = $(this).children("img").attr("id");
	var instance = createjs.Sound.play("./sound/"+son+".mp3");
	});
	
	
});