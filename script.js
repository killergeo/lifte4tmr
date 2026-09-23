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
    el.innerHTML = `<img src="images/logo_emblem.png?v=4" alt="${SITE_CONFIG.fullName}" class="logo-mark"><span class="logo-text"><span class="brand-base">${SITE_CONFIG.brandPrefix}</span><span class="slash">${SITE_CONFIG.brandName}</span></span>`;
  });

  // Update hero micro
  const heroMicro = document.querySelector('.hero-copy .micro');
  if (heroMicro) heroMicro.textContent = `${SITE_CONFIG.fullName} • ${SITE_CONFIG.tagline}`;

  // Update daily micro
  const dailyMicro = document.querySelector('.today-copy .micro');
  if (dailyMicro) dailyMicro.textContent = `${SITE_CONFIG.fullName} DAILY`;

  // Update identity section
  const idMark = document.querySelector('.identity-mark');
  if (idMark) idMark.innerHTML = `<img src="images/logo_badge.png?v=4" alt="${SITE_CONFIG.fullName}" class="identity-logo">`;
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
  'goblet_squat': {
    img: 'images/exercises/squat-demo.jpg',
    tip: 'Hold weight at upper chest, brace core, break at hips and knees, descend below parallel and drive through whole foot.',
    primaryTarget: 'Quads & Glutes',
    stabilizers: 'Core & Upper Back',
    tempo: '3-1-1-0 (Controlled Cadence)',
    phases: {
      setup: 'Stand shoulder-width apart, toes flared 15–20 degrees. Grip dumbbell or kettlebell vertically against your sternum with elbows tucked inward.',
      eccentric: 'Initiate a 3-second descent by breaking hips and knees simultaneously. Keep chest elevated and ribs locked down as you sit between your heels.',
      bottom: 'Pause 1 second in the hole just below parallel. Keep knees tracking in line with toes, maintain spinal arch, and keep weight balanced across whole foot.',
      concentric: 'Drive the floor away explosively through your midfoot and heels. Extend hips and knees together to lockout without hyperextending your spine.'
    },
    mistake: 'Allowing knees to cave inward or rounding lower back at the bottom of the descent.',
    fix: 'Jared\'s Fix: Actively push knees outward against your elbows and squeeze abs like bracing for a punch before descending.'
  },
  'back_squat': {
    img: 'images/exercises/squat-demo.jpg',
    tip: 'Bar across traps, tight upper back, brace core, descend with knees tracking toes, drive up with hips.',
    primaryTarget: 'Quadriceps, Glutes & Adductors',
    stabilizers: 'Spinal Erectors, Abdominals & Upper Traps',
    tempo: '3-1-X-0 (3s Descent • Explosive Up)',
    phases: {
      setup: 'Rest bar securely across upper traps. Grip firmly, pull elbows down to pack lats, take a deep belly breath and brace 360 degrees.',
      eccentric: 'Break at hips and knees simultaneously. Lower yourself with 3-second control, keeping your chest up and weight centered over midfoot.',
      bottom: 'Reach full parallel depth where hip crease drops below knees. Maintain core pressure and do not bounce out of the hole.',
      concentric: 'Drive your feet hard into the floor, pushing hips and chest up at the exact same rate until standing tall.'
    },
    mistake: 'Chest collapsing forward into a "good morning" squat on the way up.',
    fix: 'Jared\'s Fix: Drive your upper back aggressively into the barbell and keep your eyes focused straight ahead.'
  },
  'db_bench': {
    img: 'images/exercises/bench-demo.jpg',
    tip: 'Retract scapulae into bench, 45-degree elbow tuck, lower dumbbells to outer chest, press up and converge slightly.',
    primaryTarget: 'Pectoralis Major (Mid & Lower Chest)',
    stabilizers: 'Anterior Deltoids & Triceps Brachii',
    tempo: '3-1-1-0 (3s Eccentric • 1s Stretch)',
    phases: {
      setup: 'Lie flat, pinch shoulder blades firmly into the bench, plant feet flat, and hold dumbbells directly over chest with neutral wrists.',
      eccentric: 'Lower dumbbells smoothly for 3 seconds, tucking elbows at roughly 45 degrees to protect shoulders until you feel a deep chest stretch.',
      bottom: 'Pause 1 second at chest level with forearms vertical. Keep chest arched high and shoulder blades retracted.',
      concentric: 'Press dumbbells up and slightly inward in a smooth arc, squeezing pecs hard at the top without banging the weights together.'
    },
    mistake: 'Flaring elbows out at 90 degrees or letting wrists bend backwards.',
    fix: 'Jared\'s Fix: Keep wrists stacked straight above elbows and envision pulling your biceps together to contract the chest.'
  },
  'bench_press': {
    img: 'images/exercises/bench-demo.jpg',
    tip: 'Squeeze shoulder blades together, plant feet firm, touch lower sternum under control, drive bar up.',
    primaryTarget: 'Pectoralis Major & Triceps',
    stabilizers: 'Anterior Deltoids, Lats & Rotator Cuff',
    tempo: '3-1-X-0 (3s Down • Pause • Power Up)',
    phases: {
      setup: 'Lie with eyes under bar. Grip slightly wider than shoulder width. Retract scapulae, dig feet into the ground, and unrack with tight lats.',
      eccentric: 'Lower the barbell over 3 seconds along a slight diagonal path toward your lower sternum/nipple line.',
      bottom: 'Gently touch the sternum with complete control—do not bounce off ribs. Maintain leg drive and full body tension.',
      concentric: 'Press barbell aggressively upward and slightly back toward the rack, extending arms fully while keeping shoulders pinned back.'
    },
    mistake: 'Bouncing bar off the sternum or lifting hips off the bench during the press.',
    fix: 'Jared\'s Fix: Squeeze the bar as hard as possible and push the floor away with your feet to channel leg drive into the press.'
  },
  'incline_press': {
    img: 'images/exercises/bench-demo.jpg',
    tip: 'Set bench to 30 degrees, pack shoulders, control descent to clavicle, press up over upper chest.',
    primaryTarget: 'Clavicular Pectoralis (Upper Chest)',
    stabilizers: 'Front Deltoids & Triceps',
    tempo: '3-1-1-0 (Strict Hypertrophy Cadence)',
    phases: {
      setup: 'Angle bench at 30 degrees (avoiding 45+ to keep stress off shoulders). Pin shoulder blades back and plant feet solidly.',
      eccentric: 'Lower weights under 3-second control to the upper chest just below the collarbones, keeping elbows at a 45-degree angle.',
      bottom: 'Pause 1 second at full stretch with forearms perpendicular to the floor.',
      concentric: 'Press upward smoothly, converging dumbbells over the eye-line while maintaining upper-chest contraction.'
    },
    mistake: 'Setting bench angle too steep (turns into a shoulder press) or letting elbows flare wide.',
    fix: 'Jared\'s Fix: Stick to a 30-degree incline and lead with your sternum high throughout the full set.'
  },
  'pushup': {
    img: 'images/exercises/pushup-demo.jpg',
    tip: 'Body locked in rigid plank, elbows angled 45 degrees, chest to floor, drive ground away.',
    primaryTarget: 'Chest & Core',
    stabilizers: 'Triceps, Serratus Anterior & Quads',
    tempo: '2-1-1-0 (Smooth Controlled Reps)',
    phases: {
      setup: 'Hands slightly wider than shoulder width. Lock body into a straight board from ears through shoulders, hips, and heels.',
      eccentric: 'Lower your entire body in 2 seconds by bending elbows back at 45 degrees until chest touches or hovers 1 inch above floor.',
      bottom: 'Brief pause with core clamped tight, preventing hips from sagging or piking.',
      concentric: 'Push the floor away violently until arms are fully extended, protracting shoulder blades slightly at top for serratus activation.'
    },
    mistake: 'Sagging lower back or dropping head forward instead of lowering chest.',
    fix: 'Jared\'s Fix: Squeeze glutes and quads continuously and keep your chin tucked neutral to your spine.'
  },
  'db_row': {
    img: 'images/exercises/row-demo.jpg',
    tip: 'Flat spine, pull dumbbell back toward hip pocket, pause and squeeze lat, control the stretch.',
    primaryTarget: 'Latissimus Dorsi & Rhomboids',
    stabilizers: 'Biceps, Rear Delts & Core',
    tempo: '3-1-1-1 (Full Stretch & Contraction)',
    phases: {
      setup: 'Place non-working knee and hand on bench (or hinge freestanding). Keep back flat parallel to floor, dumbbell hanging straight down.',
      eccentric: 'Lower the weight smoothly over 3 seconds, letting the shoulder blade protract slightly to achieve a deep lat stretch.',
      bottom: 'Hold full stretch for 1 second at arm extension without rotating or twisting your torso.',
      concentric: 'Pull elbow back toward your hip pocket, driving lat into maximum peak contraction. Pause 1 second at the top.'
    },
    mistake: 'Yanking the weight upward using torso momentum or pulling with bicep toward chest.',
    fix: 'Jared\'s Fix: Think of your hand as a hook—pull with your elbow toward your waistline, not your shoulder.'
  },
  'barbell_row': {
    img: 'images/exercises/row-demo.jpg',
    tip: '45-degree hip hinge, pull bar to belly button, squeeze shoulder blades together without standing up.',
    primaryTarget: 'Mid-Back, Lats & Upper Back Thickness',
    stabilizers: 'Hamstrings, Glutes, Spinal Erectors & Biceps',
    tempo: '2-1-1-1 (Pause on Contraction)',
    phases: {
      setup: 'Hinge forward at hips at a 45-degree angle with soft knees and flat spine. Grip bar just outside shoulder width.',
      eccentric: 'Lower the barbell under control along the shins until arms are fully extended and lats are on stretch.',
      bottom: 'Stabilize posture—do not let lower back round under load.',
      concentric: 'Pull the bar powerfully toward your lower ribs/navel, retracting shoulder blades together and squeezing upper back.'
    },
    mistake: 'Using leg drive and standing up on every rep to yank the barbell.',
    fix: 'Jared\'s Fix: Lock your torso angle in stone like a statue and only move your arms and scapulae.'
  },
  'lat_pulldown': {
    img: 'images/exercises/pullup-demo.jpg',
    tip: 'Chest tall, drive elbows straight down into sides, squeeze lats at bottom, control eccentric stretch.',
    primaryTarget: 'Latissimus Dorsi (Back Width)',
    stabilizers: 'Biceps, Brachialis & Lower Traps',
    tempo: '3-1-1-1 (Slow Negative Cadence)',
    phases: {
      setup: 'Sit with thighs snug under pads. Grip bar slightly wider than shoulder width. Lean torso back 10–15 degrees and lift chest high.',
      eccentric: 'Allow the bar to rise over 3 seconds with smooth control until arms are fully overhead and lats are deeply stretched.',
      bottom: 'Pause at the bottom contraction for 1 full second with bar touching upper clavicle.',
      concentric: 'Drive your elbows straight down and into your back pockets, squeezing lats together without using body swing.'
    },
    mistake: 'Swinging backward violently to jerk the weight down using momentum.',
    fix: 'Jared\'s Fix: Anchor your knees tight, keep chest pointed to the ceiling, and drive exclusively with your elbows.'
  },
  'pullup': {
    img: 'images/exercises/pullup-demo.jpg',
    tip: 'Full dead hang, engage scapulae, pull chest to bar with no swinging, lower with smooth control.',
    primaryTarget: 'Lats, Upper Back & Biceps',
    stabilizers: 'Core, Forearms & Rotator Cuff',
    tempo: '3-1-1-0 (Dead-Stop Control)',
    phases: {
      setup: 'Grip bar overhand slightly outside shoulders. Hang in full dead hang with elbows straight and core braced.',
      eccentric: 'Lower yourself under strict 3-second control all the way down to a complete dead hang before initiating the next rep.',
      bottom: 'Pause at full extension, engage scapulae downward (reverse shrug) to initiate movement before arms bend.',
      concentric: 'Pull your chest aggressively toward the bar, driving elbows into your ribs until chin clearly clears the bar.'
    },
    mistake: 'Kicking legs or kipping to swing momentum up, or doing half-reps without full extension.',
    fix: 'Jared\'s Fix: Cross ankles, squeeze glutes, and perform every rep from a dead stop for real strength.'
  },
  'deadlift': {
    img: 'images/exercises/deadlift-demo.jpg',
    tip: 'Bar over mid-foot, engage lats, push floor away with legs, lock out hips without hyperextending.',
    primaryTarget: 'Posterior Chain (Glutes, Hamstrings, Erectors)',
    stabilizers: 'Lats, Traps, Forearms & Core',
    tempo: '2-1-X-0 (Reset Each Rep)',
    phases: {
      setup: 'Bar directly over midfoot (1 inch from shins). Feet hip-width. Hinge down, grip bar, pull shins to bar, wedge chest up, pack lats.',
      eccentric: 'Hinge at hips to lower bar smoothly down thighs and shins back to floor in 2 seconds.',
      bottom: 'Come to a dead stop on the floor. Re-brace and pull slack out of the barbell before lifting.',
      concentric: 'Push the floor away through your heels. Keep bar dragging along shins; lock out hips and glutes tall at top.'
    },
    mistake: 'Rounding lower back off the floor or hyperextending lumbar spine at lockout.',
    fix: 'Jared\'s Fix: Squeeze your armpits shut like holding oranges to lock lats, then push the earth away.'
  },
  'rdl': {
    img: 'images/exercises/deadlift-demo.jpg',
    tip: 'Slight knee bend, push hips back like closing a door behind you, feel deep hamstring stretch, squeeze glutes to stand.',
    primaryTarget: 'Hamstrings & Gluteus Maximus',
    stabilizers: 'Spinal Erectors & Core',
    tempo: '3-1-1-0 (Max Hamstring Tension)',
    phases: {
      setup: 'Stand tall with feet hip-width apart. Hold dumbbells or barbell against thighs. Soften knees and lock that angle in place.',
      eccentric: 'Push hips backwards horizontally as if shutting a door behind you. Slide weight down thighs keeping spine flat.',
      bottom: 'Pause 1 second when hips cannot travel further back and hamstrings are at maximum stretch (usually mid-shin).',
      concentric: 'Drive hips forward by violently contracting glutes and hamstrings until standing upright.'
    },
    mistake: 'Squatting down by bending knees too much or letting the bar drift away from legs.',
    fix: 'Jared\'s Fix: Keep the weights skimming your shins and focus 100% on horizontal hip hinge, not vertical descent.'
  },
  'shoulder_press': {
    img: 'images/exercises/overhead-demo.jpg',
    tip: 'Brace abs and glutes, press dumbbells overhead in a smooth arc, lock out elbows without arching lower back.',
    primaryTarget: 'Anterior & Lateral Deltoids',
    stabilizers: 'Triceps & Upper Trapezius',
    tempo: '3-1-1-0 (Strict Overhead Cadence)',
    phases: {
      setup: 'Sit or stand tall. Hold dumbbells at shoulder height with palms facing forward or slightly angled inward (scapular plane).',
      eccentric: 'Lower the weights under 3-second control until dumbbells lightly graze the top of shoulders.',
      bottom: 'Pause 1 second in the bottom loaded stretch with elbows stacked under wrists.',
      concentric: 'Press straight overhead until arms lock out with bicep aligned next to ears, keeping core braced tight.'
    },
    mistake: 'Excessive arching of lower back or pressing weights too far in front of head.',
    fix: 'Jared\'s Fix: Squeeze abs and glutes hard like a plank to keep your ribs down while pressing overhead.'
  },
  'lateral_raise': {
    img: 'images/exercises/overhead-demo.jpg',
    tip: 'Slight forward lean, raise arms in scapular plane with elbows slightly bent, lead with elbows, pause at parallel.',
    primaryTarget: 'Lateral Deltoids (Shoulder Width)',
    stabilizers: 'Supraspinatus & Upper Traps',
    tempo: '2-1-1-1 (Peak Hold Cadence)',
    phases: {
      setup: 'Stand with feet shoulder-width, slight forward hinge at hips (10 degrees). Hold dumbbells at your sides with soft elbows.',
      eccentric: 'Lower the weights slowly over 2 seconds, maintaining constant tension without letting weights touch your hips.',
      bottom: 'Do not swing or use leg bounce at the bottom.',
      concentric: 'Raise arms outward in the scapular plane (30 degrees forward), leading with elbows until parallel to floor. Hold 1 second.'
    },
    mistake: 'Using heavy weights and swinging hips, or shrugging shoulders up into ears.',
    fix: 'Jared\'s Fix: Drop the weight, keep shoulders depressed down, and imagine pouring water from pitchers at the top.'
  },
  'bicep_curl': {
    img: 'images/exercises/arms-demo.jpg',
    tip: 'Keep elbows pinned at sides, curl without swinging hips, squeeze peak biceps contraction, lower slowly.',
    primaryTarget: 'Biceps Brachii & Brachialis',
    stabilizers: 'Forearm Flexors & Core',
    tempo: '3-1-1-1 (Strict Squeeze Cadence)',
    phases: {
      setup: 'Stand upright with chest tall. Hold weights with palms facing forward or neutral. Pin elbows directly to your ribcage.',
      eccentric: 'Lower weights under 3-second negative control until arms are completely straight at your sides.',
      bottom: 'Brief pause with triceps slightly flexed to ensure a full stretch of the biceps.',
      concentric: 'Curl weights upward with zero torso sway, supinating wrists outward and squeezing biceps hard at the peak.'
    },
    mistake: 'Swinging elbows forward or rocking hips back and forth to throw the weight up.',
    fix: 'Jared\'s Fix: Glue your elbows to your side seams and lock your hips in place throughout every single rep.'
  },
  'triceps_pushdown': {
    img: 'images/exercises/arms-demo.jpg',
    tip: 'Lock elbows at your ribs, spread rope or push bar down until full elbow extension, control return.',
    primaryTarget: 'Triceps Brachii (All 3 Heads)',
    stabilizers: 'Core & Forearms',
    tempo: '3-1-1-1 (Full Lockout Hold)',
    phases: {
      setup: 'Stand facing cable pulley with a slight forward lean. Grip rope or bar with elbows pinned tight against your ribs.',
      eccentric: 'Control the cable upward for 3 seconds until elbows reach roughly 90 degrees, feeling triceps stretch.',
      bottom: 'Do not allow elbows to drift forward or flare out during the return.',
      concentric: 'Push down until elbows are fully locked, spreading rope handles apart at bottom. Squeeze triceps hard for 1 second.'
    },
    mistake: 'Flaring elbows outward or leaning entire body weight on top of the attachment.',
    fix: 'Jared\'s Fix: Keep elbows stationary like door hinges—only your forearms should move.'
  },
  'plank': {
    img: 'images/exercises/core-demo.jpg',
    tip: 'Straight line from heels to head, squeeze glutes and quads, brace abs like taking a punch, breathe steadily.',
    primaryTarget: 'Rectus Abdominis & Transverse Abdominis',
    stabilizers: 'Glutes, Serratus & Quads',
    tempo: 'Isometric Tension (Continuous Brace)',
    phases: {
      setup: 'Forearms on floor with elbows directly under shoulders. Feet hip-width apart on toes.',
      eccentric: 'Maintain a rigid horizontal line from crown of head to heels without sagging or piking.',
      bottom: 'Actively pull elbows toward toes and toes toward elbows to create maximum irradiation tension.',
      concentric: 'Maintain continuous diaphragmatic breathing while keeping abs braced as hard as humanly possible.'
    },
    mistake: 'Hips dipping toward floor, hyperextending lumbar spine, or holding breath.',
    fix: 'Jared\'s Fix: Squeeze your glutes together hard to lock your pelvis in neutral and breathe into your stomach.'
  },
  'lunge': {
    img: 'images/exercises/lunge-demo.jpg',
    tip: 'Step forward into 90/90 angles, lower back knee just above floor, drive through front heel to return.',
    primaryTarget: 'Quadriceps, Glutes & Hamstrings',
    stabilizers: 'Core, Calves & Hip Abductors',
    tempo: '2-1-1-0 (Controlled Step Cadence)',
    phases: {
      setup: 'Stand tall with feet hip-width. Step forward with one leg, keeping torso upright or slightly pitched forward.',
      eccentric: 'Lower hips straight down for 2 seconds until both knees form 90-degree angles and back knee hovers 1 inch off floor.',
      bottom: 'Pause 1 second with front shin nearly vertical and front heel firmly planted on floor.',
      concentric: 'Drive forcefully through your front heel and midfoot to push back to starting position.'
    },
    mistake: 'Front knee collapsing inward or slamming back knee into hard gym floor.',
    fix: 'Jared\'s Fix: Keep front knee tracking over middle toes and control the descent so the back knee gently kisses the mat.'
  },
  'bulgarian_split_squat': {
    img: 'images/exercises/lunge-demo.jpg',
    tip: 'Rear foot elevated on bench, torso slightly pitched forward, descend into front quad & glute, press up.',
    primaryTarget: 'Front Quad & Gluteus Maximus',
    stabilizers: 'Hip Stabilizers, Core & Calves',
    tempo: '3-1-1-0 (High Hypertrophy Stimulus)',
    phases: {
      setup: 'Place laces of rear foot on bench behind you. Front foot out far enough so knee stays above midfoot during descent.',
      eccentric: 'Lower straight down over 3 seconds with torso at a slight forward lean to load the front glute and quad deeply.',
      bottom: 'Pause 1 second when front thigh reaches parallel to the floor; back knee hovers just above mat.',
      concentric: 'Drive hard through front heel to return to standing lockout without locking knee into hyperextension.'
    },
    mistake: 'Placing front foot too close to bench causing heel to lift, or arching lower back.',
    fix: 'Jared\'s Fix: Lean torso forward at 15 degrees to place all load on front leg hip and quad, not the rear hip flexor.'
  },
  'hip_thrust': {
    img: 'images/exercises/deadlift-demo.jpg',
    tip: 'Upper back on bench, drive through heels, lift hips into full horizontal extension, tuck chin, squeeze glutes.',
    primaryTarget: 'Gluteus Maximus (Direct Isolation)',
    stabilizers: 'Hamstrings, Adductors & Core',
    tempo: '2-1-1-2 (2s Peak Glute Squeeze)',
    phases: {
      setup: 'Rest shoulder blades across bench edge. Place barbell or dumbbell across hip crease with pad. Feet flat, shoulder-width.',
      eccentric: 'Lower hips down under 2-second control, hinging at hips while keeping chin tucked forward toward chest.',
      bottom: 'Reach bottom of hinge without letting lower back round or hyperextend.',
      concentric: 'Drive through heels to extend hips fully until torso and thighs form a straight horizontal line. Squeeze glutes for 2 seconds.'
    },
    mistake: 'Looking up at ceiling and hyperextending lumbar spine instead of extending hips.',
    fix: 'Jared\'s Fix: Keep chin tucked against chest like holding an egg; rotate around bench pivot point only.'
  },
  'mobility': {
    img: 'images/exercises/mobility-demo.jpg',
    tip: 'Slow, controlled transitions synced with deep diaphragmatic breathing. Expand joint range gently.',
    primaryTarget: 'Joint Articulation & Fascial Mobility',
    stabilizers: 'Full Kinetic Chain Stabilizers',
    tempo: 'Flow (Breathe Inhale/Exhale)',
    phases: {
      setup: 'Begin on mat with knees and palms supported in neutral posture. Relax jaw and loosen shoulders.',
      eccentric: 'Move gently into the lengthened position on a slow, full 4-second diaphragmatic exhalation.',
      bottom: 'Hold end-range for 2–3 breaths, expanding ribcage and releasing muscle tension.',
      concentric: 'Return smoothly to neutral alignment on the inhale without forcing through any sharp pain.'
    },
    mistake: 'Rushing through movements quickly without breathing or forcing past natural joint range.',
    fix: 'Jared\'s Fix: Synchronize each motion with slow breathing—never force joint pain, expand range gently.'
  },
  'hiit': {
    img: 'images/exercises/hiit-demo.jpg',
    tip: 'Explosive cadence, light athletic foot contact, keep core tight and maintain steady breathing rhythms.',
    primaryTarget: 'Cardiovascular Output & Anaerobic Power',
    stabilizers: 'Full Body Musculature',
    tempo: 'Explosive Athletic Cadence',
    phases: {
      setup: 'Athletic stance with knees soft, chest up, and weight balanced on balls of feet.',
      eccentric: 'Absorb landing forces smoothly through ankle, knee, and hip flexion.',
      bottom: 'Spring immediately out of the turnaround with elastic rebound.',
      concentric: 'Explode through each rep with maximum speed and athletic form, maintaining rhythmic exhalations.'
    },
    mistake: 'Allowing form to break down completely when tired.',
    fix: 'Jared\'s Fix: When fatigue kicks in, maintain posture and cadence rather than sacrificing joint alignment.'
  }
};

function getExerciseGuide(name) {
  const n = (name || '').toLowerCase();
  if (n.includes('goblet')) return exerciseGuides['goblet_squat'];
  if (n.includes('bulgarian') || n.includes('split squat')) return exerciseGuides['bulgarian_split_squat'];
  if (n.includes('lunge')) return exerciseGuides['lunge'];
  if (n.includes('squat') || n.includes('leg press')) return exerciseGuides['back_squat'];
  if (n.includes('incline')) return exerciseGuides['incline_press'];
  if (n.includes('dumbbell bench') || n.includes('floor press')) return exerciseGuides['db_bench'];
  if (n.includes('bench') || n.includes('fly')) return exerciseGuides['bench_press'];
  if (n.includes('push-up')) return exerciseGuides['pushup'];
  if (n.includes('single-arm') || n.includes('one-arm')) return exerciseGuides['db_row'];
  if (n.includes('dumbbell row')) return exerciseGuides['db_row'];
  if (n.includes('row')) return exerciseGuides['barbell_row'];
  if (n.includes('pulldown')) return exerciseGuides['lat_pulldown'];
  if (n.includes('pull-up') || n.includes('hang')) return exerciseGuides['pullup'];
  if (n.includes('rdl') || n.includes('romanian')) return exerciseGuides['rdl'];
  if (n.includes('hip thrust') || n.includes('glute bridge')) return exerciseGuides['hip_thrust'];
  if (n.includes('deadlift') || n.includes('extension')) return exerciseGuides['deadlift'];
  if (n.includes('lateral') || n.includes('rear-delt') || n.includes('delt')) return exerciseGuides['lateral_raise'];
  if (n.includes('press') || n.includes('farmer')) return exerciseGuides['shoulder_press'];
  if (n.includes('curl')) return exerciseGuides['bicep_curl'];
  if (n.includes('triceps') || n.includes('pressdown')) return exerciseGuides['triceps_pushdown'];
  if (n.includes('plank') || n.includes('bug') || n.includes('bird') || n.includes('core')) return exerciseGuides['plank'];
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

function toggleExerciseBreakdown(cardIndex){
  const panel = modalContent.querySelector(`#breakdown-panel-${cardIndex}`);
  const btn = modalContent.querySelector(`.watch-video-btn[data-trigger-breakdown="${cardIndex}"]`);
  if (!panel) return;
  const isHidden = panel.style.display === 'none';

  if (isHidden) {
    panel.style.display = 'block';
    if (btn) {
      btn.classList.add('active');
      const span = btn.querySelector('span');
      if (span) span.textContent = '✕ HIDE FORM BREAKDOWN';
    }
  } else {
    panel.style.display = 'none';
    if (btn) {
      btn.classList.remove('active');
      const span = btn.querySelector('span');
      if (span) span.textContent = 'FORM BREAKDOWN & TEMPO';
    }
  }
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
      <div class="micro">MOVEMENT DEMONSTRATIONS &amp; BIOMECHANICS GUIDE</div>
      <h3>EXERCISES IN THIS WORKOUT</h3>
      <p>Click "FORM BREAKDOWN &amp; TEMPO" or movement photos below to inspect 4-phase biomechanics, cadence, and Jared's form cues.</p>
    </div>

    <div class="exercise-cards-list">
      ${w.exercises.map((e,i)=>{
        const guide = getExerciseGuide(e[0]);
        return `
        <article class="exercise-card" id="card-${i}">
          <div class="exercise-thumb" data-trigger-breakdown="${i}" style="background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.75)),url('${guide.img}')" title="Click to view ${esc(e[0])} form breakdown">
            <span class="exercise-badge">MOVE #${i+1}</span>
            <span class="thumb-tempo-tag">${esc(guide.tempo || '3-1-1-0')}</span>
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
              <span class="cue-label">KEY FORM CUE:</span> ${esc(guide.tip)}
              ${e[4] ? `<div class="exercise-extra-note">💡 ${esc(e[4])}</div>` : ''}
            </div>

            <div class="exercise-actions">
              <button class="watch-video-btn" data-trigger-breakdown="${i}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <span>FORM BREAKDOWN &amp; TEMPO</span>
              </button>
            </div>

            <div class="exercise-breakdown-panel" id="breakdown-panel-${i}" style="display:none">
              <div class="breakdown-inner">
                <div class="breakdown-header">
                  <div class="breakdown-muscle-tags">
                    <span class="tag-primary">PRIMARY: ${esc(guide.primaryTarget)}</span>
                    <span class="tag-sec">STABILIZERS: ${esc(guide.stabilizers)}</span>
                  </div>
                  <div class="tempo-chip">LIFTE4TMR CADENCE: <strong>${esc(guide.tempo)}</strong></div>
                </div>

                <div class="cadence-visualizer">
                  <div class="cadence-bar">
                    <div class="cadence-step"><span>1</span> SETUP</div>
                    <div class="cadence-arrow">→</div>
                    <div class="cadence-step active"><span>2</span> 3s DESCENT</div>
                    <div class="cadence-arrow">→</div>
                    <div class="cadence-step"><span>3</span> 1s DEPTH PAUSE</div>
                    <div class="cadence-arrow">→</div>
                    <div class="cadence-step active"><span>4</span> EXPLOSIVE DRIVE</div>
                  </div>
                </div>

                <div class="phases-grid">
                  <div class="phase-box">
                    <span class="phase-num">PHASE 01 • SETUP</span>
                    <strong>Stance &amp; Position</strong>
                    <p>${esc(guide.phases.setup)}</p>
                  </div>
                  <div class="phase-box">
                    <span class="phase-num">PHASE 02 • ECCENTRIC</span>
                    <strong>Controlled Descent</strong>
                    <p>${esc(guide.phases.eccentric)}</p>
                  </div>
                  <div class="phase-box">
                    <span class="phase-num">PHASE 03 • DEPTH</span>
                    <strong>Bottom Contraction</strong>
                    <p>${esc(guide.phases.bottom)}</p>
                  </div>
                  <div class="phase-box">
                    <span class="phase-num">PHASE 04 • CONCENTRIC</span>
                    <strong>Drive &amp; Lockout</strong>
                    <p>${esc(guide.phases.concentric)}</p>
                  </div>
                </div>

                <div class="coach-fix-box">
                  <div class="mistake-line"><strong>⚠️ COMMON MISTAKE:</strong> ${esc(guide.mistake)}</div>
                  <div class="fix-line"><strong>✅ JARED'S COACHING FIX:</strong> ${esc(guide.fix)}</div>
                </div>

                <div class="breakdown-footer">
                  <button class="close-breakdown-btn" data-close-breakdown="${i}">✕ CLOSE BREAKDOWN</button>
                </div>
              </div>
            </div>
          </div>
        </article>`;
      }).join('')}
    </div>

    <div class="modal-note"><strong>TRAIN SMART:</strong> warm up, use controlled reps, pick a load you can handle with solid form, and stop if you feel sharp pain, dizziness, or unusual symptoms.</div>
  </div>`;

  modalContent.onclick = e => {
    const trigger = e.target.closest('[data-trigger-breakdown]');
    if (trigger) {
      e.preventDefault();
      toggleExerciseBreakdown(trigger.dataset.triggerBreakdown);
      return;
    }
    const closer = e.target.closest('[data-close-breakdown]');
    if (closer) {
      e.preventDefault();
      toggleExerciseBreakdown(closer.dataset.closeBreakdown);
      return;
    }
  };

  modal.showModal();
}

function closeWorkoutModal(){
  modal.close();
}

$('#modal-close').addEventListener('click', closeWorkoutModal);
modal.addEventListener('click', e => { if (e.target === modal) closeWorkoutModal(); });
modal.addEventListener('cancel', closeWorkoutModal);

function setDaily(index){
  const w=workouts[index];
  if(!w)return;
  const numEl = $('#daily-number');
  if(numEl) numEl.textContent = `#${String(index+1).padStart(2,'0')}`;
  const nameEl = $('#daily-name');
  if(nameEl) nameEl.textContent = w.name;
  const descEl = $('#daily-desc');
  if(descEl) descEl.textContent = w.description;
  const statsEl = $('#daily-stats');
  if(statsEl) {
    statsEl.innerHTML = `
      <div><span>TIME</span><strong>${w.duration}</strong></div>
      <div><span>LEVEL</span><strong>${w.level}</strong></div>
      <div><span>WHERE</span><strong>${w.location}</strong></div>`;
  }
  const dailyOpen = $('#daily-open');
  if(dailyOpen) dailyOpen.dataset.index = index;
  const heroTodayName = $('#hero-today-name');
  if(heroTodayName) heroTodayName.textContent = w.name;
  const heroTodayMeta = $('#hero-today-meta');
  if(heroTodayMeta) heroTodayMeta.textContent = `${w.duration} • ${w.level} • ${w.equipment}`;
  const heroOpenToday = $('#hero-open-today');
  if(heroOpenToday) heroOpenToday.dataset.index = index;
}

function randomIndex(){
  return Math.floor(Math.random()*workouts.length);
}

[search,goal,level,locationSelect].forEach(el=>{ if(el) el.addEventListener('input',render); });
const clearBtn = $('#clear');
if(clearBtn) clearBtn.addEventListener('click',()=>{ search.value=''; goal.value='All'; level.value='All'; locationSelect.value='All'; render(); });
if(grid) grid.addEventListener('click',e=>{ const b=e.target.closest('.open-workout'); if(b) openWorkout(Number(b.dataset.index)); });
const bodyGrid = $('#body-grid');
if(bodyGrid) bodyGrid.addEventListener('click',e=>{
  const b=e.target.closest('[data-term]'); if(!b)return;
  search.value=b.dataset.term; goal.value='All'; level.value='All'; locationSelect.value='All'; render();
  $('#library')?.scrollIntoView({behavior:'smooth'});
});
document.querySelectorAll('.lane').forEach(b=>b.addEventListener('click',()=>{
  goal.value=b.dataset.goal; search.value=''; level.value='All'; locationSelect.value='All'; render();
  $('#library')?.scrollIntoView({behavior:'smooth'});
}));
const randomBtn = $('#random-workout');
if(randomBtn) randomBtn.addEventListener('click',()=>setDaily(randomIndex()));
const randTop = $('#random-top');
if (randTop) randTop.addEventListener('click',()=>{ const i=randomIndex(); setDaily(i); openWorkout(i); });
const dailyOpen = $('#daily-open');
if(dailyOpen) dailyOpen.addEventListener('click',e=>openWorkout(Number(e.currentTarget.dataset.index)));
const heroOpenToday = $('#hero-open-today');
if(heroOpenToday) heroOpenToday.addEventListener('click',e=>openWorkout(Number(e.currentTarget.dataset.index)));


// ==========================================
// WORKOUT REST & INTERVAL TIMER
// ==========================================
let timerInterval = null;
let timerSeconds = 60;
let timerRunning = false;
let timerMode = 'countdown';
let stopwatchSeconds = 0;

function formatTimerTime(totalSec) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function playTimerChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.6);
  } catch(e) {}
}

function updateTimerDisplay() {
  const readout = $('#timer-readout');
  const status = $('#timer-status');
  if (!readout) return;
  if (timerMode === 'stopwatch') {
    readout.textContent = formatTimerTime(stopwatchSeconds);
    if (status) status.textContent = timerRunning ? 'STOPWATCH RUNNING' : 'STOPWATCH PAUSED';
  } else {
    readout.textContent = formatTimerTime(timerSeconds);
    if (status) {
      if (timerSeconds === 0) {
        status.textContent = 'REST FINISHED! TIME FOR NEXT SET';
      } else {
        status.textContent = timerRunning ? 'REST PERIOD COUNTDOWN' : 'REST TIMER READY';
      }
    }
  }
}

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;
  const startBtn = $('#timer-start');
  const dispBox = $('#timer-display-box');
  if (startBtn) {
    startBtn.textContent = 'PAUSE';
    startBtn.classList.add('pause');
  }
  if (dispBox) dispBox.classList.remove('timer-pulse');

  timerInterval = setInterval(() => {
    if (timerMode === 'stopwatch') {
      stopwatchSeconds++;
      updateTimerDisplay();
    } else {
      if (timerSeconds > 0) {
        timerSeconds--;
        updateTimerDisplay();
        if (timerSeconds === 0) {
          pauseTimer();
          playTimerChime();
          if (dispBox) dispBox.classList.add('timer-pulse');
        }
      }
    }
  }, 1000);
}

function pauseTimer() {
  timerRunning = false;
  clearInterval(timerInterval);
  const startBtn = $('#timer-start');
  if (startBtn) {
    startBtn.textContent = 'START';
    startBtn.classList.remove('pause');
  }
  updateTimerDisplay();
}

function resetTimer() {
  pauseTimer();
  const dispBox = $('#timer-display-box');
  if (dispBox) dispBox.classList.remove('timer-pulse');
  if (timerMode === 'stopwatch') {
    stopwatchSeconds = 0;
  } else {
    const activeChip = document.querySelector('.preset-chip.active');
    timerSeconds = activeChip ? Number(activeChip.dataset.seconds || 60) : 60;
  }
  updateTimerDisplay();
}

function setTimerPreset(seconds, mode = 'countdown') {
  pauseTimer();
  timerMode = mode;
  const dispBox = $('#timer-display-box');
  if (dispBox) dispBox.classList.remove('timer-pulse');
  if (mode === 'stopwatch') {
    stopwatchSeconds = 0;
  } else {
    timerSeconds = seconds;
  }
  document.querySelectorAll('.preset-chip').forEach(c => {
    const chipSec = Number(c.dataset.seconds);
    const chipMode = c.dataset.mode || 'countdown';
    c.classList.toggle('active', chipSec === seconds && chipMode === mode);
  });
  updateTimerDisplay();
}

function initTimerEvents() {
  const startBtn = $('#timer-start');
  const resetBtn = $('#timer-reset');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (timerRunning) pauseTimer();
      else startTimer();
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', resetTimer);
  }
  document.querySelectorAll('.preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const sec = Number(chip.dataset.seconds);
      const mode = chip.dataset.mode || 'countdown';
      setTimerPreset(sec, mode);
    });
  });

  // Quick-load timer from demo workouts
  document.querySelectorAll('[data-load-timer]').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = Number(btn.dataset.loadTimer);
      const mode = btn.dataset.mode || 'countdown';
      setTimerPreset(s, mode);
      $('#timer')?.scrollIntoView({ behavior: 'smooth' });
      startTimer();
    });
  });

  updateTimerDisplay();
}

function initDietTabs() {
  const tabs = document.querySelectorAll('.diet-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const targetId = tab.dataset.target;
      document.querySelectorAll('.diet-plan-card').forEach(card => {
        card.classList.toggle('active', card.id === targetId);
      });
    });
  });
}

window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  $('#scroll-progress').style.width=(max>0?(window.scrollY/max)*100:0)+'%';
},{passive:true});

// Make sure all reveal elements are immediately visible
document.querySelectorAll('.reveal').forEach(el => el.classList.add('on'));

const dayOfYear=Math.floor((Date.now()-new Date(new Date().getFullYear(),0,0))/86400000);
applyBrandConfig();
setDaily(dayOfYear%workouts.length);
render();
initTimerEvents();
initDietTabs();

// Handle navigation clicks with perfect navbar offset
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const hash = a.getAttribute('href');
    if (!hash || hash === '#') return;
    if (hash === '#top') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.pushState(null, '', ' ');
      return;
    }
    const target = document.querySelector(hash);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top, behavior: 'smooth' });
      history.pushState(null, '', hash);
    }
  });
});

// Re-scroll on window load once all fonts and images are ready
window.addEventListener('load', () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
});

