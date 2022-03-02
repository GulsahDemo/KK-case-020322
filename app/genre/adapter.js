import config from '../config/environment';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://api.themoviedb.org',
  namespace: `${config.TMDB.api_namespace_genre}`,

  pathForType() {
    return `list?api_key=${config.TMDB.api_key}`;
  },
});
