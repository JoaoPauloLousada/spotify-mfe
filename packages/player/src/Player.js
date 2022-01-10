import styles from './player.module.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
// import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Slider } from "@material-ui/core";

function Player() {
  return (
    <div className={styles.player}>
      <div className={styles.left}>
        <img className={styles.albumImg} src="https://via.placeholder.com/50" alt="" />
        <div className={styles.albumInfo}>
          <h4 className={styles.albumMainText}>Main text</h4>
          <p className={styles.albumSmallText}>subtitle</p>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.centerIcons}>
          <ShuffleIcon />
          <SkipPreviousIcon />
          <PlayCircleOutlineIcon className={styles.playIcon} fontSize="large" />
          <SkipNextIcon />
          <RepeatIcon />
        </div>
      </div>
      <div className={styles.right}>
        <PlaylistPlayIcon />
        <VolumeDownIcon />
        <Slider aria-labelledby="continuous-slider" className={styles.rightSlider} />
      </div>
    </div>
  );
}

export default Player;
