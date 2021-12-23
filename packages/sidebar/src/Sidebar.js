import { useCallback, useEffect } from "react";
import ListTile from "./components/ListTile";
import { usePlaylist } from "./hooks/usePlaylist";
import styles from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faHeadphones, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons'


function Sidebar() {
  const { playlists } = usePlaylist()

  const emitPlayList = useCallback((playlist) => {
    const event = new CustomEvent('ON_PLAYLIST', { detail: playlist })
    document.dispatchEvent(event)
  }, []);

  return (
    <div className={styles.sidebar}>
      <div>
        <ListTile text='Home' icon={<FontAwesomeIcon icon={faHome} />} active />
        <ListTile text='Search' icon={<FontAwesomeIcon icon={faSearch} />} />
        <ListTile text='Your library' icon={<FontAwesomeIcon icon={faHeadphones} />} />
      </div>
      <div style={{ marginTop: '2rem' }}>
        <ListTile text='Create playlist' icon={<FontAwesomeIcon icon={faPlus} />} />
        <ListTile text='Liked songs' icon={<FontAwesomeIcon icon={faHeart} />} />
      </div>
      <hr className={styles.sidebarDivider} />
      <div>
        {playlists && playlists.map(list => (
          <div key={list.id} className={styles.listItem} onClick={() => emitPlayList(list)}>
            <span className={styles.itemName}>{list.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
