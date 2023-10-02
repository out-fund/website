import styles from "./Heading2.module.scss"

const Heading2 = ({ children }: { children: React.ReactNode }) => {
  return <h1 className={styles.heading2}>{children}</h1>
}

export default Heading2
