import React,{Component} from 'react';
import List from './list'
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props){
		super(props)
		this.state={
			data:['zhang san','li si','wang wu','zhao liu']
		}
	}
	hanleChange(e){
		var val = e.target.value;
		var newData = this.state.data.filter((v,i)=>{
			return v.toLowerCase().indexOf(val) != -1;
		})
		this.setState({
			data:newData
		})
	}
  render(){
	return (
		<div className="App">
		  <input type="text" onChange={this.hanleChange.bind(this)}/>
		  <List names={this.state.data}/>
		</div>
	 );
  }

}

export default App;
