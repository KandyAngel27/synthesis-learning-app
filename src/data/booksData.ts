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
];

export default booksDatabase;
