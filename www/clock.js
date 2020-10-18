var dom = document.getElementById('clock');//获取dom元素
var ctx = dom.getContext('2d');//创建context对象


 
//  dom.width = window.innerWidth - 50;
//  dom.height = window.innerHeight;
 var width = ctx.canvas.width ;//canvas宽度
 var height = ctx.canvas.height;//canvas高度
 console.log(width,height)

 window.addEventListener('resize', function(){
	dom.width = window.innerWidth;
	width = ctx.canvas.width;
	console.log(333)
 }, false);
 
 

var t = 1;
var getRandomColor = function(index){    
	return  '#' + (function(color){    
		 return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])    
		 && (color.length == 6) ?  color : arguments.callee(color);    
	})('');    
 } 

 
 

function draw(time){
 
	// time /= 10;

	ctx.clearRect(0,0,width,height)

	// var dJ = 0,dX =0;
	// for (var  j = 0; j < height; j += dJ) {
	// 	dJ = 8 + 5 * Math.abs(Math.cos(time/500  + dX / 15 + dJ/15 +  j/50));
	// 	for (var index = 0 ; index < width; index += dX  ) {
	// 		dX = 8 + 5 * Math.abs( Math.sin(time/500  + dJ / 15 + dX/15  + j/40 + index/50))
	// 		y = j;

			  
	// 		ctx.fillStyle = '#c3c3c3';
	// 		ctx.fillRect(index,y   ,dX - 2 ,dJ -2);
	//    }

	// }

	
	time /= 10;
	let start =   0 ;
	
	let color = 0x0e0e0e;
	for (let angel = start; angel <  39.8; angel += 0.01) {

		
		var r =   angel * 2.5
 
		var x =   r * Math.sin( angel  + time / 28);
		var  y =   r * Math.cos( angel + time/27);
 
		y +=  height/2; +   (height - 50) * Math.abs(Math.cos( time/189 )) 
		x +=  width /2 ;+   (width - 50) * Math.abs(Math.sin(time/197 ))


		if(x < 0){
			const q = Math.floor(-x /width) %2;
			if(q== 1){
				x = width - (-x%width);
			}
			else {
				x = -x % width;
			}
		}
		else if(x > width){
			const q = Math.floor(x /width) %2;
			if(q== 1){
				x = width - (x%width);
			}
			else {
				x = x % width;
			}
		}

		if (y > height) {
			const q = Math.floor(y /height) %2;
			if(q== 1){
				y = height - (y%height);
			}
			else {
				y = y % height;
			}

		}else if(y < 0){
			const q = Math.floor(-y /height) %2;
			if(q== 1){
				y = height - (-y%height);
			}
			else {
				y = -y % height;
			}
		}
		y = Math.floor(y);

		ctx.fillStyle =  '#000'

		color += 0x0e0e0e;
		ctx.fillRect(x ,y   ,1,1);



		r = 6 * ( 2 + 6 *  Math.sin(angel + time / 30) +  4 *  Math.cos(angel * angel + time/61) +  2 * Math.cos(angel + time / 37) + 2 * Math.sin(angel * angel + time / 37) );

		x =   r * Math.cos( angel );
		y =   r * Math.sin( angel );
	 
		y +=  height/2; +   (height - 50) * Math.abs(Math.cos( time/189 )) 
		x +=  width /2 ;+   (width - 50) * Math.abs(Math.sin(time/197 ))
	
	
		if(x < 0){
			const q = Math.floor(-x /width) %2;
			if(q== 1){
				x = width - (-x%width);
			}
			else {
				x = -x % width;
			}
		}
		else if(x > width){
			const q = Math.floor(x /width) %2;
			if(q== 1){
				x = width - (x%width);
			}
			else {
				x = x % width;
			}
		}
	
		if (y > height) {
			const q = Math.floor(y /height) %2;
			if(q== 1){
				y = height - (y%height);
			}
			else {
				y = y % height;
			}
	
		}else if(y < 0){
			const q = Math.floor(-y /height) %2;
			if(q== 1){
				y = height - (-y%height);
			}
			else {
				y = -y % height;
			}
		}
		ctx.fillStyle =  '#000000'
		ctx.fillRect(x ,y   ,1,1);
		
   }
	 
   requestAnimationFrame(draw)
}
draw(11);

 