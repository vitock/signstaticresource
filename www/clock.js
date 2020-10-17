var dom = document.getElementById('clock');//获取dom元素
var ctx = dom.getContext('2d');//创建context对象

var height = ctx.canvas.height;//canvas高度
 console.log(width,height)
 dom.width = window.innerWidth;
 var width = ctx.canvas.width;//canvas宽度

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
 

	ctx.clearRect(0,0,width,height)

	var dJ = 0,dX =0;
	for (var  j = 0; j < height; j += dJ) {
		dJ = 8 + 5 * Math.abs(Math.cos(time/500  +  j/50));
		for (var index = 0 ; index < width; index += dX  ) {
			dX = 8 + 5 * Math.abs( Math.sin(time/500  +   index/50))
			y = j;

		 
 
			// ctx.fillStyle = `rgb(${ Math.abs(Math.sin(dX+ dJ + ( index * j) / 150)) * 255},${Math.abs(Math.cos(dX+ ( index * j) / 150)  ) * 255},${Math.abs(Math.cos(dX+ ( index * j) / 150)) * 255})`;
			ctx.fillStyle = '#c3c3c3';
			ctx.fillRect(index,y   ,dX - 2 ,dJ -2);
	   }

	}

	
	time /= 5;
	let start =   Math.floor(  width /5  *  Math.sin(time/300));// -width/2;
	
	for (let index = start; index < width + start; index += 4) {
		var  x1 =  Math.pow(Math.abs(index + time),0.5) +  Math.cos(Math.pow(Math.abs(index),0.4 )  +   (time + index) / 100 ) ;
		var y = 200*  Math.sin(x1) + 10 *  Math.pow( Math.abs(index),0.4);

  


		y += height/2;
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
		const i = Math.abs(index % 3);
		ctx.fillStyle = '#000'; i  == 1 ? '#00f': i == 2 ?  '#f00' :'#0f0';  
		ctx.fillRect(index -start , y  ,4,4);
   }
	 
   requestAnimationFrame(draw)
}
draw(11);

 