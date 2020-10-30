var dom = document.getElementById('clock');//获取dom元素
var ctx = dom.getContext('2d');//创建context对象


 
//  dom.width = window.innerWidth - 150
 dom.width = 440;
 dom.height = 440;
 var width = ctx.canvas.width ;//canvas宽度
 var height = ctx.canvas.height;//canvas高度
 console.log(width,height)
 
var t = 1;
function shuffle(t) {
	for (var e, r, a = t, o = a.length; o; ) r = Math.floor(Math.random() * o--), e = a[o], 
	a[o] = a[r], a[r] = e;
	return a;
}
let arrT = '0123456789abcdef0123456789abcdef0123456789abcdef'.split("");
var getRandomColor = function(index){    
	return '#' +  shuffle(arrT).slice(0,6).join('');
 } 

 
 
var t = 0;
function draw(time){
	console.log(time)
	// if(time - t < 33){
	// 	requestAnimationFrame(draw)
	// 	return;
	// }

	t = time;
 
	// time /= 10;
	ctx.clearRect(0,0,width,height)
//    {
// 		for (let i = 0; i < width; i+= 80) {
// 			for (let j = 0; j < height; j += 80) {
// 				ctx.fillStyle =  getRandomColor();
// 				ctx.fillRect(i ,j  ,72,72);
// 			}
// 		}
// 	}
	

 
 
	
	time /= 10;
	let start =   0 ;
	
	let color = 0x0e0e0e;
	for (let angel = start; angel <  39.8; angel += 0.01) {

		
		var r =   angel ;
 
		var x =   2 * r * Math.sin( angel + time/29);
		var  y =  5 * r * Math.cos( angel + time /28 ) + x;
 
		y +=  height/2;
		x +=  width /2;


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
		x +=  width /5 ;+   (width - 50) * Math.abs(Math.sin(time/197 ))
	
	
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

draw(1);