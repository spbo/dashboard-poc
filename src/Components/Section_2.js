import React, { useContext } from 'react';
import RequestedData from '../Context/RequestedData-context';
import Form from './Form';

// Render the Section 2 Component
const Section_2 = () => {

  const data = useContext(RequestedData);

  return (
    <div className="section2">
      <div className="section2-services">
        <div className="section2-services__title">{data[0].sections[1].title}</div>
        <div className="section2-services__subtitle">{data[0].sections[1].graphText}</div>
        {data[0].sections[1].stats.map(stat => (
          <div className="section2-services__statistics">
          <div>{`>${stat.title}`}</div>
            <div>{`${stat.amount*0.1}%`}</div>
          </div>
        ))}
      </div>
      <div className="section2-form">
        <div className="section2-form__subtitle" key={data[0].sections[1].id}>{data[0].sections[1].formText}</div>
        <div className="section2-form__text">We work with ecosystem leaders, corporations and startups worldwide. How can we help you?</div>
        <Form />
      </div>
    </div>
  )
};
  
export { Section_2 as default };