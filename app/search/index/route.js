import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  queryParams: {
    query: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },
  model(params) {
      return RSVP.hash({
          movie: this.store.query('search', {
              query:params.query
          }),
      }).then(x => x.movie);
  }
});
