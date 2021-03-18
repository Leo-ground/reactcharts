import React, { Component } from 'react'

class Option extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {value: '조회범위선택'};
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     alert('조회범위: ' + this.state.value);
    //     event.preventDefault();
    //   }  
    render() {
        return (
            <h1><a href="/" onClick={function(e){
                e.preventDefault();
                this.props.onSearch();
            }.bind(this)}>{this.props.searchYear}</a>
            </h1>

            // <form onSubmit={this.handleSubmit}>
                
            //     <label>
            //     조회 범위:
            //     <select value={this.state.value} onChange={this.handleChange}>
            //         <option value="조회범위선택">---범위선택---</option>
            //         <option value="하루단위">하루 범위 조회</option>
            //         <option value="한달단위">한달 범위 조회</option>
            //         <option value="1년단위">1년 범위 조회</option>
            //     </select>
            //     </label>
            //     <input type="submit" value="Submit" onClick={this.props.onSearch} />
            //  </form>


                    // <div >
                    //     <button onClick={this.props.onSearch} data-id='1'> 하루 범위 조회 </button>
                    //     <button onClick={this.props.onSearch} data-id='2'> 한달 범위 조회 </button>
                    //     <button onClick={this.props.onSearch} data-id='3'> 1년 범위 조회 </button>
                    //     <select >
                    //         <option value="">--조회 년도--</option>
                    //         <option value="2020">2020</option>
                    //         <option value="2021">2021</option>                    
                    //     </select>
                    // </div>
        )
    }
}



export default Option
