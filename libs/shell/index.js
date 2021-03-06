import SpotifyAPI from 'spotify-web-api-js';
import Auth from './src/auth'
import EventBus from './src/EventEmitter';
import theme from './src/theme';

const initialize = async ({ appUrl }) => {
  const spotify = new SpotifyAPI()
  const auth = new Auth({ appUrl, spotify })

  if (!await auth.handleAuth()) {
    console.error('User is NOT authenticated', appUrl)
    return Promise.reject({})
  }

  const eventBus = new EventBus();

  return Promise.resolve({ spotify, eventBus, theme })
}

export default {
  initialize
}