document.getElementById("run").onclick = function() {
	const x1 = document.getElementById("x1").value;
	const x2 = document.getElementById("x2").value;
	const y1 = document.getElementById("y1").value;
	let y2 = document.getElementById("y2").value;
	y2 = -1 * y2;

	let canvas = document.getElementById("myCanvas");
	let context = canvas.getContext("2d");

	/*for (let i = 0; i < canvas.height / sqY; i++) {
		for (let j = 0; j < canvas.width / sqX; j++) {
			context.strokeRect(sqX * j, sqY * i, sqX, sqY);
		}
	}*/

	//context.strokeRect(0, 0, );
	context.strokeStyle = 'red';
    context.lineWidth = 1;
	context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

document.getElementById("draw").onclick = function(){
	let canvas = document.getElementById("myCanvas");
	let context = canvas.getContext("2d");
	let sqx = 50;
	let sqy = 50;
	let herosqx = 5;
	let herosqy = 2;
	let img = new Image();

	function drawEmptyGrid() {
		for(let i = 0; i < canvas.height / sqy; i++) {
			for(let j = 0; j < canvas.width / sqx; j++) {
				context.fillStyle = "white";
				context.fillRect(sqx * j, sqy * i, sqx, sqy);
				context.strokeRect(sqx * j, sqy * i, sqx, sqy);
			}
		}
	}

	drawEmptyGrid();

	canvas.onclick = function(e) {
		let x = e.clientX;
		let y = e.clientY;
		herosqx = Math.floor(x / sqx);
		herosqy = Math.floor(y / sqy);
		drawEmptyGrid();
		context.fillStyle = "black";
		context.drawImage(img, sqx * herosqx, sqy * herosqy , sqx, sqy);
	}

	document.onkeydown = function(e) {
		switch (e.key) {
			case "w": herosqy -= 1; break;
			case "a": herosqx -= 1; break;
			case "d": herosqx += 1; break;
			case "s": herosqy += 1; break;
		}
		drawEmptyGrid();
		context.fillStyle = "black";
		context.drawImage(img, sqx * herosqx, sqy * herosqy , sqx, sqy);
	}
}
	


/*let dulzhinaOx = 16;
let otstoyanieOtGore = 9; // това е за оста Ox
let otstoyanieOtLyavo = 9; // това е за оста Оy

let canvas_width = canvas.width;
console.log(canvas_width);
let canvas_height = canvas.height;
console.log(canvas_height);
let broiLiniiX = Math.floor(canvas_height/dulzhinaOx);
console.log(broiLiniiX);
let broiLiniiY = Math.floor(canvas_width/dulzhinaOx);
console.log(broiLiniiY);*/
//context.strokeRect(sqX * j, sqY * i, sqX, sqY);

//let sqX = 50;
//let sqY = 50;
//canvas.height = 200;
//canvas.width = 500;



