import SpotifyAPI from 'spotify-web-api-js';
import Auth from './src/auth'
import EventBus from './src/EventEmitter';

const BASE_URL = process.env.BASE_URL

const initialize = async ({ appUrl }) => {
  const url = BASE_URL || appUrl
  const spotify = new SpotifyAPI()
  const auth = new Auth({ appUrl: url, spotify })

  if (!await auth.handleAuth()) {
    console.error('User is NOT authenticated', url)
    return Promise.reject({})
  }

  const eventBus = new EventBus();

  return Promise.resolve({ spotify, eventBus })
}

export default {
  initialize
}