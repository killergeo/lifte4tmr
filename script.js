// ==========================================
// SITE CONFIGURATION — LIFTE4TMR
// ==========================================
const SITE_CONFIG = {
  brandPrefix: "LIFTE",
  brandName: "4TMR",
  fullName: "LIFTE4TMR",
  tagline: "STRONGER TOMORROW",
  domain: "lifte4tmr.site"
};

function applyBrandConfig() {
  document.title = `${SITE_CONFIG.fullName} — Workout System & Daily Training`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = `${SITE_CONFIG.fullName} — workout library, training plans, and daily sessions.`;

  // Update all logos
  document.querySelectorAll('.logo').forEach(el => {
    el.innerHTML = `<img src="images/logo_emblem.png?v=3" alt="${SITE_CONFIG.fullName}" class="logo-mark"><span class="logo-text"><span class="brand-base">${SITE_CONFIG.brandPrefix}</span><span class="slash">${SITE_CONFIG.brandName}</span></span>`;
  });

  // Update hero micro
  const heroMicro = document.querySelector('.hero-copy .micro');
  if (heroMicro) heroMicro.textContent = `${SITE_CONFIG.fullName} • ${SITE_CONFIG.tagline}`;

  // Update daily micro
  const dailyMicro = document.querySelector('.today-copy .micro');
  if (dailyMicro) dailyMicro.textContent = `${SITE_CONFIG.fullName} DAILY`;

  // Update identity section
  const idMark = document.querySelector('.identity-mark');
  if (idMark) idMark.innerHTML = `<img src="images/logo_badge.png?v=3" alt="${SITE_CONFIG.fullName}" class="identity-logo">`;
  const idMicro = document.querySelector('.identity .micro');
  if (idMicro) idMicro.textContent = SITE_CONFIG.fullName;

  // Update footer copyright
  const footerYear = document.querySelector('footer > span') || document.querySelector('footer span');
  if (footerYear) footerYear.textContent = `© ${new Date().getFullYear()} ${SITE_CONFIG.domain || SITE_CONFIG.fullName}`;
}

const workouts = [
  {name:'Full Body Strength',image:'images/workouts/workout-1.jpg',level:'Beginner',duration:'45 min',equipment:'Dumbbells',focus:'Full Body',location:'Gym',goal:'Strength',description:'A straightforward full-body session using controlled reps and simple movement patterns.',exercises:[['Goblet Squat','3','8–10','75 sec'],['Dumbbell Bench Press','3','8–10','75 sec'],['One-Arm Dumbbell Row','3','10 each side','60 sec'],['Dumbbell Romanian Deadlift','3','10','75 sec'],['Standing Dumbbell Press','2','10','60 sec'],['Front Plank','3','30–45 sec','45 sec']]},
  {name:'Chest Builder',image:'images/workouts/workout-2.jpg',level:'Intermediate',duration:'42 min',equipment:'Bench + Dumbbells',focus:'Chest / Triceps',location:'Gym',goal:'Build Muscle',description:'A chest-focused session built around pressing volume and controlled accessory work.',exercises:[['Dumbbell Bench Press','4','8–12','90 sec'],['Incline Dumbbell Press','3','8–12','75 sec'],['Cable or Dumbbell Fly','3','12–15','60 sec'],['Push-Up','3','Near technical failure','75 sec'],['Triceps Pressdown','3','10–15','60 sec']]},
  {name:'Back Density',image:'images/workouts/workout-3.jpg',level:'Intermediate',duration:'50 min',equipment:'Full Gym',focus:'Back / Biceps',location:'Gym',goal:'Build Muscle',description:'Rows and pulldowns for a stronger, thicker back with direct biceps work at the end.',exercises:[['Lat Pulldown','4','8–12','90 sec'],['Chest-Supported Row','4','8–12','90 sec'],['Single-Arm Cable Row','3','10 each side','75 sec'],['Rear-Delt Fly','3','12–15','60 sec'],['Incline Dumbbell Curl','3','10–12','60 sec']]},
  {name:'Leg Day Power',image:'images/workouts/workout-4.jpg',level:'Intermediate',duration:'55 min',equipment:'Barbell + Machines',focus:'Quads / Glutes / Hamstrings',location:'Gym',goal:'Strength',description:'A lower-body strength session with squats, hinging, and unilateral work.',exercises:[['Back Squat','4','5–6','2 min'],['Romanian Deadlift','4','6–8','2 min'],['Leg Press','3','10','90 sec'],['Walking Lunge','3','10 each side','75 sec'],['Standing Calf Raise','3','12–15','60 sec']]},
  {name:'Shoulder Frame',image:'images/workouts/workout-5.jpg',level:'Intermediate',duration:'38 min',equipment:'Dumbbells + Cable',focus:'Shoulders',location:'Gym',goal:'Build Muscle',description:'Pressing and raise variations for delts without turning the session into endless junk volume.',exercises:[['Seated Dumbbell Press','4','8–10','90 sec'],['Cable Lateral Raise','4','12–15','45 sec'],['Rear-Delt Cable Fly','3','12–15','45 sec'],['Dumbbell Lateral Raise','2','15–20','45 sec'],['Farmer Carry','3','30 sec','60 sec']]},
  {name:'Arm Pump',image:'images/workouts/workout-6.jpg',level:'Beginner',duration:'30 min',equipment:'Dumbbells + Cable',focus:'Arms',location:'Gym',goal:'Build Muscle',description:'Simple biceps and triceps work for a short arm-focused session.',exercises:[['Cable Curl','3','10–12','60 sec'],['Rope Pressdown','3','10–12','60 sec'],['Hammer Curl','3','10','60 sec'],['Overhead Triceps Extension','3','10–12','60 sec'],['Reverse Curl','2','12–15','45 sec']]},
  {name:'Home Bodyweight',image:'images/workouts/workout-7.jpg',level:'Beginner',duration:'25 min',equipment:'No Equipment',focus:'Full Body',location:'Home',goal:'Conditioning',description:'No gym required. A simple circuit that works in a bedroom, living room, or outside.',exercises:[['Bodyweight Squat','4','15','20 sec'],['Incline or Floor Push-Up','4','8–15','20 sec'],['Reverse Lunge','4','10 each side','20 sec'],['Glute Bridge','4','15','20 sec'],['Mountain Climber','4','30 sec','60 sec after round']]},
  {name:'Core Control',image:'images/workouts/workout-8.jpg',level:'All Levels',duration:'22 min',equipment:'Mat',focus:'Core',location:'Anywhere',goal:'Strength',description:'Core training based on bracing and control instead of endless crunches.',exercises:[['Dead Bug','3','8 each side','30 sec'],['Front Plank','3','30–45 sec','45 sec'],['Side Plank','3','20–35 sec each','45 sec'],['Bird Dog','3','8 each side','30 sec'],['Slow Mountain Climber','2','10 each side','45 sec']]},
  {name:'HIIT 20',image:'images/workouts/workout-9.jpg',level:'Intermediate',duration:'20 min',equipment:'No Equipment',focus:'Full Body Conditioning',location:'Anywhere',goal:'Conditioning',description:'A short, hard bodyweight circuit with simple movements and quick transitions.',exercises:[['Squat to Reach','5 rounds','40 sec','20 sec'],['Push-Up','5 rounds','40 sec','20 sec'],['Alternating Reverse Lunge','5 rounds','40 sec','20 sec'],['High Knees or Fast March','5 rounds','40 sec','60 sec after round']]},
  {name:'Mobility Reset',image:'images/workouts/workout-10.jpg',level:'All Levels',duration:'20 min',equipment:'Mat',focus:'Hips / Shoulders / Spine',location:'Anywhere',goal:'Mobility',description:'An easy reset for rest days, after sitting, or after hard training.',exercises:[['Cat-Cow','2','8 slow reps','As needed'],['90/90 Hip Switch','2','8 each side','As needed'],["World's Greatest Stretch",'2','5 each side','As needed'],['Thread the Needle','2','8 each side','As needed'],["Child's Pose Breathing",'2','45 sec','As needed']]},
  {name:'Beginner Gym Starter',image:'images/workouts/workout-11.jpg',level:'Beginner',duration:'45 min',equipment:'Machines + Dumbbells',focus:'Full Body',location:'Gym',goal:'Build Muscle',description:'A low-confusion first gym routine with basic machines and dumbbells.',exercises:[['Leg Press','3','10–12','75 sec'],['Machine Chest Press','3','10–12','75 sec'],['Lat Pulldown','3','10–12','75 sec'],['Dumbbell Romanian Deadlift','3','10','75 sec'],['Cable Row','2','12','60 sec'],['Farmer Carry','3','30 sec','60 sec']]},
  {name:'Advanced Push Pull',image:'images/workouts/workout-12.jpg',level:'Advanced',duration:'65 min',equipment:'Full Gym',focus:'Upper Body',location:'Gym',goal:'Build Muscle',description:'Higher-volume upper-body work for experienced lifters who already handle regular resistance training.',exercises:[['Bench Press','4','6–8','2 min'],['Weighted Pull-Up or Pulldown','4','6–8','2 min'],['Incline Dumbbell Press','3','8–10','90 sec'],['Chest-Supported Row','3','8–10','90 sec'],['Cable Lateral Raise','3','12–15','60 sec'],['Cable Curl + Pressdown','3 supersets','10–12 each','60 sec']]},
  {name:'Glute Hamstring Day',image:'images/workouts/workout-13.jpg',level:'Intermediate',duration:'50 min',equipment:'Barbell + Dumbbells',focus:'Glutes / Hamstrings',location:'Gym',goal:'Build Muscle',description:'Posterior-chain training built around strong hip extension and hamstring work.',exercises:[['Romanian Deadlift','4','6–10','90 sec'],['Hip Thrust','4','8–12','90 sec'],['Bulgarian Split Squat','3','8 each side','75 sec'],['Leg Curl','3','10–15','60 sec'],['Back Extension','3','10–15','60 sec']]},
  {name:'Dumbbell Only Muscle',image:'images/workouts/workout-14.jpg',level:'Intermediate',duration:'45 min',equipment:'Dumbbells',focus:'Full Body',location:'Home',goal:'Build Muscle',description:'A full-body hypertrophy session for people who only have dumbbells.',exercises:[['Dumbbell Front Squat','3','8–12','75 sec'],['Dumbbell Floor Press','3','8–12','75 sec'],['Dumbbell Row','3','10 each side','60 sec'],['Dumbbell RDL','3','10–12','75 sec'],['Lateral Raise','3','12–15','45 sec'],['Hammer Curl','2','10–12','45 sec']]},
  {name:'Morning Movement',image:'images/workouts/workout-15.jpg',level:'All Levels',duration:'12 min',equipment:'No Equipment',focus:'Mobility / Light Conditioning',location:'Home',goal:'Mobility',description:'A short morning routine to loosen up and get moving without crushing yourself.',exercises:[['March in Place','2','60 sec','15 sec'],['Bodyweight Squat','2','10','20 sec'],['Wall Push-Up','2','10','20 sec'],['Hip Hinge Reach','2','10','20 sec'],['Standing Thoracic Rotation','2','6 each side','As needed']]},
  {name:'Gym Conditioning Circuit',image:'images/workouts/workout-16.jpg',level:'Intermediate',duration:'30 min',equipment:'Bike + Dumbbells + Bench',focus:'Conditioning',location:'Gym',goal:'Conditioning',description:'Cardio and resistance work mixed into one focused gym circuit.',exercises:[['Stationary Bike','4 rounds','90 sec','20 sec'],['Dumbbell Goblet Squat','4 rounds','12','20 sec'],['Incline Push-Up','4 rounds','10–15','20 sec'],['Dumbbell Row','4 rounds','10 each side','60 sec after round']]},
  {name:'Pull-Up Progress',image:'images/workouts/workout-17.jpg',level:'Beginner',duration:'30 min',equipment:'Pull-Up Bar + Band',focus:'Back / Grip',location:'Gym',goal:'Strength',description:'A progression session for building the strength and control needed for better pull-ups.',exercises:[['Dead Hang','3','20–30 sec','45 sec'],['Scapular Pull-Up','3','6–8','60 sec'],['Band-Assisted Pull-Up','4','5–8','90 sec'],['Slow Negative Pull-Up','3','3–5','90 sec'],['Band Row','3','12–15','60 sec']]},
  {name:'Squat Technique',image:'images/workouts/workout-18.jpg',level:'Beginner',duration:'35 min',equipment:'Barbell or Goblet Weight',focus:'Legs / Technique',location:'Gym',goal:'Strength',description:'A lower-intensity practice day built to make every squat rep cleaner and more repeatable.',exercises:[['Bodyweight Box Squat','2','10','45 sec'],['Goblet Squat','3','8','60 sec'],['Light Back Squat','5','3','90 sec','Keep the load easy enough that every rep looks the same.'],['Split Squat','3','8 each side','60 sec'],['Calf Raise','3','12–15','45 sec']]}
];


const exerciseGuides = {
  'squat': { img: 'images/exercises/squat-demo.jpg', tip: 'Chest tall, brace core, break at hips & knees together, descend below parallel and drive through full foot.' },
  'bench': { img: 'images/exercises/bench-demo.jpg', tip: 'Squeeze shoulder blades into bench, maintain solid arch, lower bar to mid-chest, press up firmly.' },
  'row': { img: 'images/exercises/row-demo.jpg', tip: 'Hinge at hips with flat back, drive elbows towards hips, squeeze back muscles, control the eccentric.' },
  'deadlift': { img: 'images/exercises/deadlift-demo.jpg', tip: 'Hinge back at hips, engage lats, push floor away and squeeze glutes at the top lockout.' },
  'press': { img: 'images/exercises/overhead-demo.jpg', tip: 'Brace core & glutes, press weight directly overhead without excessive spine arch, lock out overhead.' },
  'arms': { img: 'images/exercises/arms-demo.jpg', tip: 'Pin elbows in place, squeeze biceps or triceps through full contraction, lower under strict control.' },
  'core': { img: 'images/exercises/core-demo.jpg', tip: 'Straight line from heels to head, squeeze glutes, pull belly button inward, breathe steadily.' },
  'lunge': { img: 'images/exercises/lunge-demo.jpg', tip: 'Take a generous stride, drop rear knee straight down, drive through front heel to return.' },
  'pullup': { img: 'images/exercises/pullup-demo.jpg', tip: 'Full dead hang to initiate, depress scapulae, pull chest to bar, pause briefly, lower smoothly.' },
  'pushup': { img: 'images/exercises/pushup-demo.jpg', tip: 'Keep body locked in plank, elbows at 45 degrees, lower chest until near floor, push up with power.' },
  'mobility': { img: 'images/exercises/mobility-demo.jpg', tip: 'Slow, deep breathing into the movement. Never force sharp pain, expand range smoothly.' },
  'hiit': { img: 'images/exercises/hiit-demo.jpg', tip: 'Explosive cadence, land softly on balls of feet, keep core braced and breathing controlled.' }
};

function getExerciseGuide(name) {
  const n = (name || '').toLowerCase();
  if (n.includes('squat')) return exerciseGuides['squat'];
  if (n.includes('bench') || n.includes('fly')) return exerciseGuides['bench'];
  if (n.includes('push-up')) return exerciseGuides['pushup'];
  if (n.includes('pull-up') || n.includes('pulldown') || n.includes('hang')) return exerciseGuides['pullup'];
  if (n.includes('row')) return exerciseGuides['row'];
  if (n.includes('rdl') || n.includes('deadlift') || n.includes('hip thrust') || n.includes('extension')) return exerciseGuides['deadlift'];
  if (n.includes('press') || n.includes('lateral') || n.includes('delt')) return exerciseGuides['press'];
  if (n.includes('curl') || n.includes('triceps') || n.includes('pressdown')) return exerciseGuides['arms'];
  if (n.includes('plank') || n.includes('bug') || n.includes('bird') || n.includes('core')) return exerciseGuides['core'];
  if (n.includes('lunge') || n.includes('split')) return exerciseGuides['lunge'];
  if (n.includes('stretch') || n.includes('cat-cow') || n.includes('pose') || n.includes('switch') || n.includes('needle') || n.includes('rotation')) return exerciseGuides['mobility'];
  return exerciseGuides['hiit'];
}

const bodyGroups = [
  ['CHEST','chest'],['BACK','back'],['LEGS','legs'],['ARMS','arms'],
  ['SHOULDERS','shoulders'],['CORE','core'],['FULL BODY','full body'],['HOME','home']
];

const week = [
  ['MON','PUSH','Chest • Shoulders • Triceps'],
  ['TUE','PULL','Back • Biceps • Rear delts'],
  ['WED','ENGINE','Core • Conditioning'],
  ['THU','LOWER','Legs • Glutes • Hamstrings'],
  ['FRI','FULL BODY','Strength • Carries • Core'],
  ['SAT','RESET','Mobility • Easy movement'],
  ['SUN','OFF','Rest • Walk • Recover']
];

const $ = s => document.querySelector(s);
const grid = $('#workout-grid');
const search = $('#search');
const goal = $('#goal');
const level = $('#level');
const locationSelect = $('#location');
const empty = $('#empty');
const modal = $('#workout-modal');
const modalContent = $('#modal-content');

$('#body-grid').innerHTML = bodyGroups.map(([label,term]) => `
  <button class="body-btn" data-term="${term}">
    <strong>${label}</strong><span>VIEW →</span>
  </button>`).join('');

$('#weekly-plan').innerHTML = week.map(([day,title,desc],i)=>`
  <article class="day">
    <span class="day-no">${String(i+1).padStart(2,'0')} / ${day}</span>
    <strong>${title}</strong>
    <p>${desc}</p>
    <span>${SITE_CONFIG.fullName} SPLIT</span>
  </article>`).join('');

function esc(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]))}

function render(){
  const q = search.value.trim().toLowerCase();
  const rows = workouts.filter(w=>{
    const hay = `${w.name} ${w.focus} ${w.equipment} ${w.goal} ${w.location} ${w.level}`.toLowerCase();
    return (!q || hay.includes(q))
      && (goal.value==='All'||w.goal===goal.value)
      && (level.value==='All'||w.level===level.value)
      && (locationSelect.value==='All'||w.location===locationSelect.value);
  });

  $('#result-count').textContent = rows.length;
  empty.hidden = rows.length !== 0;
  grid.innerHTML = rows.map((w,idx)=>{
    const i=workouts.indexOf(w);
    return `<article class="workout-card">
      <div class="card-thumb" style="background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.85)),url('${w.image}')">
        <span class="workout-index">A//${String(i+1).padStart(2,'0')}</span>
        <span class="card-level-badge">${esc(w.level)}</span>
      </div>
      <div class="card-body">
        <h3>${esc(w.name)}</h3>
        <div class="card-meta">
          <span>${esc(w.duration)}</span><span>${esc(w.equipment)}</span><span>${esc(w.location)}</span>
        </div>
        <p>${esc(w.description)}</p>
        <button class="open-workout" data-index="${i}">OPEN SESSION →</button>
      </div>
    </article>`;
  }).join('');
}

function openWorkout(index){
  const w=workouts[index];
  if(!w)return;
  modalContent.innerHTML = `<div class="modal-wrap">
    <div class="modal-banner" style="background-image:linear-gradient(rgba(10,13,17,.5),rgba(10,13,17,.95)),url('${w.image}')">
      <div class="modal-head">
        <div class="micro">${esc(w.goal)} • ${esc(w.focus)}</div>
        <h2>${esc(w.name)}</h2>
        <p>${esc(w.description)}</p>
        <div class="modal-stats">
          <div><span>LEVEL</span><strong>${esc(w.level)}</strong></div>
          <div><span>TIME</span><strong>${esc(w.duration)}</strong></div>
          <div><span>EQUIPMENT</span><strong>${esc(w.equipment)}</strong></div>
          <div><span>WHERE</span><strong>${esc(w.location)}</strong></div>
        </div>
      </div>
    </div>

    <div class="exercise-section-header">
      <div class="micro">MOVEMENT DEMONSTRATIONS & FORM GUIDE</div>
      <h3>EXERCISES IN THIS WORKOUT</h3>
      <p>Follow the form cues and visual demonstrations below to execute each movement with proper technique.</p>
    </div>

    <div class="exercise-cards-list">
      ${w.exercises.map((e,i)=>{
        const guide = getExerciseGuide(e[0]);
        return `
        <article class="exercise-card">
          <div class="exercise-thumb" style="background-image:linear-gradient(rgba(0,0,0,.15),rgba(0,0,0,.75)),url('${guide.img}')">
            <span class="exercise-badge">MOVE #${i+1}</span>
          </div>
          <div class="exercise-details">
            <div class="exercise-top">
              <h4>${i+1}. ${esc(e[0])}</h4>
              <div class="exercise-metrics">
                <span><strong>${esc(e[1])}</strong> SETS</span>
                <span><strong>${esc(e[2])}</strong> REPS</span>
                <span><strong>${esc(e[3])}</strong> REST</span>
              </div>
            </div>
            <div class="exercise-form-cue">
              <span class="cue-label">PROPER FORM:</span> ${esc(guide.tip)}
              ${e[4] ? `<div class="exercise-extra-note">💡 ${esc(e[4])}</div>` : ''}
            </div>
          </div>
        </article>`;
      }).join('')}
    </div>

    <div class="modal-note"><strong>TRAIN SMART:</strong> warm up, use controlled reps, pick a load you can handle with solid form, and stop if you feel sharp pain, dizziness, or unusual symptoms.</div>
  </div>`;
  modal.showModal();
}

function setDaily(index){
  const w=workouts[index];
  $('#daily-number').textContent = `#${String(index+1).padStart(2,'0')}`;
  $('#daily-name').textContent = w.name;
  $('#daily-desc').textContent = w.description;
  $('#daily-stats').innerHTML = `
    <div><span>TIME</span><strong>${w.duration}</strong></div>
    <div><span>LEVEL</span><strong>${w.level}</strong></div>
    <div><span>WHERE</span><strong>${w.location}</strong></div>`;
  $('#daily-open').dataset.index = index;
  $('#hero-today-name').textContent = w.name;
  $('#hero-today-meta').textContent = `${w.duration} • ${w.level} • ${w.equipment}`;
  $('#hero-open-today').dataset.index = index;
}

function randomIndex(){
  return Math.floor(Math.random()*workouts.length);
}

[search,goal,level,locationSelect].forEach(el=>el.addEventListener('input',render));
$('#clear').addEventListener('click',()=>{search.value='';goal.value='All';level.value='All';locationSelect.value='All';render()});
grid.addEventListener('click',e=>{const b=e.target.closest('.open-workout');if(b)openWorkout(Number(b.dataset.index))});
$('#body-grid').addEventListener('click',e=>{
  const b=e.target.closest('[data-term]'); if(!b)return;
  search.value=b.dataset.term; goal.value='All'; level.value='All'; locationSelect.value='All'; render();
  $('#library').scrollIntoView({behavior:'smooth'});
});
document.querySelectorAll('.lane').forEach(b=>b.addEventListener('click',()=>{
  goal.value=b.dataset.goal; search.value=''; level.value='All'; locationSelect.value='All'; render();
  $('#library').scrollIntoView({behavior:'smooth'});
}));
$('#random-workout').addEventListener('click',()=>setDaily(randomIndex()));
$('#random-top').addEventListener('click',()=>{const i=randomIndex();setDaily(i);openWorkout(i)});
$('#daily-open').addEventListener('click',e=>openWorkout(Number(e.currentTarget.dataset.index)));
$('#hero-open-today').addEventListener('click',e=>openWorkout(Number(e.currentTarget.dataset.index)));
$('#modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  $('#scroll-progress').style.width=(max>0?(window.scrollY/max)*100:0)+'%';
},{passive:true});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('on')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const dayOfYear=Math.floor((Date.now()-new Date(new Date().getFullYear(),0,0))/86400000);
applyBrandConfig();
setDaily(dayOfYear%workouts.length);
render();

