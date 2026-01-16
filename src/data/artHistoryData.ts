// Access art history data from global window object
import type { ArtHistoryCategory } from './artHistoryTypes';

// Declare the global variable type
declare global {
  interface Window {
    ART_HISTORY_CATEGORY?: ArtHistoryCategory;
  }
}

// Get data from window (set by art-history-data.js)
export const artHistoryData: ArtHistoryCategory = (window as any).ART_HISTORY_CATEGORY || {
  id: 'art-history',
  name: 'Art History',
  icon: '🎨',
  color: '#ec4899',
  description: 'Global art movements from 1300 to present',
  books: []
};

// Helper function to get a book by ID
export function getArtHistoryBook(bookId: string) {
  return artHistoryData.books.find(book => book.id === bookId);
}

// Helper function to get a lesson by book ID and lesson ID
export function getArtHistoryLesson(bookId: string, lessonId: number) {
  const book = getArtHistoryBook(bookId);
  if (!book) return null;
  return book.lessonList.find(lesson => lesson.id === lessonId);
}

// Export the full data for use in Library/BookDetail components
export default artHistoryData;
