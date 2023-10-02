import styles from "./Heading3.module.scss"

const Heading3 = ({ children }: { children: React.ReactNode }) => {
  return <h1 className={styles.heading3}>{children}</h1>
}

export default Heading3
