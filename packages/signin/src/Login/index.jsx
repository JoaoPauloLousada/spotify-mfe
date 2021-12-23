import React from 'react'
import { loginUrl } from '../spotify'
import styles from './login.module.css';

export default function Login() {
  return (
    <div className={styles.login}>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
        className={styles.loginLogo}
      />
      {/* Login with spotify button */}
      <a className={styles.loginLink} href={loginUrl}>Login with spotify</a>
    </div>
  )
}
