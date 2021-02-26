export default {
  // accessing the state in index.js with a getter
  coaches(state) {
    return state.coaches
  },
  // checking if there are coaches in the state
  // this returns a boolean
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0
  }
};