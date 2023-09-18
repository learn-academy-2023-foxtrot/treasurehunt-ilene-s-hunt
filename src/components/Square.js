import React from "react"

const Square = ({board}) => {
  return (
    <>
      <div className="grid">
        {board.map((square, index) => {
          return(
            <div className="square" key={index}>
              {square}
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Square
