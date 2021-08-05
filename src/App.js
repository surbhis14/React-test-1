import React from "react";
import "./App.css"

class App extends React.Component{

  state={
    calc:"",
    result: "",
    ops : ['/', '*', '+', '-', '.'],
    
  }


  

  updateCalc = (value)=>{

    if(
     this.state.ops.includes(value) && this.state.calc === '' || 
     this.state.ops.includes(value) && this.state.ops.includes(this.state.calc.slice(-1))
     )

     {
       return;
     }

    this.setState({calc: this.state.calc+value});


    if(!this.state.ops.includes(value)){
      this.setState({result : eval(this.state.calc+value).toString()});
    }

  }

  createDigits=()=>{
    let digits=[];

    for(let i =1  ; i<10 ; i++){
      digits.push(

        <button
        onClick={() => this.updateCalc(i.toString())} 
        key={i}>
        {i}</button>
      )
    }

    return digits;
  }


  deleteBtn=()=>{

    if(this.state.calc==""){
      return;
      
    }

    let value = this.state.calc.slice(0,-1);
    this.setState({calc: value});



  }



  calculate = () =>{

    this.setState({calc : eval(this.state.calc).toString()});

  }

  render=()=>{


    return(

      <div className="App">
         <div className = "calculator">
         <div className = "display">
           {this.state.result ? <span>({this.state.result})</span> : ''}
           {this.state.calc || "0"}

           </div>

           <div className="operators">
             <button onClick={() => this.updateCalc('/')}>/</button>
             <button onClick={() => this.updateCalc('*')}>*</button>
             <button onClick={() => this.updateCalc('+')}>+</button>
             <button onClick={() => this.updateCalc('-')}>-</button>


             <button onClick={this.deleteBtn}>DEL</button>
           </div>

           <div className="digits">
             {this.createDigits()}
           <button onClick={() => this.updateCalc('0')}>0</button>
           <button onClick={() => this.updateCalc('.')}>.</button>
           <button onClick={this.calculate}>=</button>
           </div>


         </div>
        </div>
    );
  };

}

export default App;
