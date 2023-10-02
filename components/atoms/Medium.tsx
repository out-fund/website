import styles from "./Medium.module.scss"

const Medium = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.medium}>{children}</div>
}

export default Medium
