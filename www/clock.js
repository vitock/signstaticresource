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
	for (var  j = 0,dJ = 14 + 3 * Math.cos(time/400 + j/40) ; j < height; j += dJ) {
		for (var index = 0,  dX = 14 + 3 * Math.sin(time/300 + (j /50 + index%40)) ; index < width; index += dX  ) {
			 
			y = j;

		 


			



			ctx.fillStyle = `rgb(${ Math.abs(Math.sin(time/153 + (2 * index + j)  / 30)) * 255},${Math.abs(Math.cos(time/151 + (index + 2 * j ) / 30)  ) * 255},${Math.abs(Math.cos(time/152 + (  index + j )  / 30)) * 255})`;
			// `rgb(${r * 255 },${g * 255 },${b * 255})`;
			ctx.fillRect(index,y   ,dX - 2 ,dJ -2);
	   }

	}

	time /= 20;
	let start =  Math.floor(time/550);// -width/2;
	
	for (let index = start; index < width + start; index += 4) {
		var  x1 =  Math.pow(Math.abs(index),0.3) +  Math.cos(Math.pow(Math.abs(index),0.4 )  +   (time + index) / 100 ) * 2 + 2;
		var y =  Math.pow(Math.abs(index),0.5) +  (x1   * (Math.sin(x1 ) + 3 + x1 * 1.5 ) ) + Math.tan(Math.cos(time/30 + index/100));
		y = y + (x1 + 4) * (x1 + 5) + 4 * Math.cos(index/51 + time/30) + 5 * Math.sin(index/31 +  time/110);


  


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
		ctx.fillStyle = '#000' ;//  i  == 1 ? '#00f': i == 2 ?  '#f00' :'#0f0';  
		ctx.fillRect(index -start , y  ,4,4);
   }
	 
   requestAnimationFrame(draw)
}
draw(11);

 