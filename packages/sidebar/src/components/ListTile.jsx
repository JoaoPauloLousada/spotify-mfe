import React, { useCallback } from 'react'
import styles from './list-tile.module.css'

export default function ListTile({text, icon, active, route}) {
  const push = useCallback(() => {
    const onNavigate = new CustomEvent('onNavigate', {detail: {route: route ?? '/'}});
    document.dispatchEvent(onNavigate)
  }, [])
  return (
    <a onClick={push}>
      <div className={`${styles.listTile} ${active && styles.listTileActive}`}>
        <span className={styles.listTileIcon}>{icon}</span>
        <span>{text}</span>
      </div>
    </a>
  )
}
