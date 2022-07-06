import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import SvgComponent from '../../../components/SvgComponent'
import iconSvg from '../../../public/svgData/socialIconSvgAttr.json'
import styles from './SocialBar.module.css'

const SocialBar = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={styles.container}>
      <a
        href="https://clubunique.bandcamp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgComponent
          className={styles.icon}
          dataTheme={resolvedTheme}
          draw={iconSvg.bandcamp}
          viewbox="0 0 24 24"
          width={24}
          height={24}
          title="Bandcamp"
          description="Bandcamp Logo"
        />
      </a>
      <a
        href="https://soundcloud.com/clubunique"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgComponent
          className={styles.icon}
          dataTheme={resolvedTheme}
          draw={iconSvg.soundcloud}
          viewbox="0 0 24 24"
          width={24}
          height={24}
          title="Soundcloud"
          description="Soundcloud Logo"
        />
      </a>
      <a
        href="https://www.instagram.com/clubuniqueradio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgComponent
          className={styles.icon}
          dataTheme={resolvedTheme}
          draw={iconSvg.instagram}
          viewbox="0 0 24 24"
          width={24}
          height={24}
          title="Instagram"
          description="Instagram Logo"
        />
      </a>
      <a
        href="https://www.facebook.com/clubuniqueradio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgComponent
          className={styles.icon}
          dataTheme={resolvedTheme}
          draw={iconSvg.facebook}
          viewbox="0 0 24 24"
          width={24}
          height={24}
          title="Facebook"
          description="Facebook Logo"
        />
      </a>
    </div>
  )
}
export default SocialBar
