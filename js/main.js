$(document).ready(function(){

 	createjs.Sound.registerSound("./sound/tkt.mp3", "sound",1);
 	createjs.Sound.registerSound("./sound/sacfait.mp3", "sound",1);
 	createjs.Sound.registerSound("./sound/servietsky-petard.mp3", "sound",1);
 	createjs.Sound.registerSound("./sound/epatE.mp3", "sound",1);
 	createjs.Sound.registerSound("./sound/Oh putain.mp3", "sound",1);
 	createjs.Sound.registerSound("./sound/peterwater.mp3", "sound",1);
 	createjs.Sound.registerSound("./sound/chier.mp3", "sound",1);
 	createjs.Sound.registerSound("./sound/avc.mp3", "sound",1);
 	createjs.Sound.registerSound("./sound/coucouuu.mp3", "sound",1);
 	createjs.Sound.registerSound("./sound/par3.mp3", "sound",1);
  	createjs.Sound.registerSound("./sound/pelleteuse.mp3", "sound",1);
  	createjs.Sound.registerSound("./sound/chatapoil.mp3", "sound",1);
  	createjs.Sound.registerSound("./sound/pimp.mp3", "sound",1);
  	createjs.Sound.registerSound("./sound/dentiey.mp3", "sound",1);
  	createjs.Sound.registerSound("./sound/ramucho.mp3", "sound",1);
  	createjs.Sound.registerSound("./sound/barry.mp3", "sound",1);
  	createjs.Sound.registerSound("./sound/vos-gueules.mp3", "sound",1);
  	createjs.Sound.registerSound("./sound/willy.mp3", "sound",1);
  	createjs.Sound.registerSound("./sound/chope.mp3", "sound",1);
   	createjs.Sound.registerSound("./sound/vois1.mp3", "sound",1);
   	createjs.Sound.registerSound("./sound/vois2.mp3", "sound",1);  	
   	createjs.Sound.registerSound("./sound/coucou.mp3", "sound",1);
   	createjs.Sound.registerSound("./sound/salopards.mp3", "sound",1);
   	createjs.Sound.registerSound("./sound/jeffrey.mp3", "sound",1);	
   	createjs.Sound.registerSound("./sound/gourmette.mp3", "sound",1);	
   	createjs.Sound.registerSound("./sound/bougetfesses.mp3", "sound",1);	
	var son = "son"
	var echo = 0;
	
	
	$(".onoffswitch-label").click(function(){
		createjs.Sound.stop();
		if(echo==0){
			echo=1;
			$("body").css({
				"background-color":"#000",
			});
			$("#echo p").css({
				"color":"#FFFFFF",
			});
			$("#footer").css({
				"background-color":"#FFF",
			});
			$("center").css({
				"color":"#000",
			});
			
			$("#logo").attr({ 
				"src":"img/logo-1.png",
			});
			
			$(".bloc").css({
				"border":"2px solid #e9e9e9",
			});
			
		}else{
			$("body").css({
				"background-color":"#e9e9e9"
			});
			$("#echo p").css({
				"color":"#000000",
			});
			$("#footer").css({
				"background-color":"#000",
			});
			$("center").css({
				"color":"#e9e9e9",
			});
			
			$("#logo").attr({ 
				"src":"img/logo.png",
			});
			
			$(".bloc").css({
				"border":"1px solid #000",
			});
			
			echo=0;
		}
	});
	
	$(".uk-overlay").click(function(event){
	son = $(this).children("img").attr("id");
	if(echo==0){
		var instance = createjs.Sound.play("./sound/"+son+".mp3");
	}if(echo==1){
		var instance = createjs.Sound.play("./sound/"+son+".mp3",{interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
	}
	});
	
	$(".uk-overlay").mouseenter(function(event){
		console.log("je tourne !!");
		$(this).animate({  borderSpacing:-360 }, {
    	step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)'); 
      		$(this).css('-moz-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');
    	},duration:'slow'},'linear');
	});
	
	/*	$(document).keydown(function quelle_touche(evenement)
   	{
       var touche = window.event ? evenement.keyCode : evenement.which;
       if(touche=65){
       	var instance = createjs.Sound.play("./sound/tkt.mp3");
       }
   
   	});*/
	
	
});