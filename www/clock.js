var dom = document.getElementById('clock');//获取dom元素
var ctx = dom.getContext('2d');//创建context对象
var width = ctx.canvas.width;//canvas宽度
var height = ctx.canvas.height;//canvas高度
 
 
 

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
	for (var  j = 0,dJ = 9 + 3 * Math.cos(time/400 + j/40) ; j < height; j += dJ) {
		for (var index = 0,  dX = 9 + 3 * Math.sin(time/300 + (j /50 + index/40)) ; index < width; index += dX  ) {
			 
			y = j
			ctx.fillStyle = 
			`rgb(${ Math.abs(Math.sin(time/150 + (2 * index + j)  / 30)) * 255},${Math.abs(Math.cos(time/160 + (index + 2 * j ) / 30)  ) * 255},${Math.abs(Math.cos(time/155 + (  index * j )  / 30)) * 255})`;
			ctx.fillRect(index,y   ,dX - 2 ,dJ -2);
	   }

	}

	for (let index = 0; index < width; index += 2) {
		const x1 =  50 *   Math.cos(index +  time / 520 );
		var y = x1 + height/ 2;
		const i = index % 3;
		ctx.fillStyle =  i   == 1 ? '#00f': i == 2 ?  '#f00' :'#0f0';  
		ctx.fillRect(index,y  ,4,4 );
   }
	 
   requestAnimationFrame(draw)
}
draw(11);

 