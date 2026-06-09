
const btn=document.getElementById('analyzeBtn');

function n(id){
 const v=parseFloat(document.getElementById(id).value);
 return isNaN(v)?0:v;
}

function analyze(){
 const score=(n('travel')*0.21)+(n('electricity')*0.4)+(n('ac')*3)+Number(document.getElementById('diet').value);

 let risk='Low';
 let badge='🌱 Eco Hero';
 let plan=[
 'Use public transport twice weekly',
 'Reduce AC usage by 1 hour daily',
 'Monitor energy consumption'
 ];

 if(score>150){
   risk='Medium';
   badge='♻️ Green Challenger';
 }
 if(score>250){
   risk='High';
   badge='⚠️ Carbon Reducer Needed';
   plan.push('Switch to LED appliances');
   plan.push('Track monthly emissions');
 }

 document.getElementById('result').innerHTML=`
 <h3>${score.toFixed(2)} kg CO₂/month</h3>
 <p>Risk Level: ${risk}</p>
 `;

 document.getElementById('badge').textContent=badge;

 document.getElementById('plan').innerHTML=plan.map(x=>`<li>${x}</li>`).join('');

 document.getElementById('fill').style.width=Math.min(score/4,100)+'%';

 localStorage.setItem('lastScore',score);
}

btn.addEventListener('click',analyze);
