const loader=document.getElementById("loader");
const loaderStars=document.getElementById("loaderStars");
const opening=document.getElementById("opening");
const story=document.getElementById("story");
const ending=document.getElementById("ending");
const startBtn=document.getElementById("startBtn");
const nextBtn=document.getElementById("nextBtn");
const finishBtn=document.getElementById("finishBtn");
const replay=document.getElementById("replay");
const messagesEl=document.getElementById("messages");
const counter=document.getElementById("counter");
const progress=document.getElementById("progress");
const music=document.getElementById("bgMusic");
const hearts=document.getElementById("hearts");
const stars=document.getElementById("stars");

const messages=[
 {time:"23 AUG · THE FIRST LOOK",side:"left",text:"فاكرة اول مرة شوفتك فيها؟",sub:"انا وقتها مكنتش اعرف ان النظرة الصغيرة دي هتكون اول سطر في حكاية كبيرة."},
 {time:"THE BEGINNING",side:"right",text:"وقتها كنتي مجرد بنت لفتت نظري.",sub:"ومكنتش اعرف ان بعد فترة قصيرة هبقى مستني اشوفك واتكلم معاكي واعرف عنك تفاصيل اكتر."},
 {time:"A LITTLE CURIOSITY",side:"left",text:"كل مرة كنت بشوفك فيها كنت باخد بالي اكتر.",sub:"ومع كل مرة الموضوع كان بيكبر شوية من غير ما احس."},
 {time:"10 SEP · CRUSH",side:"right",text:"لحد ما وصلت للحظة اللي اعترفت فيها لنفسي… انا بدات اكراش عليكي بجد 😂🤍",sub:"م مجرد اعجاب عابر لا… بقيتي حد بيفضل في بالي حتى وانا مشغول."},
 {time:"THE SCARY PART",side:"left",text:"بس كان في حاجة خوفتني.",sub:"اني مكنتش عارف ابدا كلام معاكي ازاي وكنت خايف ان اي خطوة غلط تبوّظ كل حاجة قبل ما تبدا اصلاً."},
 {time:"THAT TOUCH",side:"right",text:"والتاتش اللي حصل… بجد كنت خايف يخسرنا بعض بسببه.",sub:"كنت بفكر: يا ترى اللي حصل ده هيخلينا م نتكلم؟ يا ترى هعرف اوصلك عادي؟ وكان عندي خوف حقيقي اننا منعرفش حتى نبدا كلام."},
 {time:"BUT…",side:"left",text:"الحمدلله ان خوفي مطلعش في محله.",sub:"لان بدل ما الحاجة دي تبعدنا اهو احنا وصلنا لهدفنا… وبقينا جزء من يوم بعض."},
 {time:"15 SEP · FIRST REAL TALK",side:"right",text:"وبعدين بدانا نتكلم بجد.",sub:"وده كان من احلى الحاجات لانك من بعيد كنتي جميلة… بس وانا بعرفك اكتشفت ان شخصيتك احلى من كل اللي كنت متخيله."},
 {time:"THE MOMENT I NEVER EXPECTED",side:"left",text:"ولما انتي اعترفتي… انا بجد مكنتش مصدق.",sub:"فضلت مستغرب ومبسوط في نفس الوقت. يمكن من كتر ما كنت خايف ان اللي جوايا يكون من طرف واحد."},
 {time:"22 SEP · US",side:"right",text:"لحد ما جه 22/09.",sub:"اليوم اللي الكلام بقى اسمه «احنا». اليوم اللي حسيت فيه ان كل الصدف والخوف والتردد وصلونا لحاجة جميلة اوي."},
 {time:"AND THEN… 21 DAYS",side:"left",text:"21 يوم بس.",sub:"رقم صغير جدًا بس خلالهم بقيتي جزء من تفاصيل يومي بطريقة انا نفسي مكنتش متوقعها."},
 {time:"THE LITTLE THINGS",side:"right",text:"بقيت احب كلامك ضحكتك طريقتك وحتى التفاصيل الصغيرة اللي يمكن انتي نفسك م واخدة بالك منها.",sub:"الحاجات اللي تبان عادية عندك بالنسبالي بقت حاجات بتفرق."},
 {time:"THE PHOTO",side:"center",photo:true,text:"وبصراحة… انتي قمر.",sub:"قمر بجد وربنا يديمك ليا ويخلي ضحكتك دي دايمًا موجودة."},
 {time:"MY HONEST CONFESSION",side:"left",text:"انا م هقول كلام كبير واوعدك بالدنيا كلها.",sub:"بس هقولك حاجة صادقة: انا مبسوط انك دخلتي حياتي ومبسوط اكتر ان كل ده حصل بالطريقة دي وان شاء الله تبقي ليا ينور عيني قريب وعندك يوافقو واجيلك."},
 {time:"ONE LAST MESSAGE",side:"right",text:"انتيبجد احلى صدفة حصلت في حياتي.",sub:"وربنا يديمك ليا ويديم بينا كل حاجة حلوة ويخلي الـ21 يوم دول مجرد بداية لحاجات كتير احلى جاية. 🤍"}
];

let index=0,started=false,locked=false;

function makeStars(container,count){
 for(let i=0;i<count;i++){
  const s=document.createElement("i");
  s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";
  s.style.animationDelay=Math.random()*5+"s";
  s.style.animationDuration=3+Math.random()*5+"s";
  container.appendChild(s);
 }
}
function createHeart(){
 const h=document.createElement("span");
 h.className="heart";h.textContent=["♡","♥","✦","·"][Math.floor(Math.random()*4)];
 h.style.left=Math.random()*100+"%";h.style.setProperty("--dx",(Math.random()-.5)*150+"px");
 h.style.setProperty("--dur",3+Math.random()*3+"s");
 hearts.appendChild(h);setTimeout(()=>h.remove(),6500);
}
function rain(n=18){for(let i=0;i<n;i++)setTimeout(createHeart,i*100)}

function sleep(ms){return new Promise(r=>setTimeout(r,ms))}
async function typeText(el,text,speed=18){
 el.textContent="";
 for(const c of text){el.textContent+=c;await sleep(speed)}
}
function startMusic(){
 music.volume=0;
 music.play().then(()=>{
  let v=0;const f=setInterval(()=>{v+=.025;music.volume=Math.min(v,.42);if(v>=.42)clearInterval(f)},70)
 }).catch(()=>{});
}
function fadeMusic(){
 let v=music.volume;const f=setInterval(()=>{v-=.035;music.volume=Math.max(v,0);if(v<=0){clearInterval(f);music.pause();music.currentTime=0}},60)
}

async function renderMessage(i){
 locked=true;
 counter.textContent=String(i+1).padStart(2,"0");
 progress.style.width=((i+1)/messages.length*100)+"%";
 messagesEl.innerHTML="";
 const m=messages[i];

 if(m.photo){
  const pc=document.createElement("div");pc.className="photo-message";
  pc.innerHTML=`<div class="photo-card"><div class="photo-glow"></div><img src="bac.jpeg" alt="Jomana"><div class="scan"></div><span>بجد انتي قمر 🤍</span></div>`;
  messagesEl.appendChild(pc);
  await sleep(750);
 }
 const meta=document.createElement("div");meta.className="message-meta";meta.textContent=m.time;messagesEl.appendChild(meta);
 const bubble=document.createElement("article");bubble.className="bubble "+m.side;
 const main=document.createElement("div");main.className="main-line";
 const sub=document.createElement("p");sub.className="sub-line";
 bubble.append(main,sub);messagesEl.appendChild(bubble);
 await sleep(280);
 await typeText(main,m.text,m.text.length>55?13:22);
 await sleep(180);
 await typeText(sub,m.sub,12);
 if(m.photo||i===5||i===8||i===14)rain(24);
 if(i===messages.length-1){
  nextBtn.classList.add("hidden");finishBtn.classList.remove("hidden");
 }else{
  nextBtn.classList.remove("hidden");finishBtn.classList.add("hidden");
 }
 locked=false;
}

async function begin(){
 if(started)return;started=true;startMusic();
 opening.classList.add("exit");await sleep(850);
 opening.classList.add("hidden");story.classList.remove("hidden");
 await sleep(350);renderMessage(0);
}
async function next(){
 if(!started||locked)return;
 if(index<messages.length-1){index++;await renderMessage(index)}
}
function finish() {
  if (locked) return;
  story.classList.add("fade-out");
  setTimeout(() => {
    story.classList.add("hidden");
    ending.classList.remove("hidden");
    ending.classList.add("show");
    rain(35);
  }, 700);
}
function reset(){
 ending.classList.remove("show");ending.classList.add("hidden");
 story.classList.remove("fade-out");story.classList.add("hidden");
 opening.classList.remove("hidden","exit");
 index=0;started=false;messagesEl.innerHTML="";progress.style.width="0%";
 nextBtn.classList.remove("hidden");finishBtn.classList.add("hidden");
}
startBtn.addEventListener("click",begin);
nextBtn.addEventListener("click",next);
finishBtn.addEventListener("click",finish);
replay.addEventListener("click",()=>{reset();setTimeout(begin,300)});
document.addEventListener("keydown",e=>{
 if(e.code==="Space"||e.code==="ArrowDown"||e.code==="Enter"){e.preventDefault();started?next():begin()}
});
let touchStart=0;
story.addEventListener("touchstart",e=>touchStart=e.touches[0].clientY,{passive:true});
story.addEventListener("touchend",e=>{
 const dy=touchStart-e.changedTouches[0].clientY;
 if(Math.abs(dy)>45)dy>0?next():null;
},{passive:true});

makeStars(stars,80);makeStars(loaderStars,110);
setInterval(createHeart,1200);

window.addEventListener("load",()=>{
 setTimeout(()=>loader.classList.add("loaded"),2800);
});
