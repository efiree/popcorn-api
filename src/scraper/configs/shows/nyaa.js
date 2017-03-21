// Import the neccesary modules.
import {
  apiFactory,
  defaultNyaaAnime
} from '../common';
import Provider from '../../providers/ShowProvider';

const API = apiFactory.getApi('nyaa');

const nyaaCommie = new Provider({
  API,
  modelType: Provider.ModelTypes.AnimeShow,
  name: 'Commie',
  type: Provider.Types.Show,
  query: Object.assign({}, defaultNyaaAnime, {
    term: 'mkv',
    user: 76430,
    filter: 'trusted_only'
  })
});

const nyaaFFF = new Provider({
  API,
  modelType: Provider.ModelTypes.AnimeShow,
  name: 'FFF',
  type: Provider.Types.Show,
  query: Object.assign({}, defaultNyaaAnime, {
    term: 'mkv',
    user: 73859,
    filter: 'trusted_only'
  })
});

const nyaaGG = new Provider({
  API,
  modelType: Provider.ModelTypes.AnimeShow,
  name: 'gg',
  type: Provider.Types.Show,
  query: Object.assign({}, defaultNyaaAnime, {
    term: 'mkv',
    user: 9001,
    filter: 'trusted_only'
  })
});

export default [
  nyaaCommie,
  nyaaFFF,
  nyaaGG
];
