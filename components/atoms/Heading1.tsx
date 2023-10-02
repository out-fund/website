import styles from "./Heading1.module.scss"

const Heading1 = ({ children }: { children: React.ReactNode }) => {
  return <h1 className={styles.heading1}>{children}</h1>
}

export default Heading1
