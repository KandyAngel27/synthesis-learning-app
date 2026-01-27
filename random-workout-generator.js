// ============================================
// RANDOM WORKOUT GENERATOR
// Keep workouts fresh, fun, and knee-friendly
// ============================================

class RandomWorkoutGenerator {
    constructor() {
        this.exercises = this.buildExerciseDatabase();
        this.warmups = this.buildWarmupDatabase();
        this.cooldowns = this.buildCooldownDatabase();
        this.history = this.loadHistory();
    }

    // ============================================
    // EXERCISE DATABASE
    // All knee-friendly, home gym equipment
    // ============================================

    buildExerciseDatabase() {
        return [
            // ==================== PUSH - BASIC ====================
            {
                id: 'bench-press',
                name: 'Bench Press',
                equipment: ['barbell', 'bench'],
                muscleGroups: ['chest', 'shoulders', 'triceps'],
                type: 'basic',
                category: 'push',
                difficulty: 'medium',
                format: { sets: 4, reps: '8-10' },
                estimatedTime: 6,
                instructions: 'Lie flat on bench with eyes under the bar. Grip the bar slightly wider than shoulder-width, wrists straight. Unrack and hold the bar directly over your chest with arms locked. Lower the bar slowly to your mid-chest (nipple line), tucking elbows at about 45 degrees - not flared out. Touch your chest lightly (don\'t bounce), then press the bar back up in a slight arc toward your face until arms are locked. Keep your feet flat on the floor, glutes on the bench, and maintain a slight natural arch in your lower back throughout.'
            },
            {
                id: 'db-bench-press',
                name: 'Dumbbell Bench Press',
                equipment: ['dumbbells', 'bench'],
                muscleGroups: ['chest', 'shoulders', 'triceps'],
                type: 'basic',
                category: 'push',
                difficulty: 'medium',
                format: { sets: 3, reps: '10-12' },
                estimatedTime: 5,
                instructions: 'Sit on bench with dumbbells on your thighs. Kick them up as you lie back, positioning them at chest level with palms facing forward. Press the dumbbells up until your arms are extended but not locked, bringing them slightly together at the top (don\'t clank them). Lower slowly with control, allowing a deeper stretch than barbell bench by letting elbows drop slightly below chest level. Keep your shoulder blades squeezed together and pressed into the bench throughout. The independent movement of dumbbells works stabilizer muscles more than barbell.'
            },
            {
                id: 'overhead-press',
                name: 'Overhead Press',
                equipment: ['barbell'],
                muscleGroups: ['shoulders', 'triceps', 'core'],
                type: 'basic',
                category: 'push',
                difficulty: 'medium',
                format: { sets: 4, reps: '8-10' },
                estimatedTime: 6,
                instructions: 'Stand with feet shoulder-width apart. Grip the bar just outside shoulder width and rest it on your front deltoids and upper chest. Take a deep breath and brace your core hard like you\'re about to be punched. Press the bar straight up, moving your head back slightly to let the bar pass your chin (don\'t lean back excessively). Once the bar clears your head, push your head through and lock out with the bar directly over your mid-foot. Lower with control back to shoulders. Keep your glutes squeezed and core tight to prevent arching your lower back.'
            },
            {
                id: 'db-shoulder-press',
                name: 'Dumbbell Shoulder Press',
                equipment: ['dumbbells'],
                muscleGroups: ['shoulders', 'triceps'],
                type: 'basic',
                category: 'push',
                difficulty: 'easy',
                format: { sets: 3, reps: '10-12' },
                estimatedTime: 5,
                instructions: 'Sit on a bench with back support, or stand with feet shoulder-width apart. Hold dumbbells at shoulder height with palms facing forward (or facing each other for neutral grip - easier on shoulders). Press the dumbbells straight up until your arms are fully extended overhead, bringing them slightly together at the top. Don\'t let them drift forward. Lower with control until dumbbells are back at shoulder level, elbows at about 90 degrees. Keep your core braced throughout to protect your lower back, especially when standing.'
            },
            {
                id: 'pushups',
                name: 'Push-Ups',
                equipment: ['mat'],
                muscleGroups: ['chest', 'shoulders', 'triceps', 'core'],
                type: 'basic',
                category: 'push',
                difficulty: 'easy',
                format: { sets: 3, reps: '15-20' },
                estimatedTime: 4,
                instructions: 'Start in a high plank position with hands slightly wider than shoulder-width, fingers pointing forward or slightly outward. Your body should form a straight line from head to heels - don\'t let your hips sag or pike up. Lower your body by bending your elbows, keeping them at a 45-degree angle from your torso (not flared out to the sides). Lower until your chest nearly touches the floor, then push back up to the starting position. Keep your core tight and glutes engaged throughout. If regular push-ups are too challenging, elevate your hands on a bench or do them from your knees.'
            },
            {
                id: 'incline-db-press',
                name: 'Incline Dumbbell Press',
                equipment: ['dumbbells', 'bench'],
                muscleGroups: ['chest', 'shoulders'],
                type: 'basic',
                category: 'push',
                difficulty: 'medium',
                format: { sets: 3, reps: '10-12' },
                estimatedTime: 5,
                instructions: 'Set the bench to a 30-45 degree incline (lower angle = more chest, higher = more shoulders). Sit back with dumbbells at shoulder level, palms facing forward. Press the dumbbells up and slightly together, stopping just short of locking your elbows. Lower slowly, allowing your elbows to drop to about 90 degrees or slightly below for a good stretch in the upper chest. Keep your shoulder blades pinched together and pressed into the bench. Don\'t let your lower back arch excessively - keep your core engaged. This variation emphasizes the upper chest more than flat bench.'
            },
            {
                id: 'db-lateral-raise',
                name: 'Dumbbell Lateral Raise',
                equipment: ['dumbbells'],
                muscleGroups: ['shoulders'],
                type: 'basic',
                category: 'push',
                difficulty: 'easy',
                format: { sets: 3, reps: '12-15' },
                estimatedTime: 4,
                instructions: 'Stand with feet hip-width apart, holding light dumbbells at your sides with palms facing your body. Keep a slight bend in your elbows throughout the movement. Raise your arms out to the sides until they reach shoulder height, leading with your elbows rather than your hands. At the top, your arms should be parallel to the floor with pinkies slightly higher than thumbs (like pouring water from a pitcher). Lower with control - don\'t just drop them. Avoid using momentum or swinging your body. Use lighter weight than you think - this exercise humbles everyone!'
            },
            {
                id: 'tricep-dips',
                name: 'Tricep Dips (Bench)',
                equipment: ['bench'],
                muscleGroups: ['triceps', 'shoulders'],
                type: 'basic',
                category: 'push',
                difficulty: 'easy',
                format: { sets: 3, reps: '12-15' },
                estimatedTime: 4,
                instructions: 'Sit on the edge of a bench with hands gripping the edge beside your hips, fingers pointing forward. Walk your feet out and slide your butt off the bench. Start with legs bent (easier) or straight (harder). Lower your body by bending your elbows to about 90 degrees, keeping your back close to the bench - don\'t let your butt drift away. Your elbows should point backward, not out to the sides. Press through your palms to straighten your arms and return to the starting position. Don\'t go too deep as this can stress the shoulders. Keep movements controlled, not bouncy.'
            },
            {
                id: 'close-grip-bench',
                name: 'Close Grip Bench Press',
                equipment: ['barbell', 'bench'],
                muscleGroups: ['triceps', 'chest'],
                type: 'basic',
                category: 'push',
                difficulty: 'medium',
                format: { sets: 3, reps: '10-12' },
                estimatedTime: 5,
                instructions: 'Lie on the bench and grip the bar with hands about shoulder-width apart or slightly narrower (not so close that your wrists hurt). Unrack the bar and hold it over your lower chest. Lower the bar slowly, keeping your elbows tucked close to your body at about a 30-degree angle - they shouldn\'t flare out. Touch your lower chest/sternum area, then press back up, focusing on squeezing your triceps. The narrower grip shifts emphasis from chest to triceps. Use less weight than your regular bench press since triceps are doing more work.'
            },

            // ==================== PUSH - CREATIVE ====================
            {
                id: 'sally-up-pushups',
                name: 'Sally Up Push-Ups',
                equipment: ['mat'],
                muscleGroups: ['chest', 'shoulders', 'triceps', 'core'],
                type: 'creative',
                category: 'push',
                difficulty: 'hard',
                format: { time: '3:30', note: 'Full song challenge' },
                estimatedTime: 5,
                instructions: 'Play "Flower" by Moby (search "Bring Sally Up challenge" on YouTube). Start in the up position of a push-up. When you hear "Bring Sally Down," lower yourself slowly to the bottom position and HOLD. When you hear "Bring Sally Up," push back up to the top and HOLD. The song has long holds in both positions that will set your muscles on fire. The challenge is to complete the entire 3:30 song without collapsing. Scale by doing it from your knees if needed. This is a brutal isometric and concentric challenge!'
            },
            {
                id: 'plate-squeeze-press',
                name: 'Plate Squeeze Press',
                equipment: ['barbell'],
                muscleGroups: ['chest', 'shoulders'],
                type: 'creative',
                category: 'push',
                difficulty: 'medium',
                format: { sets: 3, reps: '12-15' },
                estimatedTime: 4,
                instructions: 'Take two weight plates (start with 5-10 lbs each) and press them together with your palms on the flat sides, smooth sides facing out. Squeeze them together HARD using your chest muscles - don\'t let them slip! Hold them at chest level, then press straight out in front of you, maintaining that squeeze. Return to chest and repeat. You can also press them overhead while squeezing. The constant isometric squeeze creates incredible chest activation. If they start slipping, squeeze harder or use lighter plates.'
            },
            {
                id: 'kb-bottoms-up-press',
                name: 'Kettlebell Bottoms-Up Press',
                equipment: ['kettlebell'],
                muscleGroups: ['shoulders', 'core', 'grip'],
                type: 'creative',
                category: 'push',
                difficulty: 'hard',
                format: { sets: 3, reps: '6-8 each' },
                estimatedTime: 5,
                instructions: 'Grab a light kettlebell and flip it upside down so the bottom faces the ceiling. Hold it at shoulder height with the bell balanced above your hand. Your grip must be rock-solid to keep it from tipping. Brace your core hard, then press the kettlebell straight overhead while keeping it perfectly balanced. Lower with control. If the bell wobbles or tips, your stabilizers aren\'t engaged enough. Start VERY light (8-12 kg) - this is much harder than it looks. Great for shoulder stability and grip strength.'
            },
            {
                id: 'archer-pushups',
                name: 'Archer Push-Ups',
                equipment: ['mat'],
                muscleGroups: ['chest', 'shoulders', 'triceps'],
                type: 'creative',
                category: 'push',
                difficulty: 'hard',
                format: { sets: 3, reps: '6-8 each side' },
                estimatedTime: 5,
                instructions: 'Set up in a push-up position with your hands placed very wide - about 1.5x shoulder width. As you lower down, shift your body toward your right hand, bending that elbow while your left arm straightens out to the side (like an archer drawing a bow). Your right arm does most of the work while your left arm stays nearly straight for support. Push back up, then repeat on the other side. This is a progression toward one-arm push-ups. Keep your core tight and body in a straight line throughout.'
            },
            {
                id: 'db-floor-fly-press',
                name: 'Floor Fly to Press Combo',
                equipment: ['dumbbells', 'mat'],
                muscleGroups: ['chest', 'shoulders'],
                type: 'creative',
                category: 'push',
                difficulty: 'medium',
                format: { sets: 3, reps: '8-10' },
                estimatedTime: 5,
                instructions: 'Lie on your back on the floor (not a bench) with dumbbells pressed up over your chest. Open your arms out to the sides in a fly motion, keeping a slight bend in your elbows, until your triceps touch the floor. The floor limits your range of motion to protect your shoulders. Squeeze your chest to bring the dumbbells back together over your chest (that\'s the fly). Now immediately press the dumbbells straight up (that\'s the press). Lower back to chest. That\'s 1 rep. The combo hits your chest from multiple angles.'
            },
            {
                id: 'tempo-pushups',
                name: 'Tempo Push-Ups (4-2-1)',
                equipment: ['mat'],
                muscleGroups: ['chest', 'shoulders', 'triceps'],
                type: 'creative',
                category: 'push',
                difficulty: 'medium',
                format: { sets: 3, reps: '8-10' },
                estimatedTime: 5,
                instructions: 'Perform push-ups with a strict tempo: take a full 4 seconds to lower your chest to the floor (count "one-mississippi" four times). Hold the bottom position for 2 full seconds with your chest hovering just above the ground. Then explode up in 1 second to the starting position. The slow lowering (eccentric) phase builds serious strength and muscle. The pause eliminates momentum and the stretch reflex, making the push much harder. You\'ll do fewer reps but the time under tension is brutal.'
            },
            {
                id: 'plate-front-raise-press',
                name: 'Plate Front Raise to Overhead',
                equipment: ['barbell'],
                muscleGroups: ['shoulders', 'core'],
                type: 'creative',
                category: 'push',
                difficulty: 'medium',
                format: { sets: 3, reps: '10-12' },
                estimatedTime: 4,
                instructions: 'Stand holding a weight plate with both hands at the 9 and 3 o\'clock positions (or grip the edges). Start with the plate at hip level, arms straight. Keeping your arms straight, raise the plate in front of you to eye level (front raise portion). From there, continue the motion by pressing the plate overhead until your arms are fully extended. Reverse the motion: lower to eye level, then lower to hips. That\'s one rep. Keep your core tight and avoid leaning back. Great for shoulder endurance and core stability.'
            },
            {
                id: 'band-pushup-plus',
                name: 'Banded Push-Up Plus',
                equipment: ['bands', 'mat'],
                muscleGroups: ['chest', 'shoulders', 'serratus'],
                type: 'creative',
                category: 'push',
                difficulty: 'medium',
                format: { sets: 3, reps: '10-12' },
                estimatedTime: 4,
                instructions: 'Loop a resistance band around your upper back and hold the ends under your palms as you set up for a push-up. The band adds resistance at the top of the movement where you\'re normally strongest. Perform a push-up, and at the top, don\'t stop - push even further by protracting your shoulder blades (spreading them apart), rounding your upper back slightly toward the ceiling. This extra "plus" at the top targets your serratus anterior (the muscles on your ribs under your armpits). Then lower into the next rep.'
            },

            // ==================== PULL - BASIC ====================
            {
                id: 'barbell-row',
                name: 'Barbell Row',
                equipment: ['barbell'],
                muscleGroups: ['back', 'biceps', 'rear-delts'],
                type: 'basic',
                category: 'pull',
                difficulty: 'medium',
                format: { sets: 4, reps: '8-10' },
                estimatedTime: 6,
                instructions: 'Stand with feet shoulder-width apart, grip the bar slightly wider than shoulder width. Hinge at your hips by pushing your butt back, keeping your back flat and chest up. Your torso should be at about a 45-degree angle to the floor (some prefer more horizontal for more lat activation). Let the bar hang at arm\'s length. Pull the bar toward your lower chest/upper abdomen, driving your elbows back and squeezing your shoulder blades together at the top. Lower with control - don\'t just drop it. Keep your core braced and avoid using momentum or jerking your body to lift the weight.'
            },
            {
                id: 'db-row',
                name: 'Dumbbell Row',
                equipment: ['dumbbells', 'bench'],
                muscleGroups: ['back', 'biceps'],
                type: 'basic',
                category: 'pull',
                difficulty: 'easy',
                format: { sets: 3, reps: '10-12 each' },
                estimatedTime: 5,
                instructions: 'Place your left knee and left hand on a bench, with your right foot on the floor slightly back for stability. Your back should be flat and parallel to the floor. Hold a dumbbell in your right hand, letting it hang straight down. Row the dumbbell up toward your hip (not your armpit), leading with your elbow. Pull until your elbow passes your torso and squeeze your lat at the top. Lower slowly with control - this eccentric phase builds muscle. Keep your shoulders square to the floor; don\'t rotate your torso to cheat the weight up. Complete all reps on one side before switching.'
            },
            {
                id: 'pull-ups',
                name: 'Pull-Ups',
                equipment: ['pull-up-bar'],
                muscleGroups: ['back', 'biceps', 'core'],
                type: 'basic',
                category: 'pull',
                difficulty: 'hard',
                format: { sets: 4, reps: 'max' },
                estimatedTime: 6,
                instructions: 'Grip the bar with hands slightly wider than shoulder-width, palms facing away from you (overhand/pronated grip). Start from a dead hang with arms fully extended. Initiate the pull by depressing your shoulder blades (pulling them down and back), then drive your elbows down toward your hips as you pull your chin over the bar. Focus on pulling with your lats, not just your arms. Lower yourself with control all the way to a dead hang - no half reps! Keep your core tight and avoid swinging or kipping. If you can\'t do full pull-ups, use a band for assistance or do slow negatives (jump up, lower slowly).'
            },
            {
                id: 'chin-ups',
                name: 'Chin-Ups',
                equipment: ['pull-up-bar'],
                muscleGroups: ['back', 'biceps'],
                type: 'basic',
                category: 'pull',
                difficulty: 'medium',
                format: { sets: 3, reps: 'max' },
                estimatedTime: 5,
                instructions: 'Grip the bar with hands shoulder-width apart, palms facing toward you (underhand/supinated grip). Start from a dead hang with arms fully extended. Pull yourself up by driving your elbows down toward your sides, focusing on squeezing your biceps and lats. Pull until your chin clears the bar. The underhand grip allows more bicep involvement, making these slightly easier than pull-ups for most people. Lower with control to a full dead hang. Keep your body relatively straight - a slight lean back is okay but don\'t swing. Great for building biceps while also hitting your back.'
            },
            {
                id: 'db-bicep-curl',
                name: 'Dumbbell Bicep Curls',
                equipment: ['dumbbells'],
                muscleGroups: ['biceps'],
                type: 'basic',
                category: 'pull',
                difficulty: 'easy',
                format: { sets: 3, reps: '12-15' },
                estimatedTime: 4,
                instructions: 'Stand with feet hip-width apart, holding dumbbells at your sides with palms facing forward (supinated grip). Pin your elbows to your sides - they should not move forward or backward during the exercise. Curl both dumbbells up toward your shoulders by bending only at the elbow, squeezing your biceps hard at the top. Lower with control, taking about 2-3 seconds on the way down - this eccentric phase is where growth happens. Don\'t swing the weights or lean back; if you need momentum, the weight is too heavy. You can alternate arms or curl both simultaneously.'
            },
            {
                id: 'hammer-curls',
                name: 'Hammer Curls',
                equipment: ['dumbbells'],
                muscleGroups: ['biceps', 'forearms'],
                type: 'basic',
                category: 'pull',
                difficulty: 'easy',
                format: { sets: 3, reps: '12-15' },
                estimatedTime: 4,
                instructions: 'Stand with feet hip-width apart, holding dumbbells at your sides with palms facing your body (neutral grip - like holding hammers). Keep your elbows pinned to your sides throughout. Curl the weights up toward your shoulders while maintaining that neutral grip - don\'t rotate your wrists. Squeeze at the top, then lower with control. This grip targets the brachialis (muscle under your bicep that adds arm thickness) and the brachioradialis (forearm). You can do both arms together, alternating, or across your body toward the opposite shoulder for variety.'
            },
            {
                id: 'band-pull-apart',
                name: 'Band Pull-Aparts',
                equipment: ['bands'],
                muscleGroups: ['rear-delts', 'upper-back'],
                type: 'basic',
                category: 'pull',
                difficulty: 'easy',
                format: { sets: 3, reps: '15-20' },
                estimatedTime: 3,
                instructions: 'Hold a resistance band in front of you at chest or shoulder height, arms extended, hands about shoulder-width apart. Keep your arms straight throughout the movement. Pull the band apart by squeezing your shoulder blades together, bringing the band toward or touching your chest. Focus on using your rear deltoids and upper back muscles, not just pulling with your arms. Hold the stretched position for a brief squeeze, then return to the start with control. Keep your shoulders down (don\'t shrug) and chest proud. Great for posture and shoulder health - do these often!'
            },
            {
                id: 'db-rear-delt-fly',
                name: 'Dumbbell Rear Delt Fly',
                equipment: ['dumbbells'],
                muscleGroups: ['rear-delts', 'upper-back'],
                type: 'basic',
                category: 'pull',
                difficulty: 'easy',
                format: { sets: 3, reps: '12-15' },
                estimatedTime: 4,
                instructions: 'Hinge forward at your hips until your torso is nearly parallel to the floor. Let your arms hang straight down holding light dumbbells, palms facing each other. Keeping a slight bend in your elbows (locked in that position), raise both arms out to the sides like you\'re spreading wings. Lift until your arms are parallel to the floor, squeezing your shoulder blades together at the top. Lower with control. Don\'t swing or use momentum - these should be slow and controlled. Focus on feeling your rear delts (back of shoulders) working. Use lighter weight than you think; rear delts are small muscles.'
            },
            {
                id: 'barbell-curl',
                name: 'Barbell Curl',
                equipment: ['barbell'],
                muscleGroups: ['biceps'],
                type: 'basic',
                category: 'pull',
                difficulty: 'easy',
                format: { sets: 3, reps: '10-12' },
                estimatedTime: 4,
                instructions: 'Stand with feet shoulder-width apart, gripping a barbell with an underhand grip (palms up), hands about shoulder-width apart. Let the bar hang at arm\'s length against your thighs. Pin your elbows to your sides and keep them there throughout the movement. Curl the bar up toward your shoulders in an arc, squeezing your biceps hard at the top. Lower the bar slowly with control - take 2-3 seconds to lower it. Don\'t swing the weight or lean back; your body should stay stationary. Using an EZ-curl bar (wavy bar) is easier on the wrists if straight bar causes discomfort.'
            },

            // ==================== PULL - CREATIVE ====================
            {
                id: 'dead-hang-challenge',
                name: 'Dead Hang Challenge',
                equipment: ['pull-up-bar'],
                muscleGroups: ['grip', 'shoulders', 'back'],
                type: 'creative',
                category: 'pull',
                difficulty: 'medium',
                format: { time: '3 rounds max hold', rest: '60s between' },
                estimatedTime: 5,
                instructions: 'Grip the pull-up bar with an overhand grip, hands shoulder-width apart. Step or jump off the support and hang with your arms fully extended, shoulders relaxed (let them rise toward your ears slightly). Your job is simply to hang as long as possible without letting go. Keep your body still - no swinging or kipping. Breathe steadily and focus on your grip. When you can\'t hold any longer, safely drop or step down. Rest 60 seconds, then go again. Track your times to see improvement. This builds insane grip strength and decompresses your spine. Aim for 60+ seconds per hang.'
            },
            {
                id: 'kb-gorilla-row',
                name: 'Kettlebell Gorilla Row',
                equipment: ['kettlebell'],
                muscleGroups: ['back', 'core', 'biceps'],
                type: 'creative',
                category: 'pull',
                difficulty: 'medium',
                format: { sets: 3, reps: '8-10 each' },
                estimatedTime: 5,
                instructions: 'Place two kettlebells on the floor about shoulder-width apart. Stand over them and hinge at the hips, grabbing both handles. Your back should be flat, core braced. While pressing down on the left KB to stabilize, row the right KB up toward your hip, elbow driving back past your body. Lower with control, then row the left KB while stabilizing with the right. Alternate sides. The stabilizing arm works hard to prevent rotation, giving you a massive core workout along with the back work. Keep your hips square - don\'t twist to cheat the weight up.'
            },
            {
                id: 'band-face-pull',
                name: 'Band Face Pulls',
                equipment: ['bands'],
                muscleGroups: ['rear-delts', 'rotator-cuff', 'upper-back'],
                type: 'creative',
                category: 'pull',
                difficulty: 'easy',
                format: { sets: 3, reps: '15-20' },
                estimatedTime: 4,
                instructions: 'Anchor a resistance band at face height (door anchor, rack, etc.). Grip the band with both hands, palms facing down, and step back until there\'s tension. Start with arms extended toward the anchor. Pull the band toward your face, separating your hands as you pull so they end up beside your ears. Simultaneously rotate your hands so your thumbs point backward (external rotation). Squeeze your shoulder blades together and hold for 1-2 seconds. Slowly return to start. This exercise is incredible for shoulder health, posture, and hitting often-neglected muscles.'
            },
            {
                id: 'tempo-pull-ups',
                name: 'Tempo Pull-Ups (3-1-3)',
                equipment: ['pull-up-bar'],
                muscleGroups: ['back', 'biceps'],
                type: 'creative',
                category: 'pull',
                difficulty: 'hard',
                format: { sets: 3, reps: '5-6' },
                estimatedTime: 5,
                instructions: 'Grip the bar in your normal pull-up position. Take 3 full seconds to pull yourself up - count "one-mississippi, two-mississippi, three-mississippi" on the way up. At the top (chin over bar), hold and squeeze for 1 second. Then take 3 full seconds to lower yourself back to a dead hang. That\'s 7 seconds per rep! The slow tempo eliminates momentum and keeps your muscles under tension much longer. You\'ll do fewer reps but the quality is infinitely better. These build serious strength and control. Expect to do far fewer reps than your normal pull-ups.'
            },
            {
                id: 'renegade-rows',
                name: 'Renegade Rows',
                equipment: ['dumbbells', 'mat'],
                muscleGroups: ['back', 'core', 'shoulders'],
                type: 'creative',
                category: 'pull',
                difficulty: 'hard',
                format: { sets: 3, reps: '8-10 each' },
                estimatedTime: 5,
                instructions: 'Get into a push-up position with your hands gripping two dumbbells on the floor (hex dumbbells work best - round ones will roll). Your feet should be wide for stability. While pressing down hard through your left arm to stabilize, row the right dumbbell up toward your hip, keeping your elbow close to your body. Lower with control, then row the left dumbbell while stabilizing with the right. The key is keeping your hips completely still and square to the floor - don\'t rotate or let your hips drop. This is as much a core exercise as a back exercise. Start light!'
            },
            {
                id: 'kb-high-pull',
                name: 'Kettlebell High Pull',
                equipment: ['kettlebell'],
                muscleGroups: ['back', 'shoulders', 'traps'],
                type: 'creative',
                category: 'pull',
                difficulty: 'medium',
                format: { sets: 3, reps: '10-12' },
                estimatedTime: 4,
                instructions: 'Stand with feet slightly wider than shoulder-width, kettlebell on the floor between your feet. Hinge at the hips and grab the kettlebell with one hand. Explosively drive your hips forward and pull the KB straight up, leading with your elbow. The elbow should go high and wide as the KB comes up to chin/chest height. Your arm should form an "L" shape at the top. This is a powerful, explosive movement - the hip drive does most of the work, not your arm. Lower the KB with control and reset for the next rep. Great for building power and athleticism.'
            },
            {
                id: '21s-curls',
                name: '21s Bicep Curls',
                equipment: ['dumbbells'],
                muscleGroups: ['biceps'],
                type: 'creative',
                category: 'pull',
                difficulty: 'medium',
                format: { sets: 2, reps: '21 (7-7-7)' },
                estimatedTime: 4,
                instructions: 'Use lighter weight than normal curls - you\'ll see why! Start with dumbbells at your thighs. First, do 7 reps of BOTTOM HALF curls: curl from thighs up to elbows at 90 degrees, then back down. Next, do 7 reps of TOP HALF curls: start at 90 degrees and curl up to shoulders, then back to 90. Finally, do 7 reps of FULL range curls: thighs all the way to shoulders. That\'s 21 total reps with NO REST between sections. The pump and burn is absolutely brutal because you\'re eliminating the rest points in the movement. Don\'t be a hero with the weight!'
            },
            {
                id: 'inverted-rows',
                name: 'Inverted Rows (Bar Low)',
                equipment: ['barbell'],
                muscleGroups: ['back', 'biceps', 'core'],
                type: 'creative',
                category: 'pull',
                difficulty: 'medium',
                format: { sets: 3, reps: '12-15' },
                estimatedTime: 4,
                instructions: 'Set a barbell in a rack at about hip height (lower bar = harder). Lie underneath the bar and grip it slightly wider than shoulder-width, overhand grip. Your body should be straight from head to heels, core braced. Only your heels touch the ground. Pull your chest up to touch the bar by squeezing your shoulder blades together and driving your elbows back. Lower with control until arms are fully extended. Keep your body rigid like a plank throughout - don\'t let your hips sag. To make it easier, raise the bar higher or bend your knees. This is like an upside-down push-up for your back!'
            },

            // ==================== LEGS - BASIC (KNEE-FRIENDLY) ====================
            {
                id: 'romanian-deadlift',
                name: 'Romanian Deadlift',
                equipment: ['barbell'],
                muscleGroups: ['hamstrings', 'glutes', 'lower-back'],
                type: 'basic',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 4, reps: '10-12' },
                estimatedTime: 6,
                instructions: 'Stand with feet hip-width apart, holding the barbell at hip level with an overhand grip. Keep a slight bend in your knees (soft knees) - this angle stays locked throughout the movement. Push your hips BACK (not down) while keeping your back flat and chest proud. The bar should travel straight down, staying close to your legs (almost dragging against them). Lower until you feel a strong stretch in your hamstrings - typically when the bar reaches mid-shin. Drive your hips forward to return to standing, squeezing your glutes at the top. This is a hip hinge, not a squat - your knees barely bend. Keep your core braced to protect your lower back.'
            },
            {
                id: 'db-rdl',
                name: 'Dumbbell Romanian Deadlift',
                equipment: ['dumbbells'],
                muscleGroups: ['hamstrings', 'glutes'],
                type: 'basic',
                category: 'legs',
                difficulty: 'easy',
                format: { sets: 3, reps: '12-15' },
                estimatedTime: 5,
                instructions: 'Stand with feet hip-width apart, holding dumbbells in front of your thighs, palms facing your body. Keep a slight, fixed bend in your knees throughout. Push your hips back while keeping your back flat, lowering the dumbbells along the front of your legs. The dumbbells allow you to go a bit deeper than a barbell since there\'s no bar hitting your shins. Lower until you feel a strong stretch in your hamstrings, then drive your hips forward to return to standing, squeezing your glutes hard at the top. Keep the dumbbells close to your body throughout. Great for beginners learning the hip hinge pattern.'
            },
            {
                id: 'hip-thrust',
                name: 'Barbell Hip Thrust',
                equipment: ['barbell', 'bench'],
                muscleGroups: ['glutes', 'hamstrings'],
                type: 'basic',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 4, reps: '10-12' },
                estimatedTime: 6,
                instructions: 'Sit on the floor with your upper back resting against a bench (bench should hit just below your shoulder blades). Roll a barbell over your legs so it sits in your hip crease (use a bar pad for comfort). Plant your feet flat on the floor, about shoulder-width apart, positioned so your shins are vertical at the top of the movement. Drive through your heels and squeeze your glutes to lift your hips until your body forms a straight line from shoulders to knees. Hold the top for 1-2 seconds, really squeezing your glutes. Lower with control. Keep your chin slightly tucked and eyes forward throughout - don\'t hyperextend your lower back.'
            },
            {
                id: 'glute-bridge',
                name: 'Glute Bridge',
                equipment: ['mat'],
                muscleGroups: ['glutes', 'hamstrings'],
                type: 'basic',
                category: 'legs',
                difficulty: 'easy',
                format: { sets: 3, reps: '15-20' },
                estimatedTime: 4,
                instructions: 'Lie flat on your back with your knees bent and feet flat on the floor, hip-width apart. Your feet should be close enough that you can almost touch your heels with your fingertips. Press your lower back into the floor. Drive through your heels (not your toes) and squeeze your glutes to lift your hips toward the ceiling until your body forms a straight line from shoulders to knees. Hold the top position for 1-2 seconds, squeezing your glutes as hard as you can. Lower with control. Don\'t hyperextend at the top - the power comes from your glutes, not arching your back. Great knee-friendly glute builder!'
            },
            {
                id: 'box-squat',
                name: 'Box Squat',
                equipment: ['barbell', 'box'],
                muscleGroups: ['quads', 'glutes', 'hamstrings'],
                type: 'basic',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 4, reps: '8-10' },
                estimatedTime: 6,
                instructions: 'Set up a box or bench behind you at a height where your thighs are parallel to the floor (or slightly above) when seated. Position the barbell on your upper back and stand in front of the box with feet shoulder-width apart. Push your hips back and sit back onto the box - don\'t just drop down. When you touch the box, pause for 1-2 seconds (this eliminates the stretch reflex, making you work harder). Keep your core braced and shins relatively vertical. Drive through your heels to stand back up explosively. The box teaches proper squat depth and is much easier on the knees than regular squats because it reduces forward knee travel.'
            },
            {
                id: 'goblet-squat',
                name: 'Goblet Squat',
                equipment: ['kettlebell'],
                muscleGroups: ['quads', 'glutes', 'core'],
                type: 'basic',
                category: 'legs',
                difficulty: 'easy',
                format: { sets: 3, reps: '12-15' },
                estimatedTime: 5,
                instructions: 'Hold a kettlebell or dumbbell vertically at your chest, cupping the weight with both hands like you\'re holding a goblet. Stand with feet slightly wider than shoulder-width, toes pointed out about 15-30 degrees. Keeping your chest up and core tight, push your hips back and bend your knees to squat down. Go as low as you can while keeping your back flat - ideally until your elbows touch the inside of your knees. This position naturally keeps your torso upright and teaches great squat form. Drive through your heels to stand back up, squeezing your glutes at the top. The front-loaded weight makes this easier on your lower back than back squats.'
            },
            {
                id: 'sumo-deadlift',
                name: 'Sumo Deadlift',
                equipment: ['barbell'],
                muscleGroups: ['glutes', 'hamstrings', 'quads', 'inner-thighs'],
                type: 'basic',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 4, reps: '6-8' },
                estimatedTime: 6,
                instructions: 'Stand with a very wide stance (about 1.5-2x shoulder width), toes pointed out at 45 degrees or more. The barbell should be over your mid-foot. Bend at the hips and knees, keeping your chest up, and grip the bar with hands inside your knees (about shoulder-width). Your arms should hang straight down. Brace your core, push your knees out toward your toes, and drive through the floor to stand up, keeping the bar close to your body. The wide stance emphasizes your glutes, inner thighs, and allows for a more upright torso, making this easier on the lower back than conventional deadlifts. Lock out by squeezing your glutes, not by leaning back.'
            },
            {
                id: 'step-ups',
                name: 'Box Step-Ups',
                equipment: ['box', 'dumbbells'],
                muscleGroups: ['quads', 'glutes'],
                type: 'basic',
                category: 'legs',
                difficulty: 'easy',
                format: { sets: 3, reps: '10-12 each' },
                estimatedTime: 5,
                instructions: 'Stand facing a box or bench that puts your thigh at about parallel when your foot is on top (12-18 inches typically). Hold dumbbells at your sides. Place your entire right foot on the box, then drive through that heel to step up, bringing your left foot onto the box. Step back down with the left foot first, controlling the descent. Complete all reps on one side before switching, or alternate legs. The key is to push through the working leg - don\'t push off with your back foot to cheat. Keep your torso upright. This is a very knee-friendly exercise that builds single-leg strength and balance.'
            },
            {
                id: 'single-leg-rdl',
                name: 'Single Leg Romanian Deadlift',
                equipment: ['dumbbells'],
                muscleGroups: ['hamstrings', 'glutes', 'balance'],
                type: 'basic',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 3, reps: '8-10 each' },
                estimatedTime: 5,
                instructions: 'Stand on your right leg holding a dumbbell in your left hand (this helps counterbalance). Keep a slight bend in your standing knee. Hinge at the hips by pushing them back while simultaneously extending your left leg straight behind you. Your body and back leg should move as one unit, forming a "T" shape at the bottom. Lower until you feel a strong stretch in your standing leg\'s hamstring, then drive your hips forward to return to standing. Keep your hips square (don\'t rotate open). This challenges your balance enormously while building single-leg strength. Start without weight if needed - the balance component is harder than you think!'
            },
            {
                id: 'wall-sit',
                name: 'Wall Sit',
                equipment: [],
                muscleGroups: ['quads', 'glutes'],
                type: 'basic',
                category: 'legs',
                difficulty: 'easy',
                format: { time: '30-60 seconds', sets: 3 },
                estimatedTime: 4,
                instructions: 'Stand with your back flat against a wall, feet about 2 feet away from the wall. Slide down the wall until your thighs are parallel to the floor (knees at 90 degrees). Your knees should be directly over your ankles, not past your toes. Press your entire back flat against the wall - don\'t let your lower back arch. Place your hands on the wall beside you or on your thighs (not on your knees - that\'s cheating!). Hold this position, breathing steadily. Your quads will burn intensely. This is an isometric exercise that builds quad endurance with zero impact on the knees. Time yourself and try to improve each session.'
            },

            // ==================== LEGS - CREATIVE (KNEE-FRIENDLY) ====================
            {
                id: 'sally-up-squats',
                name: 'Sally Up Wall Squats',
                equipment: ['yoga-ball'],
                muscleGroups: ['quads', 'glutes'],
                type: 'creative',
                category: 'legs',
                difficulty: 'hard',
                format: { time: '3:30', note: 'Full song challenge' },
                estimatedTime: 5,
                instructions: 'Place a yoga/stability ball between your lower back and a wall. Stand with feet shoulder-width apart, slightly in front of you. Play "Flower" by Moby (the Sally Up Challenge song). When you hear "Bring Sally Down," squat down slowly until your thighs are parallel to the floor and HOLD that position. When you hear "Bring Sally Up," stand back up and HOLD at the top. The song has brutal long holds in both positions. The ball supports your back and makes this much easier on your knees than regular squats. Try to complete the entire 3:30 song without your legs giving out. This is a serious quad endurance test!'
            },
            {
                id: 'kb-swing',
                name: 'Kettlebell Swing',
                equipment: ['kettlebell'],
                muscleGroups: ['glutes', 'hamstrings', 'core', 'shoulders'],
                type: 'creative',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 4, reps: '15-20' },
                estimatedTime: 5,
                instructions: 'Stand with feet shoulder-width apart, kettlebell on the floor about a foot in front of you. Hinge at the hips, grab the KB with both hands, and hike it back between your legs like snapping a football. From there, explosively drive your hips forward and squeeze your glutes - this hip snap propels the KB forward and up. Your arms are just along for the ride; they guide the KB but don\'t lift it. The KB should float to about chest or shoulder height at the top. As it falls, hinge back and let it swing between your legs, then repeat. Keep your core braced and back flat throughout. This is a HIP exercise, not a squat or an arm exercise.'
            },
            {
                id: 'kb-deadlift-to-squat',
                name: 'Kettlebell Deadlift to Squat Flow',
                equipment: ['kettlebell'],
                muscleGroups: ['full-lower'],
                type: 'creative',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 3, reps: '8-10' },
                estimatedTime: 5,
                instructions: 'Start with a kettlebell on the floor between your feet. Hinge down and grab it with both hands, then perform a deadlift to standing. At the top, clean the KB up to your chest in a goblet position (two hands cupping the sides). Now perform a goblet squat, going as deep as you can with good form. Stand up from the squat, then lower the KB back down to the floor with control (reverse deadlift). That\'s ONE rep. This flow hits your hamstrings, glutes, quads, and core in one continuous movement. Keep the transitions smooth and controlled. Great total lower body conditioning!'
            },
            {
                id: 'banded-hip-thrust',
                name: 'Banded Hip Thrust',
                equipment: ['bands', 'bench'],
                muscleGroups: ['glutes'],
                type: 'creative',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 3, reps: '15-20' },
                estimatedTime: 4,
                instructions: 'Loop a resistance band around your legs just above your knees. Set up for a hip thrust with your upper back against a bench, feet flat on the floor. Throughout the movement, actively push your knees OUT against the band - this fires up your glute medius (side glutes). Drive through your heels to thrust your hips up, squeezing your glutes hard at the top while continuing to push against the band. The band creates constant tension on your outer glutes, making this exponentially harder than regular hip thrusts. Hold the top for 1-2 seconds before lowering. The burn is real!'
            },
            {
                id: 'stair-climb-workout',
                name: 'Stair Power Climbs',
                equipment: ['stairs'],
                muscleGroups: ['quads', 'glutes', 'cardio'],
                type: 'creative',
                category: 'legs',
                difficulty: 'medium',
                format: { rounds: 5, note: 'Up fast, walk down' },
                estimatedTime: 6,
                instructions: 'Find a staircase - the longer the better. Power walk or take two steps at a time going UP, driving through your heels and pumping your arms. Go as fast as you can maintain with control. At the top, walk slowly back down to recover (walking down stairs can be hard on knees, so keep it controlled). Immediately start the next round. Do 5 rounds total. For added challenge, hold light dumbbells or wear a weighted vest. This is incredibly effective cardio that builds leg strength without the joint impact of running. Your heart rate will spike and your glutes will burn!'
            },
            {
                id: 'tempo-goblet-squat',
                name: 'Tempo Goblet Squat (5-3-1)',
                equipment: ['kettlebell'],
                muscleGroups: ['quads', 'glutes', 'core'],
                type: 'creative',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 3, reps: '8-10' },
                estimatedTime: 5,
                instructions: 'Hold a kettlebell in the goblet position at your chest. Take a full 5 seconds to lower yourself into the squat - count it out slowly. At the bottom (thighs at least parallel), hold perfectly still for 3 seconds. Then drive up to standing in just 1 second. That\'s 9 seconds of time under tension per rep! The slow lowering eliminates momentum, the pause at the bottom removes the stretch reflex, and you have to generate force from a dead stop. Your quads will be screaming by rep 5. Use significantly less weight than your normal goblet squat - the tempo makes this exponentially harder.'
            },
            {
                id: 'single-leg-hip-thrust',
                name: 'Single Leg Hip Thrust',
                equipment: ['bench'],
                muscleGroups: ['glutes'],
                type: 'creative',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 3, reps: '10-12 each' },
                estimatedTime: 5,
                instructions: 'Set up for a hip thrust with your upper back against a bench, one foot planted on the floor. Extend your other leg straight out in front of you (keep it elevated throughout the set). Drive through the heel of your working leg to thrust your hips up until your body forms a straight line from shoulders to knee. Squeeze your glute hard at the top for 1-2 seconds, then lower with control. Complete all reps on one side before switching. This isolates each glute individually and exposes any strength imbalances. Don\'t be surprised if one side is noticeably harder - that\'s normal and why unilateral work is important!'
            },
            {
                id: 'yoga-ball-hamstring-curl',
                name: 'Yoga Ball Hamstring Curl',
                equipment: ['yoga-ball', 'mat'],
                muscleGroups: ['hamstrings', 'glutes'],
                type: 'creative',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 3, reps: '12-15' },
                estimatedTime: 4,
                instructions: 'Lie on your back with your heels resting on top of a stability ball, legs straight, arms by your sides for support. Lift your hips off the floor into a bridge position. From here, bend your knees and use your hamstrings to roll the ball toward your glutes. Your hips should stay elevated the entire time - don\'t let them drop. Roll the ball back out by straightening your legs, keeping your hips up. That\'s one rep. This is one of the best hamstring exercises you can do with minimal equipment. The instability of the ball makes your core and stabilizers work overtime. For an extreme challenge, try it one leg at a time!'
            },
            {
                id: 'frog-pumps',
                name: 'Frog Pumps',
                equipment: ['mat'],
                muscleGroups: ['glutes'],
                type: 'creative',
                category: 'legs',
                difficulty: 'easy',
                format: { sets: 3, reps: '20-30' },
                estimatedTime: 4,
                instructions: 'Lie on your back and bring the soles of your feet together, letting your knees fall out to the sides like a frog (butterfly position). Your feet should be relatively close to your glutes. From here, drive through your heels and squeeze your glutes to lift your hips off the floor. Focus on squeezing your glutes as hard as possible at the top - hold for 1 second. Lower with control and repeat. The unique foot position takes your quads and hamstrings out of the movement, isolating your glutes extremely well. These burn like crazy but are very knee-friendly since there\'s no knee flexion involved. Great for glute activation!'
            },
            {
                id: 'kb-sumo-squat',
                name: 'Kettlebell Sumo Squat',
                equipment: ['kettlebell'],
                muscleGroups: ['quads', 'glutes', 'inner-thighs'],
                type: 'creative',
                category: 'legs',
                difficulty: 'easy',
                format: { sets: 3, reps: '12-15' },
                estimatedTime: 4,
                instructions: 'Stand with a very wide stance (about 1.5x shoulder width), toes pointed out at 45 degrees. Hold a kettlebell with both hands, arms hanging straight down so the KB hangs between your legs. Keeping your chest up and back straight, push your knees out toward your toes as you squat down. Go as deep as you can - the wide stance allows for excellent depth. Your torso should stay fairly upright (more upright than a regular squat). Drive through your heels to stand, squeezing your glutes and inner thighs at the top. This variation really targets the glutes and inner thighs while being easier on the lower back due to the upright posture.'
            },

            // ==================== CORE - BASIC ====================
            {
                id: 'plank',
                name: 'Plank Hold',
                equipment: ['mat'],
                muscleGroups: ['core', 'shoulders'],
                type: 'basic',
                category: 'core',
                difficulty: 'easy',
                format: { time: '30-60 seconds', sets: 3 },
                estimatedTime: 4,
                instructions: 'Get into position on your forearms and toes. Your elbows should be directly under your shoulders, forearms parallel or hands clasped. Your body should form a perfectly straight line from head to heels - don\'t let your hips sag (most common mistake) or pike up. Squeeze your glutes and brace your core like you\'re about to be punched in the stomach. Look at the floor to keep your neck neutral. Breathe steadily - don\'t hold your breath! When your form starts to break (hips sagging), the set is over. Quality over quantity. If shaking, that\'s good - it means your muscles are working!'
            },
            {
                id: 'dead-bug',
                name: 'Dead Bug',
                equipment: ['mat'],
                muscleGroups: ['core'],
                type: 'basic',
                category: 'core',
                difficulty: 'easy',
                format: { sets: 3, reps: '10-12 each side' },
                estimatedTime: 4,
                instructions: 'Lie on your back with arms extended straight up toward the ceiling and legs raised with knees bent at 90 degrees (like you\'re a dead bug on its back). Press your lower back firmly into the floor - this is critical and must be maintained throughout. Slowly extend your right arm overhead and your left leg out straight simultaneously, lowering them toward (but not touching) the floor. Only go as low as you can while keeping your lower back pressed into the floor. Return to start and repeat with opposite arm/leg. The goal is anti-extension - keeping your back from arching. This is harder than it looks when done correctly!'
            },
            {
                id: 'hanging-leg-raise',
                name: 'Hanging Leg Raise',
                equipment: ['pull-up-bar'],
                muscleGroups: ['core', 'hip-flexors'],
                type: 'basic',
                category: 'core',
                difficulty: 'hard',
                format: { sets: 3, reps: '10-12' },
                estimatedTime: 4,
                instructions: 'Hang from a pull-up bar with an overhand grip, arms fully extended, body still (no swinging). Keeping your legs straight (or slightly bent for an easier version), raise them by curling your pelvis up and lifting your legs until they\'re at least parallel to the floor. For extra ab work, continue raising until your toes touch the bar. Lower with control - this eccentric portion is where the real work happens. Don\'t swing or use momentum. If you can\'t do straight leg raises, start with knee raises (bring knees to chest). Keep your upper body as still as possible throughout.'
            },
            {
                id: 'russian-twist',
                name: 'Russian Twist',
                equipment: ['mat', 'dumbbells'],
                muscleGroups: ['obliques', 'core'],
                type: 'basic',
                category: 'core',
                difficulty: 'easy',
                format: { sets: 3, reps: '20 total' },
                estimatedTime: 4,
                instructions: 'Sit on the floor with knees bent and heels either on the floor (easier) or elevated (harder). Lean back to about a 45-degree angle, keeping your back straight - don\'t round your spine. Hold a weight (dumbbell, plate, or medicine ball) at chest level with both hands. Rotate your torso to the right, bringing the weight beside your right hip. Rotate to the left, bringing the weight to your left hip. That\'s 2 reps (one each side). Keep your core braced and move with control - don\'t just swing the weight. Your lower body should stay relatively stable while your torso rotates.'
            },
            {
                id: 'bicycle-crunches',
                name: 'Bicycle Crunches',
                equipment: ['mat'],
                muscleGroups: ['core', 'obliques'],
                type: 'basic',
                category: 'core',
                difficulty: 'easy',
                format: { sets: 3, reps: '20 total' },
                estimatedTime: 4,
                instructions: 'Lie on your back with hands lightly supporting your head (don\'t pull on your neck!). Lift your shoulders off the ground and raise your legs with knees bent. Bring your right elbow toward your left knee while simultaneously straightening your right leg. Then switch - left elbow to right knee while straightening the left leg. Move in a smooth, controlled pedaling motion. Really focus on the rotation and bringing your shoulder (not just elbow) across to the opposite knee. Keep your lower back pressed into the floor. Go slow and feel each rep - fast bicycle crunches are usually sloppy and less effective.'
            },
            {
                id: 'bird-dog',
                name: 'Bird Dog',
                equipment: ['mat'],
                muscleGroups: ['core', 'lower-back'],
                type: 'basic',
                category: 'core',
                difficulty: 'easy',
                format: { sets: 3, reps: '10-12 each side' },
                estimatedTime: 4,
                instructions: 'Start on all fours with hands directly under shoulders and knees under hips. Keep your back flat like you could balance a cup of water on it. Simultaneously extend your right arm straight forward and your left leg straight back until both are parallel to the floor. Hold for 2-3 seconds, focusing on keeping your hips and shoulders square to the floor - don\'t let them rotate or tip to one side. Return to the starting position with control, then repeat with the opposite arm and leg. This exercise builds core stability and lower back strength. Move slowly and deliberately - the balance challenge is the point!'
            },

            // ==================== CORE - CREATIVE ====================
            {
                id: 'yoga-ball-stir-pot',
                name: 'Stir the Pot',
                equipment: ['yoga-ball'],
                muscleGroups: ['core', 'shoulders'],
                type: 'creative',
                category: 'core',
                difficulty: 'hard',
                format: { sets: 3, reps: '8-10 each direction' },
                estimatedTime: 4,
                instructions: 'Get into a plank position with your forearms resting on top of a stability ball, toes on the floor. Your body should form a straight line from head to heels. Now, keeping your core braced and body stable, use your forearms to move the ball in small circles - like you\'re stirring a giant pot. Make 8-10 circles clockwise, then 8-10 counterclockwise. The instability of the ball forces your entire core to work overtime to maintain position. Keep the circles small and controlled. Your hips should stay perfectly still while only your arms move the ball. This is brutally effective for core stability!'
            },
            {
                id: 'pallof-press',
                name: 'Pallof Press',
                equipment: ['bands'],
                muscleGroups: ['core', 'obliques'],
                type: 'creative',
                category: 'core',
                difficulty: 'medium',
                format: { sets: 3, reps: '10-12 each side' },
                estimatedTime: 4,
                instructions: 'Anchor a resistance band at chest height. Stand sideways to the anchor point and hold the band with both hands at your chest. Step away until there\'s significant tension trying to pull you toward the anchor. Stand with feet shoulder-width apart, knees slightly bent. Press the band straight out in front of your chest, extending your arms fully. Hold for 1-2 seconds, resisting the rotation - the band is trying to twist you toward the anchor and your job is to prevent that. Bring hands back to chest. The further you extend, the harder it is. This is an anti-rotation exercise that builds incredible core stability.'
            },
            {
                id: 'ab-wheel-substitute',
                name: 'Barbell Rollout',
                equipment: ['barbell'],
                muscleGroups: ['core', 'lats'],
                type: 'creative',
                category: 'core',
                difficulty: 'hard',
                format: { sets: 3, reps: '8-10' },
                estimatedTime: 4,
                instructions: 'Load a barbell with round plates (they need to roll). Kneel on a mat behind the bar and grip it with hands shoulder-width apart. Brace your core HARD - squeeze your abs and glutes. Slowly roll the bar forward, lowering your body toward the floor while keeping your arms straight. Go only as far as you can while maintaining a flat back - don\'t let your lower back arch or hips sag. When you reach your limit (ideally arms extended overhead), squeeze your core and lats to roll the bar back to the starting position. Start with a limited range of motion and increase as you get stronger. This is an advanced exercise - master dead bugs first!'
            },
            {
                id: 'plank-shoulder-tap',
                name: 'Plank Shoulder Taps',
                equipment: ['mat'],
                muscleGroups: ['core', 'shoulders'],
                type: 'creative',
                category: 'core',
                difficulty: 'medium',
                format: { sets: 3, reps: '20 total' },
                estimatedTime: 4,
                instructions: 'Get into a high plank position (on your hands, not forearms), feet slightly wider than normal for stability. Your body should form a straight line from head to heels. Lift your right hand and tap your left shoulder, then return it to the floor. Lift your left hand and tap your right shoulder. That\'s 2 reps. The key is to minimize hip rotation - your hips want to twist when you lift a hand, but you must actively prevent this by bracing your core and squeezing your glutes. Imagine balancing a glass of water on your lower back that can\'t spill. Go slow and focus on stability over speed.'
            },
            {
                id: 'hollow-body-hold',
                name: 'Hollow Body Hold',
                equipment: ['mat'],
                muscleGroups: ['core'],
                type: 'creative',
                category: 'core',
                difficulty: 'medium',
                format: { time: '30-45 seconds', sets: 3 },
                estimatedTime: 4,
                instructions: 'Lie on your back with arms extended overhead and legs straight out. Press your lower back firmly into the floor by engaging your core - this is the key to the exercise. Now lift your shoulders and arms off the floor and lift your legs off the floor simultaneously. Your body should form a slight banana or "hollow" shape. The lower your legs go (while keeping your back pressed down), the harder it is. If your lower back starts to arch off the floor, raise your legs higher or bend your knees slightly. Hold this position, breathing steadily. This is a foundational gymnastics position that builds incredible core strength!'
            },
            {
                id: 'kb-windmill',
                name: 'Kettlebell Windmill',
                equipment: ['kettlebell'],
                muscleGroups: ['obliques', 'shoulders', 'hamstrings'],
                type: 'creative',
                category: 'core',
                difficulty: 'hard',
                format: { sets: 3, reps: '5-6 each side' },
                estimatedTime: 5,
                instructions: 'Press a kettlebell overhead with your right arm, keeping your elbow locked. Turn your feet to point about 45 degrees to the left. Push your right hip out to the right side as you hinge and lower your torso, sliding your left hand down your left leg toward your foot. Keep your eyes on the kettlebell the entire time. Your right arm stays vertical and locked - it doesn\'t move relative to your shoulder, your whole torso tilts as one unit. Go as low as your flexibility allows while maintaining a flat back. Stand back up by reversing the movement. This develops incredible oblique strength, shoulder stability, and hamstring flexibility all at once. Start with no weight to learn the movement!'
            },

            // ==================== CARDIO/CONDITIONING - BASIC ====================
            {
                id: 'treadmill-incline-walk',
                name: 'Incline Treadmill Walk',
                equipment: ['treadmill'],
                muscleGroups: ['cardio', 'glutes', 'calves'],
                type: 'basic',
                category: 'cardio',
                difficulty: 'easy',
                format: { time: '15-20 min', note: '10-15% incline, 3.0-3.5 mph' },
                estimatedTime: 18,
                instructions: 'Set the treadmill to a steep incline (10-15% grade) and a moderate walking speed (3.0-3.5 mph). Walk with a natural stride, pumping your arms. The critical rule: DO NOT hold the rails - this drastically reduces the effectiveness. If you need to hold on, lower the incline or speed until you can walk hands-free. Keep your torso upright (don\'t lean forward into the hill). This is "Zone 2" cardio - you should be able to hold a conversation but feel slightly challenged. The incline works your glutes and calves while being much easier on your joints than running. This is one of the best forms of cardio for body composition!'
            },
            {
                id: 'jump-rope-basic',
                name: 'Jump Rope Intervals',
                equipment: ['jump-rope'],
                muscleGroups: ['cardio', 'calves', 'coordination'],
                type: 'basic',
                category: 'cardio',
                difficulty: 'medium',
                format: { rounds: 5, time: '1 min on / 30 sec rest' },
                estimatedTime: 8,
                instructions: 'Jump for 1 minute, then rest 30 seconds. Repeat for 5 rounds. Keep your jumps small - you only need to clear the rope by about an inch. Stay on the balls of your feet, never landing on your heels. Keep your elbows close to your body and rotate the rope primarily with your wrists, not your arms. Look straight ahead, not at your feet. If you trip, just start again - it happens to everyone! As you get better, you can add variations like alternate foot jumps (like running in place) or boxer skip (shifting weight side to side). The coordination challenge makes time fly by.'
            },
            {
                id: 'cycling-steady',
                name: 'Steady State Cycling',
                equipment: ['bike'],
                muscleGroups: ['cardio', 'quads', 'glutes'],
                type: 'basic',
                category: 'cardio',
                difficulty: 'easy',
                format: { time: '20-30 min', note: 'Zone 2 effort' },
                estimatedTime: 25,
                instructions: 'Set up your bike (stationary or road) so your leg has a slight bend at the bottom of the pedal stroke. Cycle at a pace where you could hold a conversation - this is "Zone 2" or aerobic training. If you\'re gasping for breath, slow down. Maintain a steady cadence (pedaling speed) of 70-90 RPM. Keep your upper body relaxed - don\'t death-grip the handlebars or hunch your shoulders. This is fantastic low-impact cardio that builds your aerobic base while being extremely gentle on your knees. For extra glute work, occasionally stand up out of the saddle for 30-60 seconds.'
            },
            {
                id: 'stair-cardio',
                name: 'Stair Walking Cardio',
                equipment: ['stairs'],
                muscleGroups: ['cardio', 'glutes', 'quads'],
                type: 'basic',
                category: 'cardio',
                difficulty: 'easy',
                format: { time: '10-15 min', note: 'Continuous up/down' },
                estimatedTime: 12,
                instructions: 'Find a staircase (home stairs, stadium stairs, or stair climber machine). Walk up at a steady, sustainable pace - this isn\'t a sprint, it\'s continuous work. Drive through your heel on each step to engage your glutes more. Use the handrail only for balance if needed. Walk down slowly and carefully to protect your knees (going down is harder on joints than going up). Maintain continuous movement for the full duration. As you get fitter, you can skip steps going up to increase the challenge. This is excellent cardio that also builds leg strength with minimal joint impact.'
            },

            // ==================== CARDIO/CONDITIONING - CREATIVE ====================
            {
                id: 'bag-tabata',
                name: 'Punching Bag Tabata',
                equipment: ['punching-bag'],
                muscleGroups: ['cardio', 'shoulders', 'core'],
                type: 'creative',
                category: 'cardio',
                difficulty: 'hard',
                format: { rounds: 8, time: '20 sec on / 10 sec rest' },
                estimatedTime: 5,
                instructions: 'Set a Tabata timer (20 seconds work, 10 seconds rest, 8 rounds). When the work period starts, throw punches at the bag as fast and hard as you can - jabs, crosses, hooks, whatever you want. Give it EVERYTHING for those 20 seconds. When the rest period hits, stop completely and catch your breath. As soon as the next work period starts, explode again. The 4 minutes will feel like an eternity. Focus on rotating your hips into each punch and keeping your hands up. This is one of the most effective HIIT protocols ever created - brutal but incredibly efficient for conditioning.'
            },
            {
                id: 'bag-combo-rounds',
                name: 'Punching Bag 3-Min Rounds',
                equipment: ['punching-bag'],
                muscleGroups: ['cardio', 'shoulders', 'core', 'arms'],
                type: 'creative',
                category: 'cardio',
                difficulty: 'hard',
                format: { rounds: 3, time: '3 min / 1 min rest' },
                estimatedTime: 12,
                instructions: 'Work the bag for 3-minute rounds like a boxer. Start with basic combinations: jab-cross (1-2), jab-jab-cross (1-1-2), jab-cross-hook (1-2-3). Mix in body shots, uppercuts, and movement around the bag. Don\'t just stand still - circle, bob and weave, throw combinations then move. Keep your hands up to protect your face between combinations. After 3 minutes, rest for 1 minute (walk around, shake out your arms, catch your breath). Then go again. Three rounds equals 12 minutes of work but will feel like an hour. This builds serious conditioning and is incredibly fun!'
            },
            {
                id: 'kb-emom',
                name: 'Kettlebell EMOM',
                equipment: ['kettlebell'],
                muscleGroups: ['full-body', 'cardio'],
                type: 'creative',
                category: 'cardio',
                difficulty: 'hard',
                format: { time: '10 min', note: 'Every minute: 10 swings' },
                estimatedTime: 10,
                instructions: 'Set a timer for 10 minutes. At the start of each minute (including minute 0), perform 10 kettlebell swings with perfect form - explosive hip drive, arms floating up, controlled return. Whatever time remains in that minute is your rest. As soon as the next minute starts, do 10 more swings. If the 10 swings take you 20 seconds, you get 40 seconds rest. If they take 30 seconds, you get 30 seconds rest. As fatigue builds, your rest periods will shrink. That\'s 100 total swings in 10 minutes. Use a challenging weight but one that lets you maintain form. EMOM (Every Minute On the Minute) is a brutally effective conditioning protocol!'
            },
            {
                id: 'cycling-intervals',
                name: 'Cycling Hill Intervals',
                equipment: ['bike'],
                muscleGroups: ['cardio', 'quads', 'glutes'],
                type: 'creative',
                category: 'cardio',
                difficulty: 'hard',
                format: { time: '20 min', note: '1 min hard / 2 min easy x 6' },
                estimatedTime: 20,
                instructions: 'After a 2-minute warmup, increase resistance significantly (or find a hill if outdoors). Pedal as hard as you can for 1 minute - this should be an 8-9 out of 10 effort where you\'re struggling to maintain the pace. After 1 minute, reduce resistance and pedal easy for 2 minutes to recover. Your breathing should return close to normal during recovery. Repeat this cycle 6 times (1 min hard + 2 min easy = 3 min per cycle, 6 cycles = 18 min + warmup). This interval pattern builds VO2max and leg strength simultaneously. Standing out of the saddle during hard intervals increases the glute activation.'
            },
            {
                id: 'jump-rope-tricks',
                name: 'Jump Rope Skill Work',
                equipment: ['jump-rope'],
                muscleGroups: ['cardio', 'coordination', 'calves'],
                type: 'creative',
                category: 'cardio',
                difficulty: 'medium',
                format: { time: '10 min', note: 'Practice doubles, crossovers' },
                estimatedTime: 10,
                instructions: 'Spend this time working on jump rope skills beyond basic jumping. DOUBLE UNDERS: Jump higher than normal and spin the rope twice under your feet per jump. Focus on timing and wrist speed. CRISS-CROSS: Cross your arms at chest level on the downswing, then uncross on the next jump. BOXER SKIP: Shift your weight from foot to foot, landing on one foot then the other. HIGH KNEES: Alternate lifting your knees high while jumping. The goal is skill development, not max heart rate. Take breaks when you need them. Learning these tricks makes jumping rope way more engaging and builds incredible coordination. Celebrate small wins - landing your first double under is exciting!'
            },
            {
                id: 'stair-sprint-intervals',
                name: 'Stair Sprint Intervals',
                equipment: ['stairs'],
                muscleGroups: ['cardio', 'quads', 'glutes'],
                type: 'creative',
                category: 'cardio',
                difficulty: 'hard',
                format: { rounds: 6, note: 'Sprint up, walk down' },
                estimatedTime: 8,
                instructions: 'Find a staircase with at least 20-30 steps (more is better). Sprint up the stairs as fast as you safely can, driving through your forefoot and pumping your arms. Use the handrail only if needed for safety, not support. At the top, turn around and WALK down slowly - walking down stairs fast is hard on your knees and you need the recovery time anyway. As soon as you reach the bottom, sprint back up immediately. Complete 6 rounds. This is high-intensity interval training at its finest - your heart rate will spike during the sprint and partially recover during the descent. Simple, effective, and free!'
            },
            {
                id: 'farmer-carry',
                name: 'Farmer Carry Laps',
                equipment: ['dumbbells'],
                muscleGroups: ['grip', 'core', 'traps', 'cardio'],
                type: 'creative',
                category: 'cardio',
                difficulty: 'medium',
                format: { sets: 3, time: '45-60 sec each' },
                estimatedTime: 5,
                instructions: 'Pick up the heaviest dumbbells you can safely carry - grip strength is usually the limiting factor. Let them hang at your sides with arms straight. Stand tall with shoulders back and down, chest proud. Walk with normal strides, keeping your core braced to prevent side-to-side tilting. Your traps will burn, your grip will scream, and your core works constantly to stabilize. Walk for 45-60 seconds or as long as you can maintain good posture. Set the weights down with control (don\'t drop them), rest 60-90 seconds, then go again. This simple exercise builds functional strength like few others - grip, core, posture, and conditioning all in one!'
            },

            // ==================== FULL BODY - BASIC ====================
            {
                id: 'deadlift',
                name: 'Conventional Deadlift',
                equipment: ['barbell'],
                muscleGroups: ['full-body', 'hamstrings', 'back', 'glutes'],
                type: 'basic',
                category: 'full-body',
                difficulty: 'hard',
                format: { sets: 4, reps: '5-6' },
                estimatedTime: 7,
                instructions: 'Stand with feet hip-width apart, the barbell over your mid-foot (where you tie your shoes, not your toes). Bend at the hips and knees to grab the bar with arms just outside your knees, either double overhand grip or mixed grip for heavier weights. Your shins should be close to or touching the bar. Flatten your back by lifting your chest and engaging your lats - imagine trying to squeeze oranges in your armpits. Take a deep breath and brace your core hard. Drive through the floor (don\'t pull with your back), keeping the bar close to your body as it travels up your shins and thighs. Stand tall at the top, squeezing your glutes - don\'t lean back. Lower by hinging at the hips first, then bending the knees once the bar passes them. This is the king of all exercises!'
            },
            {
                id: 'kb-clean-press',
                name: 'Kettlebell Clean & Press',
                equipment: ['kettlebell'],
                muscleGroups: ['full-body'],
                type: 'basic',
                category: 'full-body',
                difficulty: 'medium',
                format: { sets: 3, reps: '8-10 each' },
                estimatedTime: 6,
                instructions: 'Stand with a kettlebell between your feet. Hinge and grab it with one hand, then explosively clean it to the "rack" position at your shoulder. In the rack, the KB should rest on your forearm with your elbow tucked tight to your body, wrist straight, and the bell resting against your upper arm. From the rack position, take a breath, brace your core, and press the KB straight overhead until your arm is fully locked out. Lower the KB back to the rack with control, then lower it to the floor (or to the hang position between your legs for continuous reps). That\'s one rep. Complete all reps on one side before switching. This is a fantastic full-body conditioning exercise that builds strength and power.'
            },

            // ==================== FULL BODY - CREATIVE ====================
            {
                id: 'kb-flow',
                name: 'Kettlebell Flow',
                equipment: ['kettlebell'],
                muscleGroups: ['full-body'],
                type: 'creative',
                category: 'full-body',
                difficulty: 'hard',
                format: { time: '5 min continuous', note: 'Swing-Clean-Press-Squat' },
                estimatedTime: 6,
                instructions: 'Set a timer for 5 minutes and flow continuously through this sequence: Perform one kettlebell swing, then on the upswing clean the KB to rack position at your shoulder. Press it overhead, then lower it back to rack. With the KB still in rack position, perform a goblet squat (transfer to goblet grip). Stand up and swing the KB back between your legs to start another swing. That\'s one full flow. Continue without rest for 5 minutes, switching hands as needed. The key is smooth transitions between movements - it should feel like one continuous motion. This builds conditioning, coordination, and mental toughness!'
            },
            {
                id: 'db-complex',
                name: 'Dumbbell Complex',
                equipment: ['dumbbells'],
                muscleGroups: ['full-body'],
                type: 'creative',
                category: 'full-body',
                difficulty: 'hard',
                format: { sets: 4, reps: '6 each move' },
                estimatedTime: 8,
                instructions: 'Hold a dumbbell in each hand. Perform 6 reps of each movement in sequence WITHOUT putting the dumbbells down: 1) Romanian Deadlifts - hinge at hips, lower DBs to shins. 2) Bent Over Rows - in hinged position, row DBs to hips. 3) Hang Cleans - explosively clean DBs to shoulders. 4) Push Press - dip slightly and press overhead. 5) Goblet Squats - hold one DB at chest, full squat. After completing all 6 reps of all 5 exercises, that\'s ONE set. Rest 90-120 seconds. Use lighter weight than you think - the cumulative fatigue is real. This is metabolic conditioning at its finest!'
            },
            {
                id: 'man-maker',
                name: 'Man Makers',
                equipment: ['dumbbells', 'mat'],
                muscleGroups: ['full-body'],
                type: 'creative',
                category: 'full-body',
                difficulty: 'hard',
                format: { sets: 3, reps: '6-8' },
                estimatedTime: 6,
                instructions: 'Start standing with dumbbells at your sides. Drop down and place the dumbbells on the floor, jumping your feet back to a push-up position (hands gripping DBs). Perform a push-up. Then do a renegade row on each side - row the right DB while stabilizing with the left, then row left while stabilizing with right. Jump your feet forward toward your hands, stand up explosively, and clean the dumbbells to your shoulders. Finish by pressing both dumbbells overhead. Lower and repeat. That\'s ONE rep. Use light-moderate weight - these are devastating. This is essentially a burpee plus push-up plus two rows plus a clean and press. Absolutely brutal full-body conditioning!'
            },
            {
                id: 'barbell-complex',
                name: 'Barbell Complex',
                equipment: ['barbell'],
                muscleGroups: ['full-body'],
                type: 'creative',
                category: 'full-body',
                difficulty: 'hard',
                format: { sets: 4, reps: '6 each move' },
                estimatedTime: 8,
                instructions: 'Load a barbell with moderate weight (start light!). Perform 6 reps of each exercise in sequence without putting the bar down: 1) Deadlifts - full deadlifts from floor. 2) Bent Over Rows - hinge and row bar to lower chest. 3) Hang Cleans - explosively clean bar from hang to shoulders. 4) Push Press - dip and drive bar overhead. 5) Back Squats - lower bar to back, perform full squats. After 6 reps of all 5 exercises, that\'s one set. Rest 2 minutes between sets. The bar never leaves your hands until the set is complete. The cumulative fatigue is immense. This is elite-level metabolic conditioning!'
            },
            {
                id: 'turkish-getup',
                name: 'Turkish Get-Up',
                equipment: ['kettlebell'],
                muscleGroups: ['full-body', 'core', 'shoulders'],
                type: 'creative',
                category: 'full-body',
                difficulty: 'hard',
                format: { sets: 2, reps: '3-4 each side' },
                estimatedTime: 8,
                instructions: 'Lie on your back with a KB pressed up in your right hand, right knee bent, left arm and leg out at 45 degrees. The sequence: 1) Roll onto your left elbow while keeping KB locked out overhead. 2) Press up to your left hand. 3) Bridge your hips high. 4) Sweep your left leg back to a kneeling lunge. 5) Remove your left hand from floor and torso upright. 6) Stand up from the lunge while keeping KB overhead the entire time. 7) Reverse all steps to return to lying. That\'s ONE rep. Each rep takes 30-45 seconds. Go slow - this is about control, not speed. The ultimate full-body stability exercise that exposes every weakness. Start with no weight to learn the pattern!'
            },

            // ==================== ADDITIONAL LEG EXERCISES ====================
            {
                id: 'good-mornings',
                name: 'Good Mornings',
                equipment: ['barbell'],
                muscleGroups: ['hamstrings', 'glutes', 'lower-back'],
                type: 'basic',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 3, reps: '10-12' },
                estimatedTime: 5,
                instructions: 'Bar on upper back (high bar position). Slight knee bend, hinge at hips pushing butt back. Lower torso until nearly parallel to floor, feeling hamstring stretch. Drive hips forward to stand. Keep back flat throughout.'
            },
            {
                id: 'barbell-lunge',
                name: 'Barbell Lunge (Stationary)',
                equipment: ['barbell'],
                muscleGroups: ['quads', 'glutes', 'hamstrings'],
                type: 'basic',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 3, reps: '8-10 each leg' },
                estimatedTime: 6,
                instructions: 'Bar on upper back. Step one foot forward into split stance. Lower back knee toward floor (not touching). Front knee stays over ankle, not past toes. Drive through front heel to stand. KNEE NOTE: Keep motion controlled, skip if knees feel unstable.'
            },
            {
                id: 'split-squat',
                name: 'Dumbbell Split Squat',
                equipment: ['dumbbells'],
                muscleGroups: ['quads', 'glutes'],
                type: 'basic',
                category: 'legs',
                difficulty: 'medium',
                format: { sets: 3, reps: '10-12 each leg' },
                estimatedTime: 6,
                instructions: 'Hold dumbbells at sides. One foot forward, back foot elevated on bench or box (Bulgarian style) or on floor. Lower until back knee nearly touches floor. Drive through front heel. Keep torso upright. KNEE NOTE: Adjust depth based on knee comfort.'
            },
            {
                id: 'glute-step-downs',
                name: 'Glute-Focused Step Downs',
                equipment: ['box'],
                muscleGroups: ['glutes', 'quads'],
                type: 'creative',
                category: 'legs',
                difficulty: 'easy',
                format: { sets: 3, reps: '10-12 each leg' },
                estimatedTime: 5,
                instructions: 'Stand on box on one leg. Slowly lower opposite foot toward floor by pushing hips BACK (not just bending knee). Tap heel lightly on floor, then drive through standing leg to return. Emphasizes glute over quad. Very knee-friendly when done correctly!'
            },

            // ==================== INTRICATE MUSCLE EXERCISES ====================
            {
                id: 'external-rotation',
                name: 'Band External Rotation',
                equipment: ['bands'],
                muscleGroups: ['rotator-cuff'],
                type: 'basic',
                category: 'push',
                difficulty: 'easy',
                format: { sets: 2, reps: '15 each arm' },
                estimatedTime: 3,
                instructions: 'Elbow bent 90 degrees, pinned to side. Hold band with palm facing in. Rotate forearm outward, keeping elbow still. Targets the small rotator cuff muscles that stabilize your shoulder. Essential for shoulder health!'
            },
            {
                id: 'serratus-punches',
                name: 'Serratus Punches',
                equipment: ['dumbbells', 'mat'],
                muscleGroups: ['serratus-anterior'],
                type: 'creative',
                category: 'push',
                difficulty: 'easy',
                format: { sets: 3, reps: '12-15' },
                estimatedTime: 4,
                instructions: 'Lie on back, hold light dumbbell straight up over chest. Keep arm straight and punch toward ceiling by protracting (spreading) your shoulder blade. Return and repeat. Targets the serratus anterior - the "boxer\'s muscle" along your ribs.'
            },
            {
                id: 'banded-internal-rotation',
                name: 'Band Internal Rotation',
                equipment: ['bands'],
                muscleGroups: ['rotator-cuff', 'subscapularis'],
                type: 'basic',
                category: 'push',
                difficulty: 'easy',
                format: { sets: 2, reps: '15 each arm' },
                estimatedTime: 3,
                instructions: 'Anchor band at elbow height. Elbow bent 90 degrees, pinned to side. Start with forearm pointing out, rotate inward toward belly. Slow and controlled. Strengthens internal rotators for shoulder balance.'
            },
            {
                id: 'prone-trap-raise',
                name: 'Prone Trap-3 Raise',
                equipment: ['dumbbells', 'bench'],
                muscleGroups: ['lower-traps', 'rhomboids'],
                type: 'creative',
                category: 'pull',
                difficulty: 'easy',
                format: { sets: 3, reps: '10-12' },
                estimatedTime: 4,
                instructions: 'Lie face down on incline bench. Light dumbbells, thumbs up. Raise arms at a 45-degree angle (between straight ahead and straight out). Squeeze shoulder blades down and together at top. Targets often-neglected lower traps.'
            },
            {
                id: 'tib-raises',
                name: 'Tibialis Raises',
                equipment: [],
                muscleGroups: ['tibialis-anterior'],
                type: 'creative',
                category: 'legs',
                difficulty: 'easy',
                format: { sets: 3, reps: '15-20' },
                estimatedTime: 3,
                instructions: 'Stand with back against wall, feet about a foot away from wall. Lift toes toward shins while keeping heels on ground. Lower slowly. Strengthens the muscle on the front of your shin - great for knee and ankle health!'
            },
            {
                id: 'calf-raise-variations',
                name: 'Calf Raises (Tempo)',
                equipment: ['box'],
                muscleGroups: ['calves', 'soleus'],
                type: 'basic',
                category: 'legs',
                difficulty: 'easy',
                format: { sets: 3, reps: '12-15' },
                estimatedTime: 4,
                instructions: 'Stand on edge of step, heels hanging off. Rise up on toes for 2 counts, hold 1 count at top, lower for 3 counts letting heels drop below step level. Full range of motion for complete calf development.'
            },

            // ==================== CORE - PILATES & YOGA INSPIRED ====================
            {
                id: 'scissors',
                name: 'Scissors',
                equipment: ['mat'],
                muscleGroups: ['core', 'hip-flexors'],
                type: 'creative',
                category: 'core',
                difficulty: 'medium',
                format: { sets: 3, reps: '20 total' },
                estimatedTime: 4,
                instructions: 'Lie on back, head and shoulders lifted, hands behind head or by hips. Extend legs straight up. Lower one leg toward floor (hover, don\'t touch) while keeping the other up. Switch in a scissoring motion. Keep lower back pressed to floor!'
            },
            {
                id: 'pilates-hundred',
                name: 'The Hundred',
                equipment: ['mat'],
                muscleGroups: ['core'],
                type: 'creative',
                category: 'core',
                difficulty: 'medium',
                format: { reps: '100 arm pumps' },
                estimatedTime: 4,
                instructions: 'Lie on back, curl head and shoulders up, extend legs to 45 degrees (or tabletop for easier). Arms long by sides. Pump arms up and down vigorously while breathing: inhale for 5 pumps, exhale for 5. Total 100 pumps. Classic Pilates core burner!'
            },
            {
                id: 'pilates-roll-up',
                name: 'Pilates Roll-Up',
                equipment: ['mat'],
                muscleGroups: ['core', 'spine'],
                type: 'creative',
                category: 'core',
                difficulty: 'medium',
                format: { sets: 2, reps: '8-10' },
                estimatedTime: 4,
                instructions: 'Lie flat, arms overhead. Slowly curl up one vertebra at a time, reaching for toes. Then roll back down with control, one vertebra at a time. Don\'t use momentum! This requires serious core control and spinal articulation.'
            },
            {
                id: 'pilates-swimming',
                name: 'Pilates Swimming',
                equipment: ['mat'],
                muscleGroups: ['back', 'glutes', 'core'],
                type: 'creative',
                category: 'core',
                difficulty: 'easy',
                format: { time: '30 sec', sets: 2 },
                estimatedTime: 3,
                instructions: 'Lie face down, arms extended overhead. Lift arms, chest, and legs off floor. Flutter opposite arm and leg up and down quickly like swimming. Keep breathing! Strengthens entire posterior chain.'
            },
            {
                id: 'double-leg-stretch',
                name: 'Pilates Double Leg Stretch',
                equipment: ['mat'],
                muscleGroups: ['core'],
                type: 'creative',
                category: 'core',
                difficulty: 'medium',
                format: { sets: 2, reps: '10-12' },
                estimatedTime: 4,
                instructions: 'Curl up, hug knees to chest. Inhale, extend arms overhead and legs out at 45 degrees (make a long line). Exhale, circle arms around and hug knees back in. Keep head/shoulders lifted throughout. Pure Pilates challenge!'
            },
            {
                id: 'side-plank-dips',
                name: 'Side Plank Hip Dips',
                equipment: ['mat'],
                muscleGroups: ['obliques', 'core'],
                type: 'creative',
                category: 'core',
                difficulty: 'medium',
                format: { sets: 2, reps: '10-12 each side' },
                estimatedTime: 4,
                instructions: 'Side plank on forearm. Lower hip toward floor (don\'t touch), then lift back to straight line and slightly above. Feel obliques working! Keep shoulders stacked, don\'t let hips roll forward or back.'
            },

            // ==================== YOGA FLOWS ====================
            {
                id: 'sun-salutation-a',
                name: 'Sun Salutation A Flow',
                equipment: ['mat'],
                muscleGroups: ['full-body'],
                type: 'creative',
                category: 'full-body',
                difficulty: 'easy',
                format: { rounds: 3 },
                estimatedTime: 6,
                instructions: 'Mountain pose → reach up → forward fold → halfway lift → step/jump back to plank → lower to floor → cobra or updog → downward dog (5 breaths) → step forward → forward fold → reach up → mountain. Flow with breath, one movement per inhale/exhale.'
            },
            {
                id: 'warrior-flow',
                name: 'Warrior Flow Sequence',
                equipment: ['mat'],
                muscleGroups: ['legs', 'core', 'shoulders'],
                type: 'creative',
                category: 'legs',
                difficulty: 'medium',
                format: { rounds: 2, note: 'Each side' },
                estimatedTime: 6,
                instructions: 'Warrior I (arms up) 5 breaths → Warrior II (arms wide) 5 breaths → Reverse Warrior (reach back) 3 breaths → Extended Side Angle 5 breaths → Warrior II → Warrior I → step back to Down Dog. Repeat other side. Builds leg endurance!'
            },
            {
                id: 'yoga-core-flow',
                name: 'Yoga Core Flow',
                equipment: ['mat'],
                muscleGroups: ['core', 'shoulders'],
                type: 'creative',
                category: 'core',
                difficulty: 'medium',
                format: { time: '5 min continuous' },
                estimatedTime: 5,
                instructions: 'Plank 30s → Side plank right 20s → Plank → Side plank left 20s → Plank → Lower halfway (chaturanga) hold 10s → Plank → Knee-to-nose (each leg) 5x → Child\'s pose 30s. Repeat flow. Yoga-style core workout!'
            },
            {
                id: 'hip-opener-flow',
                name: 'Hip Opener Yoga Flow',
                equipment: ['mat'],
                muscleGroups: ['hips', 'glutes'],
                type: 'creative',
                category: 'legs',
                difficulty: 'easy',
                format: { time: '6-8 min' },
                estimatedTime: 7,
                instructions: 'Down Dog → Low Lunge right (1 min) → Half Split/Runner\'s Stretch (1 min) → Pigeon pose right (2 min) → Down Dog → Repeat left side. Breathe deeply in each pose. Opens tight hips from sitting!'
            },

            // ==================== CREATIVE CIRCUITS ====================
            {
                id: 'upper-body-circuit',
                name: 'Upper Body Blast Circuit',
                equipment: ['dumbbells', 'mat'],
                muscleGroups: ['chest', 'back', 'shoulders', 'arms'],
                type: 'creative',
                category: 'push',
                difficulty: 'hard',
                format: { rounds: 3, note: '30s each, 15s rest' },
                estimatedTime: 8,
                instructions: 'Push-ups → DB Rows → Shoulder Press → Bicep Curls → Tricep Dips → Rest 1 min. Each exercise 30 seconds, 15 seconds to transition. 3 rounds total. Keep intensity high!'
            },
            {
                id: 'lower-body-circuit',
                name: 'Lower Body Burn Circuit',
                equipment: ['kettlebell', 'mat'],
                muscleGroups: ['quads', 'glutes', 'hamstrings'],
                type: 'creative',
                category: 'legs',
                difficulty: 'hard',
                format: { rounds: 3, note: '45s each, 15s rest' },
                estimatedTime: 9,
                instructions: 'Goblet Squats → Glute Bridges → KB Swings → Step-Ups → Wall Sit → Rest 1 min. 45 seconds per exercise. 3 rounds. All knee-friendly movements, high intensity!'
            },
            {
                id: 'core-conditioning-circuit',
                name: 'Core Conditioning Circuit',
                equipment: ['mat'],
                muscleGroups: ['core', 'obliques'],
                type: 'creative',
                category: 'core',
                difficulty: 'medium',
                format: { rounds: 2, note: '40s each, 10s rest' },
                estimatedTime: 6,
                instructions: 'Plank → Dead Bug → Russian Twists → Bird Dogs → Hollow Hold → Bicycle Crunches → Rest 45s. 40 seconds each exercise. 2 rounds. Hits core from every angle!'
            },
            {
                id: 'metabolic-circuit',
                name: 'Metabolic Conditioning Circuit',
                equipment: ['kettlebell', 'jump-rope'],
                muscleGroups: ['full-body', 'cardio'],
                type: 'creative',
                category: 'cardio',
                difficulty: 'hard',
                format: { rounds: 4, note: '30s work / 15s rest' },
                estimatedTime: 10,
                instructions: 'KB Swings → Jump Rope → Goblet Squat → Push-Ups → KB High Pull → Mountain Climbers (modified for knees). 30 seconds work, 15 seconds rest. 4 rounds. Heart rate through the roof!'
            },
            {
                id: 'amrap-circuit',
                name: 'AMRAP Challenge',
                equipment: ['dumbbells'],
                muscleGroups: ['full-body'],
                type: 'creative',
                category: 'full-body',
                difficulty: 'hard',
                format: { time: '12 min AMRAP' },
                estimatedTime: 12,
                instructions: 'As Many Rounds As Possible in 12 minutes: 10 DB Deadlifts → 10 Push-Ups → 10 DB Rows → 10 Goblet Squats → 10 Sit-Ups. Track your rounds! Try to beat it next time.'
            },
            {
                id: 'tabata-finisher',
                name: 'Tabata Finisher',
                equipment: ['mat'],
                muscleGroups: ['cardio', 'core'],
                type: 'creative',
                category: 'cardio',
                difficulty: 'hard',
                format: { time: '4 min', note: '20s on / 10s off x 8' },
                estimatedTime: 4,
                instructions: 'Pick one exercise: Mountain Climbers, Burpees (no jump - step out), Plank Jacks, or High Knees. 20 seconds ALL OUT, 10 seconds rest. Repeat 8 times. Only 4 minutes but devastatingly effective!'
            }
        ];
    }

    // ============================================
    // WARM-UP DATABASE
    // ============================================

    buildWarmupDatabase() {
        return {
            general: [
                {
                    name: 'Arm Circles',
                    time: '30 sec each direction',
                    instructions: 'Stand tall with arms extended straight out to sides at shoulder height. Make small circles forward, gradually increasing to large circles. After 15 seconds, reverse direction. Keep core engaged and shoulders relaxed away from ears.'
                },
                {
                    name: 'Leg Swings',
                    time: '10 each leg',
                    instructions: 'Stand next to a wall and place one hand on it for balance. Swing your outside leg forward and backward like a pendulum, keeping it straight. Let momentum do the work - don\'t force it. Then turn and face the wall, swinging the leg side to side across your body.'
                },
                {
                    name: 'Hip Circles',
                    time: '10 each direction',
                    instructions: 'Stand with feet hip-width apart, hands on hips. Make large circles with your hips like you\'re hula hooping - push forward, to the right, back, and left. Make the circles as big as comfortable. Reverse direction after 10 circles.'
                },
                {
                    name: 'Cat-Cow Stretch',
                    time: '10 reps',
                    instructions: 'Start on hands and knees, wrists under shoulders, knees under hips. COW: Inhale, drop belly toward floor, lift chest and tailbone, look up slightly. CAT: Exhale, round spine toward ceiling, tuck chin and tailbone. Flow smoothly between positions with your breath.'
                },
                {
                    name: 'Thoracic Rotations',
                    time: '8 each side',
                    instructions: 'Start on hands and knees. Place right hand behind your head. Rotate your right elbow down toward your left arm, then rotate up and open toward the ceiling, following your elbow with your eyes. Feel the twist in your mid-back, not lower back. Keep hips stable throughout.'
                },
                {
                    name: 'Shoulder Pass-Throughs',
                    time: '10 reps',
                    instructions: 'Hold a resistance band (or towel/broomstick) with a wide grip in front of your thighs. Keeping arms straight, raise the band overhead and continue rotating it behind you until it touches your glutes. Reverse the motion. Use a wider grip if shoulders feel tight.'
                },
                {
                    name: 'World\'s Greatest Stretch',
                    time: '5 each side',
                    instructions: 'Step right foot outside right hand in a lunge position. Drop left elbow toward the floor inside your right foot. Then rotate and reach right arm to the ceiling, following with your eyes. Hold 2-3 seconds. Return and repeat other side. Amazing full-body opener!'
                },
                {
                    name: 'Inchworms',
                    time: '6 reps',
                    instructions: 'Stand tall, hinge at hips and touch floor (bend knees if needed). Walk hands out to high plank position. Hold briefly, then walk hands back to feet and stand up. Warms up hamstrings, core, and shoulders simultaneously.'
                }
            ],
            push: [
                {
                    name: 'Band Pull-Aparts',
                    time: '15 reps',
                    instructions: 'Hold a light band in front of you at chest height, arms extended, palms down. Pull the band apart by squeezing your shoulder blades together until the band touches your chest. Control the return. Keep shoulders down, not shrugged. Warms up rear delts and rotator cuff.'
                },
                {
                    name: 'Scapular Push-Ups',
                    time: '10 reps',
                    instructions: 'Get in a high plank position, arms straight. WITHOUT bending your elbows, let your chest sink toward the floor by allowing shoulder blades to pinch together. Then push the floor away, spreading your shoulder blades apart (protraction). Only your shoulder blades move - arms stay locked.'
                },
                {
                    name: 'Wall Slides',
                    time: '10 reps',
                    instructions: 'Stand with back flat against wall, feet 6 inches away. Start with arms in "W" position (elbows bent 90 degrees, backs of hands on wall at shoulder height). Slide arms up the wall into a "Y" position, keeping contact with the wall the entire time. Slide back down to W. Great for shoulder mobility.'
                },
                {
                    name: 'Light Push-Ups',
                    time: '10 reps',
                    instructions: 'Perform slow, controlled push-ups focusing on perfect form. Take 2 seconds to lower, pause briefly at the bottom, press up smoothly. If regular push-ups are too intense for a warmup, do them with hands on a bench or wall.'
                },
                {
                    name: 'Arm Haulers',
                    time: '10 reps',
                    instructions: 'Lie face down on mat, arms extended overhead, forehead resting on floor. Lift arms off the floor and sweep them back toward your hips, then return overhead. Keep arms straight and thumbs pointing up. Warms up the entire shoulder girdle.'
                }
            ],
            pull: [
                {
                    name: 'Band Face Pulls',
                    time: '15 reps',
                    instructions: 'Anchor band at face height. Grip with both hands, palms facing down. Step back for tension. Pull toward your face, separating hands as you pull (finish with hands beside your ears, thumbs pointing back). Squeeze shoulder blades together. Slowly return to start.'
                },
                {
                    name: 'Dead Hangs',
                    time: '20-30 sec',
                    instructions: 'Grip the pull-up bar with hands slightly wider than shoulders. Let your body hang completely relaxed, arms fully extended. Relax your shoulders and let gravity decompress your spine. Breathe normally. This activates your grip and stretches your lats.'
                },
                {
                    name: 'Scapular Pulls',
                    time: '10 reps',
                    instructions: 'Hang from bar with arms fully extended. WITHOUT bending your elbows, pull your shoulder blades down and back, which will lift your body slightly. Hold 1-2 seconds at top, then relax and let shoulders rise. This teaches proper lat engagement for pull-ups.'
                },
                {
                    name: 'Light Band Rows',
                    time: '15 reps',
                    instructions: 'Anchor band at chest height or loop around a sturdy object. Step back until there\'s tension. Pull elbows back, squeezing shoulder blades together, until hands reach your ribcage. Keep elbows close to body. Slow and controlled to wake up lats and rhomboids.'
                },
                {
                    name: 'Prone Y-T-W Raises',
                    time: '5 each position',
                    instructions: 'Lie face down on floor or bench. Y: Arms overhead forming a Y, thumbs up, lift arms. T: Arms straight out to sides, thumbs up, lift. W: Elbows bent 90 degrees by your sides, squeeze shoulder blades and lift hands. Hold each position 2-3 seconds.'
                }
            ],
            legs: [
                {
                    name: 'Glute Bridges',
                    time: '15 reps',
                    instructions: 'Lie on back, knees bent, feet flat on floor hip-width apart. Push through your heels and squeeze glutes to lift hips toward ceiling until body forms a straight line from shoulders to knees. Pause and squeeze glutes hard at top for 1-2 seconds. Lower with control. This activates your glutes before heavy loading.'
                },
                {
                    name: 'Banded Monster Walks',
                    time: '10 steps each way',
                    instructions: 'Place a small resistance band just above your knees (or around ankles for more challenge). Stand with feet hip-width apart in a quarter squat position. Take wide steps to the side, keeping tension on the band throughout. Don\'t let knees cave in. Walk right for 10 steps, then left. Burns so good!'
                },
                {
                    name: 'Bodyweight Box Squats',
                    time: '10 reps',
                    instructions: 'Stand in front of a box or bench, feet shoulder-width apart. Push hips back and sit down until your glutes touch the box. Pause briefly (don\'t relax or bounce), then drive through heels to stand. This grooves your squat pattern and is easy on knees.'
                },
                {
                    name: 'Hip 90-90 Stretch',
                    time: '30 sec each side',
                    instructions: 'Sit on floor with right leg in front (knee and ankle both at 90 degrees) and left leg to the side (also at 90 degrees). Sit tall and lean gently toward your front shin. Hold 30 sec. To switch sides: lift your legs and rotate your whole body until the left leg is in front. Amazing for hip mobility.'
                },
                {
                    name: 'Clamshells',
                    time: '12 each side',
                    instructions: 'Lie on your side with knees bent at 90 degrees, feet together. Keeping feet touching, rotate your top knee up toward the ceiling like a clamshell opening. Don\'t let your hips roll back. Pause at top, lower slowly. Add a band above knees for more activation.'
                },
                {
                    name: 'Leg Swings (Front/Back)',
                    time: '10 each leg',
                    instructions: 'Hold wall or sturdy object for balance. Swing one leg forward and backward like a pendulum, letting it swing freely. Don\'t force the range - let momentum gradually increase it. Keep your torso upright and core engaged. Switch legs after 10 swings.'
                }
            ],
            cardio: [
                {
                    name: 'Light Jog/Walk',
                    time: '2 min',
                    instructions: 'Start with an easy walk and gradually increase to a light jog. Keep it conversational - you should be able to talk easily. Focus on gradually elevating heart rate without going too hard too soon. If on treadmill, start at 2.5-3.0 mph and build to 4.0-5.0.'
                },
                {
                    name: 'Jumping Jacks',
                    time: '30 reps',
                    instructions: 'Stand with feet together, arms at sides. Jump feet out wide while raising arms overhead. Jump back to start. Keep it light and controlled for a warmup - these aren\'t meant to be exhausting. If jumping bothers knees, step side to side instead of jumping.'
                },
                {
                    name: 'High Knees (March)',
                    time: '30 sec',
                    instructions: 'March in place, lifting your knees high toward your chest with each step. Pump your arms naturally. Keep it controlled for a warmup rather than sprinting. Focus on good posture - stand tall, don\'t lean back. Gradually increase speed as you warm up.'
                },
                {
                    name: 'Arm Swings',
                    time: '30 sec',
                    instructions: 'Stand with feet shoulder-width apart. Swing both arms across your body horizontally, alternating which arm is on top. Let them swing naturally, creating momentum. This warms up your shoulders, chest, and upper back while gently elevating heart rate.'
                },
                {
                    name: 'Butt Kicks',
                    time: '30 sec',
                    instructions: 'Jog in place, kicking your heels up toward your glutes with each step. Keep your thighs relatively still - the motion comes from bending your knees. Pump arms naturally. Great for warming up quads and hip flexors. Keep it light for warmup purposes.'
                }
            ]
        };
    }

    // ============================================
    // COOL-DOWN DATABASE
    // ============================================

    buildCooldownDatabase() {
        return {
            general: [
                {
                    name: 'Deep Breathing (Box Breath)',
                    time: '1 min',
                    instructions: 'Sit or lie comfortably. Breathe in slowly through your nose for 4 counts. Hold your breath for 4 counts. Exhale slowly through your mouth for 6 counts. Hold empty for 2 counts. Repeat. This activates your parasympathetic nervous system to help you recover.'
                },
                {
                    name: 'Child\'s Pose',
                    time: '45 sec',
                    instructions: 'Kneel on the floor, sit back on your heels. Separate your knees wide (wider than your hips). Walk your hands forward and lower your chest toward the floor. Rest your forehead on the mat. Arms can be extended or relaxed by your sides. Breathe deeply into your lower back. Ultimate relaxation pose.'
                },
                {
                    name: 'Lying Spinal Twist',
                    time: '30 sec each side',
                    instructions: 'Lie on your back. Bring your right knee to your chest, then guide it across your body to the left side with your left hand. Extend your right arm out to the side and look toward your right hand. Keep both shoulders on the floor. Breathe and relax into the twist. Switch sides.'
                },
                {
                    name: 'Happy Baby Pose',
                    time: '45 sec',
                    instructions: 'Lie on your back. Bring knees toward your armpits and grab the outside edges of your feet (or ankles/shins if feet are hard to reach). Keep your lower back pressed into the floor. Gently rock side to side if it feels good. Opens hips and releases lower back tension.'
                },
                {
                    name: 'Corpse Pose (Savasana)',
                    time: '1 min',
                    instructions: 'Lie flat on your back, legs extended, arms by your sides with palms facing up. Close your eyes. Let your feet fall open naturally. Consciously relax every muscle from your toes to your head. Breathe naturally. Just be. This is where recovery happens.'
                }
            ],
            push: [
                {
                    name: 'Doorway Chest Stretch',
                    time: '30 sec each arm',
                    instructions: 'Stand in a doorway. Place your right forearm on the door frame with elbow at 90 degrees, elbow at shoulder height. Step your right foot forward through the doorway and lean your body forward until you feel a stretch in your chest and front shoulder. Keep core engaged so you don\'t arch your back. Switch arms.'
                },
                {
                    name: 'Cross-Body Shoulder Stretch',
                    time: '30 sec each',
                    instructions: 'Bring your right arm across your body at chest height. Use your left hand to gently pull your right arm closer to your chest, just above the elbow. Keep your right shoulder down (don\'t let it hike up). You should feel this in the back of your shoulder. Switch arms.'
                },
                {
                    name: 'Tricep Stretch',
                    time: '30 sec each',
                    instructions: 'Raise your right arm overhead, then bend the elbow so your right hand reaches toward your upper back. Use your left hand to gently push on your right elbow, deepening the stretch. Keep your head up and don\'t let your ribs flare out. Switch arms.'
                },
                {
                    name: 'Thread the Needle',
                    time: '30 sec each side',
                    instructions: 'Start on hands and knees. Slide your right arm underneath your body, palm facing up, letting your right shoulder and temple rest on the floor. Your left hand can stay planted or reach overhead for a deeper stretch. Feel the stretch through your right shoulder and upper back. Switch sides.'
                },
                {
                    name: 'Puppy Pose',
                    time: '45 sec',
                    instructions: 'Start on hands and knees. Walk your hands forward while keeping your hips above your knees. Lower your chest and forehead toward the floor. Arms stay extended, hands shoulder-width apart. This deeply stretches the shoulders, chest, and spine. Melt into it.'
                }
            ],
            pull: [
                {
                    name: 'Lat Stretch',
                    time: '30 sec each side',
                    instructions: 'Stand next to a doorframe or pole. Grab it with your right hand overhead. Step your feet away and push your right hip out to the right while letting your body lean left, hanging off your right arm. You\'ll feel a deep stretch along the right side of your torso and lat. Switch sides.'
                },
                {
                    name: 'Seated Forward Fold',
                    time: '45 sec',
                    instructions: 'Sit with legs extended straight in front of you, feet flexed. Inhale and sit tall. Exhale and hinge from your hips (not your lower back) reaching toward your toes. Go only as far as you can while keeping your back relatively straight. Hold wherever you feel the hamstring stretch. Breathe and relax deeper.'
                },
                {
                    name: 'Bicep Wall Stretch',
                    time: '30 sec each',
                    instructions: 'Stand next to a wall. Place your right palm flat on the wall at shoulder height, fingers pointing backward (toward the wall behind you). Slowly rotate your body away from the wall until you feel a stretch in your bicep and front of shoulder. Keep your arm straight. Switch sides.'
                },
                {
                    name: 'Cat-Cow (Slow)',
                    time: '8-10 reps',
                    instructions: 'On hands and knees, slowly alternate between arching your back (cow - belly drops, head up) and rounding your back (cat - belly in, chin tucked). Move slowly with your breath - inhale for cow, exhale for cat. This releases tension throughout the entire spine after pulling movements.'
                },
                {
                    name: 'Forearm Stretch',
                    time: '30 sec each direction',
                    instructions: 'Extend your right arm forward, palm facing down. Use your left hand to gently pull your fingers down toward the floor, stretching the top of your forearm. Then flip your hand so palm faces up and gently pull fingers down toward the floor, stretching the inner forearm. Switch arms.'
                }
            ],
            legs: [
                {
                    name: 'Figure Four Stretch (Pigeon)',
                    time: '45 sec each',
                    instructions: 'Lie on your back. Cross your right ankle over your left knee, making a figure 4 shape. Reach through and grab behind your left thigh. Gently pull your left thigh toward your chest while pressing your right knee away. You\'ll feel a deep stretch in your right glute/hip. Keep your head down. Switch legs.'
                },
                {
                    name: 'Lying Hamstring Stretch',
                    time: '45 sec each',
                    instructions: 'Lie on your back. Raise your right leg toward the ceiling, keeping it as straight as possible. Loop a band, towel, or your hands behind your thigh or calf. Gently pull the leg toward you until you feel a stretch in your hamstring. Keep your left leg flat on the floor. Relax and breathe. Switch legs.'
                },
                {
                    name: 'Kneeling Hip Flexor Stretch',
                    time: '30 sec each',
                    instructions: 'Kneel with right foot forward (90-degree angle), left knee on the floor behind you (use a pad if needed). Squeeze your left glute and gently push your hips forward. You should feel a stretch in the front of your left hip. Don\'t arch your lower back - keep your core engaged. Raise arms overhead to deepen. Switch sides.'
                },
                {
                    name: 'Calf Stretch',
                    time: '30 sec each',
                    instructions: 'Stand facing a wall, hands on wall for support. Step your right foot back about 2 feet, keeping it straight. Bend your left knee and lean into the wall, pressing your right heel into the floor. Feel the stretch in your right calf. For a deeper stretch in lower calf, slightly bend your back knee. Switch legs.'
                },
                {
                    name: '90-90 Hip Stretch',
                    time: '45 sec each side',
                    instructions: 'Sit with right leg in front bent at 90 degrees, left leg to the side bent at 90 degrees. Sit tall, then slowly hinge forward over your front shin, keeping your back straight. Hold where you feel the stretch in your outer hip. To switch: lift legs and rotate so left leg is in front. Deep hip opener!'
                },
                {
                    name: 'Quad Stretch (Lying)',
                    time: '30 sec each',
                    instructions: 'Lie on your right side. Bend your left knee and grab your left foot or ankle behind you. Gently pull your heel toward your glute while keeping your knees together and hips stacked. Squeeze your glute to increase the stretch. Keep your core engaged so you don\'t arch. Switch sides.'
                }
            ],
            cardio: [
                {
                    name: 'Walking Cool-Down',
                    time: '2 min',
                    instructions: 'Walk at an easy, relaxed pace. Let your heart rate gradually come down. Shake out your arms as you walk. Take deep breaths - big inhale through nose, slow exhale through mouth. This active recovery helps flush metabolic waste from your muscles.'
                },
                {
                    name: 'Full Body Shake-Out',
                    time: '30 sec',
                    instructions: 'Stand with feet hip-width apart. Start shaking your hands, then your arms, then let the shake travel to your shoulders. Add in your legs - bounce gently. Shake out any residual tension. Let your body move freely and loosely. It looks silly but feels amazing!'
                },
                {
                    name: 'Standing Forward Fold',
                    time: '45 sec',
                    instructions: 'Stand with feet hip-width apart. Hinge at your hips and fold forward, letting your head and arms hang heavy toward the floor. Bend your knees slightly if needed. Grab opposite elbows and gently sway side to side. Let gravity do the work - don\'t force anything. Releases the entire back body.'
                },
                {
                    name: 'Neck Rolls',
                    time: '30 sec',
                    instructions: 'Stand or sit tall. Slowly drop your right ear toward your right shoulder. Roll your chin toward your chest, then continue to your left shoulder, then look up slightly (skip tilting all the way back if it bothers your neck). Make slow, controlled circles. Reverse direction. Releases neck tension from cardio intensity.'
                },
                {
                    name: 'Chest Opener Stretch',
                    time: '30 sec',
                    instructions: 'Stand tall and interlace your fingers behind your back. Straighten your arms and gently lift them away from your body while squeezing your shoulder blades together. Lift your chest toward the ceiling. This counteracts the forward-hunching that happens during intense cardio.'
                }
            ]
        };
    }

    // ============================================
    // WORKOUT GENERATION LOGIC
    // ============================================

    generateWorkout(type = 'random', difficulty = 'medium') {
        // Determine workout type
        const types = ['push', 'pull', 'legs', 'upper-body', 'full-body', 'cardio', 'core'];
        const selectedType = type === 'random' ? types[Math.floor(Math.random() * types.length)] : type;

        // Get exercises for this type
        let availableExercises = this.getExercisesForType(selectedType, difficulty);

        // Apply freshness scoring
        availableExercises = this.applyFreshnessScoring(availableExercises);

        // Select exercises for the workout
        const workout = this.selectWorkoutExercises(availableExercises, selectedType, difficulty);

        // Add warm-up and cool-down
        const warmup = this.selectWarmup(selectedType);
        const cooldown = this.selectCooldown(selectedType);

        const generatedWorkout = {
            id: this.generateWorkoutId(),
            type: selectedType,
            difficulty: difficulty,
            generatedAt: new Date().toISOString(),
            warmup: warmup,
            exercises: workout,
            cooldown: cooldown,
            estimatedTime: this.calculateTotalTime(warmup, workout, cooldown),
            completed: false
        };

        return generatedWorkout;
    }

    getExercisesForType(type, difficulty) {
        let exercises = [];

        switch(type) {
            case 'push':
                exercises = this.exercises.filter(e => e.category === 'push');
                break;
            case 'pull':
                exercises = this.exercises.filter(e => e.category === 'pull');
                break;
            case 'legs':
                exercises = this.exercises.filter(e => e.category === 'legs');
                break;
            case 'core':
                exercises = this.exercises.filter(e => e.category === 'core');
                break;
            case 'cardio':
                exercises = this.exercises.filter(e => e.category === 'cardio');
                break;
            case 'upper-body':
                exercises = this.exercises.filter(e => e.category === 'push' || e.category === 'pull');
                break;
            case 'full-body':
                exercises = this.exercises.filter(e =>
                    e.category === 'full-body' ||
                    e.category === 'legs' ||
                    e.category === 'push' ||
                    e.category === 'pull'
                );
                break;
            default:
                exercises = this.exercises;
        }

        // Filter by difficulty
        if (difficulty === 'easy') {
            exercises = exercises.filter(e => e.difficulty === 'easy' || e.difficulty === 'medium');
        } else if (difficulty === 'hard') {
            exercises = exercises.filter(e => e.difficulty === 'medium' || e.difficulty === 'hard');
        }

        return exercises;
    }

    applyFreshnessScoring(exercises) {
        const twoWeeksAgo = Date.now() - (14 * 24 * 60 * 60 * 1000);
        const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);

        return exercises.map(exercise => {
            const lastDone = this.history.exerciseUsage[exercise.id];
            let freshnessScore = 1;

            if (!lastDone) {
                freshnessScore = 3; // Never done - high priority
            } else if (lastDone < twoWeeksAgo) {
                freshnessScore = 2.5; // Not done in 2+ weeks
            } else if (lastDone < oneWeekAgo) {
                freshnessScore = 1.5; // Not done in 1 week
            } else {
                freshnessScore = 0.5; // Done recently
            }

            return { ...exercise, freshnessScore };
        });
    }

    selectWorkoutExercises(exercises, type, difficulty) {
        // Determine number of exercises based on type and difficulty
        let targetCount = 6;
        let targetTime = 35; // minutes for main workout

        if (type === 'cardio') {
            targetCount = 3;
        } else if (type === 'core') {
            targetCount = 5;
        }

        if (difficulty === 'easy') {
            targetCount = Math.max(4, targetCount - 1);
        } else if (difficulty === 'hard') {
            targetCount = targetCount + 1;
        }

        // Separate basic and creative
        const basic = exercises.filter(e => e.type === 'basic');
        const creative = exercises.filter(e => e.type === 'creative');

        // Sort by freshness score (higher = more likely to be picked)
        basic.sort((a, b) => b.freshnessScore - a.freshnessScore);
        creative.sort((a, b) => b.freshnessScore - a.freshnessScore);

        // Select mix (roughly 60% basic, 40% creative)
        const basicCount = Math.ceil(targetCount * 0.6);
        const creativeCount = targetCount - basicCount;

        const selected = [];

        // Add basic exercises with weighted random selection
        this.addWeightedExercises(selected, basic, basicCount);

        // Add creative exercises
        this.addWeightedExercises(selected, creative, creativeCount);

        // Shuffle to mix basic and creative
        this.shuffleArray(selected);

        return selected;
    }

    addWeightedExercises(selected, pool, count) {
        const available = [...pool];

        for (let i = 0; i < count && available.length > 0; i++) {
            // Weight selection toward fresher exercises
            const totalWeight = available.reduce((sum, e) => sum + e.freshnessScore, 0);
            let random = Math.random() * totalWeight;

            let selectedIndex = 0;
            for (let j = 0; j < available.length; j++) {
                random -= available[j].freshnessScore;
                if (random <= 0) {
                    selectedIndex = j;
                    break;
                }
            }

            selected.push({ ...available[selectedIndex] });
            available.splice(selectedIndex, 1);
        }
    }

    selectWarmup(type) {
        const warmups = [...this.warmups.general];

        // Add type-specific warmups
        const typeKey = type === 'upper-body' ? 'push' :
                       type === 'full-body' ? 'legs' :
                       type === 'core' ? 'general' : type;

        if (this.warmups[typeKey]) {
            warmups.push(...this.warmups[typeKey]);
        }

        // Select 4-5 warmup movements
        this.shuffleArray(warmups);
        return warmups.slice(0, 5);
    }

    selectCooldown(type) {
        const cooldowns = [...this.cooldowns.general];

        // Add type-specific cooldowns
        const typeKey = type === 'upper-body' ? 'push' :
                       type === 'full-body' ? 'legs' :
                       type === 'core' ? 'general' : type;

        if (this.cooldowns[typeKey]) {
            cooldowns.push(...this.cooldowns[typeKey]);
        }

        // Select 4-5 cooldown stretches
        this.shuffleArray(cooldowns);
        return cooldowns.slice(0, 5);
    }

    calculateTotalTime(warmup, exercises, cooldown) {
        const warmupTime = 5; // Fixed 5 min warmup
        const cooldownTime = 5; // Fixed 5 min cooldown
        const exerciseTime = exercises.reduce((sum, e) => sum + (e.estimatedTime || 5), 0);

        return warmupTime + exerciseTime + cooldownTime;
    }

    // ============================================
    // EXERCISE MANAGEMENT (SWAP / REMOVE)
    // ============================================

    swapExercise(workout, exerciseIndex) {
        const currentExercise = workout.exercises[exerciseIndex];

        // Get alternatives (same category, different exercise)
        let alternatives = this.exercises.filter(e =>
            e.category === currentExercise.category &&
            e.id !== currentExercise.id &&
            !workout.exercises.some(we => we.id === e.id)
        );

        // Apply freshness and filter by similar difficulty
        alternatives = this.applyFreshnessScoring(alternatives);
        alternatives = alternatives.filter(e =>
            e.difficulty === currentExercise.difficulty ||
            (currentExercise.difficulty === 'medium')
        );

        if (alternatives.length === 0) {
            // If no alternatives in same category, expand search
            alternatives = this.exercises.filter(e =>
                e.id !== currentExercise.id &&
                !workout.exercises.some(we => we.id === e.id)
            );
            alternatives = this.applyFreshnessScoring(alternatives);
        }

        if (alternatives.length > 0) {
            // Pick weighted random
            alternatives.sort((a, b) => b.freshnessScore - a.freshnessScore);
            const newExercise = alternatives[0];
            workout.exercises[exerciseIndex] = { ...newExercise };
        }

        return workout;
    }

    removeExercise(workout, exerciseIndex) {
        workout.exercises.splice(exerciseIndex, 1);
        workout.estimatedTime = this.calculateTotalTime(workout.warmup, workout.exercises, workout.cooldown);
        return workout;
    }

    // ============================================
    // HISTORY MANAGEMENT
    // ============================================

    loadHistory() {
        const stored = localStorage.getItem('synthesis_workout_history');
        if (stored) {
            return JSON.parse(stored);
        }
        return {
            completedWorkouts: [],
            exerciseUsage: {},
            favoriteWorkouts: []
        };
    }

    saveHistory() {
        localStorage.setItem('synthesis_workout_history', JSON.stringify(this.history));
    }

    completeWorkout(workout) {
        // Add to completed workouts
        workout.completedAt = new Date().toISOString();
        workout.completed = true;
        this.history.completedWorkouts.unshift(workout);

        // Keep only last 100 workouts
        if (this.history.completedWorkouts.length > 100) {
            this.history.completedWorkouts = this.history.completedWorkouts.slice(0, 100);
        }

        // Update exercise usage timestamps
        workout.exercises.forEach(exercise => {
            this.history.exerciseUsage[exercise.id] = Date.now();
        });

        this.saveHistory();
        return workout;
    }

    saveAsFavorite(workout) {
        // Check if already favorited
        const exists = this.history.favoriteWorkouts.some(w => w.id === workout.id);
        if (!exists) {
            this.history.favoriteWorkouts.push(workout);
            this.saveHistory();
        }
    }

    removeFavorite(workoutId) {
        this.history.favoriteWorkouts = this.history.favoriteWorkouts.filter(w => w.id !== workoutId);
        this.saveHistory();
    }

    getWorkoutHistory() {
        return this.history.completedWorkouts;
    }

    getFavoriteWorkouts() {
        return this.history.favoriteWorkouts;
    }

    getStats() {
        const history = this.history.completedWorkouts;
        const now = new Date();
        const oneWeekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
        const oneMonthAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

        const thisWeek = history.filter(w => new Date(w.completedAt) > oneWeekAgo);
        const thisMonth = history.filter(w => new Date(w.completedAt) > oneMonthAgo);

        // Calculate most used exercises
        const exerciseCounts = {};
        history.forEach(workout => {
            workout.exercises.forEach(e => {
                exerciseCounts[e.name] = (exerciseCounts[e.name] || 0) + 1;
            });
        });

        const mostUsed = Object.entries(exerciseCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([name, count]) => ({ name, count }));

        // Calculate workout type distribution
        const typeCounts = {};
        history.forEach(w => {
            typeCounts[w.type] = (typeCounts[w.type] || 0) + 1;
        });

        return {
            totalWorkouts: history.length,
            workoutsThisWeek: thisWeek.length,
            workoutsThisMonth: thisMonth.length,
            mostUsedExercises: mostUsed,
            workoutTypeDistribution: typeCounts,
            totalMinutes: history.reduce((sum, w) => sum + (w.estimatedTime || 45), 0)
        };
    }

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================

    generateWorkoutId() {
        return 'workout_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    getTypeDisplayName(type) {
        const names = {
            'push': 'Push Day',
            'pull': 'Pull Day',
            'legs': 'Leg Day',
            'upper-body': 'Upper Body',
            'full-body': 'Full Body',
            'cardio': 'Cardio & Conditioning',
            'core': 'Core Blast'
        };
        return names[type] || type;
    }

    getDifficultyEmoji(difficulty) {
        const emojis = {
            'easy': '🟢',
            'medium': '🟡',
            'hard': '🔴'
        };
        return emojis[difficulty] || '🟡';
    }
}

// ============================================
// UI COMPONENT FOR RANDOM WORKOUT GENERATOR
// ============================================

class RandomWorkoutUI {
    constructor(generator) {
        this.generator = generator;
        this.currentWorkout = null;
    }

    render() {
        return `
            <div class="random-workout-section">
                <div class="rw-header">
                    <h2>🎲 Random Workout Generator</h2>
                    <p>Fresh workouts to keep training exciting</p>
                </div>

                <div class="rw-controls">
                    <div class="rw-control-group">
                        <label>Workout Type</label>
                        <select id="rw-type-select" class="rw-select">
                            <option value="random">🎲 Surprise Me!</option>
                            <option value="push">💪 Push Day</option>
                            <option value="pull">🏋️ Pull Day</option>
                            <option value="legs">🦵 Leg Day</option>
                            <option value="upper-body">👆 Upper Body</option>
                            <option value="full-body">🔥 Full Body</option>
                            <option value="cardio">❤️ Cardio</option>
                            <option value="core">🎯 Core Blast</option>
                        </select>
                    </div>
                    <div class="rw-control-group">
                        <label>Difficulty</label>
                        <select id="rw-difficulty-select" class="rw-select">
                            <option value="easy">🟢 Easy</option>
                            <option value="medium" selected>🟡 Medium</option>
                            <option value="hard">🔴 Hard</option>
                        </select>
                    </div>
                    <button class="btn-primary rw-generate-btn" onclick="randomWorkoutUI.generateNew()">
                        🎲 Generate Workout
                    </button>
                </div>

                <div id="rw-workout-display"></div>

                <div class="rw-quick-actions">
                    <button class="btn-secondary" onclick="randomWorkoutUI.showHistory()">📜 History</button>
                    <button class="btn-secondary" onclick="randomWorkoutUI.showFavorites()">⭐ Favorites</button>
                    <button class="btn-secondary" onclick="randomWorkoutUI.showStats()">📊 Stats</button>
                </div>
            </div>
        `;
    }

    generateNew() {
        const type = document.getElementById('rw-type-select').value;
        const difficulty = document.getElementById('rw-difficulty-select').value;

        this.currentWorkout = this.generator.generateWorkout(type, difficulty);
        this.displayWorkout(this.currentWorkout);
    }

    displayWorkout(workout) {
        const container = document.getElementById('rw-workout-display');
        if (!container) return;

        const html = `
            <div class="rw-workout-card">
                <div class="rw-workout-header">
                    <div>
                        <h3>${this.generator.getTypeDisplayName(workout.type)}</h3>
                        <span class="rw-difficulty">${this.generator.getDifficultyEmoji(workout.difficulty)} ${workout.difficulty}</span>
                    </div>
                    <div class="rw-time">
                        <span>⏱️ ~${workout.estimatedTime} min</span>
                    </div>
                </div>

                <!-- Warm-up Section -->
                <div class="rw-section">
                    <h4>🔥 Warm-Up (5 min)</h4>
                    <div class="rw-warmup-list">
                        ${workout.warmup.map(w => `
                            <div class="rw-warmup-item">
                                <div class="rw-warmup-header">
                                    <span class="rw-warmup-name">${w.name}</span>
                                    <span class="rw-warmup-time">${w.time}</span>
                                </div>
                                <div class="rw-warmup-instructions">${w.instructions}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Main Exercises -->
                <div class="rw-section">
                    <h4>💪 Main Workout</h4>
                    <div class="rw-exercise-list">
                        ${workout.exercises.map((e, index) => `
                            <div class="rw-exercise-item ${e.type === 'creative' ? 'creative' : ''}">
                                <div class="rw-exercise-info">
                                    <span class="rw-exercise-num">${index + 1}</span>
                                    <div class="rw-exercise-details">
                                        <span class="rw-exercise-name">${e.name}</span>
                                        <span class="rw-exercise-format">${this.formatExerciseFormat(e.format)}</span>
                                        ${e.type === 'creative' ? '<span class="rw-creative-badge">Creative</span>' : ''}
                                    </div>
                                </div>
                                <div class="rw-exercise-actions">
                                    <button class="rw-action-btn" onclick="randomWorkoutUI.swapExercise(${index})" title="Swap">🔄</button>
                                    <button class="rw-action-btn" onclick="randomWorkoutUI.removeExercise(${index})" title="Remove">❌</button>
                                    <button class="rw-action-btn" onclick="randomWorkoutUI.showExerciseDetails(${index})" title="Info">ℹ️</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Cool-down Section -->
                <div class="rw-section">
                    <h4>🧘 Cool-Down (5 min)</h4>
                    <div class="rw-cooldown-list">
                        ${workout.cooldown.map(c => `
                            <div class="rw-cooldown-item">
                                <div class="rw-cooldown-header">
                                    <span class="rw-cooldown-name">${c.name}</span>
                                    <span class="rw-cooldown-time">${c.time}</span>
                                </div>
                                <div class="rw-cooldown-instructions">${c.instructions}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="rw-workout-actions">
                    <button class="btn-primary rw-start-btn" onclick="randomWorkoutUI.startWorkout()">
                        ▶️ Start Workout
                    </button>
                    <button class="btn-secondary" onclick="randomWorkoutUI.saveAsFavorite()">
                        ⭐ Save as Favorite
                    </button>
                    <button class="btn-secondary" onclick="randomWorkoutUI.generateNew()">
                        🔄 Generate New
                    </button>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    formatExerciseFormat(format) {
        if (format.sets && format.reps) {
            return `${format.sets} sets × ${format.reps} reps`;
        } else if (format.time) {
            return format.note ? `${format.time} - ${format.note}` : format.time;
        } else if (format.rounds) {
            return format.note ? `${format.rounds} rounds - ${format.note}` : `${format.rounds} rounds`;
        }
        return '';
    }

    swapExercise(index) {
        if (!this.currentWorkout) return;
        this.currentWorkout = this.generator.swapExercise(this.currentWorkout, index);
        this.displayWorkout(this.currentWorkout);
    }

    removeExercise(index) {
        if (!this.currentWorkout || this.currentWorkout.exercises.length <= 3) {
            alert('Minimum 3 exercises required!');
            return;
        }
        this.currentWorkout = this.generator.removeExercise(this.currentWorkout, index);
        this.displayWorkout(this.currentWorkout);
    }

    showExerciseDetails(index) {
        const exercise = this.currentWorkout.exercises[index];
        alert(`${exercise.name}\n\n${exercise.instructions}\n\nMuscles: ${exercise.muscleGroups.join(', ')}\nEquipment: ${exercise.equipment.join(', ') || 'None'}`);
    }

    startWorkout() {
        if (!this.currentWorkout) return;
        // Could integrate with existing workout tracking here
        alert('Workout started! Track your sets as you go. Click "Complete Workout" when done.');

        // Add complete button
        const actionsDiv = document.querySelector('.rw-workout-actions');
        if (actionsDiv) {
            actionsDiv.innerHTML = `
                <button class="btn-primary rw-complete-btn" onclick="randomWorkoutUI.completeWorkout()">
                    ✅ Complete Workout
                </button>
                <button class="btn-secondary" onclick="randomWorkoutUI.displayWorkout(randomWorkoutUI.currentWorkout)">
                    Cancel
                </button>
            `;
        }
    }

    completeWorkout() {
        if (!this.currentWorkout) return;

        // Show completion form to capture weights
        const container = document.getElementById('rw-workout-display');
        const strengthExercises = this.currentWorkout.exercises.filter(e =>
            e.format && e.format.sets && e.format.reps
        );

        if (strengthExercises.length > 0) {
            // Show form to log weights
            container.innerHTML = `
                <div class="rw-completion-card">
                    <h3>🎉 Log Your Weights!</h3>
                    <p style="color: var(--color-text-secondary); margin-bottom: 1.5rem;">
                        Enter the weights you used to track your progress over time.
                    </p>
                    <div class="rw-weight-log-form">
                        ${strengthExercises.map((e, i) => `
                            <div class="rw-weight-log-row" data-exercise="${e.name}" data-reps="${e.format.reps}">
                                <div class="rw-weight-exercise-name">${e.name}</div>
                                <div class="rw-weight-format">${e.format.sets} × ${e.format.reps} reps</div>
                                <div class="rw-weight-input-group">
                                    <input type="number" class="rw-weight-input" id="rw-weight-${i}" placeholder="Weight (lbs)">
                                    <span class="rw-weight-label">lbs</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="rw-workout-actions" style="margin-top: 1.5rem;">
                        <button class="btn-primary" onclick="randomWorkoutUI.saveCompletedWorkout()">
                            ✅ Save & Complete
                        </button>
                        <button class="btn-secondary" onclick="randomWorkoutUI.skipWeightLog()">
                            Skip Logging
                        </button>
                    </div>
                </div>
            `;
        } else {
            // No strength exercises, just complete
            this.finalizeWorkoutCompletion();
        }
    }

    saveCompletedWorkout() {
        if (!this.currentWorkout) return;

        // Collect weights from form
        const rows = document.querySelectorAll('.rw-weight-log-row');
        rows.forEach((row, i) => {
            const exerciseName = row.dataset.exercise;
            const reps = parseInt(row.dataset.reps) || 10;
            const weightInput = document.getElementById(`rw-weight-${i}`);
            const weight = parseFloat(weightInput?.value);

            if (weight && weight > 0 && window.fitnessTracker) {
                window.fitnessTracker.addToExerciseProgress(exerciseName, weight, reps, new Date().toISOString());
            }
        });

        this.finalizeWorkoutCompletion();
    }

    skipWeightLog() {
        this.finalizeWorkoutCompletion();
    }

    finalizeWorkoutCompletion() {
        if (!this.currentWorkout) return;

        this.generator.completeWorkout(this.currentWorkout);

        // Show summary
        const container = document.getElementById('rw-workout-display');
        container.innerHTML = `
            <div class="rw-completion-card">
                <h3>🎉 Workout Complete!</h3>
                <p>${this.generator.getTypeDisplayName(this.currentWorkout.type)} - ${this.currentWorkout.estimatedTime} minutes</p>
                <p>${this.currentWorkout.exercises.length} exercises completed</p>
                <button class="btn-primary" onclick="randomWorkoutUI.generateNew()">Generate Another Workout</button>
            </div>
        `;

        this.currentWorkout = null;
    }

    saveAsFavorite() {
        if (!this.currentWorkout) return;
        this.generator.saveAsFavorite(this.currentWorkout);
        alert('Saved to favorites! ⭐');
    }

    showHistory() {
        const history = this.generator.getWorkoutHistory();
        const container = document.getElementById('rw-workout-display');

        if (history.length === 0) {
            container.innerHTML = '<div class="rw-empty">No workout history yet. Generate and complete your first workout!</div>';
            return;
        }

        const html = `
            <div class="rw-history-card">
                <h3>📜 Workout History</h3>
                <div class="rw-history-list">
                    ${history.slice(0, 20).map(w => `
                        <div class="rw-history-item">
                            <div>
                                <strong>${this.generator.getTypeDisplayName(w.type)}</strong>
                                <span class="rw-history-date">${new Date(w.completedAt).toLocaleDateString()}</span>
                            </div>
                            <div>
                                ${w.exercises.length} exercises • ${w.estimatedTime} min
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class="btn-secondary" onclick="randomWorkoutUI.generateNew()" style="margin-top: 1rem;">Back to Generator</button>
            </div>
        `;

        container.innerHTML = html;
    }

    showFavorites() {
        const favorites = this.generator.getFavoriteWorkouts();
        const container = document.getElementById('rw-workout-display');

        if (favorites.length === 0) {
            container.innerHTML = '<div class="rw-empty">No favorite workouts saved yet. Save a workout you love!</div>';
            return;
        }

        const html = `
            <div class="rw-favorites-card">
                <h3>⭐ Favorite Workouts</h3>
                <div class="rw-favorites-list">
                    ${favorites.map((w, i) => `
                        <div class="rw-favorite-item">
                            <div>
                                <strong>${this.generator.getTypeDisplayName(w.type)}</strong>
                                <span>${w.difficulty} • ${w.exercises.length} exercises</span>
                            </div>
                            <div class="rw-favorite-actions">
                                <button class="btn-secondary" onclick="randomWorkoutUI.loadFavorite(${i})">Load</button>
                                <button class="rw-action-btn" onclick="randomWorkoutUI.removeFavorite('${w.id}')">❌</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class="btn-secondary" onclick="randomWorkoutUI.generateNew()" style="margin-top: 1rem;">Back to Generator</button>
            </div>
        `;

        container.innerHTML = html;
    }

    loadFavorite(index) {
        const favorites = this.generator.getFavoriteWorkouts();
        if (favorites[index]) {
            this.currentWorkout = { ...favorites[index], id: this.generator.generateWorkoutId() };
            this.displayWorkout(this.currentWorkout);
        }
    }

    removeFavorite(workoutId) {
        this.generator.removeFavorite(workoutId);
        this.showFavorites();
    }

    showStats() {
        const stats = this.generator.getStats();
        const container = document.getElementById('rw-workout-display');

        const html = `
            <div class="rw-stats-card">
                <h3>📊 Your Stats</h3>

                <div class="rw-stats-grid">
                    <div class="rw-stat">
                        <span class="rw-stat-value">${stats.totalWorkouts}</span>
                        <span class="rw-stat-label">Total Workouts</span>
                    </div>
                    <div class="rw-stat">
                        <span class="rw-stat-value">${stats.workoutsThisWeek}</span>
                        <span class="rw-stat-label">This Week</span>
                    </div>
                    <div class="rw-stat">
                        <span class="rw-stat-value">${stats.workoutsThisMonth}</span>
                        <span class="rw-stat-label">This Month</span>
                    </div>
                    <div class="rw-stat">
                        <span class="rw-stat-value">${Math.round(stats.totalMinutes / 60)}h</span>
                        <span class="rw-stat-label">Total Time</span>
                    </div>
                </div>

                ${stats.mostUsedExercises.length > 0 ? `
                    <h4>Top Exercises</h4>
                    <div class="rw-top-exercises">
                        ${stats.mostUsedExercises.map(e => `
                            <div class="rw-top-exercise">
                                <span>${e.name}</span>
                                <span>${e.count}x</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                <button class="btn-secondary" onclick="randomWorkoutUI.generateNew()" style="margin-top: 1rem;">Back to Generator</button>
            </div>
        `;

        container.innerHTML = html;
    }
}

// Initialize globally
let randomWorkoutGenerator;
let randomWorkoutUI;

function initRandomWorkoutGenerator() {
    randomWorkoutGenerator = new RandomWorkoutGenerator();
    randomWorkoutUI = new RandomWorkoutUI(randomWorkoutGenerator);
    window.randomWorkoutGenerator = randomWorkoutGenerator;
    window.randomWorkoutUI = randomWorkoutUI;
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRandomWorkoutGenerator);
} else {
    initRandomWorkoutGenerator();
}
