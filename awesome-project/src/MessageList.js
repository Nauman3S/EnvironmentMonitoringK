import React from 'react';

import {GaugeElement} from "./GaugeElement.js";
import ChartElement from './ChartsElement.js';
import MQChart from './MQChart.js';
//import { ReactComponent } from '*.svg';

var TempGraph=[{name:0, Value:0}];
var MQGraph=[{name:0,LPG:0,CO:0,Smoke:0}];
export default ({data,type}) => {
 // const dataList = data.map((d) => <li>{d}</li>)


  console.log("dataa",data);
  console.log("d0",data[0]);
  var k=data[0]
  var valuesArray=[];
  
 
  
  //console.log("props",props);
  console.log("props",type);
  
 if (type==="temp"){
   console.log("varray",valuesArray);
   try{
    var arr1=k.split(";");
    console.log(arr1);
    if (arr1[0]==="Sensor"){
      if (arr1[1]==="DHT22"){
       

        return (
        
        <GaugeElement val={parseInt( arr1[2])} def="Temperature Sensor"/> 
        
        );
      }
    }
  }
  catch(err){
    console.log("error while splitting data array");
  }
     
  
     
}
else if(type==="humid"){
  try{
    var arr2=data[0].split(";");
    console.log(arr2);
    if (arr2[0]==="Sensor"){
      if (arr2[1]==="DHT22"){
   
    return (<GaugeElement val={parseInt( arr2[3])} def="Humidity Sensor"/> );
      }
    }
  }
  catch(err){
    console.log("error while splitting data array");
  }
     

}

else if(type==="tempChart"){
  var dt = new Date();
  var utcDate = dt.toUTCString();
  console.log(utcDate);
  
  if(data[0]!=null){
    try{
      var arr3=data[0].split(";");
      console.log(arr3);
      if (arr3[0]==="Sensor"){
        if (arr3[1]==="DHT22"){
     
  var k={name:utcDate,Value: parseInt(arr3[2])};
  TempGraph.push(k);
  console.log("tempGraph", TempGraph);
  return (<ChartElement val={TempGraph} def="Temperature Sensor"/> );

        }
      }
    }
    catch(err){
    console.log("error while splitting data array");
  }
  }
  else{
    var TempGraphDef=[{name:0, Value:0}];
    return (<ChartElement val={TempGraphDef} def="Temperature Sensor"/> );
  }
}

 else if(type==="MQChart00"){
 /* var valArr=[{name:0, LPG:0, CO:102.3, Smoke:23.43}];
valArr.push({name:1, LPG:10, CO:22.3, Smoke:0.43});
valArr.push({name:2, LPG:50, CO:1.3, Smoke:98.43});
*/

var dt = new Date();
  var utcDate = dt.toUTCString();
  console.log(utcDate);
  
  if(data[0]!=null){
    try{
      var arr4=data[0].split(";");
      console.log(arr4);
      if (arr4[0]==="Sensor"){
        if (arr4[1]==="MQ2"){
     
  var k={name:utcDate,LPG: parseInt(arr4[2]),CO: parseInt(arr4[3]),Smoke: parseInt(arr4[4])};
  MQGraph.push(k);
  console.log("MQGraphGraph", MQGraph);
  return (<MQChart val={MQGraph} def="MQ2 Sensor"/> );

        }
      }
    }
    catch(err){
    console.log("error while splitting data array");
  }
  }
  else{
    var MQGraphDef=[{name:0, LPG:0, CO:0, Smoke:0}];
    return (<MQChart val={MQGraphDef} def="Temperature Sensor"/> );
  }


//return(<MQChart val={valArr} def="Gas Sensor"/>);
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
