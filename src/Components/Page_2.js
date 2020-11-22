import React from 'react';
import { useAsync } from 'react-async';

const loadData = async () => {
  const res = await fetch("https://voda-react-assessment.herokuapp.com/page");
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

const Page2 = () => {
  const { data, error, isLoading } = useAsync({ promiseFn: loadData });
  
  if (isLoading) return "";
  if (error) return `Something went wrong: ${error.message}`;
  if (data) return (
    <div className="container">
      <div className="descritpion" key={data[0].id} id={data[0].name}>{data[0].description} </div>
      <div className="box">
        <div className="box-for-page2">
          {data[0].tiles.map(tile => (
            <div className="box-each">
              <p>{tile.icon}</p>
              <p>{tile.title}</p>
              <p>{tile.description}</p>
              <a>{tile.link}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  return null;
};

export default Page2;