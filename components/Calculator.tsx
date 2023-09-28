export default function Calculator(props: {
  first: string
  second: string
  third: string
  note: string
  currency: string
}) {
  return (
    <div>
      <div>{props.first}</div>
      <div>{props.second}</div>
      <div>{props.third}</div>
      <div>{props.note}</div>
    </div>
  )
}
