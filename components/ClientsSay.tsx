import Image from "next/image"

import { Medium, Heading2 } from "@/components/atoms"

import classes from "./ClientsSay.module.scss"
import utils from "@/styles/Utils.module.scss"

export default function ClientsSay(props: { title: string; clients: any[] }) {
  const imageSrc = (name: string) => {
    return `/images/clientsSay/${name.toLowerCase().replace(" ", "-")}.png`
  }
  const logoSrc = (name: string) => {
    return `/images/clientsSay/${name.toLowerCase().replace(" ", "-")}-logo.png`
  }
  return (
    <section>
      <Medium>
        <div className={classes.clientsSay}>
          <div className={classes.textWrapper}>
            <Heading2>{props.title}</Heading2>
          </div>

          <div className={classes.grid}>
            {props.clients.map((client, index) => (
              <div key={index} className={classes.card}>
                <div className={classes.clientLogo}>
                  <a href={client.link}>
                    <Image
                      src={logoSrc(client.company)}
                      width={160}
                      height={40}
                      priority={false}
                      placeholder="empty"
                      alt={`${client.company} logo`}
                      style={{ width: "auto", height: "40px" }}
                    />
                    <div className={utils.visuallyHidden}>{client.company}</div>
                  </a>
                </div>
                <p className={classes.quote}>{client.quote}</p>
                <div className={classes.prifileWrapper}>
                  <Image
                    src={imageSrc(client.name)}
                    width={40}
                    height={40}
                    priority={false}
                    placeholder="empty"
                    alt={`Picture of ${client.name}`}
                  />
                  <div>{client.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Medium>
    </section>
  )
}
