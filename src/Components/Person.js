import React from 'react'
import * as css from './Person.css'

const Person = ({ person }) => {
  return <div css={css.wrapper}>
    <div>
      <img src={person.picture.file.url} />
    </div>
    <div>
      <h3>{person.name}</h3>
      <p>{person.text.text}</p>
      {person.quote && <p css={css.quote}>{person.quote}</p>}
      {/* <p>{JSON.stringify(person)}</p> */}
    </div>
  </div>
}

export default Person