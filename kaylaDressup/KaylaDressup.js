(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"KaylaDressup_atlas_1", frames: [[0,1405,662,212],[664,1405,662,212],[1328,1405,690,199],[502,1191,688,212],[1328,1606,690,199],[1192,1191,688,212],[0,1619,690,199],[1384,1807,538,212],[692,1807,690,199],[0,1820,690,199],[502,977,1023,212],[502,702,1134,273],[0,0,500,700],[502,0,500,700],[1004,0,500,700],[1506,0,500,700],[0,702,500,700]]},
		{name:"KaylaDressup_atlas_2", frames: [[0,214,514,212],[0,428,514,212],[516,214,488,212],[516,428,488,212],[0,0,538,212],[540,0,155,98]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_33 = function() {
	this.initialize(ss["KaylaDressup_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["KaylaDressup_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["KaylaDressup_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["KaylaDressup_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["KaylaDressup_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["KaylaDressup_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.lovelyOutfit = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.monikaOutfit = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.noOutfit = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.oilOutfit = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.sweaterOutfit = function() {
	this.initialize(ss["KaylaDressup_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.sweaterOutfit_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {pink:0,white:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_31();
	this.instance.setTransform(-128.5,-52.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_30();
	this.instance_1.setTransform(-172.6,-49.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_33();
	this.instance_2.setTransform(-128.5,-52.9,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_32();
	this.instance_3.setTransform(-172.6,-49.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.6,-52.9,345,106);


(lib.oilOutfit_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"pink":0,"white":2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_27();
	this.instance.setTransform(-122,-52.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_26();
	this.instance_1.setTransform(-172.6,-49.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_29();
	this.instance_2.setTransform(-122,-52.9,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_28();
	this.instance_3.setTransform(-172.6,-49.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.6,-52.9,345,106);


(lib.noOutfit_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"pink":0,"white":2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-165.5,-52.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_14();
	this.instance_1.setTransform(-172.6,-49.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_17();
	this.instance_2.setTransform(-165.5,-52.9,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_28();
	this.instance_3.setTransform(-172.6,-49.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.6,-52.9,345,106);


(lib.monikaOutfit_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"pink":0,"white":2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(-171.95,-52.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_30();
	this.instance_1.setTransform(-172.6,-49.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_25();
	this.instance_2.setTransform(-171.95,-52.9,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_32();
	this.instance_3.setTransform(-172.6,-49.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.6,-52.9,345,106);


(lib.lovelyOutfit_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"pink":0,"white":2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(-134.5,-52.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_26();
	this.instance_1.setTransform(-172.6,-49.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_21();
	this.instance_2.setTransform(-134.5,-52.9,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_28();
	this.instance_3.setTransform(-172.6,-49.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.6,-52.9,345,106);


(lib.kayla = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {lovelyOutfit:0,monikaOutfit:4,noOutfit:9,oilOutfit:14,sweaterOutfit:19};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(5).call(this.frame_8).wait(5).call(this.frame_13).wait(5).call(this.frame_18).wait(5).call(this.frame_23).wait(1));

	// Layer_1
	this.instance = new lib.lovelyOutfit();
	this.instance.setTransform(-249.5,-350);

	this.instance_1 = new lib.monikaOutfit();
	this.instance_1.setTransform(-249.5,-350);

	this.instance_2 = new lib.noOutfit();
	this.instance_2.setTransform(-249.5,-350);

	this.instance_3 = new lib.oilOutfit();
	this.instance_3.setTransform(-249.5,-350);

	this.instance_4 = new lib.sweaterOutfit();
	this.instance_4.setTransform(-249.5,-350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.5,-350,500,700);


// stage content:
(lib.KaylaDressup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		
		root.kayla_mc.gotoAndPlay("noOutfit") // start no outfit
		root.noOutfit_mc.gotoAndPlay("white") // start white
		
		this.noOutfit_mc.addEventListener("click",handleClickButton01);
		
		function handleClickButton01(event){
			root.kayla_mc.gotoAndPlay("noOutfit");
			root.noOutfit_mc.gotoAndPlay("white");
			root.oilOutfit_mc.gotoAndPlay("pink");
			root.sweaterOutfit_mc.gotoAndPlay("pink");
			root.lovelyOutfit_mc.gotoAndPlay("pink");
			root.monikaOutfit_mc.gotoAndPlay("pink");
		}
		
		this.oilOutfit_mc.addEventListener("click",handleClickButton02);
		
		function handleClickButton02(event){
			root.kayla_mc.gotoAndPlay("oilOutfit");
			root.noOutfit_mc.gotoAndPlay("pink");
			root.oilOutfit_mc.gotoAndPlay("white");
			root.sweaterOutfit_mc.gotoAndPlay("pink");
			root.lovelyOutfit_mc.gotoAndPlay("pink");
			root.monikaOutfit_mc.gotoAndPlay("pink");
		}
		
		this.sweaterOutfit_mc.addEventListener("click",handleClickButton03);
		
		function handleClickButton03(event){
			root.kayla_mc.gotoAndPlay("sweaterOutfit");
			root.noOutfit_mc.gotoAndPlay("pink");
			root.oilOutfit_mc.gotoAndPlay("pink");
			root.sweaterOutfit_mc.gotoAndPlay("white");
			root.lovelyOutfit_mc.gotoAndPlay("pink");
			root.monikaOutfit_mc.gotoAndPlay("pink");
		}
		
		this.monikaOutfit_mc.addEventListener("click",handleClickButton04);
		
		function handleClickButton04(event){
			root.kayla_mc.gotoAndPlay("monikaOutfit");
			root.noOutfit_mc.gotoAndPlay("pink");
			root.oilOutfit_mc.gotoAndPlay("pink");
			root.sweaterOutfit_mc.gotoAndPlay("pink");
			root.lovelyOutfit_mc.gotoAndPlay("pink");
			root.monikaOutfit_mc.gotoAndPlay("white");
		}
		
		this.lovelyOutfit_mc.addEventListener("click",handleClickButton05);
		
		function handleClickButton05(event){
			root.kayla_mc.gotoAndPlay("lovelyOutfit");
			root.noOutfit_mc.gotoAndPlay("pink");
			root.oilOutfit_mc.gotoAndPlay("pink");
			root.sweaterOutfit_mc.gotoAndPlay("pink");
			root.lovelyOutfit_mc.gotoAndPlay("white");
			root.monikaOutfit_mc.gotoAndPlay("pink");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// info
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(658.2,790.15,0.5,0.5);

	this.monikaOutfit_mc = new lib.monikaOutfit_1();
	this.monikaOutfit_mc.name = "monikaOutfit_mc";
	this.monikaOutfit_mc.setTransform(1063.95,795.1);

	this.lovelyOutfit_mc = new lib.lovelyOutfit_1();
	this.lovelyOutfit_mc.name = "lovelyOutfit_mc";
	this.lovelyOutfit_mc.setTransform(1063.95,667.6);

	this.oilOutfit_mc = new lib.oilOutfit_1();
	this.oilOutfit_mc.name = "oilOutfit_mc";
	this.oilOutfit_mc.setTransform(1063.95,542.4);

	this.sweaterOutfit_mc = new lib.sweaterOutfit_1();
	this.sweaterOutfit_mc.name = "sweaterOutfit_mc";
	this.sweaterOutfit_mc.setTransform(1063.95,417.2);

	this.noOutfit_mc = new lib.noOutfit_1();
	this.noOutfit_mc.name = "noOutfit_mc";
	this.noOutfit_mc.setTransform(1063.95,292);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(698.7,65.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(676.65,43.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.noOutfit_mc},{t:this.sweaterOutfit_mc},{t:this.oilOutfit_mc},{t:this.lovelyOutfit_mc},{t:this.monikaOutfit_mc},{t:this.instance}]}).wait(1));

	// art
	this.kayla_mc = new lib.kayla();
	this.kayla_mc.name = "kayla_mc";
	this.kayla_mc.setTransform(743.6,540,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.kayla_mc).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EidYhXVME6xAAAMAAACurMk6xAAAg");
	this.shape.setTransform(963.475,541);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD8DB").s().p("EidYBXWMAAAiurME6xAAAMAAACurg");
	this.shape_1.setTransform(963.475,541);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(915.2,521,1056.6,580);
// library properties:
lib.properties = {
	id: '9A2DD4E90F1ADB4FA9090B6CB35AD605',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/KaylaDressup_atlas_1.png?1624126446438", id:"KaylaDressup_atlas_1"},
		{src:"images/KaylaDressup_atlas_2.png?1624126446438", id:"KaylaDressup_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9A2DD4E90F1ADB4FA9090B6CB35AD605'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;