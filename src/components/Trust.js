import React from "react"
import styled from "styled-components"
import SectionContainer from "components/SectionContainer"

const StyledStats = styled(SectionContainer)`
  background-color: #fff;
  margin: 0 16px;
  border-radius: 10px;
  padding-top: 32px;
  padding-bottom: 32px;
  margin-top: 80px;
  .gird {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .icon {
      width: 48px;
      height: 48px;
    }
    p {
      margin: 16px 0 40px;
      line-height: 1.5;
    }
  }
  .statement {
    margin-top: 40px;
  }
`

const Trust = ({ data }) => {
  console.log("test", data)
  return (
    <StyledStats
      className="trust"
      title={data.title}
      description={data.description}
    >
      {/* <h3>{data.title}</h3>
      <p>{data.description}</p> */}
      <ul className="gird">
        {data.blocks.map((item) => (
          <li key={item.text}>
            <div
              className="icon"
              role="img"
              dangerouslySetInnerHTML={{ __html: `${item.icon}` }}
            />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
      <p className="statement">{data.statement}</p>
    </StyledStats>
  )
}

export default Trust
