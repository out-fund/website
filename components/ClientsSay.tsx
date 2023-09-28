export default function ClientsSay(props: { title: string; clients: any[] }) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>
        {props.clients.map((client) => (
          <div key={client.company}>
            <div>{client.company}</div>
            <div>{client.quote}</div>
            <div>{client.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
