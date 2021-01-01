import React from 'react'
import * as css from './Person.css'

const Person = ({ person }) => {
  console.log(person)
  return <div css={css.wrapper}>
    <div>
      <div>
        <picture>
          <img
            src={person.picture.file.url}
            alt={person.picture.description}
          />
        </picture>
      </div>
      <div className='text'>
        <h4>{person.name}</h4>
        <p>{person.text.text}</p>
      </div>
    </div>
    {person.quote &&
      <div>
        <p css={css.quote}>{person.quote}</p>
      </div>
    }
  </div>
}

export default Person