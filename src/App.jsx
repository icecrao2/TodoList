import './App.css'
import styles from './test.module.scss'

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <span className={styles.test}>test</span>
    </div>
  )
}
