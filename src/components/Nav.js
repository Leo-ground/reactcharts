import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops';
class Nav extends Component {

    render() { 
        return (
            <Spring
                from={{ opacity:0, marginTop: -500}}
                to={{ opacity:1, marginTop:0}}
            >
                {props => (
                    <div style={props}>
                        <div style={navStyle}>
                            {/* <button style={btn} onClick={this.props.toggle}> Chart </button> */}
                            <button style={btn} onClick={this.props.toggleBar}> Bar </button>
                            <button style={btn} onClick={this.props.toggleLine}> Line </button>
                            <button style={btn} onClick={this.props.toggleDoughnut}> Doughnut </button>
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

// const optionStyle={
// }
export default Nav
