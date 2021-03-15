import React, { Component } from 'react';
import propTypes from 'prop-types'

class ServeItem extends Component {
    constructor(props){
        super(props)
        this.deleteItem=this.deleteItem.bind(this)
    }
    render() { 
        return ( 
            <li onClick={this.deleteItem}>{this.props.avname}为你服务：{this.props.content}</li>
         );
    }
    deleteItem(){
        console.log(this);
        this.props.deleteItem(this.props.index)
    }
}
ServeItem.propTypes = {
    content:propTypes.string,
    index:propTypes.number,
    deleteItem:propTypes.func,
    avname:propTypes.string.isRequired
}
ServeItem.defaultProps = {
    avname:'jony'
}
export default ServeItem;