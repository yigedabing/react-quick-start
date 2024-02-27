import { Button } from 'antd-mobile'
import styles from './login.module.scss'

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <Button color="primary" block shape="rounder">
        Login
      </Button>
    </div>
  )
}
