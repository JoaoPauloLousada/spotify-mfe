import React from 'react'
import styles from './list-tile.module.css'

export default function ListTile({text, icon, active}) {
  return (
    <div className={`${styles.listTile} ${active && styles.listTileActive}`}>
      <span className={styles.listTileIcon}>{icon}</span>
      <span>{text}</span>
    </div>
  )
}
