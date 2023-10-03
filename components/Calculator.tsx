import { Button } from "./atoms"

import classes from "./Calculator.module.scss"
import typography from "@/styles/Typography.module.scss"

export default function Calculator(props: {
  first: string
  second: string
  third: string
  note: string
  currency: string
  button: string
  creditNote: string
}) {
  return (
    <>
      <div className={classes.calculator}>
        <div className={classes.row}>
          <div className="textWrapper">
            <h4 className={typography.h4}>{props.first}</h4>
            <div className={classes.selectedAmmount}>£500 000</div>
          </div>

          <div className={classes.strip}>
            <input type="range" min="0" max="8" step="1" />
          </div>
        </div>
        <div className={classes.row}>
          <div className="textWrapper">
            <h4 className={typography.h4}>{props.second}</h4>
            <div className={classes.selectedAmmount}>6 months</div>
          </div>
          <div className={classes.strip}>
            <input type="range" min="0" max="9" step="1" />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.repayable}>
            <h4 className={typography.h4}>{props.third}</h4>
            <div
              className={`${classes.selectedAmmount} ${classes.selectedAmmount__blue}`}
            >
              £530,000
            </div>
          </div>

          <div className={`${typography.note} ${classes.creditNote}`}>
            {props.note}
          </div>
        </div>
      </div>
      <div className={classes.buttonWrapper}>
        <Button>
          {props.button}
          {` `}
          {props.currency}500,000
        </Button>
        <div className={typography.note}>{props.creditNote}</div>
      </div>
    </>
  )
}
