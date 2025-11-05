import my_state from '../components/my_state';

const scoreController = {
  saveScore(score, count) {
    // Persist the score into the shared state object
    my_state.my_score = score;
    my_state.my_count = count;
  },

  getScore() {
    return {
      score: my_state.my_score || 0,
      count: my_state.my_count || 0,
    };
  },

  reset() {
    my_state.my_score = 0;
    my_state.my_count = 0;
  }
};

export default scoreController;
