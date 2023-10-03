import styles from "./CheckList.module.scss"

const CheckList = ({ items }: { items: React.ReactNode[] }) => {
  return (
    <ul className={styles.checkList}>
      {items.map((item, index) => (
        <li key={index}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              fill="#00B67A"
              d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8ZM6.4 12l-4-4 1.128-1.128L6.4 9.736l6.072-6.072L13.6 4.8 6.4 12Z"
            />
          </svg>

          {item}
        </li>
      ))}
    </ul>
  )
}

export default CheckList
