$(document).ready(function(){
	
	/*  Init de tous les sons */
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
   	createjs.Sound.registerSound("./sound/ouaimec.mp3", "sound",1);
   	createjs.Sound.registerSound("./sound/toutseul.mp3", "sound",1);
   	createjs.Sound.registerSound("./sound/54.mp3", "sound",1);

	var son = "son"
	var echo = 0;
	var imageVideo;
	var lienVideo = null;
	var lienImage;
	var imgOK = 0;
		
		
	/* Effets CSS du mode JOUR/NUIT */
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
				"border":"2px solid white",
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
				"border":"2px solid black",
			});			
			
			echo=0;
		}
	});
	
	
	/* Lancement du son */
	$(".uk-overlay").click(function(event){
	
	son = $(this).children("img").attr("id");
	if(son !="new"){
	if(echo==0){
		var instance = createjs.Sound.play("./sound/"+son+".mp3");
	}if(echo==1){
		var instance = createjs.Sound.play("./sound/"+son+".mp3",{interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
	}}
	});
	
	
	/* Rotation du disque sur la platine */
	$(".uk-overlay").mouseenter(function(event){
		if($(this).children("img").attr("id") == "new"){

		}else{
		$(this).animate({  borderSpacing:-360 }, {
    	step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)'); 
      		$(this).css('-moz-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');
    	},duration:'slow'},'linear');
	}});
	
	
	/* Pop-up d'ajout d'un sample */
	$("#first").click(function(event){
		$("#form-sample").css({
				"display":"block"
			});
		$("body").css({
				"filter":"blur(5px)"
			});

	});
	
	/* Récupération de l'image du lien Youtube */
	$("#lien").keyup(function(){

	if($(this).val() !="" && $(this).val() != lienVideo){
			lienVideo = $(this).val();
			imageVideo = lienVideo.split("=").pop();
			if(imageVideo.length == 11){
				$(this).parent().children("img").remove();
				lienImage = "http://i1.ytimg.com/vi/"+imageVideo+"/0.jpg";
				$("<img class=\"preview\"src=\""+lienImage+"\"/>").insertAfter(this);
				$("#ownImg").fadeIn().css({"display":"block"});
				imgOK = 1;
			}
		}
	});
	
	/* GIF : Bravo pour l'ajout de votre sample */
	$("#form-sample").submit(function(event){
		$("#form-sample").css({
				"display":"block"
		});
	});
		
	
	/* Lazy load sur le mur de sample */
	$("img.lazy").lazyload({
		threshold : 200,
		effect : "fadeIn"
	});
	
});