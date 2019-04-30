import React from 'react';


import DustChart from './DustChart.js';
//import { ReactComponent } from '*.svg';


var DustGraph=[{name:0,LPG:0,CO:0,Smoke:0}];
export default ({data,type}) => {
 // const dataList = data.map((d) => <li>{d}</li>)


  console.log("dataa",data);
  console.log("d0",data[0]);
  var k=data[0]
  var valuesArray=[];
  
 
  
  //console.log("props",props);
  console.log("props",type);

  if(type==="MQChart"){
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
        if (arr4[1]==="Dust"){
     
  var k={name:utcDate,Dust: parseInt(arr4[2])};
  DustGraph.push(k);
  console.log("DustGraph", DustGraph);
  return (<DustChart val={DustGraph} def="Dust Sensor"/> );

        }
      }
    }
    catch(err){
    console.log("error while splitting data array");
  }
  }
  else{
    var DustGraphDef=[{name:0, Dust:0}];
    return (<DustChart val={DustGraphDef} def="Dust Sensor"/> );
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
