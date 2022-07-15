import Auth from './src/auth'

const initialize = async ({ appUrl }) => {

  const auth = new Auth({ appUrl })
  if (!await auth.handleAuth()) {
    console.log('user Is Not Authenticated', appUrl)
  }

  return Promise.resolve({ SHELL_STATE: null });
}

export default {
  initialize
}