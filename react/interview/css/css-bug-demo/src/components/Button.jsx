// 工程化
// import './button.css'
import styles from './button.module.css'
console.log(styles);
const Button = () => {
    return <button className={styles.button}>Button</button>
}
export default Button