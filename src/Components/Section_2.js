import React, { useContext } from 'react';
import RequestedData from '../Context/RequestedData-context';
import Form from './Form';

const Section_2 = () => {

  const data  = useContext(RequestedData);

  return (
    <div className="section2">
      <div className="firstsubsectionof2">
      <div className="firstsubsectionof2__title">{data[0].sections[1].title}</div>
        <div className="firstsubsectionof2__subtitle">{data[0].sections[1].graphText}</div>
        {data[0].sections[1].stats.map(stat => (
          <div className="stats">
            <div>{stat.title}</div>
            <div className="statsnumbers">{stat.amount}</div>
          </div>
        ))}
      </div>
      <div className="secondsubsectionof2">
        <div className="secondsubsectionof2__subtitle" key={data[0].sections[1].id}>{data[0].sections[1].formText}</div>
        <div className="secondsubsectionof2__text">We work with ecosystem leaders, corporations and startups worldwide. How can we help you?</div>
        <Form />
      </div>
    </div>
  )
}
  
  export { Section_2 as default };