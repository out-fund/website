import styles from "./Wide.module.scss"

const Wide = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.wide}>{children}</div>
}

export default Wide
