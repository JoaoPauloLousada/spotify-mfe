import Auth from './src/auth'


const initialize = async () => {
  const auth = new Auth()
  if (!await auth.isAuth()) {
    console.log('user Is Not Authenticated')
  }

  return Promise.resolve({ SHELL_STATE: null });
}

export default {
  initialize
}