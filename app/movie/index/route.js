import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      genres: this.store.findAll('genre'),
      movies: this.store.findAll('movie'),
    }).then(x => x.movies);
  },
});
