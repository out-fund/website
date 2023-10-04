import { Medium, Heading2 } from "@/components/atoms"

import classes from "./ClientsSay.module.scss"

export default function ClientsSay(props: { title: string; clients: any[] }) {
  return (
    <section>
      <Medium>
        <div className={classes.clientsSay}>
          <div className={classes.textWrapper}>
            <Heading2>{props.title}</Heading2>
          </div>

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
      </Medium>
    </section>
  )
}
