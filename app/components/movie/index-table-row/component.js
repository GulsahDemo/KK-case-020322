import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  'data-test-movie-index-header': true,
  //
  // States
  //
  tagName: 'tr',

  //
  // Life Cycle
  //
  statusClass: computed('calculateToPercentage', function(average) {
    console.log(average);
    //0<=average<=35 low
    //36<=average<=65  mid
    //66<=average<=100 high
    return 'low';
  }),

  calculateToPercentage: computed('movie.vote_average', function(average) {
    console.log(average);
    let calcAverage = 100;
    //average = 8.3
    //calculate to percentage %83
    //return 83

    
    return calcAverage;
  })
});
