// videoObserver.js
const subscribers = new Set();

export const VideoObserver = {
  subscribe(callback) {
    subscribers.add(callback);
    return () => subscribers.delete(callback);
  },
  notify(state) {
    subscribers.forEach(callback => callback(state));
  }
};

// Tipos de estado disponibles
export const VIDEO_STATES = {
  PLAYING: 'playing',
  PAUSED: 'paused',
  ENDED: 'ended',
  BUFFERING: 'buffering'
};