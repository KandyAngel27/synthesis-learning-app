import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserProgress {
  bookId: string;
  completedLessons: string[];
  lastAccessed: Date;
  totalTimeSpent: number; // in minutes
  quizScores: { [lessonId: string]: number };
  notes: { [lessonId: string]: string };
}

export interface UserStats {
  totalBooksStarted: number;
  totalBooksCompleted: number;
  totalLessonsCompleted: number;
  totalTimeSpent: number;
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: Date | null;
  achievements: string[];
}

export interface LearningGoal {
  id: string;
  type: 'books-per-month' | 'minutes-per-day' | 'streak' | 'custom';
  target: number;
  current: number;
  startDate: Date;
  endDate?: Date;
}

interface AppState {
  // User data
  userProgress: { [bookId: string]: UserProgress };
  userStats: UserStats;
  learningGoals: LearningGoal[];
  
  // UI state
  currentBookId: string | null;
  currentLessonId: string | null;
  darkMode: boolean;
  soundEnabled: boolean;
  fontSize: 'small' | 'medium' | 'large';
  
  // Learning preferences
  learningStyle: 'visual' | 'reading' | 'interactive' | 'balanced';
  sessionDuration: 5 | 10 | 15 | 20;
  dailyGoalMinutes: number;
  
  // Actions
  setCurrentBook: (bookId: string | null) => void;
  setCurrentLesson: (lessonId: string | null) => void;
  completeLesson: (bookId: string, lessonId: string, timeSpent: number, quizScore: number) => void;
  addNote: (bookId: string, lessonId: string, note: string) => void;
  updateStats: () => void;
  setLearningStyle: (style: 'visual' | 'reading' | 'interactive' | 'balanced') => void;
  toggleDarkMode: () => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
  addGoal: (goal: LearningGoal) => void;
  updateGoalProgress: (goalId: string, progress: number) => void;
  calculateStreak: () => void;
  resetProgress: () => void;
}

const initialStats: UserStats = {
  totalBooksStarted: 0,
  totalBooksCompleted: 0,
  totalLessonsCompleted: 0,
  totalTimeSpent: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastActivityDate: null,
  achievements: []
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      userProgress: {},
      userStats: initialStats,
      learningGoals: [],
      currentBookId: null,
      currentLessonId: null,
      darkMode: false,
      soundEnabled: true,
      fontSize: 'medium',
      learningStyle: 'balanced',
      sessionDuration: 10,
      dailyGoalMinutes: 15,

      // Actions
      setCurrentBook: (bookId) => set({ currentBookId: bookId }),
      
      setCurrentLesson: (lessonId) => set({ currentLessonId: lessonId }),
      
      completeLesson: (bookId, lessonId, timeSpent, quizScore) => {
        const state = get();
        const progress = state.userProgress[bookId] || {
          bookId,
          completedLessons: [],
          lastAccessed: new Date(),
          totalTimeSpent: 0,
          quizScores: {},
          notes: {}
        };

        // Add lesson to completed if not already there
        if (!progress.completedLessons.includes(lessonId)) {
          progress.completedLessons.push(lessonId);
        }

        progress.lastAccessed = new Date();
        progress.totalTimeSpent += timeSpent;
        progress.quizScores[lessonId] = quizScore;

        set({
          userProgress: {
            ...state.userProgress,
            [bookId]: progress
          }
        });

        // Update stats
        get().updateStats();
        get().calculateStreak();
      },

      addNote: (bookId, lessonId, note) => {
        const state = get();
        const progress = state.userProgress[bookId] || {
          bookId,
          completedLessons: [],
          lastAccessed: new Date(),
          totalTimeSpent: 0,
          quizScores: {},
          notes: {}
        };

        progress.notes[lessonId] = note;

        set({
          userProgress: {
            ...state.userProgress,
            [bookId]: progress
          }
        });
      },

      updateStats: () => {
        const state = get();
        const progress = Object.values(state.userProgress);
        
        const totalLessonsCompleted = progress.reduce(
          (sum, p) => sum + p.completedLessons.length,
          0
        );

        const totalTimeSpent = progress.reduce(
          (sum, p) => sum + p.totalTimeSpent,
          0
        );

        const totalBooksStarted = progress.length;

        // A book is completed if all its lessons are completed
        // This would need to check against actual book data
        const totalBooksCompleted = 0; // TODO: Calculate based on actual books

        set({
          userStats: {
            ...state.userStats,
            totalBooksStarted,
            totalBooksCompleted,
            totalLessonsCompleted,
            totalTimeSpent,
            lastActivityDate: new Date()
          }
        });
      },

      calculateStreak: () => {
        const state = get();
        const { lastActivityDate } = state.userStats;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (!lastActivityDate) {
          set({
            userStats: {
              ...state.userStats,
              currentStreak: 1,
              longestStreak: Math.max(1, state.userStats.longestStreak)
            }
          });
          return;
        }

        const lastActivity = new Date(lastActivityDate);
        lastActivity.setHours(0, 0, 0, 0);
        
        const diffDays = Math.floor((today.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24));

        let newStreak = state.userStats.currentStreak;

        if (diffDays === 0) {
          // Same day, no change
          return;
        } else if (diffDays === 1) {
          // Next day, increment streak
          newStreak += 1;
        } else {
          // Streak broken
          newStreak = 1;
        }

        set({
          userStats: {
            ...state.userStats,
            currentStreak: newStreak,
            longestStreak: Math.max(newStreak, state.userStats.longestStreak)
          }
        });
      },

      setLearningStyle: (style) => set({ learningStyle: style }),
      
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      
      setFontSize: (size) => set({ fontSize: size }),

      addGoal: (goal) => {
        const state = get();
        set({
          learningGoals: [...state.learningGoals, goal]
        });
      },

      updateGoalProgress: (goalId, progress) => {
        const state = get();
        const updatedGoals = state.learningGoals.map(goal =>
          goal.id === goalId ? { ...goal, current: progress } : goal
        );
        set({ learningGoals: updatedGoals });
      },

      resetProgress: () => {
        set({
          userProgress: {},
          userStats: initialStats,
          learningGoals: [],
          currentBookId: null,
          currentLessonId: null
        });
      }
    }),
    {
      name: 'synthesis-storage', // localStorage key
      partialize: (state) => ({
        userProgress: state.userProgress,
        userStats: state.userStats,
        learningGoals: state.learningGoals,
        darkMode: state.darkMode,
        fontSize: state.fontSize,
        learningStyle: state.learningStyle,
        sessionDuration: state.sessionDuration,
        dailyGoalMinutes: state.dailyGoalMinutes,
        soundEnabled: state.soundEnabled
      })
    }
  )
);
