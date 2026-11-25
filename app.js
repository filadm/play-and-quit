(function(){
"use strict";
var KEY="playquit.v1", DAY=864e5, HOUR=36e5, MIN=6e4;
var MILESTONES=[{d:1,l:"1d",n:"1 DAY"},{d:3,l:"3d",n:"3 DAYS"},{d:7,l:"1w",n:"1 WEEK"},{d:14,l:"2w",n:"2 WEEKS"},{d:30,l:"1m",n:"1 MONTH"},{d:90,l:"3m",n:"3 MONTHS"},{d:182,l:"6m",n:"6 MONTHS"},{d:365,l:"1y",n:"1 YEAR · FREE"}];
var PRESETS=[{e:"🚬",n:"Cigarettes",v:"Last cigarette"},{e:"🍺",n:"Alcohol",v:"Last drink"},{e:"📱",n:"Doomscrolling",v:"Last scroll"},{e:"🍬",n:"Sugar",v:"Last sweet"},{e:"🎲",n:"Gambling",v:"Last bet"},{e:"🌿",n:"Khat",v:"Last chew"}];
var TAGS=["Stress","Friends","Coffee","Bored","Party","Tired","Alone","Other"];
var CRAVE_LINES=["The craving swung. You blocked it.","Urge defeated. The run lives on.","That one didn't land. Keep going.","Craving down. Your score keeps climbing.","Blocked! Cravings pass, runs stay."];

var storageOK=true, S=load(), tab="play", ui={}, tickTimer=null, toastTimer=null, undoSnap=null;

function load(){
  try{var raw=localStorage.getItem(KEY); if(raw){var d=clean(JSON.parse(raw)); if(d) return d;}}catch(e){storageOK=false}
  return {v:1,active:null,habits:[]};
}
/* Rebuild saved or restored data field by field, so only known fields with the right types get in. */
function num(v,min,max,def){v=Number(v);return isFinite(v)?Math.min(max,Math.max(min,v)):def}
function str(v,max){return typeof v==="string"?v.slice(0,max):""}
var T_MAX=4102444800000; /* year 2100 */
function clean(d){
  if(!d||typeof d!=="object"||!Array.isArray(d.habits))return null;
  var habits=d.habits.slice(0,50).map(function(h){
    if(!h||typeof h!=="object")return null;
    var start=num(h.start,0,T_MAX,NaN);if(isNaN(start))return null;
    var runs=(Array.isArray(h.runs)?h.runs:[]).slice(0,5000).map(function(r){
      if(!r||typeof r!=="object")return null;var a=num(r.s,0,T_MAX,NaN),b=num(r.e,0,T_MAX,NaN);if(isNaN(a)||isNaN(b)||b<a)return null;
      var out=["first","up","down"].indexOf(r.out)>=0?r.out:"down";
      return {s:a,e:b,out:out,boss:r.boss==null?null:num(r.boss,0,T_MAX,0),lvl:Math.round(num(r.lvl,1,1e5,1)),tag:str(r.tag,20),note:str(r.note,80),mode:r.mode==="break"?"break":"quit"};
    }).filter(Boolean);
    var m=h.money&&typeof h.money==="object"?h.money:{};
    return {id:str(h.id,20).replace(/[^a-z0-9]/gi,"")||uid(),name:str(h.name,30)||"Habit",emoji:str(h.emoji,8)||"⭐",
      mode:h.mode==="break"?"break":"quit",days:Math.round(num(h.days,1,365,30)),start:start,level:Math.round(num(h.level,1,1e5,1)),runs:runs,
      cravings:(Array.isArray(h.cravings)?h.cravings:[]).slice(-20000).map(function(t){return num(t,0,T_MAX,NaN)}).filter(function(t){return !isNaN(t)}),
      money:{on:m.on===true,amt:num(m.amt,0,1e9,0),cur:str(m.cur,5)},chFrom:Math.round(num(h.chFrom,0,runs.length,0)),
      cleared:(Array.isArray(h.cleared)?h.cleared:[]).slice(0,1000).map(function(c){return c&&typeof c==="object"?{at:num(c.at,0,T_MAX,0),days:Math.round(num(c.days,1,365,30))}:null}).filter(Boolean),
      demo:h.demo===true};
  }).filter(Boolean);
  var active=str(d.active,20);
  return {v:1,active:habits.some(function(h){return h.id===active})?active:(habits[0]?habits[0].id:null),habits:habits};
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){storageOK=false}}
function uid(){return Math.random().toString(36).slice(2,9)}
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function p2(n){return String(n).padStart(2,"0")}
function H(){for(var i=0;i<S.habits.length;i++){if(S.habits[i].id===S.active)return S.habits[i]} return S.habits[0]||null}
function now(){return Date.now()}

/* ---------- time formatting ---------- */
function dur(ms){
  ms=Math.max(0,ms); var d=Math.floor(ms/DAY),h=Math.floor(ms%DAY/HOUR),m=Math.floor(ms%HOUR/MIN);
  if(d>0) return d+"d "+h+"h"; if(h>0) return h+"h "+m+"m"; return m+"m";
}
function clock(ms){var d=Math.floor(ms/DAY),h=Math.floor(ms%DAY/HOUR),m=Math.floor(ms%HOUR/MIN);return p2(d)+":"+p2(h)+":"+p2(m)}
function scoreHTML(ms){ms=Math.max(0,ms);var d=Math.floor(ms/DAY),h=Math.floor(ms%DAY/HOUR),m=Math.floor(ms%HOUR/MIN);
  return p2(d)+"<small>d</small>"+p2(h)+"<small>h</small>"+p2(m)+"<small>m</small>"}
function secs(ms){return p2(Math.floor(Math.max(0,ms)/1000)%60)}
function dateStr(t){var d=new Date(t);return d.toLocaleDateString(undefined,{day:"numeric",month:"short"})}
function dtStr(t){var d=new Date(t);return d.toLocaleDateString(undefined,{day:"numeric",month:"short"})+", "+d.toLocaleTimeString(undefined,{hour:"2-digit",minute:"2-digit"})}
function toLocalInput(t){var d=new Date(t);return d.getFullYear()+"-"+p2(d.getMonth()+1)+"-"+p2(d.getDate())+"T"+p2(d.getHours())+":"+p2(d.getMinutes())}
function fromLocalInput(v){if(!v)return NaN;var t=new Date(v).getTime();return t}

/* ---------- game rules ---------- */
function runLen(r){return r.e-r.s}
function boss(h){return h.runs.length?runLen(h.runs[h.runs.length-1]):null}
function elapsed(h){return now()-h.start}
function best(h){var b=elapsed(h);h.runs.forEach(function(r){b=Math.max(b,runLen(r))});return b}
function bestPast(h){var b=0;h.runs.forEach(function(r){b=Math.max(b,runLen(r))});return b}
function totalFree(h){var t=elapsed(h);h.runs.forEach(function(r){t+=runLen(r)});return t}
function beaten(h){var b=boss(h);return b!=null&&elapsed(h)>b}
function shownLevel(h){return h.level+(beaten(h)?1:0)}
function runNo(h){return h.runs.length+1}
function attemptNo(h){return h.runs.length-(h.chFrom||0)+1}
function goalMs(h){return h.days*DAY}
function cravesThisRun(h){return h.cravings.filter(function(t){return t>=h.start}).length}
function verb(h){for(var i=0;i<PRESETS.length;i++){if(PRESETS[i].n===h.name)return PRESETS[i].v} return "Last time"}

function logSlip(h,t,tag,note){
  var len=t-h.start,b=boss(h),prev=h.level,out,lvl;
  if(b==null){out="first";lvl=1}
  else if(len>b){out="up";lvl=h.level+1}
  else{out="down";lvl=1}
  h.runs.push({s:h.start,e:t,out:out,boss:b,lvl:lvl,tag:tag||"",note:note||"",mode:h.mode});
  h.level=lvl;h.start=t;
  return {out:out,len:len,boss:b,prev:prev,lvl:lvl};
}

/* ---------- rendering ---------- */
var app=document.getElementById("app"),layer=document.getElementById("layer");

function render(){
  clearInterval(tickTimer);
  var h=H();
  if(!h||ui.onboarding){app.className="app nonav";app.innerHTML=onboardHTML();renderTabs(false);bindOnboard();return}
  app.className="app";
  if(tab==="play")app.innerHTML=playHTML(h);
  else if(tab==="runs")app.innerHTML=runsHTML(h);
  else app.innerHTML=settingsHTML(h);
  renderTabs(true);
  if(tab==="play"){tick();tickTimer=setInterval(tick,1000)}
  if(tab==="runs"){tickTimer=setInterval(function(){var el=document.getElementById("liveLen");if(el)el.textContent=dur(elapsed(h))},15000)}
}

function topHTML(h,right){
  return '<div class="top"><button class="habit" data-act="habits" aria-label="Switch habit"><i>'+esc(h.emoji)+'</i><span>'+esc(h.name)+'</span><span class="car">▼</span></button>'+right+'</div>';
}

function playHTML(h){
  var b=boss(h),isBreak=h.mode==="break",out=[];
  var chip=isBreak?'<div class="lvl">'+h.days+'-DAY BREAK</div>':'<div class="lvl" id="lvlChip">LVL '+shownLevel(h)+'</div>';
  out.push(topHTML(h,chip));
  if(!storageOK)out.push('<p class="err">This browser is blocking storage, so your runs will be lost when you close it.</p>');
  if(h.demo)out.push('<div class="say"><b>Sample data.</b> These runs are made up so you can look around. <button class="link" data-act="cleardemo">Start my own game</button></div>');
  // cabinet
  var leftLab=isBreak?"GOAL":"BOSS", leftVal=isBreak?clock(goalMs(h)):(b==null?"--:--:--":clock(b));
  var rightLab=isBreak?"ATTEMPT":"RUN", rightVal="#"+(isBreak?attemptNo(h):runNo(h));
  out.push('<div class="cab"><div class="row"><div>'+leftLab+'<b>'+leftVal+'</b></div><div class="r">'+rightLab+'<b>'+rightVal+'</b></div></div>'+
    '<div class="lab">THIS RUN</div><div class="score" id="score"></div><div class="sec" id="sec"></div>'+
    '<div class="blocks" id="blocks">'+new Array(21).join("<i></i>")+'</div><div class="cap"><span id="capL"></span><b id="capR"></b></div></div>');
  // status line
  out.push('<div id="status"></div>');
  // mode specific
  if(isBreak){
    out.push('<div id="quest"></div>');
  }else{
    var L=h.level;
    var pips="";for(var i=0;i<Math.min(L,9);i++)pips+='<span class="pip on"></span>';pips+='<span class="pip now"></span>';
    out.push('<div class="chain"><div class="t"><b>Level '+L+'</b>'+(L>1?(L-1)+' run'+(L>2?'s':'')+' in a row, each longer than the one before':'Beat the Boss to start a streak')+'</div><div class="pips">'+pips+'</div></div>');
    out.push('<div class="trail" id="trail"></div>');
  }
  out.push('<div class="mini" id="mini"></div>');
  out.push('<div class="row2"><button class="btn ghost" data-act="crave">Beat a craving</button><button class="btn" data-act="slip">I slipped</button></div>');
  return '<div class="view">'+out.join("")+'</div>';
}

function tick(){
  var h=H();if(!h)return;
  var e=elapsed(h),b=boss(h),isBreak=h.mode==="break";
  var sc=document.getElementById("score");if(!sc)return;
  sc.innerHTML=scoreHTML(e);
  document.getElementById("sec").textContent=secs(e)+" SEC";
  var bl=document.getElementById("blocks"),capL=document.getElementById("capL"),capR=document.getElementById("capR");
  var target,pct,won=false;
  if(b!=null){target=b;pct=e/b;won=e>b}else{target=isBreak?goalMs(h):nextMilestone(e)*DAY;pct=e/target}
  if(isBreak){
    if(b!=null&&!won){capL.textContent="TO BEAT "+dur(b).toUpperCase();}
    else capL.textContent=won?"LAST RUN BEATEN":"TO THE GOAL";
  }else capL.textContent=b==null?"NEXT: "+milestoneName(nextMilestone(e)):"BOSS HP";
  var left=target-e;
  if(won){capR.textContent="BEATEN!";capR.className="won beaten"}
  else{capR.className="";capR.textContent=fmtLeft(left)}
  var on=Math.min(20,Math.floor(Math.max(0,won?1:pct)*20));
  bl.className="blocks"+(won?" won":"");
  Array.prototype.forEach.call(bl.children,function(el,i){el.className=won?"":(i<on?"on":(i===19&&b!=null?"flag":""))});
  var chip=document.getElementById("lvlChip");if(chip)chip.textContent="LVL "+shownLevel(h);
  // status
  var st=document.getElementById("status"),html;
  if(isBreak){
    var g=goalMs(h);
    if(e>=g) html='<div class="banner"><h3>CHALLENGE<br>CLEARED</h3><p>'+h.days+' days without '+esc(h.name.toLowerCase())+'. You did what you set out to do.</p><div class="row2"><button class="btn amber" data-act="goodmode">Go for good</button><button class="btn ghost" data-act="newgoal">New goal</button></div></div>';
    else if(b==null) html='<div class="say"><b>Attempt #1.</b> Reach '+h.days+' days to clear the challenge. If you slip, the next attempt only has to beat this one.</div>';
    else if(!won) html='<div class="say"><b>'+(attemptNo(h)>1?'Last attempt':'Your last run')+' ended at '+dur(b)+'.</b> Outlast it, then keep going to day '+h.days+'.</div>';
    else html='<div class="say win"><b>'+(attemptNo(h)>1?'Last attempt':'Your last run')+' beaten.</b> Now it\'s just you and day '+h.days+'.</div>';
  }else{
    if(e>=365*DAY) html='<div class="banner"><h3>FREE</h3><p>One full year. The habit lost. Keep the clock running as long as you like.</p></div>';
    else if(b==null) html='<div class="say"><b>First run. No Boss yet.</b> This run sets the bar. Whatever you reach becomes the Boss to beat next time.</div>';
    else if(!won) html='<div class="say"><b>The Boss: your last run, '+dur(b)+'.</b> Outlast it and you reach level '+(h.level+1)+'.</div>';
    else html='<div class="say win"><b>Boss beaten. Level '+(h.level+1)+' is yours.</b> Every extra minute now is a new high score for this run.</div>';
  }
  if(st.dataset.k!==html){st.innerHTML=html;st.dataset.k=html}
  // quest grid
  if(isBreak){
    var q=document.getElementById("quest"),N=h.days,today=Math.min(N,Math.floor(e/DAY)+1),cells="";
    for(var i=1;i<=N;i++){var c=i<today||e>=goalMs(h)?"ok":(i===today?"today":"");if(i===N&&c!=="ok")c="goal";if(i%7===0&&i!==N)c+=" cp";cells+='<i class="'+c+'">'+i+'</i>'}
    var qk=N+"|"+today+"|"+(e>=goalMs(h));
    if(q.dataset.k!==qk){
      q.dataset.k=qk;
      q.innerHTML='<div class="quest"><div class="hd"><b>No '+esc(h.name.toLowerCase())+', '+N+' days</b><span>'+Math.min(N,Math.floor(e/DAY))+' / '+N+'</span></div><div class="days" style="grid-template-columns:repeat('+Math.min(N,10)+',1fr)">'+cells+'</div><div class="legend"><span style="--c:var(--good)">done</span><span style="--c:var(--amber)">today</span>'+(N>=14?'<span class="cpk">weekly checkpoint</span>':'')+'</div></div>';
    }
  }else{
    var tr=document.getElementById("trail"),tk=Math.floor(e/MIN);
    if(tr.dataset.k!==String(tk)){tr.dataset.k=tk;tr.innerHTML=trailHTML(e)}
  }
  // mini stats
  var mini=document.getElementById("mini"),cells2=[];
  var pb=bestPast(h);
  cells2.push('<div><b>'+(pb?dur(Math.max(pb,e)):dur(e))+'</b>'+(e>pb&&pb?'Personal best, set right now':'Personal best')+'</div>');
  if(isBreak&&b!=null) cells2.push('<div><b>'+dur(b)+'</b>'+(attemptNo(h)>1?'Attempt #'+(attemptNo(h)-1):'Your last run')+' ended here'+(e>b?'. Passed ✓':'')+'</div>');
  else cells2.push('<div><b>'+cravesThisRun(h)+'</b>Cravings beaten this run</div>');
  if(h.money&&h.money.on&&h.money.amt>0){
    cells2.push('<div><b>'+money(h,e)+'</b>Saved this run</div>');
    cells2.push('<div><b>'+money(h,totalFree(h))+'</b>Saved in total</div>');
  }
  var mk=cells2.join("");if(mini.dataset.k!==mk){mini.innerHTML=mk;mini.dataset.k=mk}
}
function money(h,ms){var v=ms/DAY*h.money.amt;return (h.money.cur?esc(h.money.cur)+" ":"")+(v>=100?Math.round(v).toLocaleString():v.toFixed(2))}
function fmtLeft(ms){var hh=Math.floor(ms/HOUR),mm=Math.floor(ms%HOUR/MIN);if(hh>=48)return Math.floor(hh/24)+"D "+(hh%24)+"H LEFT";return hh+"H "+p2(mm)+"M LEFT"}
function nextMilestone(e){for(var i=0;i<MILESTONES.length;i++){if(e<MILESTONES[i].d*DAY)return MILESTONES[i].d}return 365}
function milestoneName(d){for(var i=0;i<MILESTONES.length;i++){if(MILESTONES[i].d===d)return MILESTONES[i].n.split(" ·")[0]}return ""}

function trailHTML(e){
  var n=MILESTONES.length,x0=10,x1=246,step=(x1-x0)/(n-1),pos=x0,next=null;
  for(var i=0;i<n;i++){var m=MILESTONES[i];if(e>=m.d*DAY){pos=x0+i*step}else{var prevD=i?MILESTONES[i-1].d:0,f=(e/DAY-prevD)/(m.d-prevD);pos=x0+(i-1)*step+Math.max(0,f)*step;if(i===0)pos=x0+Math.max(0,f)*0;next=m;break}}
  if(!next)pos=x1;
  var s='<div class="cap2"><span>Road to free</span><span>'+(next?next.n.split(" ·")[0].toLowerCase()+' next':'free')+'</span></div><svg viewBox="0 0 256 42" role="img" aria-label="Milestones toward one year free">';
  s+='<line x1="'+x0+'" y1="16" x2="'+x1+'" y2="16" stroke="var(--track)" stroke-width="4" stroke-linecap="round"/>';
  s+='<line x1="'+x0+'" y1="16" x2="'+Math.max(x0,pos).toFixed(1)+'" y2="16" stroke="var(--xp)" stroke-width="4" stroke-linecap="round"/>';
  for(var j=0;j<n;j++){var cx=x0+j*step,got=e>=MILESTONES[j].d*DAY,isNext=next===MILESTONES[j],last=j===n-1;
    if(last) s+='<rect x="'+(cx-8)+'" y="8" width="16" height="16" rx="3" fill="'+(got?'var(--pink)':'var(--card)')+'" stroke="var(--pink)" stroke-width="2"/>';
    else s+='<circle cx="'+cx+'" cy="16" r="5.5" fill="'+(got?'var(--xp)':(isNext?'var(--card)':'var(--track)'))+'"'+(isNext?' stroke="var(--xp)" stroke-width="2"':'')+'/>';
    s+='<text x="'+cx+'" y="38" font-size="8.5" fill="'+(last?'var(--pink)':(isNext?'var(--tx)':'var(--mu)'))+'" font-family="DM Sans,sans-serif" font-weight="'+(isNext||last?700:400)+'" text-anchor="middle">'+(last?'FREE':MILESTONES[j].l)+'</text>';}
  return s+'</svg>';
}

function runsHTML(h){
  var out=[topHTML(h,'<div class="lvl">LVL '+shownLevel(h)+'</div>'),'<h1 class="h">Your runs</h1>'];
  var e=elapsed(h),b=boss(h),rungs=[];
  rungs.push('<div class="rung live"><span class="n">#'+runNo(h)+'</span><span class="t"><b>Running now'+(beaten(h)?' · Boss beaten':'')+'</b>'+(b==null?'Setting the bar':'Boss: '+dur(b))+' · since '+dtStr(h.start)+'</span><span class="d" id="liveLen">'+dur(e)+'</span></div>');
  for(var i=h.runs.length-1;i>=0;i--){
    var r=h.runs[i],t,cls;
    if(r.out==="up"){cls="up";t='<b>Level up ▲ '+r.lvl+'</b>beat '+dur(r.boss)}
    else if(r.out==="down"){cls="down";t='<b>Knockdown ▼ 1</b>short of '+dur(r.boss)}
    else{cls="";t='<b>First run</b>'+dateStr(r.s)+' – '+dateStr(r.e)}
    if(r.tag)t+=' · '+esc(r.tag.toLowerCase());
    if(r.note)t+=' · “'+esc(r.note)+'”';
    rungs.push('<div class="rung '+cls+'"><span class="n">#'+(i+1)+'</span><span class="t">'+t+'</span><span class="d">'+dur(runLen(r))+'</span></div>');
  }
  out.push('<div class="ladder">'+rungs.join("")+'</div>');
  var ups=h.runs.filter(function(r){return r.out==="up"}).length;
  out.push('<div class="mini"><div><b>'+dur(best(h))+'</b>Longest run ever</div><div><b>'+dur(totalFree(h))+'</b>Total time free</div><div><b>'+ups+'</b>Bosses beaten</div><div><b>'+h.cravings.length+'</b>Cravings beaten</div></div>');
  if(h.mode==="break"||h.cleared.length){
    out.push('<div class="say"><b>Challenges cleared: '+h.cleared.length+'.</b> '+(h.cleared.length?h.cleared.map(function(c){return c.days+' days ('+dateStr(c.at)+')'}).join(", "):'Your first one is on the way.')+'</div>');
  }
  if(h.mode==="quit"){
    var bb=best(h);
    out.push('<div class="sect">Milestones from a single run</div><div class="goals">'+MILESTONES.map(function(m,i){var got=bb>=m.d*DAY;return '<span class="'+(i===MILESTONES.length-1?'boss ':'')+(got?'got':'')+'">'+m.n+'</span>'}).join("")+'</div>');
  }
  var tags={};h.runs.forEach(function(r){if(r.tag)tags[r.tag]=(tags[r.tag]||0)+1});
  var tk=Object.keys(tags).sort(function(a,b){return tags[b]-tags[a]});
  if(tk.length)out.push('<div class="say"><b>What sets it off most:</b> '+tk.slice(0,3).map(function(k){return esc(k.toLowerCase())+' ('+tags[k]+')'}).join(", ")+'</div>');
  return '<div class="view">'+out.join("")+'</div>';
}

function settingsHTML(h){
  var m=h.money||{on:false,amt:0,cur:""};
  var o=[topHTML(h,''),'<h1 class="h">Settings</h1>'];
  o.push('<div class="sect">This habit</div><div class="card">'+
    '<div class="inline"><label class="fld" style="flex:0 0 74px">Icon<input id="sEmoji" maxlength="4" value="'+esc(h.emoji)+'"></label><label class="fld">Name<input id="sName" maxlength="30" value="'+esc(h.name)+'"></label></div>'+
    '<div class="fld">Mode<div class="chips"><button class="chip'+(h.mode==="quit"?" on":"")+'" data-act="smode" data-v="quit">Quit for good</button><button class="chip'+(h.mode==="break"?" on":"")+'" data-act="smode" data-v="break">Take a break</button></div></div>'+
    (h.mode==="break"?'<label class="fld">Challenge length in days<input id="sDays" type="number" min="1" max="180" inputmode="numeric" value="'+h.days+'"></label>':'')+
    '<label class="fld">This run started<input id="sStart" type="datetime-local" value="'+toLocalInput(h.start)+'"></label><p class="note">Change this only to fix a mistake. It moves the start of the run you are on now.</p>'+
    '<button class="btn" data-act="savehabit">Save changes</button><p class="err" id="sErr" hidden></p></div>');
  o.push('<div class="sect">Money saved</div><div class="card"><label class="toggle"><span>Show money saved<small>Off by default. Turn it on to count what you don\'t spend.</small></span><span class="sw"><input type="checkbox" id="mOn"'+(m.on?" checked":"")+'><span></span></span></label>'+
    '<div id="mFields"'+(m.on?'':' hidden')+'><div class="inline"><label class="fld">Spent per day<input id="mAmt" type="number" min="0" step="0.01" inputmode="decimal" value="'+(m.amt||"")+'" placeholder="e.g. 150"></label><label class="fld" style="flex:0 0 96px">Currency<input id="mCur" maxlength="5" value="'+esc(m.cur||"")+'" placeholder="ETB"></label></div></div></div>');
  o.push('<div class="sect">Your data</div><div class="card"><p class="note">Everything stays on this device. Copy a backup to keep it safe or move it to another phone.</p>'+
    '<div class="row2"><button class="btn ghost" data-act="export">Copy backup</button><button class="btn ghost" data-act="import">Restore backup</button></div>'+
    '<div id="dataBox" hidden><label class="fld"><span id="dataLab">Backup</span><textarea id="dataTxt" spellcheck="false"></textarea></label><button class="btn" data-act="doimport" id="doImport" hidden>Restore from this text</button><p class="note" id="dataMsg"></p></div></div>');
  o.push('<div class="sect">How the game works</div><div class="card rulebox">'+
    '<div><b>A run</b> is the time since you last did it.</div><div><b>The Boss</b> is your last run. Outlast it to level up, and this run becomes the next Boss.</div>'+
    '<div><b>A Knockdown</b> is a slip. If the run was shorter than the Boss, your level goes back to 1 and that shorter run is the new Boss. Your personal best always stays.</div>'+
    '<div><b>Take a break</b> is a set challenge, like 30 days. Weekly checkpoints keep you going.</div></div>');
  o.push('<div class="card"><button class="btn danger" data-act="delhabit">Delete this habit</button><div id="delConfirm" hidden><p class="note" style="margin-bottom:8px">This deletes '+esc(h.name)+' and all its runs from this device.</p><div class="row2"><button class="btn ghost" data-act="delno">Keep it</button><button class="btn danger" data-act="delyes">Delete</button></div></div></div>');
  o.push('<p class="note" style="text-align:center">Play and Quit · working title · first build</p>');
  return '<div class="view">'+o.join("")+'</div>';
}

/* ---------- onboarding ---------- */
var ob={preset:0,name:"",emoji:"🚬",mode:"quit",days:30,when:null};
function onboardHTML(){
  var first=!S.habits.length, o=[];
  o.push('<div class="hero"><div class="lvl">NEW GAME</div><h1 class="h">'+(first?'Beat your last run. Then quit for good.':'Add a habit')+'</h1>'+
    (first?'<p>Log the last time you did it. Each new run has to outlast the one before. Fall short and you\'re back to level 1, but the bar drops to that run too.</p>':'')+'</div>');
  o.push('<div class="sect">What are you quitting?</div><div class="chips" id="obPresets">'+PRESETS.map(function(p,i){return '<button class="chip'+(ob.preset===i?" on":"")+'" data-act="obpreset" data-i="'+i+'">'+p.e+' '+p.n+'</button>'}).join("")+'<button class="chip'+(ob.preset===-1?" on":"")+'" data-act="obpreset" data-i="-1">✏️ Something else</button></div>');
  o.push('<div class="inline" id="obCustom"'+(ob.preset===-1?'':' hidden')+'><label class="fld" style="flex:0 0 74px">Icon<input id="obEmoji" maxlength="4" value="'+esc(ob.preset===-1?ob.emoji:"⭐")+'"></label><label class="fld">Name<input id="obName" maxlength="30" placeholder="e.g. Energy drinks" value="'+esc(ob.name)+'"></label></div>');
  o.push('<div class="sect">How do you want to play?</div>');
  o.push('<button class="mode'+(ob.mode==="quit"?" sel":"")+'" data-act="obmode" data-v="quit"><span class="tag">MODE 1</span><h3>Quit for good</h3><p>No end date. Outlast every run until the habit is gone. Final goal: 1 year free.</p></button>');
  o.push('<button class="mode'+(ob.mode==="break"?" sel":"")+'" data-act="obmode" data-v="break"><span class="tag">MODE 2</span><h3>Take a break</h3><p>Stop for a set time and clear the challenge.</p></button>');
  o.push('<div id="obDays"'+(ob.mode==="break"?'':' hidden')+'><div class="chips">'+[7,30,90].map(function(d){return '<button class="chip'+(ob.days===d?" on":"")+'" data-act="obdays" data-v="'+d+'">'+(d===7?'1 week':d+' days')+'</button>'}).join("")+
    '<label class="fld" style="flex:0 0 120px;flex-direction:row;align-items:center"><input id="obDaysN" type="number" min="1" max="180" inputmode="numeric" value="'+ob.days+'" aria-label="Custom number of days" style="padding:8px 10px"><span>&nbsp;days</span></label></div></div>');
  var lbl=ob.preset>=0?PRESETS[ob.preset].v:"Last time";
  o.push('<label class="fld"><span id="obWhenLab">'+lbl+'</span><input id="obWhen" type="datetime-local" value="'+toLocalInput(ob.when||now())+'"></label>');
  o.push('<p class="err" id="obErr" hidden></p>');
  o.push('<button class="btn" data-act="obstart">Start run #1</button>');
  if(first)o.push('<button class="link" data-act="demo" style="align-self:center">Look around with sample data first</button>');
  else o.push('<button class="link" data-act="obcancel" style="align-self:center">Cancel</button>');
  return '<div class="view">'+o.join("")+'</div>';
}
function bindOnboard(){}
function obRead(){var w=document.getElementById("obWhen");if(w)ob.when=fromLocalInput(w.value)||ob.when;var n=document.getElementById("obName");if(n)ob.name=n.value;var em=document.getElementById("obEmoji");if(em&&ob.preset===-1)ob.emoji=em.value;var dn=document.getElementById("obDaysN");if(dn&&+dn.value)ob.days=Math.max(1,Math.min(180,Math.round(+dn.value)))}

function newHabit(name,emoji,mode,days,start){
  return {id:uid(),name:name,emoji:emoji,mode:mode,days:days,start:start,level:1,runs:[],cravings:[],money:{on:false,amt:0,cur:""},chFrom:0,cleared:[]};
}

function demoHabit(){
  var t=now(),h=newHabit("Cigarettes","🚬","quit",30,0);h.demo=true;
  var lens=[[3,0],[1,9],[2,1],[4,6]],tags=["","Stress","Coffee","Friends"],s=t-(3*DAY+10*HOUR+12*MIN)-lens.reduce(function(a,l){return a+l[0]*DAY+l[1]*HOUR},0)-4*HOUR;
  h.start=s;
  lens.forEach(function(l,i){var e=s+l[0]*DAY+l[1]*HOUR;logSlip(h,e,tags[i]);s=e});
  h.start=t-(3*DAY+10*HOUR+12*MIN);
  h.cravings=[t-5*HOUR,t-30*HOUR,t-50*HOUR];
  return h;
}

/* ---------- tabs ---------- */
var ICONS={play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="4"/><path d="M8 10v4M6 12h4"/><circle cx="16" cy="11" r="1" fill="currentColor"/><circle cx="18" cy="13" r="1" fill="currentColor"/></svg>',
  runs:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 20V14M10 20V9M15 20V12M20 20V5"/></svg>',
  set:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>'};
function renderTabs(show){
  var el=document.getElementById("tabs");
  if(!show){if(el)el.remove();return}
  if(!el){el=document.createElement("nav");el.id="tabs";el.className="tabs";el.setAttribute("aria-label","Main");document.body.appendChild(el)}
  el.innerHTML='<div>'+[["play","Play"],["runs","Runs"],["set","Settings"]].map(function(t){return '<button class="tab'+(tab===t[0]?" on":"")+'" data-act="tab" data-v="'+t[0]+'"'+(tab===t[0]?' aria-current="page"':'')+'>'+ICONS[t[0]]+t[1]+'</button>'}).join("")+'</div>';
}

/* ---------- sheets & overlays ---------- */
function closeLayer(){layer.innerHTML=""}
function slipSheet(h){
  var tags=TAGS.map(function(t){return '<button class="chip" data-act="tag" data-v="'+t+'">'+t+'</button>'}).join("");
  layer.innerHTML='<div class="scrim" data-act="scrim"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="slipT"><div class="grab"></div><h2 id="slipT">Log a slip</h2>'+
    '<p class="note">Run #'+runNo(h)+' is at '+dur(elapsed(h))+'. '+(boss(h)==null?'This is your first run, so it will set the bar.':'The Boss is '+dur(boss(h))+'.')+'</p>'+
    '<label class="fld">When did it happen?<input id="slWhen" type="datetime-local" value="'+toLocalInput(now())+'"></label>'+
    '<div class="fld">What set it off? (optional)<div class="chips" id="slTags">'+tags+'</div></div>'+
    '<label class="fld">Note (optional)<input id="slNote" maxlength="80" placeholder="Anything to remember next time"></label>'+
    '<p class="err" id="slErr" hidden></p><div class="row2"><button class="btn ghost" data-act="close">Cancel</button><button class="btn" data-act="doslip">Log it</button></div></div></div>';
  ui.tag="";
}
function resultOverlay(h,r){
  var head,cls,body,lvlLine,newb;
  if(r.out==="first"){head="FIRST RUN<br>LOGGED";cls="first";body="You set the bar. The next run only has to beat it.";
    newb='First Boss: <b>'+dur(r.len)+'</b>. Go one minute longer and you reach level 2.';lvlLine='<div class="lose"><span>LEVEL</span><b class="up">1</b></div>'}
  else if(r.out==="up"){head="BOSS<br>BEATEN";cls="up";body="You outlasted your last run. That's a level up, even with the slip.";
    newb='New Boss: <b>'+dur(r.len)+'</b>. This run is the one to beat now.';lvlLine='<div class="lose"><span>LEVEL</span><b class="up">'+r.prev+' → '+r.lvl+'</b></div>'}
  else{head="KNOCK<br>DOWN";cls="";body="This run fell short of the Boss. Get back up. Your next run only has to beat this one.";
    newb='New Boss: <b>'+dur(r.len)+'</b>. Go one minute longer and you\'re back to level 2.';lvlLine='<div class="lose"><span>LEVEL</span><b>'+r.prev+' → 1</b></div>'}
  var vs=r.boss==null?'':'<div class="vs"><div class="'+(r.out==="down"?"won":"")+'">BOSS<b>'+dur(r.boss)+'</b></div><span class="x">VS</span><div class="'+(r.out==="up"?"won":"")+'">THIS RUN<b>'+dur(r.len)+'</b></div></div>';
  var isBreak=h.mode==="break";
  var label=isBreak?"▶ START ATTEMPT #"+attemptNo(h):"▶ START RUN #"+runNo(h);
  layer.innerHTML='<div class="over" role="dialog" aria-modal="true" aria-label="Run result"><div class="in"><h4 class="'+cls+'">'+head+'</h4><p>'+body+'</p>'+vs+lvlLine+'<div class="newb">'+newb+'</div>'+
    '<p style="font-size:13px">Your personal best stays at <b style="color:var(--amber)">'+dur(best(h))+'</b>.</p>'+
    '<div class="gap"><button class="btn px" data-act="close">'+label+'</button><button class="btn ghost" data-act="undo">Undo, I logged this by mistake</button></div></div></div>';
}
function habitsSheet(){
  var list=S.habits.map(function(h){return '<button class="hitem'+(h.id===S.active?" on":"")+'" data-act="pick" data-v="'+h.id+'"><i>'+esc(h.emoji)+'</i><span>'+esc(h.name)+'<small>'+(h.mode==="break"?h.days+'-day break':'Quit for good · level '+shownLevel(h))+' · '+dur(elapsed(h))+'</small></span></button>'}).join("");
  layer.innerHTML='<div class="scrim" data-act="scrim"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="hT"><div class="grab"></div><h2 id="hT">Your games</h2><div class="hlist">'+list+'</div><button class="btn ghost" data-act="addhabit">+ Add a habit</button></div></div>';
}
function goalSheet(h){
  layer.innerHTML='<div class="scrim" data-act="scrim"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="gT"><div class="grab"></div><h2 id="gT">Set a new goal</h2><p class="note">Your run keeps going. Pick a longer finish line.</p>'+
    '<label class="fld">Total days<input id="gDays" type="number" min="'+(h.days+1)+'" max="365" inputmode="numeric" value="'+Math.min(365,h.days*2)+'"></label><p class="err" id="gErr" hidden></p>'+
    '<div class="row2"><button class="btn ghost" data-act="close">Cancel</button><button class="btn" data-act="dogoal">Set goal</button></div></div></div>';
}
function toast(title,msg){
  var old=document.getElementById("toast");if(old)old.remove();clearTimeout(toastTimer);
  var t=document.createElement("div");t.id="toast";t.className="toast";t.setAttribute("role","status");t.innerHTML='<b>'+title+'</b>'+msg;document.body.appendChild(t);
  toastTimer=setTimeout(function(){t.remove()},3200);
}
function showErr(id,msg){var e=document.getElementById(id);if(e){e.textContent=msg;e.hidden=false}}

/* ---------- actions ---------- */
document.addEventListener("click",function(ev){
  var el=ev.target.closest("[data-act]");if(!el)return;
  var act=el.dataset.act,h=H();
  if(act==="scrim"){if(ev.target===el)closeLayer();return}
  switch(act){
    case "tab":tab=el.dataset.v;window.scrollTo(0,0);render();break;
    case "close":closeLayer();render();break;
    case "slip":slipSheet(h);break;
    case "tag":
      var on=el.classList.contains("on");Array.prototype.forEach.call(document.querySelectorAll("#slTags .chip"),function(c){c.classList.remove("on")});
      if(!on){el.classList.add("on");ui.tag=el.dataset.v}else ui.tag="";break;
    case "doslip":
      var t=fromLocalInput(document.getElementById("slWhen").value);
      if(isNaN(t))return showErr("slErr","Pick a date and time.");
      if(t<h.start)return showErr("slErr","That's before this run started ("+dtStr(h.start)+"). Pick a later time.");
      if(t>now()+MIN)return showErr("slErr","That time is in the future. Pick a time up to now.");
      undoSnap=JSON.stringify(S);
      var r=logSlip(h,Math.min(t,now()),ui.tag,document.getElementById("slNote").value.trim());
      save();resultOverlay(h,r);break;
    case "undo":if(undoSnap){S=JSON.parse(undoSnap);undoSnap=null;save()}closeLayer();render();toast("UNDONE","The slip was removed. Your run continues.");break;
    case "crave":
      h.cravings.push(now());save();tick();
      toast("+1 CRAVING BEATEN",CRAVE_LINES[Math.floor(Math.random()*CRAVE_LINES.length)]+" ("+cravesThisRun(h)+" this run)");break;
    case "goodmode":
      h.cleared.push({at:now(),days:h.days});h.mode="quit";save();render();toast("MODE: QUIT FOR GOOD","Your run keeps going. Next stop: 1 year free.");break;
    case "newgoal":goalSheet(h);break;
    case "dogoal":
      var g=Math.round(+document.getElementById("gDays").value);
      if(!(g>h.days&&g<=365))return showErr("gErr","Pick a number between "+(h.days+1)+" and 365.");
      h.cleared.push({at:now(),days:h.days});h.days=g;save();closeLayer();render();toast("NEW GOAL",g+" days. Your run keeps going.");break;
    case "habits":habitsSheet();break;
    case "pick":S.active=el.dataset.v;save();closeLayer();render();break;
    case "addhabit":closeLayer();ob={preset:0,name:"",emoji:"🚬",mode:"quit",days:30,when:null};ui.onboarding=true;render();break;
    case "obcancel":ui.onboarding=false;render();break;
    case "obpreset":obRead();ob.preset=+el.dataset.i;render();break;
    case "obmode":obRead();ob.mode=el.dataset.v;render();break;
    case "obdays":obRead();ob.days=+el.dataset.v;render();break;
    case "obstart":
      obRead();
      var name,emoji;if(ob.preset>=0){name=PRESETS[ob.preset].n;emoji=PRESETS[ob.preset].e}else{name=(ob.name||"").trim();emoji=(ob.emoji||"⭐").trim()||"⭐"}
      if(!name)return showErr("obErr","Give the habit a name.");
      var w=ob.when;if(isNaN(w)||!w)return showErr("obErr","Pick when you last did it.");
      if(w>now()+MIN)return showErr("obErr","That time is in the future. Pick a time up to now.");
      var nh=newHabit(name,emoji,ob.mode,ob.days,Math.min(w,now()));
      S.habits=S.habits.filter(function(x){return !x.demo});
      S.habits.push(nh);S.active=nh.id;ui.onboarding=false;tab="play";save();render();
      toast("RUN #1 STARTED","Your first run sets the bar.");break;
    case "demo":var d=demoHabit();S.habits.push(d);S.active=d.id;save();tab="play";render();break;
    case "cleardemo":S.habits=S.habits.filter(function(x){return !x.demo});S.active=S.habits[0]?S.habits[0].id:null;save();ob={preset:0,name:"",emoji:"🚬",mode:"quit",days:30,when:null};ui.onboarding=!S.habits.length?false:true;render();break;
    case "smode":
      var v=el.dataset.v;if(v!==h.mode){h.mode=v;if(v==="break")h.chFrom=h.runs.length;save();render();toast("MODE CHANGED",v==="break"?h.days+"-day break. Your run keeps going.":"Quit for good. Your run keeps going.")}break;
    case "savehabit":
      var nm=document.getElementById("sName").value.trim(),em2=document.getElementById("sEmoji").value.trim(),st=fromLocalInput(document.getElementById("sStart").value),dd=document.getElementById("sDays");
      if(!nm)return showErr("sErr","Give the habit a name.");
      if(isNaN(st))return showErr("sErr","Pick a start time.");
      if(st>now())return showErr("sErr","The start can't be in the future.");
      var lastEnd=h.runs.length?h.runs[h.runs.length-1].e:-Infinity;
      if(st<lastEnd)return showErr("sErr","The start can't be before your last slip ("+dtStr(lastEnd)+").");
      if(dd){var dv=Math.round(+dd.value);if(!(dv>=1&&dv<=180))return showErr("sErr","Pick a challenge length from 1 to 180 days.");h.days=dv}
      h.name=nm;h.emoji=em2||h.emoji;h.start=st;save();render();toast("SAVED","Your changes are saved.");break;
    case "export":
      var box=document.getElementById("dataBox"),ta=document.getElementById("dataTxt");box.hidden=false;document.getElementById("doImport").hidden=true;
      document.getElementById("dataLab").textContent="Your backup";ta.value=JSON.stringify(S);
      var msg=document.getElementById("dataMsg");
      try{navigator.clipboard.writeText(ta.value).then(function(){msg.textContent="Copied. Paste it somewhere safe, like a note to yourself."},function(){ta.select();msg.textContent="Select the text above and copy it."})}catch(e){ta.select();msg.textContent="Select the text above and copy it."}
      break;
    case "import":
      document.getElementById("dataBox").hidden=false;document.getElementById("doImport").hidden=false;document.getElementById("dataLab").textContent="Paste your backup";
      var ta2=document.getElementById("dataTxt");ta2.value="";ta2.focus();document.getElementById("dataMsg").textContent="Restoring replaces everything on this device.";break;
    case "doimport":
      try{var txt=document.getElementById("dataTxt").value;if(txt.length>5e6)throw 0;var dat=clean(JSON.parse(txt));if(!dat||!dat.habits.length)throw 0;S=dat;save();render();toast("RESTORED","Your backup is loaded.")}
      catch(e){document.getElementById("dataMsg").textContent="That text isn't a Play and Quit backup. Copy the whole backup and try again."}break;
    case "delhabit":document.getElementById("delConfirm").hidden=false;el.hidden=true;break;
    case "delno":render();break;
    case "delyes":S.habits=S.habits.filter(function(x){return x.id!==h.id});S.active=S.habits[0]?S.habits[0].id:null;save();tab="play";render();break;
  }
});
document.addEventListener("change",function(ev){
  var h=H();if(!h)return;
  if(ev.target.id==="mOn"){h.money=h.money||{on:false,amt:0,cur:""};h.money.on=ev.target.checked;document.getElementById("mFields").hidden=!h.money.on;save()}
  if(ev.target.id==="mAmt"){h.money.amt=Math.max(0,+ev.target.value||0);save()}
  if(ev.target.id==="mCur"){h.money.cur=ev.target.value.trim();save()}
  if(ev.target.id==="obWhen"||ev.target.id==="obDaysN"){obRead();if(ev.target.id==="obDaysN"){Array.prototype.forEach.call(document.querySelectorAll('[data-act="obdays"]'),function(c){c.classList.toggle("on",+c.dataset.v===ob.days)})}}
});
document.addEventListener("keydown",function(ev){if(ev.key==="Escape"&&layer.innerHTML){closeLayer();render()}});
document.addEventListener("visibilitychange",function(){if(!document.hidden&&tab==="play"&&!layer.innerHTML)tick()});

render();

/* PWA: register the service worker when hosted on its own site */
if("serviceWorker" in navigator && document.querySelector('link[rel="manifest"]')){
  window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})});
}
})();
