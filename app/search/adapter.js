import config from '../config/environment';
import DS from 'ember-data';

const host = 'https://api.themoviedb.org/';
const namespace = `${config.TMDB.api_namespace_search}/`;  

export default DS.JSONAPIAdapter.extend({

    urlForQuery (query, modelName) { 
        console.log(query, modelName)
        return `${host}${namespace}movie?api_key=${config.TMDB.api_key}`;
    }
})