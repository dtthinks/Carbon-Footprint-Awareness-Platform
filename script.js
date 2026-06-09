
function animateValue(end){
let current=0;
const score=document.getElementById('score');
const timer=setInterval(()=>{
current+=Math.ceil(end/30);
if(current>=end){
current=end;
clearInterval(timer);
}
score.textContent=current;
},30);
}

function analyze(){
const t=+travel.value||0;
const e=+electricity.value||0;
const a=+ac.value||0;
const d=+diet.value||0;

const total=Math.round((t*0.21)+(e*0.4)+(a*3)+d);

animateValue(total);

let risk='Low';
let plan=['Maintain sustainable habits'];

if(total>150){
risk='Medium';
plan=['Reduce AC usage','Use public transport','Monitor energy'];
}
if(total>250){
risk='High';
plan=['Switch to LEDs','Reduce travel emissions','Track weekly footprint'];
}

document.getElementById('risk').textContent='Risk: '+risk;

document.getElementById('plan').innerHTML=plan.map(x=>'<li>'+x+'</li>').join('');

const percent=Math.min(total/4,100);
document.getElementById('circle').style.background=
`conic-gradient(#10b981 ${percent}%, rgba(255,255,255,.15) ${percent}%)`;
}
