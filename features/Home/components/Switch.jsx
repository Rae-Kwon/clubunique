import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import styles from './Switch.module.css'

const Switch = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [isSwitched, setSwitch] = useState(
    resolvedTheme === 'light' ? false : true,
  )

  const checkboxHandler = () => {
    setSwitch((prev) => !prev)
  }

  useEffect(() => {
    if (isSwitched) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [isSwitched, setTheme])

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isSwitched} onChange={checkboxHandler} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  )
}
export default Switch
