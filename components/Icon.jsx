import { useEffect, useState } from 'react'
import styles from './Icon.module.css'
import { useTheme } from 'next-themes'
import SvgComponent from './SvgComponent'
import iconSvg from '../public/svgData/iconSvgAttr.json'

const Icon = ({ iconRef, spin, className, viewBox, children }) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && iconRef) {
      if (spin) {
        iconRef.current.style.animationPlayState = 'running'
      } else {
        iconRef.current.style.animationPlayState = 'paused'
      }
    }
  }, [iconRef, spin, mounted])

  if (!mounted) return null

  return (
    <div className={className} ref={iconRef}>
      <SvgComponent
        className={styles.svg}
        dataTheme={resolvedTheme}
        viewBox={viewBox}
        draw={iconSvg.draw}
      />
    </div>
  )
}
export default Icon
