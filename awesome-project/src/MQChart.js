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

 
 data.push({name:utcDate,LPG: 20,CO: 20,Smoke: 20}) ;
 data.push({name:utcDate,LPG: 1,CO: 2,Smoke: 30}) ;
 data.push({name:utcDate,LPG: 20,CO: 20,Smoke: 20}) ;
 data.push({name:utcDate,LPG: 20,CO: 20,Smoke: 20}) ;

 
 
export default class MQChart extends React.Component {	
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
      var d=[{k:1}];
      d.push({k:2});
      d.push({k:99});
      var m=[{l:0}];
      m.push({k:2});

      function getTopN(arr, prop, n) {
        // clone before sorting, to preserve the original array
        var clone = arr.slice(0); 
    
        // sort descending
        clone.sort(function(x, y) {
            if (x[prop] == y[prop]) return 0;
            else if (parseInt(x[prop]) < parseInt(y[prop])) return 1;
            else return -1;
        });
    
        return clone.slice(0, n || 1);
    }
    var val=[getTopN(data,'LPG',1)];
    val.push(getTopN(data,'CO',1));
    val.push(getTopN(data,'Smoke',1));
    var fArray=[val[0][0].LPG];
    fArray.push(val[0][0].CO);
    fArray.push(val[0][0].Smoke);
    var maxValue=Math.max.apply(0,fArray);
    var YAxisToBe=0;
    for(var i=0;i<3;i++){
        if(fArray[i]===maxValue){
            YAxisToBe=i;
            break;
        }
    }
    console.log("largest",(val));
console.log("smokeeee", YAxisToBe);
var YAxisTick="";
if(YAxisToBe===0){
YAxisTick="LPG"
}
else if(YAxisToBe==1){
    YAxisTick="CO"
}
else if(YAxisToBe==2){
    YAxisTick="Smoke"
}
fArray=[];
val=[];


return (
          
            //<div className="w3-card-4 w3-white w3-round-large" style={{width:510 , height: 250, paddingTop:10}} >
            <ResponsiveContainer width={500} height={200}>
    <LineChart width={500} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} key={Math.random()}>
    <CartesianGrid  strokeDasharray="3 3" stroke="gray"  />
    <XAxis dataKey="name" tick={{fill:'black',fontSize:10}}/>
    
    <Brush dataKey='name' height={30} stroke="#8884d8"/>
    <YAxis dataKey={YAxisTick} tick={{fill:'black',fontSize:10}}/>
    <Tooltip wrapperStyle={{fontSize:10}} />
    <Legend wrapperStyle={{fontSize:16}}/>
    <Line type="monotone" dataKey="LPG"  isUpdateAnimationActive={true} stroke="#8884d8"/>
    <Line type="monotone" dataKey="CO"  isUpdateAnimationActive={true} stroke="#BA4A00"/>
    <Line type="monotone" dataKey="Smoke"  isUpdateAnimationActive={true} stroke="#2C3E50"/>
    
    

  </LineChart>
  </ResponsiveContainer>
  //<div className="w3-container w3-round w3-center w3-light-gray">
         
    //     <h6>{this.props.def}</h6>
 
      //      </div>
  //</div>
      );
    }
  }