var dom = document.getElementById('clock');//获取dom元素
var ctx = dom.getContext('2d');//创建context对象


 
 dom.width = window.innerWidth;
//  dom.height = window.innerHeight;
 var width = ctx.canvas.width;//canvas宽度
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

	var dJ = 0,dX =0;
	for (var  j = 0; j < height; j += dJ) {
		dJ = 8 + 5 * Math.abs(Math.cos(time/500  + dX / 15 + dJ/15 +  j/50));
		for (var index = 0 ; index < width; index += dX  ) {
			dX = 8 + 5 * Math.abs( Math.sin(time/500  + dJ / 15 + dX/15  + j/40 + index/50))
			y = j;

			// ctx.fillStyle = `rgb(${ Math.abs(  Math.sin(Math.cos(time / 510)  + ( 2 * index +  j +  time/7 ) / 150)) * 255},${Math.abs(Math.cos(Math.sign(time/500)  + ( index + 2 * j +  time / 8) / 150)  ) * 255},${Math.abs(Math.cos( Math.sign(time/500) +  ( index + j + time / 9) / 150) ) * 255})`;
			ctx.fillStyle = '#c3c3c3';
			ctx.fillRect(index,y   ,dX - 2 ,dJ -2);
	   }

	}

	
	time /= 10;
	let start =   0 ;
	
	let color = 0x0e0e0e;
	for (let angel = start; angel <  56.28; angel += 0.01) {

		let r = 15 * (3 +5 *  Math.sin(angel + time / 50) +  1 *  Math.cos(angel * angel + time/61) +  0.5 * Math.sin(time / 47) )
 

		var x =   r * Math.cos( angel );
		var  y =   r * Math.sin( angel  );
 
		y += 50 +  (height - 90) * Math.abs(Math.cos( time/189 ))
		x += 50 +   (width - 90) * Math.abs(Math.sin(time/197 ))


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

 
		ctx.fillStyle =  '#000000'

		color += 0x0e0e0e;
		ctx.fillRect(x ,y   ,1,1);
   }
	 
   requestAnimationFrame(draw)
}
draw(11);

 