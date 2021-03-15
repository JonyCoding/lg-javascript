import React, { Component, Fragment } from "react";
import ServeItem from './ServeItem'
import './Sister.css'

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
      // 注释
      <Fragment>
        {/* 注释 */}
        <div>
          <label htmlFor="new-input">增加服务：</label>
            <input 
              id="new-input" 
              className="addServe" 
              value={this.state.inputValue} 
              onChange={this.inputChange.bind(this)}
              ref={(input)=>{
                this.input = input
              }}
            >
            </input>{" "}
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={ul=>this.ul = ul}>
          {
              this.state.list.map((item,index)=>{
                return (
                  <ServeItem key={index+item} index={index} content={item} list={this.state.list} deleteItem={this.deleteItem.bind(this)}></ServeItem>
                )
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
        inputValue:this.input.value
    })
  }
  addList(){
    // 异步方法
    this.setState({
        list:[...this.state.list,this.state.inputValue],
        inputValue:''
    },()=>{
      // 状态更新后的回调函数
      console.log(this.ul.querySelectorAll('li').length);
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
