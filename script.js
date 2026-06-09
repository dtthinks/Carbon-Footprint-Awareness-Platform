
function calculate(){
const t=+document.getElementById('travel').value;
const e=+document.getElementById('electricity').value;
const a=+document.getElementById('ac').value;
const d=+document.getElementById('diet').value;

const score=(t*0.21)+(e*0.4)+(a*3)+d;

let level='Low';
let advice='Excellent sustainability habits.';
if(score>150){level='Medium';advice='Reduce transport emissions and optimize electricity usage.';}
if(score>250){level='High';advice='Your largest emissions come from travel and energy consumption. Use public transport, reduce AC usage, and adopt energy-efficient appliances.';}

document.getElementById('score').innerHTML=
`Carbon Score: <b>${score.toFixed(2)} kg CO₂/month</b><br>Risk Level: <b>${level}</b>`;

document.getElementById('advice').innerHTML=
`<h4>AI Recommendation</h4>${advice}`;
}
