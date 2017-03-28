import React from 'react';


export default ({description, surveyDate}) =>{
  return (
    <div className="mdc-card">
      <section className="mdc-card__primary">
        <h1 className="mdc-card__title mdc-card__title--large">{description}</h1>
        <h2 className="mdc-card__subtitle" >{surveyDate}</h2>
      </section>
    </div>
  )
}
