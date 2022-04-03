const words = new URLSearchParams(window.location.search);


var q = words.get('ccnum')
var y = q.split('');
var t = y.splice(-1, 1);
var z = [...y];

var f = z.map((element, index) => {
  if(index % 2 === 0){
    return element * 2;
    }
    return element;
    });

var j = f.map(element => {
  if(element > 9){
    return element - 9;
    }
    return Number(element);
    });

var s = t.map(element => Number(element));
var i = s.reduce((acc, ele) => acc += ele,0);
var m = j.reduce((acc, ele) => acc += ele,0);
var w = m % 10;

function compareCSum() {
  if(w === i){
    return 'true';
  }
  return 'false';
}




function isValid () {
  if(isNaN(q) || compareCSum() === 'false'){
    return `<p class="shadow">Sorry!</p><br><p class="shadow" >Card number: <span class="shadow" >${q}</span> has failed the checking criteria</p>\n <p class="shadow" > Please check the number and try again!</p>`;
  }
   return `<p class="shadow" >Hurray!</p><br><p class="shadow" >Card number:<class="shadow" span>${q}</span></p> \n <class="shadow" p>is valid.</p>`;
}

  const display = document.getElementById("screen");

  display.innerHTML = isValid();
