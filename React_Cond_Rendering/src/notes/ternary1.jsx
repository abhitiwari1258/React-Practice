import React from 'react'

const conditional = () => {
    const option = 'f';
  return (
    <div>
      {
        option === 'a'
          ?
          <h1>Comp-A</h1>
          :
          (
            option === 'b'
              ?
              <h1>Comp-B</h1>
              :
              (
                option === 'c'
                  ?
                  <h1>Comp-C</h1>
                  :
                  <h1>Other Comp</h1>
                )
            )
        }
    </div>
  )
}

export default conditional
