import React from "react";
import UseFetch from "./UseFetch";
import "./FetchData.css";
import fruitData from "./Fruit.json";

const FetchData = () => {
  //You can fetch data using custom hook (UseFetch) or json file (Fruit.json)
  // const [data] = UseFetch("https://api.npoint.io/9045c260b1565daa9e15");
  const data = fruitData;
  console.log(data);
  return (
    <>
      <h1 className="usefetch_heading">Use Fetch Custom Hook</h1>
      <ul className="list_data_main">
        {data &&
          data.map((e, index) => (
            <li key={index} className="list_data">
              <h3>{e.name}</h3>
              <p>
                <strong>Importance: </strong>
                {e.importance}
              </p>
              <p>
                <strong>Benefits: </strong>
                {e.benefits}
              </p>
              <p>
                <strong>Time: </strong>
                {e.best_time_to_intake}
              </p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default FetchData;
