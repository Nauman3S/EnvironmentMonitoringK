import React from 'react';

import {GaugeElement} from "./GaugeElement.js";
import ChartElement from './ChartsElement.js';

var TempGraph=[{name:0, Temperature:0}];
export default ({data,type}) => {
 // const dataList = data.map((d) => <li>{d}</li>)


  console.log(data);
  //console.log("props",props);
  console.log("props",type);
 if (type==="temp"){
   
     return (<GaugeElement val={parseInt( data[0])} def="Temperature Sensor"/> );
}
else if(type==="humid"){
    return (<GaugeElement val={parseInt( data[0])} def="Humidity Sensor"/> );
}
else if(type==="tempChart"){
  var dt = new Date();
  var utcDate = dt.toUTCString();
  console.log(utcDate);
  if(data[0]>=0){
  var k={name:utcDate,Temperature: parseInt(data[0])};
  TempGraph.push(k);
  console.log("tempGraph", TempGraph);
  return (<ChartElement val={TempGraph} def="Temperature Sensor"/> );
  }
  else{
    var TempGraphDef=[{name:0, Temperature:0}];
    return (<ChartElement val={TempGraphDef} def="Temperature Sensor"/> );
  }
}
else{
    return(<div>No Data</div>)
}
  return (
    <div>
       
    
     {/* <h3>Messages</h3>
      <ul>
        {dataList}
        
      </ul>

     */}
    </div>
  )

}
