import styles from './ThemeSwitch.module.css'
import SvgComponent from '../../../components/SvgComponent'
import Switch from './Switch'

const ThemeSwitch = () => {
  return (
    <div className={styles.container}>
      <SvgComponent
        viewBox="0 0 24 24"
        draw="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        stroke="currentColor"
        strokeWidth={2}
        width={24}
        height={24}
      />
      <Switch />
      <SvgComponent
        viewBox="0 0 24 24"
        draw="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        stroke="currentColor"
        strokeWidth={2}
        width={24}
        height={24}
      />
    </div>
  )
}
export default ThemeSwitch
