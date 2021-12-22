import { usePlaylist } from "./hooks/usePlaylist";
import { useSpotifyUser } from "./hooks/useSpotifyUser";
import './sidebar.css';

function Sidebar() {
  useSpotifyUser()
  const { playlists } = usePlaylist()

  return (
    <div className="sidebar">
      <div>
        {playlists && playlists.map(list => (
          <div key={list.id} className="list-item">
            <span className="list-item__image">
              {Boolean(list.images.length) && <img src={list.images[0].url} alt="" />}
            </span>
            <span>{list.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
