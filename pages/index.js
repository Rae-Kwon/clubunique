import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import discographyData from '../public/data/discographyData'
import Icon from '../components/Icon'
import Discography from '../features/Home/components/DiscographyView'
import Player from '../features/Home/components/Player'
import ThemeSwitch from '../features/Home/components/ThemeSwitch'
import styles from '../styles/Home.module.css'
import SocialBar from '../features/Home/components/SocialBar'

export default function Home() {
  const [spin, setSpin] = useState(false)
  const [discography, setDiscography] = useState([])
  const [currentTrack, setCurrentTrack] = useState({})

  const iconRef = useRef(null)

  const startSpin = () => {
    setSpin(true)
  }

  const stopSpin = () => {
    setSpin(false)
  }

  useEffect(() => {
    setDiscography(
      [...discographyData].sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate),
      ),
    )
  }, [])

  useEffect(() => {
    setCurrentTrack(discography[0])
  }, [discography])

  return (
    <div className={styles.container}>
      <Head>
        <title>Club Unique | Official Website</title>
        <meta
          name="description"
          content="Listen to the new EP by Harvo Burning Sky"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      <nav className={styles.nav}>
        <SocialBar />
        <ThemeSwitch />
      </nav>
      <main className={styles.main}>
        <section className={styles.icon}>
          <Icon
            iconRef={iconRef}
            spin={spin}
            className={styles.play}
            viewBox="0 0 400 400"
          />
        </section>
        <section className={styles.player}>
          <Player
            startSpin={startSpin}
            stopSpin={stopSpin}
            currentTrack={currentTrack}
          />
        </section>
        <section className={styles.discographyView}>
          <Discography
            discography={discography}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
            stopSpin={stopSpin}
          />
        </section>
      </main>
    </div>
  )
}
