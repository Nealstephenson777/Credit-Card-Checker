const words = new URLSearchParams(window.location.search);
var q = words.get('ccnum')
const y = q.split('');

const t = y.splice(-1, 1);

const s = t.map(element => Number(element));

const i = s.reduce((acc, ele) => acc += ele,0);

const z = [...y];


const f = z.map((element, index) => {
if(index % 2 === 0){
  return element * 2;
  }
  return element;
});

const k = z.map((element, index) => {
if(index % 2 === 1){
  return element * 2;
  }
  return element;
});

const checkLength = (z.length % 2 === 1) ? f : k;

const c = checkLength.map(element => (element > 9) ? element - 9 : Number(element));

const m = c.reduce(getSum);

function getSum(total,num){
  return total + num;
}

const j = m + i;

const w = j % 10;

function compareCSum() {
  const comp = (w === 0) ? 'true' : 'false';
  return comp;
}

function isValid () {
  if(isNaN(q) || compareCSum() === 'false'){
    return `<p class="shadow">Sorry!</p><br><p class="shadow" >Card number: <span class="shadow" >${q}</span> has failed the checking criteria</p>\n <p class="shadow" > Please check the number and try again!</p>`;
  }
     return `<p class="shadow" >Hurray!</p><br><p class="shadow" >Card number:<class="shadow" span>${q}</span></p> \n <class="shadow" p>is valid.</p>`;
}

const display = document.getElementById("screen");
display.innerHTML = isValid();
// const tam = ['4303824040887910']
// const me = ['5374100200356892']
// them = ['3529141658564915171']
//const y = ['3529141658564915171'];
