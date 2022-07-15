import SpotifyAPI from 'spotify-web-api-js';
import Auth from './src/auth'

const initialize = async ({ appUrl }) => {
  const spotify = new SpotifyAPI()
  const auth = new Auth({ appUrl, spotify })

  if (!await auth.handleAuth()) {
    console.error('User is NOT authenticated', appUrl)
    return Promise.reject({})
  }

  return Promise.resolve({ spotify })
}

export default {
  initialize
}