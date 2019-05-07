import React,{Component} from 'react';

class List extends Component {
  constructor(props){
    super(props)
  }
  render(){
    var list = this.props.names;
    return (
      
      <div>
        <ul>
          {
              list.map((v,i)=>{
                return <li>{v}</li>
              })
          }
        </ul>
      </div>
      );
  }
}

export default List;
