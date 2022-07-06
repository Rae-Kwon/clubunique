import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })
import styles from './Player.module.css'

const Player = ({ startSpin, stopSpin, currentTrack }) => {
  const soundcloudConfig = {
    soundcloud: {
      options: {
        show_teaser: false,
        auto_play: false,
        hide_related: false,
        show_comments: true,
        show_user: true,
        show_reposts: false,
        visual: false,
        show_teaser: false,
      },
    },
  }

  if (!currentTrack) return null

  return (
    <div className={styles.container}>
      <ReactPlayer
        url={`https://soundcloud.com/${currentTrack.albumLink}`}
        onPlay={startSpin}
        onPause={stopSpin}
        width="100%"
        height="100%"
        config={soundcloudConfig}
      />
    </div>
  )
}
export default Player
