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
                instructions: 'Lie flat, grip slightly wider than shoulders, lower to chest, press up.'
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
                instructions: 'Dumbbells at chest level, press up and together, control the descent.'
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
                instructions: 'Bar at shoulders, brace core, press overhead, lower with control.'
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
                instructions: 'Seated or standing, press dumbbells from shoulders to overhead.'
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
                instructions: 'Hands shoulder-width, body straight, lower chest to floor, push up.'
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
                instructions: 'Bench at 30-45 degrees, press dumbbells up from upper chest.'
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
                instructions: 'Arms at sides, raise dumbbells to shoulder height, control down.'
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
                instructions: 'Hands on bench behind you, lower body by bending elbows, press up.'
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
                instructions: 'Hands shoulder-width or closer, elbows tucked, focus on triceps.'
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
                instructions: 'Play "Flower" by Moby. Down on "Bring Sally Down", up on "Bring Sally Up". Hold positions!'
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
                instructions: 'Squeeze two plates together (flat sides out), press from chest to overhead.'
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
                instructions: 'Hold KB upside down, stabilize, press overhead. Requires intense grip and control.'
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
                instructions: 'Wide stance, shift weight to one arm while extending the other, alternate.'
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
                instructions: 'Lying on floor, fly out wide, bring together, then press up. 1 rep = fly + press.'
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
                instructions: '4 seconds down, 2 second pause at bottom, 1 second explosive up.'
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
                instructions: 'Hold plate at hips, raise to eye level, continue pressing overhead, reverse.'
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
                instructions: 'Band around back, pushup then protract shoulders at top for extra push.'
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
                instructions: 'Hinge at hips, back flat, pull bar to lower chest, squeeze shoulder blades.'
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
                instructions: 'One hand on bench, row dumbbell to hip, elbow past torso.'
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
                instructions: 'Overhand grip, pull chin over bar, control the descent.'
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
                instructions: 'Underhand grip, pull chin over bar, great bicep activation.'
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
                instructions: 'Elbows pinned to sides, curl up with control, squeeze at top.'
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
                instructions: 'Neutral grip (palms facing each other), curl up, control down.'
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
                instructions: 'Arms extended forward, pull band apart to chest, squeeze back.'
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
                instructions: 'Bent over, arms hanging, fly out to sides, squeeze rear delts.'
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
                instructions: 'Shoulder-width grip, curl bar to shoulders, control the negative.'
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
                instructions: 'Hang from bar as long as possible. Great for grip and shoulder health.'
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
                instructions: 'Two KBs on floor, hinge stance, alternate rowing one while stabilizing with other.'
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
                instructions: 'Band at face height, pull to face while externally rotating, pause and squeeze.'
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
                instructions: '3 seconds up, 1 second hold at top, 3 seconds down. Quality over quantity.'
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
                instructions: 'Plank on dumbbells, row one arm while stabilizing, alternate.'
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
                instructions: 'Explosive hip hinge, pull KB to chin height, elbows high.'
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
                instructions: '7 reps bottom half, 7 reps top half, 7 reps full range. Brutal pump!'
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
                instructions: 'Bar in rack at hip height, hang underneath, pull chest to bar.'
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
                instructions: 'Slight knee bend, hinge at hips, lower bar along legs, feel hamstring stretch.'
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
                instructions: 'Same as barbell RDL but with dumbbells for more range of motion.'
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
                instructions: 'Upper back on bench, bar on hips, drive hips up, squeeze glutes at top.'
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
                instructions: 'Lying on back, feet flat, drive hips up, squeeze glutes, lower with control.'
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
                instructions: 'Squat back to box, pause briefly (no bouncing), drive up. Easier on knees.'
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
                instructions: 'Hold KB at chest, squat down keeping torso upright, drive up through heels.'
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
                instructions: 'Wide stance, toes out, grip inside knees, drive through floor.'
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
                instructions: 'Step onto box driving through heel, control the descent. Low impact on knees.'
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
                instructions: 'Balance on one leg, hinge forward, back leg extends behind. Great for balance.'
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
                instructions: 'Back against wall, thighs parallel to floor, hold. Isometric knee-friendly.'
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
                instructions: 'Ball between back and wall. Down on "Sally Down", up on "Sally Up". Hold positions!'
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
                instructions: 'Hinge and hike KB back, explosive hip snap forward, arms guide not lift.'
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
                instructions: 'Deadlift KB up, clean to goblet position, squat, reverse. 1 rep = full flow.'
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
                instructions: 'Band around knees, hip thrust while pushing knees out against band.'
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
                instructions: 'Power walk or skip steps going up, controlled walk down. Great low-impact cardio.'
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
                instructions: '5 seconds down, 3 second hold at bottom, 1 second up. Brutal quad burn.'
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
                instructions: 'One leg extended, thrust with single leg, feel the glute isolation.'
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
                instructions: 'Heels on ball, lift hips, curl ball toward glutes, extend back out.'
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
                instructions: 'Soles of feet together, knees out, thrust hips up, squeeze glutes hard.'
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
                instructions: 'Wide stance, toes out, hold KB between legs, squat deep.'
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
                instructions: 'Forearms and toes, body straight line, brace core, breathe steady.'
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
                instructions: 'On back, arms up, knees at 90. Extend opposite arm/leg while keeping back flat.'
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
                instructions: 'Hang from bar, raise legs to 90 degrees (or higher), control the descent.'
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
                instructions: 'Seated, lean back slightly, feet up, rotate side to side with weight.'
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
                instructions: 'On back, hands behind head, alternate elbow to opposite knee.'
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
                instructions: 'On all fours, extend opposite arm/leg, keep hips level, hold 2 sec.'
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
                instructions: 'Plank on ball, forearms on ball, make circles like stirring a pot.'
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
                instructions: 'Band at chest height, stand sideways, press out and resist rotation.'
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
                instructions: 'Kneel with barbell, roll out keeping core tight, roll back. Ab wheel alternative.'
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
                instructions: 'High plank, tap opposite shoulder, minimize hip rotation.'
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
                instructions: 'On back, arms overhead, legs extended, lift shoulders and legs, hold.'
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
                instructions: 'KB overhead, feet angled, hinge sideways reaching other hand to floor.'
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
                instructions: 'High incline, moderate pace, no holding rails. Zone 2 cardio.'
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
                instructions: 'Steady pace jumping, small jumps, stay on balls of feet.'
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
                instructions: 'Conversational pace, steady effort, great low-impact knee-friendly cardio.'
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
                instructions: 'Continuous stair climbing at steady pace. Walk down to recover.'
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
                instructions: '20 seconds all-out punching, 10 seconds rest. 8 rounds = 4 minutes of pain.'
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
                instructions: 'Work combinations for 3 min rounds. Jab-cross, hooks, uppercuts, body shots.'
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
                instructions: 'Every Minute On the Minute: 10 KB swings. Rest remaining time. Repeat.'
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
                instructions: 'Find hills or increase resistance. 1 min all-out, 2 min recovery. Repeat 6x.'
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
                instructions: 'Work on double unders, criss-cross, boxer skip. Make it fun!'
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
                instructions: 'Sprint up stairs as fast as possible, walk down slowly. Great HIIT option.'
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
                instructions: 'Heavy dumbbells at sides, walk with tall posture. Core and grip killer.'
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
                instructions: 'Bar over mid-foot, hinge to grip, brace, drive through floor.'
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
                instructions: 'Clean KB to rack position, press overhead, reverse. Each side.'
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
                instructions: 'Link movements: Swing → Clean → Press → Squat → repeat. No rest.'
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
                instructions: 'RDL → Row → Clean → Press → Squat. 6 reps each, no putting weights down.'
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
                instructions: 'Burpee with DBs + pushup + renegade row each side + jump + press. Brutal.'
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
                instructions: 'Deadlift → Row → Clean → Press → Back Squat. No rest between moves.'
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
                instructions: 'Floor to standing with KB overhead. Slow and controlled. Ultimate stability exercise.'
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
