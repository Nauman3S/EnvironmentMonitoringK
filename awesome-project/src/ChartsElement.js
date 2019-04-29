import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip , Legend, Brush, ResponsiveContainer} from 'recharts';
var dt = new Date();
var utcDate = dt.toUTCString();
console.log(utcDate);

//////realtime update enabled with https://github.com/recharts/recharts/issues/246#issuecomment-323412495
var data = [
  {
  
  },
  
];

 
 data.push({name:utcDate,Value: 20}) ;
 data.push({name:utcDate,Value: 25}) ;
 data.push({name:utcDate,Value: 34}) ;
 data.push({name:utcDate,Value: 10}) ;

 
 
export default class ChartElement extends React.Component {	
    //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
    constructor(props){
        super(props);
        
      //  data.push({name:utcDate,Value: this.props.val}) ;
        //console.log("chartData",data)
        
        this.render();
        
    }
    render() {
      //var m={name:utcDate,Value: this.props.val};
      //data.push(this.props.val[this.props.val.length -1]);
      data=[{}];
      data=this.props.val;

      console.log("chartData",data);
        return (
          
            //<div className="w3-card-4 w3-white w3-round-large" style={{width:510 , height: 250, paddingTop:10}} >
            <ResponsiveContainer width={500} height={200}>
    <LineChart width={500} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} key={Math.random()}>
    <CartesianGrid  strokeDasharray="3 3" stroke="gray"  />
    <XAxis dataKey="name" tick={{fill:'black',fontSize:10}}/>
    
    <Brush dataKey='name' height={30} stroke="#8884d8"/>
    <YAxis dataKey='Value' tick={{fill:'black',fontSize:10}}/>
    <Tooltip wrapperStyle={{fontSize:10}} />
    <Legend wrapperStyle={{fontSize:16}}/>
    <Line type="monotone" dataKey="Value"  isUpdateAnimationActive={true} stroke="#82ca9d"/>
    
    
    
    
  </LineChart>
  </ResponsiveContainer>
 // <div className="w3-container w3-round w3-center w3-light-gray">
         
   //      <h6>{this.props.def}</h6>
 
     //       </div>
  //</div>
      );
    }
  }