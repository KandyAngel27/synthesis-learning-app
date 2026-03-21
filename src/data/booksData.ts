// Complete book database with lessons, quizzes, and interactive elements

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface InteractiveElement {
  type: 'reflection' | 'exercise' | 'visualization' | 'calculator' | 'journal';
  prompt: string;
  placeholder?: string;
  options?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: number; // in minutes
  content: string[];
  keyTakeaways: string[];
  visualType?: 'diagram' | 'chart' | 'infographic' | 'animation';
  visualData?: any;
  quiz: Quiz[];
  interactive: InteractiveElement[];
  practicalAction: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  coverColor: string;
  coverGradient: string[];
  description: string;
  totalDuration: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  lessons: Lesson[];
  relatedBooks: string[];
  keyThemes: string[];
}

export const categories = [
  { id: 'psychology', name: 'Psychology', icon: '🧠', color: '#FF6B6B' },
  { id: 'productivity', name: 'Productivity', icon: '⚡', color: '#4ECDC4' },
  { id: 'philosophy', name: 'Philosophy', icon: '🎭', color: '#95E1D3' },
  { id: 'personal-development', name: 'Personal Development', icon: '🌱', color: '#F38181' },
  { id: 'health-wellness', name: 'Health & Wellness', icon: '💪', color: '#AA96DA' },
  { id: 'history', name: 'History', icon: '📜', color: '#FCBAD3' },
  { id: 'art-history', name: 'Art History', icon: '🎨', color: '#ec4899' },
  { id: 'business', name: 'Business', icon: '💼', color: '#FFFFD2' },
  { id: 'leadership', name: 'Leadership', icon: '👑', color: '#A8D8EA' },
  { id: 'science-tech', name: 'Science & Technology', icon: '🔬', color: '#FFD93D' }
];

export const booksDatabase: Book[] = [
  // PERSONAL DEVELOPMENT - Atomic Habits
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'personal-development',
    coverColor: '#1a1a2e',
    coverGradient: ['#16213e', '#0f3460', '#533483'],
    description: 'Tiny changes, remarkable results. An easy and proven way to build good habits and break bad ones.',
    totalDuration: 45,
    difficulty: 'beginner',
    tags: ['habits', 'behavior-change', 'productivity', 'self-improvement'],
    keyThemes: ['compound growth', 'identity-based habits', 'environment design', 'habit stacking'],
    relatedBooks: ['power-of-habit', 'deep-work', 'essentialism'],
    lessons: [
      {
        id: 'ah-lesson-1',
        title: 'The Surprising Power of Tiny Changes',
        duration: 6,
        content: [
          "Imagine you're flying from Los Angeles to New York City. If the pilot adjusts the heading by just 3.5 degrees south at takeoff, you'll land in Washington, DC instead of New York—a difference of 225 miles.",
          "This is the power of small changes: they compound over time into remarkable differences.",
          "James Clear introduces the concept of marginal gains: if you get 1% better each day for one year, you'll end up 37 times better by the time you're done (1.01^365 = 37.78).",
          "Conversely, if you get 1% worse each day, you'll decline to nearly zero (0.99^365 = 0.03).",
          "The problem is that these tiny changes are often invisible in the moment. You won't feel different after one day, one week, or even one month of small improvements. But the cumulative effect is massive.",
          "Clear calls this the 'Plateau of Latent Potential'—the valley of disappointment where you don't see results yet, even though you're making progress. Most people quit here.",
          "Success is not a goal to reach or a finish line to cross. It's a system to improve, an endless process to refine."
        ],
        keyTakeaways: [
          "Small habits compound into remarkable results over time",
          "1% better every day = 37x improvement in a year",
          "Focus on trajectory, not current results",
          "Breakthrough moments are often the result of many previous actions"
        ],
        visualType: 'chart',
        visualData: {
          type: 'compound-growth',
          datasets: [
            { label: '1% Better', data: [1, 1.01, 1.02, 1.03, 1.37], color: '#4ade80' },
            { label: 'No Change', data: [1, 1, 1, 1, 1], color: '#94a3b8' },
            { label: '1% Worse', data: [1, 0.99, 0.98, 0.97, 0.03], color: '#f87171' }
          ]
        },
        quiz: [
          {
            question: "If you improve by 1% every day for a year, how much better will you be?",
            options: ["3.65 times better", "12 times better", "37 times better", "100 times better"],
            correctAnswer: 2,
            explanation: "The math is 1.01^365 = 37.78. This demonstrates the incredible power of compound growth."
          },
          {
            question: "What is the 'Plateau of Latent Potential'?",
            options: [
              "The point where habits become automatic",
              "The valley of disappointment before results become visible",
              "The maximum potential of a habit",
              "The first month of building a new habit"
            ],
            correctAnswer: 1,
            explanation: "This is the critical period where most people quit because they don't see immediate results, even though progress is happening."
          }
        ],
        interactive: [
          {
            type: 'calculator',
            prompt: "Calculate your 1% improvement: If you want to improve in an area, what would 1% better look like for you today?",
            placeholder: "Example: Read for 10 minutes instead of watching TV"
          },
          {
            type: 'reflection',
            prompt: "Think about a time you quit something because you didn't see results fast enough. What would have happened if you'd continued?",
            placeholder: "Write your reflection here..."
          }
        ],
        practicalAction: "Choose ONE tiny improvement (1% better) in any area of your life and commit to it for today. Track it."
      },
      {
        id: 'ah-lesson-2',
        title: 'How Your Habits Shape Your Identity',
        duration: 7,
        content: [
          "Most people approach habits backward. They focus on what they want to achieve (outcome-based habits) rather than who they wish to become (identity-based habits).",
          "There are three layers of behavior change: outcomes (what you get), processes (what you do), and identity (what you believe).",
          "Outcomes are about what you achieve. Processes are about what you do. Identity is about what you believe.",
          "The most effective way to change your behavior is to focus not on what you want to achieve, but on who you wish to become.",
          "Your identity emerges out of your habits. Every action is a vote for the type of person you wish to become.",
          "The goal is not to read a book, the goal is to become a reader. The goal is not to run a marathon, the goal is to become a runner.",
          "When you make your bed each morning, you embody the identity of someone who is organized. When you write each day, you embody the identity of a creative person.",
          "The more evidence you have for a belief, the more strongly you will believe it. Each habit is a suggestion: 'Hey, maybe this is who I am.'"
        ],
        keyTakeaways: [
          "Focus on who you want to become, not what you want to achieve",
          "Every action is a vote for your future identity",
          "Identity change is the North Star of habit change",
          "The most practical way to change who you are is to change what you do"
        ],
        visualType: 'diagram',
        visualData: {
          type: 'pyramid',
          levels: [
            { label: 'Identity', description: 'What you believe', color: '#8b5cf6' },
            { label: 'Process', description: 'What you do', color: '#6366f1' },
            { label: 'Outcome', description: 'What you get', color: '#3b82f6' }
          ]
        },
        quiz: [
          {
            question: "What is the difference between outcome-based and identity-based habits?",
            options: [
              "Outcome focuses on results, identity focuses on who you become",
              "Identity is easier than outcomes",
              "Outcomes are long-term, identity is short-term",
              "There is no difference"
            ],
            correctAnswer: 0,
            explanation: "Identity-based habits focus on becoming the type of person who achieves those outcomes naturally."
          },
          {
            question: "How does your identity emerge?",
            options: [
              "From your thoughts and beliefs",
              "From your repeated actions and habits",
              "From your goals",
              "From your environment"
            ],
            correctAnswer: 1,
            explanation: "Your identity is shaped by your habits. Each action is evidence of the type of person you are becoming."
          }
        ],
        interactive: [
          {
            type: 'exercise',
            prompt: "Complete this sentence: 'I want to become the type of person who...'",
            placeholder: "Example: consistently shows up, values health, creates art daily"
          },
          {
            type: 'journal',
            prompt: "What habits would that person have? List 3-5 habits that align with your desired identity.",
            placeholder: "1. \n2. \n3. \n4. \n5. "
          }
        ],
        practicalAction: "Pick one small habit that aligns with your desired identity and do it today. Example: 'I am a writer' → Write for 2 minutes."
      },
      {
        id: 'ah-lesson-3',
        title: 'The Four Laws of Behavior Change',
        duration: 8,
        content: [
          "Clear distills habit formation into four fundamental laws that govern all behavior change.",
          "**Law 1: Make It Obvious** - You can't build a habit you can't see. Increase awareness of your cues.",
          "**Law 2: Make It Attractive** - The more attractive an opportunity is, the more likely it is to become habit-forming.",
          "**Law 3: Make It Easy** - The easier a behavior is, the more likely you are to do it.",
          "**Law 4: Make It Satisfying** - We repeat behaviors that feel rewarding. What is immediately rewarded is repeated.",
          "These laws work in reverse to break bad habits: Make it invisible, make it unattractive, make it difficult, make it unsatisfying.",
          "The most effective habits satisfy all four laws simultaneously. When you design habits using these principles, behavior change becomes significantly easier.",
          "This framework applies to any behavior—from building a meditation practice to breaking a phone addiction."
        ],
        keyTakeaways: [
          "Make it Obvious: Design clear cues for good habits",
          "Make it Attractive: Bundle habits with things you enjoy",
          "Make it Easy: Reduce friction for good habits",
          "Make it Satisfying: Add immediate rewards to good habits"
        ],
        visualType: 'infographic',
        visualData: {
          type: '4-laws-cycle',
          laws: [
            { name: 'Obvious', icon: '👁️', color: '#f59e0b' },
            { name: 'Attractive', icon: '✨', color: '#ec4899' },
            { name: 'Easy', icon: '⚡', color: '#10b981' },
            { name: 'Satisfying', icon: '🎉', color: '#8b5cf6' }
          ]
        },
        quiz: [
          {
            question: "To break a bad habit, you should:",
            options: [
              "Make it obvious, attractive, easy, and satisfying",
              "Make it invisible, unattractive, difficult, and unsatisfying",
              "Just use willpower",
              "Wait until you feel motivated"
            ],
            correctAnswer: 1,
            explanation: "The Four Laws work in reverse to eliminate bad habits by reversing each principle."
          }
        ],
        interactive: [
          {
            type: 'exercise',
            prompt: "Choose a habit you want to build. How can you apply each of the 4 Laws to it?",
            options: [
              "Make it Obvious: How will you remember to do it?",
              "Make it Attractive: How can you make it enjoyable?",
              "Make it Easy: How can you reduce friction?",
              "Make it Satisfying: What immediate reward can you add?"
            ]
          }
        ],
        practicalAction: "Apply all Four Laws to one new habit today. Design it to be obvious, attractive, easy, and satisfying."
      },
      {
        id: 'ah-lesson-4',
        title: 'Implementation Intentions: The Power of When and Where',
        duration: 6,
        content: [
          "One of the most effective strategies for building habits is called an 'implementation intention'—a plan you make beforehand about when and where to act.",
          "The formula is simple: 'I will [BEHAVIOR] at [TIME] in [LOCATION].'",
          "Example: 'I will meditate for one minute at 7:00 AM in my kitchen.'",
          "Hundreds of studies have shown that implementation intentions significantly increase the odds that people will stick with habits.",
          "The problem with common goals like 'I want to exercise more' is that they lack clarity. When and where exactly will you exercise?",
          "Being specific about your intentions removes the need for decision-making in the moment. You've already decided.",
          "This strategy works because it eliminates the ambiguity. There's no room for 'I'll do it later' or 'I'm not sure when I'll fit it in.'",
          "The Diderot Effect shows that people are more likely to follow through on intentions when they've clearly specified the time and location."
        ],
        keyTakeaways: [
          "Use the formula: 'I will [BEHAVIOR] at [TIME] in [LOCATION]'",
          "Specificity increases follow-through by 2-3x",
          "Remove decision-making by pre-deciding when and where",
          "Clarity eliminates excuses and procrastination"
        ],
        visualType: 'diagram',
        quiz: [
          {
            question: "What is an implementation intention?",
            options: [
              "A vague goal like 'exercise more'",
              "A specific plan about when and where you'll act",
              "A long-term vision for your life",
              "A motivational statement"
            ],
            correctAnswer: 1,
            explanation: "Implementation intentions specify exactly when and where you'll perform a habit, dramatically increasing follow-through."
          }
        ],
        interactive: [
          {
            type: 'exercise',
            prompt: "Create 3 implementation intentions for habits you want to build:",
            placeholder: "Example: I will [run for 20 minutes] at [6:00 AM] in [my neighborhood]"
          }
        ],
        practicalAction: "Write down your #1 habit with complete specificity: I will [X] at [TIME] in [LOCATION]. Do it today."
      },
      {
        id: 'ah-lesson-5',
        title: 'Habit Stacking: Building New Habits on Old Ones',
        duration: 7,
        content: [
          "Habit stacking is a special form of implementation intention where you pair a new habit with a current habit.",
          "The formula is: 'After [CURRENT HABIT], I will [NEW HABIT].'",
          "Example: After I pour my morning coffee, I will meditate for one minute.",
          "Your current habits are already built into your brain. You have patterns and behaviors that are hardwired. By linking your new habits to a cycle that is already built into your brain, you make it more likely that you'll stick to the new behavior.",
          "The key is to tie your desired behavior into something you already do each day.",
          "You can create larger stacks by chaining small habits together: After I pour my coffee, I will meditate for sixty seconds. After I meditate, I will write my to-do list for the day. After I write my to-do list, I will immediately begin my first task.",
          "Habit stacking works best when the cue is highly specific and immediately actionable.",
          "The secret is to pick a cue that happens at the same time each day and is already embedded in your routine."
        ],
        keyTakeaways: [
          "Link new habits to existing habits using 'After [X], I will [Y]'",
          "Leverage habits that are already automatic",
          "Chain multiple habits together to build powerful routines",
          "Choose specific, consistent cues for best results"
        ],
        visualType: 'diagram',
        visualData: {
          type: 'habit-chain',
          example: [
            { habit: 'Wake up', type: 'existing' },
            { habit: 'Make coffee', type: 'existing' },
            { habit: '→ Meditate 2 min', type: 'new' },
            { habit: '→ Write to-do list', type: 'new' },
            { habit: '→ Start first task', type: 'new' }
          ]
        },
        quiz: [
          {
            question: "What is the habit stacking formula?",
            options: [
              "I will [HABIT] at [TIME]",
              "After [CURRENT HABIT], I will [NEW HABIT]",
              "When I feel motivated, I will [HABIT]",
              "I want to [HABIT] more often"
            ],
            correctAnswer: 1,
            explanation: "Habit stacking ties new behaviors to existing habits, making them easier to remember and execute."
          }
        ],
        interactive: [
          {
            type: 'exercise',
            prompt: "Map out your morning routine and identify 3 places where you could stack new habits:",
            placeholder: "After I [existing habit], I will [new habit]\n\n1. \n2. \n3. "
          }
        ],
        practicalAction: "Create one habit stack today and execute it. After [something you already do], I will [tiny new habit]."
      },
      {
        id: 'ah-lesson-6',
        title: 'Environment Design: The Hidden Architecture of Your Life',
        duration: 7,
        content: [
          "Your environment is the invisible hand that shapes human behavior. Despite our unique personalities, certain behaviors tend to arise again and again under certain environmental conditions.",
          "In the 1960s, the US military had a heroin crisis in Vietnam. When soldiers returned home, 90% of those addicted quit—without treatment. The environmental change was the intervention.",
          "Small changes in context can lead to large changes in behavior over time. Every habit is initiated by a cue, and we are more likely to notice cues that stand out.",
          "Make the cues of good habits obvious in your environment. If you want to remember to take your medication, put your pill bottle next to the faucet. If you want to practice guitar, place your guitar stand in the middle of the living room.",
          "Environment design works two ways: you can design your environment to make good habits easier and bad habits harder.",
          "To break a bad habit, reduce exposure to the cue that causes it. If you can't seem to get work done at home, go to a library. If you're wasting too much time on your phone, leave it in another room.",
          "One of the most practical ways to eliminate a bad habit is to reduce exposure to the cue that causes it.",
          "Create separate spaces for work, study, exercise, entertainment, and cooking. When you use your bed only for sleeping, you begin to link it more strongly with sleep."
        ],
        keyTakeaways: [
          "Environment shapes behavior more than willpower",
          "Make cues of good habits obvious and visible",
          "Make cues of bad habits invisible and difficult to access",
          "Design specific environments for specific activities"
        ],
        visualType: 'infographic',
        quiz: [
          {
            question: "What happened when US soldiers returned home from Vietnam?",
            options: [
              "90% stayed addicted to heroin",
              "90% of those addicted quit without treatment",
              "They needed extensive rehabilitation",
              "The addiction got worse"
            ],
            correctAnswer: 1,
            explanation: "Environmental change was the key intervention. When soldiers left Vietnam, they left the cues that triggered their addiction."
          }
        ],
        interactive: [
          {
            type: 'exercise',
            prompt: "Audit one room in your home. What habits does this environment encourage? What small changes could you make?",
            placeholder: "Example: Kitchen table has phone charger → move charger to bedroom to avoid mindless scrolling during meals"
          }
        ],
        practicalAction: "Make ONE environmental change today that makes a good habit easier or a bad habit harder."
      },
      {
        id: 'ah-lesson-7',
        title: 'The 2-Minute Rule: Gateway to Bigger Habits',
        duration: 6,
        content: [
          "The 2-Minute Rule states: 'When you start a new habit, it should take less than two minutes to do.'",
          "You'll find that nearly any habit can be scaled down into a two-minute version: 'Read before bed each night' becomes 'Read one page.' 'Do thirty minutes of yoga' becomes 'Take out my yoga mat.'",
          "The idea is to make your habits as easy as possible to start. Anyone can meditate for one minute, write one sentence, or put on their running shoes.",
          "A new habit should not feel like a challenge. The actions that follow can be challenging, but the first two minutes should be easy.",
          "The point is to master the habit of showing up. A habit must be established before it can be improved.",
          "The more you ritualize the beginning of a process, the more likely it becomes that you can slip into the state of deep focus that is required to do great things.",
          "Instead of trying to engineer a perfect habit from the start, do the easy thing on a more consistent basis. You have to standardize before you can optimize.",
          "The truth is, a habit must be established before it can be improved. If you can't learn the basic skill of showing up, then you have little hope of mastering the finer details."
        ],
        keyTakeaways: [
          "Scale new habits down to 2-minute versions",
          "Master showing up before optimizing performance",
          "The first 2 minutes should feel effortless",
          "Standardize before you optimize"
        ],
        visualType: 'diagram',
        visualData: {
          type: 'gateway-habits',
          examples: [
            { full: 'Run 5 miles', gateway: 'Put on running shoes' },
            { full: 'Study for class', gateway: 'Open notes' },
            { full: 'Write 1000 words', gateway: 'Write one sentence' },
            { full: 'Yoga for 30 min', gateway: 'Unroll yoga mat' }
          ]
        },
        quiz: [
          {
            question: "What is the purpose of the 2-Minute Rule?",
            options: [
              "To complete tasks faster",
              "To make starting new habits easy and achievable",
              "To limit how long you work on something",
              "To track your time better"
            ],
            correctAnswer: 1,
            explanation: "The 2-Minute Rule makes starting so easy that you can't say no, establishing the habit of showing up."
          }
        ],
        interactive: [
          {
            type: 'exercise',
            prompt: "Take 3 habits you want to build and create 2-minute versions:",
            placeholder: "Full habit → 2-minute version\n\n1. \n2. \n3. "
          }
        ],
        practicalAction: "Choose your most important habit and practice just the 2-minute version today. Focus on showing up."
      },
      {
        id: 'ah-lesson-8',
        title: 'How to Stick With Good Habits Every Day',
        duration: 7,
        content: [
          "One of the most satisfying feelings is making progress. A habit tracker is a simple way to measure whether you did a habit.",
          "Habit tracking provides immediate satisfaction. It's satisfying to see your streak grow—to see the visual evidence of your hard work.",
          "Don't break the chain. The first mistake is never the one that ruins you. It is the spiral of repeated mistakes that follows. Missing once is an accident. Missing twice is the start of a new habit.",
          "The dark side of tracking a habit is that we often focus on the number rather than what the number represents. If your success is measured by a number, you can achieve that number in a lot of different ways—some more meaningful than others.",
          "Never miss twice. If you miss one day, try to get back on track as quickly as possible. The all-or-nothing mentality is a trap.",
          "Lost days hurt you more than successful days help you. If you start with $100, then a 50% gain will take you to $150. But you only need a 33% loss to take you back to $100.",
          "The first rule of compounding: Never interrupt it unnecessarily. Bill Gates once said, 'Most people overestimate what they can achieve in a year and underestimate what they can achieve in ten years.'",
          "Professionals stick to the schedule; amateurs let life get in the way. Professionals know that consistency is the key to mastery."
        ],
        keyTakeaways: [
          "Track your habits to see visual evidence of progress",
          "Never miss twice—recovery matters more than perfection",
          "Consistency is more important than intensity",
          "Professionals stick to the schedule regardless of how they feel"
        ],
        visualType: 'chart',
        visualData: {
          type: 'streak-calendar',
          days: 365,
          completion: 0.85
        },
        quiz: [
          {
            question: "What is the 'Never Miss Twice' rule?",
            options: [
              "You must never skip a habit",
              "Missing once is okay, but get back on track immediately",
              "If you miss twice, you've failed",
              "Track only perfect streaks"
            ],
            correctAnswer: 1,
            explanation: "The key is recovery. One mistake doesn't ruin progress, but a pattern of mistakes does. Get back on track quickly."
          }
        ],
        interactive: [
          {
            type: 'exercise',
            prompt: "Create a simple habit tracker for your top 3 habits. How will you track them?",
            options: [
              "Paper calendar with X's",
              "Phone app or spreadsheet",
              "Physical token/coin system",
              "Other creative method"
            ]
          }
        ],
        practicalAction: "Set up a habit tracker today (paper, app, or spreadsheet) and mark off your first day of completion."
      }
    ]
  },

  // PSYCHOLOGY - Thinking, Fast and Slow
  {
    id: 'thinking-fast-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    category: 'psychology',
    coverColor: '#2c3e50',
    coverGradient: ['#2c3e50', '#3498db', '#9b59b6'],
    description: 'A groundbreaking tour of the mind revealing the two systems that drive the way we think.',
    totalDuration: 52,
    difficulty: 'intermediate',
    tags: ['cognitive-bias', 'decision-making', 'behavioral-economics', 'psychology'],
    keyThemes: ['dual process theory', 'cognitive biases', 'heuristics', 'prospect theory'],
    relatedBooks: ['predictably-irrational', 'influence', 'nudge'],
    lessons: [
      {
        id: 'tfs-lesson-1',
        title: 'The Two Systems of Thinking',
        duration: 7,
        content: [
          "Daniel Kahneman introduces two fictional characters that represent the two systems of thinking in your brain: System 1 and System 2.",
          "**System 1** operates automatically and quickly, with little or no effort and no sense of voluntary control. Examples: detecting that one object is more distant than another, completing the phrase 'bread and...', driving on an empty road.",
          "**System 2** allocates attention to the effortful mental activities that demand it, including complex computations. Examples: telling someone your phone number, parking in a narrow space, checking the validity of a complex logical argument.",
          "System 1 continuously generates suggestions for System 2: impressions, intuitions, intentions, and feelings. If endorsed by System 2, impressions and intuitions turn into beliefs, and impulses turn into voluntary actions.",
          "System 1 operates automatically and cannot be turned off. You cannot prevent yourself from understanding simple sentences, detecting that one object is more distant than another, or from recognizing faces.",
          "System 2 is lazy. It's easier to recognize and accept the suggestions from System 1 than to question them. This is why we often go with our gut instinct.",
          "When System 1 runs into difficulty, it calls on System 2 for more detailed processing. System 2 is activated when we detect an error, when we need to follow rules, compare, or make a deliberate choice."
        ],
        keyTakeaways: [
          "System 1: Fast, automatic, frequent, emotional, stereotypic, unconscious",
          "System 2: Slow, effortful, infrequent, logical, calculating, conscious",
          "System 1 generates impressions that System 2 turns into beliefs",
          "Most of our judgments and actions are guided by System 1"
        ],
        visualType: 'diagram',
        visualData: {
          type: 'two-systems-comparison',
          system1: ['Fast', 'Automatic', 'Effortless', 'Unconscious', 'Emotional'],
          system2: ['Slow', 'Controlled', 'Effortful', 'Conscious', 'Logical']
        },
        quiz: [
          {
            question: "Which system is responsible for first impressions and gut reactions?",
            options: ["System 1", "System 2", "Both equally", "Neither"],
            correctAnswer: 0,
            explanation: "System 1 operates automatically and generates quick impressions and intuitions without conscious effort."
          },
          {
            question: "What happens when System 1 encounters a difficult problem?",
            options: [
              "It gives up entirely",
              "It calls on System 2 for help",
              "It makes a random guess",
              "It shuts down"
            ],
            correctAnswer: 1,
            explanation: "System 1 calls on System 2 when it needs more detailed and careful processing to solve complex problems."
          }
        ],
        interactive: [
          {
            type: 'exercise',
            prompt: "Think about your morning routine. Which activities are System 1 (automatic) and which require System 2 (conscious effort)?",
            placeholder: "System 1: brushing teeth, making coffee...\nSystem 2: planning your day, solving a work problem..."
          }
        ],
        practicalAction: "Notice today when you're using System 1 (automatic reactions) vs System 2 (deliberate thinking). Which system do you use most?"
      },
      {
        id: 'tfs-lesson-2',
        title: 'Cognitive Ease and Mental Effort',
        duration: 6,
        content: [
          "Cognitive ease is a measure of how hard your brain is working. When things are going smoothly (high cognitive ease), System 1 is in charge and you feel comfortable, familiar, and in control.",
          "When you encounter something unexpected or complex (low cognitive ease), System 2 is activated and you become more vigilant, analytical, and suspicious.",
          "Mere exposure effect: repeated exposure to something makes us like it more. Familiarity breeds cognitive ease, and cognitive ease breeds liking.",
          "When information is presented in a clear, simple format, people are more likely to believe it. This is why good design matters—it creates cognitive ease.",
          "Cognitive strain, even if barely noticeable, mobilizes System 2 and changes how we think. We become more vigilant and suspicious, invest more effort, make fewer errors, and are less intuitive and creative.",
          "A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.",
          "If you want people to believe something, make it easy to read and remember. Use high-quality paper, bright blue or red text (not pale colors), clear fonts, simple language, and rhyming if possible."
        ],
        keyTakeaways: [
          "Cognitive ease = feeling comfortable and familiar",
          "Cognitive strain = feeling vigilant and analytical",
          "Repetition breeds familiarity, familiarity breeds liking and belief",
          "Simple, clear presentation increases persuasiveness"
        ],
        visualType: 'infographic',
        quiz: [
          {
            question: "What is the 'mere exposure effect'?",
            options: [
              "We dislike things we see too often",
              "Repeated exposure makes us like something more",
              "We only like new and novel things",
              "Exposure has no effect on preference"
            ],
            correctAnswer: 1,
            explanation: "The mere exposure effect shows that familiarity breeds liking—we tend to prefer things we've been exposed to repeatedly."
          }
        ],
        interactive: [
          {
            type: 'reflection',
            prompt: "Think of a belief you hold strongly. How much of it is based on repetition and familiarity rather than evidence?",
            placeholder: "Reflect on your response..."
          }
        ],
        practicalAction: "When presenting ideas today, use simple language and clear formatting to increase cognitive ease and persuasiveness."
      }
    ]
  },

  // PRODUCTIVITY - Deep Work
  {
    id: 'deep-work',
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'productivity',
    coverColor: '#1e3a8a',
    coverGradient: ['#1e3a8a', '#3b82f6', '#60a5fa'],
    description: 'Rules for focused success in a distracted world. Professional activities performed in a state of distraction-free concentration.',
    totalDuration: 42,
    difficulty: 'intermediate',
    tags: ['focus', 'productivity', 'attention', 'career', 'knowledge-work'],
    keyThemes: ['deep work', 'shallow work', 'attention residue', 'deliberate practice'],
    relatedBooks: ['atomic-habits', 'essentialism', 'make-time'],
    lessons: [
      {
        id: 'dw-lesson-1',
        title: 'What is Deep Work?',
        duration: 7,
        content: [
          "Deep Work: Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit. These efforts create new value, improve your skill, and are hard to replicate.",
          "Shallow Work: Non-cognitively demanding, logistical-style tasks, often performed while distracted. These efforts tend to not create much new value and are easy to replicate.",
          "Cal Newport argues that the ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our economy.",
          "Three reasons deep work is valuable: 1) It allows you to quickly master hard things 2) It allows you to produce at an elite level 3) It creates work that's difficult for others to replicate.",
          "The Deep Work Hypothesis: The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable. As a consequence, the few who cultivate this skill will thrive.",
          "In our current economy, three groups will have a particular advantage: 1) Those who can work with intelligent machines 2) Those who are the best at what they do 3) Those with access to capital.",
          "To join the first two groups (and even build capital for the third), you need two core abilities: 1) The ability to quickly master hard things 2) The ability to produce at an elite level, in terms of both quality and speed."
        ],
        keyTakeaways: [
          "Deep work creates value and is hard to replicate",
          "Shallow work is easy but creates little value",
          "Deep work is becoming rare and valuable simultaneously",
          "Mastery requires deep work—there are no shortcuts"
        ],
        visualType: 'diagram',
        visualData: {
          type: 'deep-vs-shallow',
          deepWork: ['Writing', 'Programming', 'Research', 'Strategic Planning', 'Learning Complex Skills'],
          shallowWork: ['Email', 'Meetings', 'Social Media', 'Administrative Tasks', 'Busy Work']
        },
        quiz: [
          {
            question: "What is the key difference between deep work and shallow work?",
            options: [
              "Deep work takes longer",
              "Deep work requires distraction-free concentration and creates value",
              "Shallow work is more important",
              "There is no real difference"
            ],
            correctAnswer: 1,
            explanation: "Deep work requires focused concentration and creates new value, while shallow work is logistical and easily replicated."
          }
        ],
        interactive: [
          {
            type: 'exercise',
            prompt: "Analyze your typical workday. What percentage is deep work vs shallow work?",
            placeholder: "Deep work: ___% (examples)\nShallow work: ___% (examples)"
          }
        ],
        practicalAction: "Schedule one 90-minute block of deep work today. Turn off all notifications and work on your most important task."
      }
    ]
  }

  // Additional books would follow the same comprehensive pattern...
  // I'll add more books in the next sections of code

  // PHILOSOPHY - Eight Million Ways to Happiness
  ,{
    id: 'eight-million-ways-happiness',
    title: 'Eight Million Ways to Happiness',
    author: 'Hiroko Yoda',
    category: 'philosophy',
    coverColor: '#1a1a2e',
    coverGradient: ['#1a1a2e', '#7c3aed', '#ec4899'],
    description: 'Wisdom for inspiration and healing from the heart of Japan. Explore the Japanese concept of yaoyorozu—eight million spirits—and discover time-tested practices for finding joy, meaning, and peace in everyday life.',
    totalDuration: 52,
    difficulty: 'beginner',
    tags: ['japanese-wisdom', 'spirituality', 'mindfulness', 'healing', 'happiness'],
    keyThemes: ['yaoyorozu (eight million spirits)', 'finding sacred in the everyday', 'nature connection', 'Japanese healing traditions', 'ikigai and purpose'],
    relatedBooks: ['atomic-habits', 'thinking-fast-slow'],
    lessons: [
      {
        id: 'emw-lesson-1',
        title: 'The Land of Eight Million Spirits',
        duration: 7,
        content: [
          "In Japan, there is an ancient phrase: yaoyorozu no kami—literally, 'eight million gods.' But the number isn't meant to be taken literally. It means countless, innumerable, everywhere. In the Japanese worldview, spirit and meaning inhabit everything around you.",
          "A moss-covered stone in a garden, the steam rising from a bowl of tea, the wind passing through a bamboo grove—each carries its own quiet significance. This isn't abstract theology. It's a way of paying attention to the world.",
          "Hiroko Yoda grew up immersed in this worldview and spent years bridging Japanese and Western cultures. In 'Eight Million Ways to Happiness,' she shares the insight that happiness isn't something you chase—it's something you notice when you slow down enough to see it.",
          "The Shinto tradition doesn't separate the sacred from the mundane. There is no hard boundary between the spiritual world and everyday life. The act of sweeping a walkway, arranging flowers, or greeting a neighbor can all be forms of spiritual practice.",
          "This idea challenges the Western habit of compartmentalizing life into 'work' and 'meaning,' 'productive time' and 'wasted time.' What if every moment already contained something worth appreciating?",
          "Throughout this course, you'll explore Japanese concepts that have helped people find happiness for centuries—not through grand achievements, but through a shift in how you perceive the ordinary world around you.",
          "The journey begins with a simple but radical premise: happiness isn't a destination. It's a way of seeing."
        ],
        keyTakeaways: [
          "Yaoyorozu means eight million spirits—representing the sacred in everything",
          "Japanese spirituality doesn't separate the sacred from the everyday",
          "Happiness is found through attention, not achievement",
          "Every ordinary moment can carry extraordinary meaning"
        ],
        visualType: 'diagram',
        visualData: {
          type: 'concept-map',
          center: 'Yaoyorozu',
          branches: ['Nature', 'Daily Rituals', 'Community', 'Mindfulness', 'Gratitude', 'Simplicity']
        },
        quiz: [
          {
            question: "What does 'yaoyorozu no kami' literally translate to?",
            options: [
              "The path to enlightenment",
              "Eight million gods",
              "The way of happiness",
              "The spirit of nature"
            ],
            correctAnswer: 1,
            explanation: "Yaoyorozu no kami literally means 'eight million gods,' but the number represents 'innumerable'—the idea that spirit and meaning exist in everything around us."
          },
          {
            question: "How does Japanese spirituality differ from many Western approaches to meaning?",
            options: [
              "It requires years of formal study",
              "It focuses on achieving major life goals",
              "It doesn't separate the sacred from everyday life",
              "It relies on written scripture above all else"
            ],
            correctAnswer: 2,
            explanation: "In the Shinto worldview, there is no hard boundary between the spiritual and the mundane. Sweeping a path or making tea can be spiritual acts."
          }
        ],
        interactive: [
          {
            type: 'reflection',
            prompt: "Think about your day so far. Can you identify one small, ordinary moment that you rushed through but that actually had beauty or meaning in it?",
            placeholder: "Example: The warmth of my morning coffee, the sound of birds outside my window..."
          },
          {
            type: 'journal',
            prompt: "Write down three 'invisible' things in your daily routine that you usually take for granted but could see as meaningful.",
            placeholder: "1. \n2. \n3. "
          }
        ],
        practicalAction: "Today, choose one routine activity—making coffee, walking to your car, washing dishes—and do it with full attention. Notice every detail as if it were the first time."
      },
      {
        id: 'emw-lesson-2',
        title: 'Ikigai: Your Reason to Get Up',
        duration: 7,
        content: [
          "You've probably heard the word ikigai, often translated as 'reason for being' or 'purpose in life.' But in Japan, ikigai isn't reserved for grand callings or career missions. It's far more personal and humble than that.",
          "A retired schoolteacher who tends her garden every morning has ikigai. A fisherman who rises before dawn because he loves the sea has ikigai. A grandmother who makes miso soup for her family has ikigai. It's the thing that makes you want to get out of bed.",
          "The Western internet popularized a Venn diagram of ikigai—the intersection of what you love, what you're good at, what the world needs, and what you can be paid for. But Yoda explains that this diagram is actually a Western invention, not a Japanese one.",
          "In Japan, ikigai can be small. It can be private. It doesn't need to make money or change the world. It just needs to give your days a sense of direction and quiet joy.",
          "Research from Okinawa—one of the world's Blue Zones where people regularly live past 100—found that having a clear ikigai was one of the strongest predictors of longevity. People with purpose lived longer, stayed healthier, and reported higher life satisfaction.",
          "The key insight is that ikigai isn't something you find once and keep forever. It evolves. Your ikigai at twenty may be different from your ikigai at sixty. The practice is to keep asking: 'What makes today worth living?'",
          "Yoda emphasizes that ikigai is felt, not analyzed. You discover it by paying attention to what energizes you, what you lose track of time doing, and what fills you with quiet satisfaction—even when nobody is watching."
        ],
        keyTakeaways: [
          "Ikigai means 'reason for being' but can be small and personal",
          "The popular Venn diagram of ikigai is a Western invention, not Japanese",
          "Having a sense of purpose is linked to longevity in Okinawan research",
          "Ikigai evolves throughout your life—it's a practice, not a one-time discovery"
        ],
        visualType: 'diagram',
        visualData: {
          type: 'comparison',
          left: { label: 'Western Ikigai', items: ['Career-focused', 'Monetizable', 'World-changing', 'Fixed destination'] },
          right: { label: 'Japanese Ikigai', items: ['Personal & humble', 'May be private', 'Everyday joy', 'Evolving practice'] }
        },
        quiz: [
          {
            question: "According to Hiroko Yoda, what is the most accurate understanding of ikigai?",
            options: [
              "The intersection of passion, profession, mission, and vocation",
              "A small, personal thing that gives your days direction and quiet joy",
              "A career that perfectly aligns with your talents",
              "A life philosophy only accessible to monks and scholars"
            ],
            correctAnswer: 1,
            explanation: "In Japan, ikigai can be humble and private—like tending a garden or cooking for family. The Venn diagram version is a Western adaptation, not the original concept."
          },
          {
            question: "What did research in Okinawa find about ikigai and health?",
            options: [
              "Ikigai had no measurable health effects",
              "People with ikigai exercised more frequently",
              "Having a clear ikigai was one of the strongest predictors of longevity",
              "Ikigai was only beneficial for people under 50"
            ],
            correctAnswer: 2,
            explanation: "Studies in Okinawa, one of the world's Blue Zones, found that a sense of purpose was strongly linked to longer life, better health, and higher satisfaction."
          }
        ],
        interactive: [
          {
            type: 'reflection',
            prompt: "Forget the Venn diagram. Ask yourself honestly: What is one thing that makes you want to get out of bed? It can be small.",
            placeholder: "Example: My morning walk, helping my team solve problems, learning something new..."
          },
          {
            type: 'exercise',
            prompt: "List three activities where you lose track of time or feel quietly satisfied, even without recognition.",
            placeholder: "1. \n2. \n3. "
          }
        ],
        practicalAction: "This evening, write down your answer to: 'What made today worth living?' Do this for a week and notice what patterns emerge."
      },
      {
        id: 'emw-lesson-3',
        title: 'Wabi-Sabi: Beauty in Imperfection',
        duration: 6,
        content: [
          "In the West, beauty often means symmetry, polish, and perfection. In Japan, one of the deepest aesthetic philosophies points in the opposite direction: wabi-sabi, the beauty found in imperfection, impermanence, and incompleteness.",
          "Wabi originally meant the loneliness of living in nature, far from society. Sabi referred to the passage of time and the deterioration it brings. Together, they describe a worldview that finds beauty in what is worn, weathered, and transient.",
          "A cracked tea bowl repaired with gold (kintsugi) is more beautiful than an unbroken one. A moss-covered garden wall. The asymmetry of a handmade ceramic. Autumn leaves turning brown. These aren't flaws—they're stories.",
          "Yoda explains that wabi-sabi offers a powerful antidote to modern perfectionism. In a culture obsessed with filters, optimization, and flawless presentation, wabi-sabi whispers: 'You are enough as you are. This moment is enough as it is.'",
          "The practice of wabi-sabi isn't about letting everything fall apart. It's about releasing the grip of perfectionism and finding peace with reality as it actually is—messy, unfinished, and constantly changing.",
          "Sen no Rikyu, the legendary tea master who shaped much of Japanese aesthetics, taught that the essence of tea ceremony is found in imperfection. A perfectly arranged room misses the point. What matters is sincerity, presence, and the acceptance of what is.",
          "When you apply wabi-sabi to your own life, you stop waiting for conditions to be perfect before you allow yourself to be happy. You begin to see the cracks, the rough edges, and the aging process as part of what makes life real and meaningful."
        ],
        keyTakeaways: [
          "Wabi-sabi is the beauty found in imperfection, impermanence, and incompleteness",
          "Kintsugi (golden repair) treats cracks as part of an object's story, not as flaws",
          "Wabi-sabi is a powerful antidote to modern perfectionism",
          "Happiness doesn't require perfect conditions—it requires acceptance of what is"
        ],
        visualType: 'infographic',
        visualData: {
          type: 'contrast',
          perfectionism: ['Symmetry', 'Flawless', 'Permanent', 'Controlled'],
          wabiSabi: ['Asymmetry', 'Weathered', 'Transient', 'Natural']
        },
        quiz: [
          {
            question: "What is kintsugi?",
            options: [
              "A Japanese meditation technique",
              "The practice of repairing broken pottery with gold",
              "A breathing exercise for calm",
              "A type of Japanese garden design"
            ],
            correctAnswer: 1,
            explanation: "Kintsugi is the art of repairing broken pottery with gold lacquer, treating the cracks as part of the object's history rather than something to hide. It embodies wabi-sabi perfectly."
          },
          {
            question: "What does wabi-sabi teach about the relationship between happiness and perfection?",
            options: [
              "You must perfect yourself before you can be happy",
              "Perfection and happiness are the same thing",
              "Happiness doesn't require perfect conditions—it requires acceptance",
              "Only imperfect people can be truly happy"
            ],
            correctAnswer: 2,
            explanation: "Wabi-sabi teaches that happiness comes from accepting reality as it is—imperfect, impermanent, and incomplete—rather than waiting for everything to be just right."
          }
        ],
        interactive: [
          {
            type: 'reflection',
            prompt: "Think of something in your life you consider 'broken' or imperfect—a relationship, a skill, your appearance. How might wabi-sabi help you see it differently?",
            placeholder: "Write your reflection here..."
          },
          {
            type: 'visualization',
            prompt: "Imagine a cracked tea bowl repaired with gold. The cracks make it unique and tell its story. What would it look like to apply this metaphor to a 'crack' in your own life?",
            placeholder: "Describe how you'd reframe this imperfection..."
          }
        ],
        practicalAction: "Find one 'imperfect' thing today—a chipped mug, a crooked picture, a wrinkle—and instead of fixing it, appreciate it. Notice how releasing the need for perfection feels."
      },
      {
        id: 'emw-lesson-4',
        title: 'Shinrin-Yoku: The Medicine of Trees',
        duration: 7,
        content: [
          "In 1982, the Japanese Ministry of Agriculture, Forestry, and Fisheries coined the term shinrin-yoku—literally, 'forest bathing.' It doesn't mean exercising in the forest. It means slowly, deliberately immersing yourself in the atmosphere of the woods using all five senses.",
          "The practice emerged from an intuition that modern Japanese life, with its relentless pace and concrete landscapes, was creating a health crisis. People needed nature not as a backdrop for exercise, but as medicine for the mind.",
          "Research has since validated this intuition spectacularly. Studies led by Dr. Qing Li at Nippon Medical School found that spending time in forests lowers cortisol levels by 16%, reduces blood pressure, decreases heart rate, and boosts immune function by increasing natural killer cells.",
          "Trees release organic compounds called phytoncides—essentially, their immune system. When you breathe in forest air, you absorb these compounds, and your body responds by producing more NK cells, which fight infections and even cancer cells.",
          "Yoda emphasizes that shinrin-yoku is not hiking. There is no destination, no step count, no achievement. You walk slowly. You stop often. You touch bark, listen to streams, smell earth, and watch light filter through leaves. The goal is receptivity, not exertion.",
          "In Japan, there are now over 60 officially designated Forest Therapy trails, and doctors prescribe forest bathing for stress, anxiety, and burnout. It has become an evidence-based medical practice.",
          "The deeper lesson of shinrin-yoku connects back to yaoyorozu: nature isn't a resource to be used. It's a living presence that can restore you—if you slow down enough to let it."
        ],
        keyTakeaways: [
          "Shinrin-yoku (forest bathing) is deliberate sensory immersion in nature, not exercise",
          "Research shows it lowers cortisol by 16%, reduces blood pressure, and boosts immunity",
          "Trees release phytoncides that increase your body's natural killer cells",
          "In Japan, forest bathing is an evidence-based medical practice prescribed by doctors"
        ],
        visualType: 'chart',
        visualData: {
          type: 'health-benefits',
          benefits: [
            { label: 'Cortisol', change: '-16%', color: '#10b981' },
            { label: 'Blood Pressure', change: '-5%', color: '#10b981' },
            { label: 'NK Cells', change: '+50%', color: '#3b82f6' },
            { label: 'Mood Score', change: '+30%', color: '#8b5cf6' }
          ]
        },
        quiz: [
          {
            question: "What are phytoncides?",
            options: [
              "A type of Japanese meditation mantra",
              "Organic compounds released by trees that boost human immune function",
              "Synthetic supplements that mimic forest air",
              "A category of forest mushrooms used in traditional medicine"
            ],
            correctAnswer: 1,
            explanation: "Phytoncides are natural organic compounds that trees release as part of their own defense system. When humans breathe them in, our bodies respond by producing more natural killer (NK) cells."
          },
          {
            question: "How does shinrin-yoku differ from hiking?",
            options: [
              "It requires special equipment",
              "It focuses on reaching a summit",
              "It emphasizes slow, sensory immersion without a destination or goal",
              "It can only be done in officially designated forests"
            ],
            correctAnswer: 2,
            explanation: "Shinrin-yoku is not about distance, speed, or achievement. It's about walking slowly, stopping often, and engaging all five senses. The goal is receptivity, not exertion."
          }
        ],
        interactive: [
          {
            type: 'exercise',
            prompt: "Plan a mini shinrin-yoku session. Even a park or tree-lined street works. What five senses will you engage?",
            placeholder: "Sight: \nSound: \nSmell: \nTouch: \nTaste (optional): "
          },
          {
            type: 'reflection',
            prompt: "When was the last time you were in nature without trying to accomplish something? How did it feel?",
            placeholder: "Write your reflection here..."
          }
        ],
        practicalAction: "Spend 20 minutes in the most natural setting available to you today—a park, garden, or tree-lined street. Walk slowly, leave your phone in your pocket, and use all five senses. This is your first forest bath."
      },
      {
        id: 'emw-lesson-5',
        title: 'Mono no Aware: The Bittersweet Beauty of Passing',
        duration: 6,
        content: [
          "Every spring, millions of Japanese people gather under cherry blossom trees for hanami—flower viewing parties. But the real magic isn't the blossoms themselves. It's that they last only about two weeks before falling. This fleeting beauty is the essence of mono no aware.",
          "Mono no aware (roughly, 'the pathos of things') is a deep sensitivity to the transience of life. It's the bittersweet feeling you get watching a sunset you know will end, or holding a newborn and knowing they'll grow up fast.",
          "Unlike sadness, mono no aware isn't about despair. It's a gentle, appreciative ache—the recognition that beauty and impermanence are inseparable. Things are beautiful precisely because they don't last.",
          "Yoda explains that modern culture often tries to fight impermanence—through anti-aging products, permanent records, digital preservation. But mono no aware says: don't fight it. Feel it. Let the transience make the experience more vivid.",
          "This concept reshapes how you relate to loss and change. Instead of clinging to what was or fearing what's coming, mono no aware invites you to be fully present with what is, knowing it will pass—and loving it more for that.",
          "The Japanese tea ceremony embodies this perfectly. Every gathering is called ichigo ichie—'one time, one meeting.' This particular moment, with these particular people, will never happen exactly this way again. That awareness elevates an ordinary cup of tea into something sacred.",
          "When you carry mono no aware with you, goodbyes become more tender, ordinary Tuesdays become more precious, and the people in your life become irreplaceable—not because they're perfect, but because your time together is finite."
        ],
        keyTakeaways: [
          "Mono no aware is the bittersweet beauty of impermanence—things are precious because they pass",
          "Cherry blossom viewing (hanami) celebrates beauty that lasts only two weeks",
          "Ichigo ichie means 'one time, one meeting'—every moment is unrepeatable",
          "Embracing transience makes ordinary moments feel more vivid and meaningful"
        ],
        visualType: 'diagram',
        visualData: {
          type: 'cycle',
          stages: ['Bloom', 'Peak Beauty', 'Falling', 'Renewal'],
          centerLabel: 'Mono no Aware'
        },
        quiz: [
          {
            question: "What makes cherry blossom viewing (hanami) a practice of mono no aware?",
            options: [
              "The blossoms are the most beautiful flowers in the world",
              "The celebration of beauty that lasts only about two weeks before falling",
              "It's a religious requirement in Shinto practice",
              "Cherry trees are considered sacred and eternal"
            ],
            correctAnswer: 1,
            explanation: "Hanami embodies mono no aware because the beauty of cherry blossoms is inseparable from their brevity. They're cherished precisely because they don't last."
          },
          {
            question: "What does 'ichigo ichie' mean?",
            options: [
              "Every cherry blossom is unique",
              "Practice makes perfect",
              "One time, one meeting—this moment will never happen again",
              "The spirit lives in all things"
            ],
            correctAnswer: 2,
            explanation: "Ichigo ichie means 'one time, one meeting'—a reminder that each gathering of people and circumstances is unrepeatable, which makes it sacred."
          }
        ],
        interactive: [
          {
            type: 'reflection',
            prompt: "Think of something in your life that is temporary—a season, a phase, a relationship, your children's childhood. How does knowing it will end change how you experience it right now?",
            placeholder: "Write your reflection here..."
          },
          {
            type: 'journal',
            prompt: "Write about one 'ichigo ichie' moment from recent memory—a moment that will never happen in exactly that way again. What made it special?",
            placeholder: "Describe the moment..."
          }
        ],
        practicalAction: "Today, choose one experience—a meal, a conversation, a walk—and remind yourself: 'This exact moment will never happen again.' Notice how that awareness changes your attention."
      },
      {
        id: 'emw-lesson-6',
        title: 'The Power of Ritual and Ma (Negative Space)',
        duration: 7,
        content: [
          "In Japanese culture, how you do something matters as much as what you do. The tea ceremony, the martial arts bow, the careful wrapping of a gift—these rituals aren't inefficiency. They're a technology for presence.",
          "Yoda describes how daily rituals create anchors of meaning in your day. The act of saying 'itadakimasu' before eating (literally, 'I humbly receive') transforms a meal from fuel into gratitude. Even small rituals—removing your shoes at the door, arranging your workspace—can shift your mental state.",
          "Neuroscience supports this: rituals reduce anxiety by creating a sense of order and predictability. A 2016 study in the journal Philosophical Transactions of the Royal Society found that ritualized actions lower cortisol and increase feelings of control during stressful situations.",
          "Equally important is the Japanese concept of ma—negative space, or the pause between things. Ma is the silence between musical notes, the empty space in a painting, the pause before someone speaks. It's not emptiness—it's fullness waiting to be noticed.",
          "In Western culture, we tend to fill every gap—silence is awkward, empty space is wasted, downtime is lazy. But Japanese aesthetics teach that the space between things gives meaning to the things themselves.",
          "Consider how a well-placed pause in a conversation makes the next words land harder. Or how an uncluttered room feels more peaceful than a decorated one. Ma is the art of knowing what to leave out.",
          "Together, ritual and ma create a framework for mindful living. Rituals ground you in the present moment. Ma gives you permission to breathe. Both resist the modern compulsion to always be doing, filling, optimizing."
        ],
        keyTakeaways: [
          "Japanese rituals are a technology for presence, not inefficiency",
          "Small daily rituals like 'itadakimasu' transform ordinary acts into meaningful ones",
          "Ma (negative space) is the meaningful pause between things—not emptiness, but fullness",
          "Ritual and ma together resist the modern compulsion to always be doing and filling"
        ],
        visualType: 'diagram',
        visualData: {
          type: 'two-concepts',
          concept1: { label: 'Ritual', description: 'Anchors of presence', examples: ['Tea ceremony', 'Itadakimasu', 'Gift wrapping'] },
          concept2: { label: 'Ma', description: 'Meaningful negative space', examples: ['Silence in music', 'Empty space in art', 'Pause in conversation'] }
        },
        quiz: [
          {
            question: "What does 'itadakimasu' literally mean, and what does it represent?",
            options: [
              "'Enjoy your meal'—a casual greeting",
              "'I humbly receive'—transforming eating into an act of gratitude",
              "'Let us begin'—a signal to start eating",
              "'Thank the chef'—showing appreciation for the cook"
            ],
            correctAnswer: 1,
            explanation: "Itadakimasu literally means 'I humbly receive.' Saying it before a meal transforms eating from mere fuel consumption into an act of gratitude and presence."
          },
          {
            question: "What is 'ma' in Japanese aesthetics?",
            options: [
              "The decorative elements in traditional art",
              "A type of meditation posture",
              "Negative space—the meaningful pause or emptiness between things",
              "The arrangement of objects in a room"
            ],
            correctAnswer: 2,
            explanation: "Ma is negative space—the silence between notes, the empty space in a painting, the pause in conversation. It's not emptiness but meaningful space that gives form to everything around it."
          }
        ],
        interactive: [
          {
            type: 'exercise',
            prompt: "Design a small daily ritual for yourself. It should take less than 2 minutes and mark a transition in your day (morning start, beginning work, evening wind-down).",
            placeholder: "My ritual: \nWhen I'll do it: \nWhat it means to me: "
          },
          {
            type: 'reflection',
            prompt: "Where in your life could you add more 'ma'—more intentional pauses, empty space, or silence? What would you need to remove or stop doing?",
            placeholder: "Write your reflection here..."
          }
        ],
        practicalAction: "Before your next meal today, pause for five seconds. Say (silently or aloud): 'I humbly receive this.' Notice how this tiny ritual changes your experience of eating."
      },
      {
        id: 'emw-lesson-7',
        title: 'Gaman and Resilience: Enduring with Dignity',
        duration: 6,
        content: [
          "Japan is a land shaped by adversity—earthquakes, tsunamis, typhoons, volcanic eruptions. Living with constant natural threats has cultivated a cultural value called gaman: the art of enduring difficult situations with patience, dignity, and grace.",
          "Gaman doesn't mean suppressing your emotions or pretending everything is fine. It means bearing what must be borne without losing your composure or burdening others unnecessarily. It's resilience with poise.",
          "After the devastating 2011 Tohoku earthquake and tsunami, the world watched in astonishment as displaced Japanese citizens formed orderly lines for water, shared supplies without being asked, and helped strangers without seeking recognition. This was gaman in action.",
          "Yoda explains that gaman is rooted in a communal ethic: your suffering is real, but so is everyone else's. By bearing your share with grace, you contribute to the collective strength. It's not about being superhuman—it's about being considerate even in crisis.",
          "There's an important nuance: gaman is not toxic positivity or denial. Japanese culture also values the expression of grief and the acknowledgment of pain. Mono no aware, which we explored earlier, is the permission to feel deeply. Gaman is about how you carry that feeling in public.",
          "The concept has a practical dimension too: gaman includes the ability to delay gratification, persist through boredom, and continue working when motivation fades. It's the quiet stamina that underlies mastery in martial arts, craftsmanship, and daily life.",
          "In a culture that often celebrates raw self-expression and instant gratification, gaman offers a counterpoint: sometimes strength looks like patience. Sometimes the bravest thing you can do is quietly keep going."
        ],
        keyTakeaways: [
          "Gaman is enduring hardship with patience, dignity, and grace—not suppression",
          "It's rooted in communal ethic: bearing your share strengthens everyone",
          "Gaman coexists with emotional depth—it's not denial, it's composure in public",
          "It includes practical resilience: delayed gratification and quiet persistence"
        ],
        visualType: 'diagram',
        visualData: {
          type: 'spectrum',
          left: { label: 'Suppression', description: 'Denying feelings' },
          center: { label: 'Gaman', description: 'Enduring with dignity' },
          right: { label: 'Overwhelm', description: 'Losing composure' }
        },
        quiz: [
          {
            question: "What distinguishes gaman from simply suppressing emotions?",
            options: [
              "Gaman means you should never feel pain",
              "Gaman is about bearing difficulty with dignity while still feeling deeply",
              "Gaman requires formal training",
              "There is no difference—both involve hiding emotions"
            ],
            correctAnswer: 1,
            explanation: "Gaman is not suppression or denial. Japanese culture values feeling deeply (mono no aware). Gaman is about how you carry those feelings in public—with composure and consideration for others."
          },
          {
            question: "How was gaman demonstrated after the 2011 Tohoku earthquake?",
            options: [
              "Citizens demanded immediate government action",
              "People waited in orderly lines, shared supplies, and helped strangers without seeking recognition",
              "Everyone meditated to manage stress",
              "Residents refused international aid to show self-sufficiency"
            ],
            correctAnswer: 1,
            explanation: "After the 2011 disaster, the world was moved by the calm, dignified way Japanese citizens responded—forming orderly lines, sharing resources, and helping strangers. This collective grace under pressure is gaman."
          }
        ],
        interactive: [
          {
            type: 'reflection',
            prompt: "Think of a current difficulty in your life. How might approaching it with gaman—patience and quiet dignity—change your experience of it?",
            placeholder: "Write your reflection here..."
          },
          {
            type: 'exercise',
            prompt: "Identify one area where you tend to quit when it gets boring or uncomfortable. What would 'quiet persistence' look like there?",
            placeholder: "Area: \nWhat quitting looks like: \nWhat gaman looks like: "
          }
        ],
        practicalAction: "Today, when you encounter something frustrating—a long wait, a difficult conversation, a tedious task—practice gaman. Instead of reacting, take a breath and endure it with quiet patience. Notice how it changes the situation."
      },
      {
        id: 'emw-lesson-8',
        title: 'Bringing It All Together: Your Eight Million Paths',
        duration: 6,
        content: [
          "You've now explored seven core Japanese concepts for happiness and healing: yaoyorozu (spirit in everything), ikigai (reason for being), wabi-sabi (beauty in imperfection), shinrin-yoku (forest bathing), mono no aware (the beauty of impermanence), ritual and ma (presence and space), and gaman (dignified resilience).",
          "What connects all of these ideas? A single thread: paying attention. Japanese wisdom doesn't ask you to escape your life or become someone else. It asks you to see the life you already have with fresh eyes.",
          "Yoda's central message is that happiness isn't something you build from scratch. It's something you uncover by removing the noise, the rushing, the perfectionism, and the constant craving for 'more' that prevents you from appreciating 'enough.'",
          "These concepts aren't meant to be practiced in isolation. They weave together naturally. When you slow down for a ritual (ma), you notice beauty in imperfection (wabi-sabi). When you walk in nature (shinrin-yoku), you feel the transience of seasons (mono no aware). When you face difficulty with grace (gaman), you discover what truly matters to you (ikigai).",
          "The title of the book itself is the lesson: there are eight million ways to find happiness. Not one way. Not the 'right' way. Millions of small, personal, ordinary ways that are already woven into the fabric of your days.",
          "Your path doesn't need to look like anyone else's. A quiet morning with tea, a walk in the rain, an imperfect conversation with someone you love, the patience to keep going when things are hard—these are all valid paths to happiness.",
          "The Japanese don't have a word for 'the pursuit of happiness.' Perhaps that's because happiness, in this tradition, isn't pursued. It's received—humbly, gratefully, one moment at a time."
        ],
        keyTakeaways: [
          "All seven concepts share a common thread: the practice of paying attention",
          "These ideas weave together naturally in daily life—they aren't isolated practices",
          "Happiness isn't built from scratch—it's uncovered by removing noise and rushing",
          "There are eight million ways to happiness, and your path doesn't need to look like anyone else's"
        ],
        visualType: 'infographic',
        visualData: {
          type: 'summary-wheel',
          concepts: [
            { label: 'Yaoyorozu', description: 'Spirit in everything' },
            { label: 'Ikigai', description: 'Reason for being' },
            { label: 'Wabi-Sabi', description: 'Beauty in imperfection' },
            { label: 'Shinrin-Yoku', description: 'Forest bathing' },
            { label: 'Mono no Aware', description: 'Beauty of impermanence' },
            { label: 'Ritual & Ma', description: 'Presence and space' },
            { label: 'Gaman', description: 'Dignified resilience' }
          ],
          centerLabel: 'Paying Attention'
        },
        quiz: [
          {
            question: "What single thread connects all seven Japanese concepts covered in this book?",
            options: [
              "Religious devotion to Shinto traditions",
              "The practice of paying attention to your life as it already is",
              "Achieving financial independence",
              "Reaching a state of permanent happiness"
            ],
            correctAnswer: 1,
            explanation: "Every concept in the book—from yaoyorozu to gaman—comes back to one thing: paying attention. Japanese wisdom asks you to see the life you already have with fresh eyes."
          },
          {
            question: "According to the book, what is the relationship between happiness and pursuit?",
            options: [
              "Happiness must be actively pursued to be found",
              "The harder you pursue happiness, the faster you find it",
              "Happiness isn't pursued—it's received, one moment at a time",
              "Only certain people are capable of finding happiness"
            ],
            correctAnswer: 2,
            explanation: "Yoda's central insight is that happiness isn't something you chase. It's something you uncover by slowing down and receiving what's already there—humbly, gratefully, one moment at a time."
          }
        ],
        interactive: [
          {
            type: 'journal',
            prompt: "Of the seven concepts (yaoyorozu, ikigai, wabi-sabi, shinrin-yoku, mono no aware, ritual/ma, gaman), which resonated most with you? Why? How will you carry it forward?",
            placeholder: "The concept that spoke to me most: \nWhy: \nHow I'll practice it: "
          },
          {
            type: 'exercise',
            prompt: "Design your own 'happiness practice' combining 2-3 concepts from this book. What does a single day look like with these woven in?",
            placeholder: "Morning: \nAfternoon: \nEvening: "
          }
        ],
        practicalAction: "Choose ONE concept from this book that resonated most deeply. Commit to practicing it for the next seven days. Write it on a note where you'll see it each morning."
      }
    ]
  }
];

export default booksDatabase;
