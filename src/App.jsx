import React from 'react';
import { useState } from 'react';
import './App.css';
import Chart from 'react-apexcharts';

function App() {
  const [state] = useState({
    options: {
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
      }
    },
    series: [{
      name: 'Bill',
      data: [1200, 3000, 3500, 5000, 3500, 7500, 8500, 10091, 11125]
    }]
  });




  return (
    <div className="App">
      <h1>React Charts</h1>
      <div className="row">
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width={500}
          />

        </div>

        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width={500}
          />

        </div>

        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width={500}
          />

        </div>

        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="radar"
            width={500}
          />

        </div>

       

      </div>
    </div>
  );
}

export default App;
