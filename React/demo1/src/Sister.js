import React, { Component, Fragment } from "react";

class Sister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "jony",
      list: ['基础按摩','精油推背'],
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}></input>{" "}
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
          {
              this.state.list.map((item,index)=>{
                return (<li onClick={this.deleteItem.bind(this,index)} key={index+item}>{item}</li>)
              })
          }
        </ul>
      </Fragment>
    );
  }
  inputChange(e){
    console.log(e.target.value);
    console.log(this);
    this.setState({
        inputValue:e.target.value
    })
  }
  addList(){
    this.setState({
        list:[...this.state.list,this.state.inputValue],
        inputValue:''
    })
  }
  deleteItem(index){
      console.log(index);
      // 不要直接操作state数组，会出现很大的性能问题
      let list = this.state.list
      list.splice(index,1)
      console.log(list);
    this.setState({
        list:list,
    })
  }
}

export default Sister;
