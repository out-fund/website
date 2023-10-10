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
            <h4 className="m-0 text-[24px] font-semibold leading-6">
              {props.first}
            </h4>
            <div className="mt-[12px] text-[24px] font-semibold leading-6 text-sky ">
              £500 000
            </div>
          </div>

          <div className={classes.strip}>
            <input type="range" min="0" max="8" step="1" />
          </div>
        </div>
        <div className={classes.row}>
          <div className="textWrapper">
            <h4 className="m-0 text-[24px] font-semibold leading-6">
              {props.second}
            </h4>
            <div className="mt-[12px] text-[24px] font-semibold leading-6 text-sky ">
              6 months
            </div>
          </div>
          <div className={classes.strip}>
            <input type="range" min="0" max="9" step="1" />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.repayable}>
            <h4 className="m-0 text-[24px] font-semibold leading-6">
              {props.third}
            </h4>
            <div className="text-[24px] font-semibold leading-6 text-cobalt">
              £530,000
            </div>
          </div>

          <div
            className={`text-xs tracking-tight opacity-70 ${classes.creditNote}`}
          >
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
        <div className="text-xs tracking-tight opacity-70">
          {props.creditNote}
        </div>
      </div>
    </>
  )
}
