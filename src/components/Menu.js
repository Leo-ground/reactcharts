import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops';
import Option from "./Option";

class Menu extends Component {

    render() {
        return (
            <Spring
                from={{ opacity:0, marginLeft: -500}}
                to={{ opacity:1, marginTop:0}}
            >
                {props => (
                    <div style={props}>
                        <div style={navStyle}>
                            <button style={btn} onClick={this.props.toggle}> Chart </button>
                            <div sytle={optionStyle}>
                                <Option/>
                            </div>
                        </div>
                    </div>
                )}
            </Spring>
               
        )
    }
}

const navStyle ={
    background: 'skyblue',
    color: 'white',
    padding: '1.0rem',
    display:'flex'
}

const btn ={
    background: '#333',
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin: '1px'
}

const optionStyle={
}
export default Menu
