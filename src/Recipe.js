import React from 'react'

const Recipe = ({title,calories,image,ingredients}) => {
  return (
    <div className='Recipe'>
      <h2>{title}</h2>
      <p>Calories:- {calories}</p>
      <img src={image} alt=""/>
    <ol>{ingredients.map(ingredients =>(
        <li>
            {ingredients.text}
        </li>

    ))}</ol>
    </div>
  )
}

export default Recipe
