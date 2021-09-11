import React, { Component } from 'react';
import { connect } from '../reactDedux'
// impot { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { bindActionCreators } from '../redux'
import { incAction, decAction } from '../store/actionCreators'
// import store from '../store';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        // store.subscribe(() => {
        //     this.forceUpdate()
        // })
    }
    ADD_NUMBER = () => {
        this.props.dispatch({ type: 'ADD_NUMBER', num: 2 })
    }
    SUB_NUMBER = () => {
        this.props.dispatch({ type: 'SUB_NUMBER', num: 2 })
    }
    INCREMENT = () => {
        this.props.dispatch({ type: 'INCREMENT' })
        // store.dispatch({ type: 'INCREMENT' });
        // store.dispatch((dispatch)=>{
        //     setTimeout(()=>{
        //     },1000)
        // })
    }
    DECREMENT = () => {
        this.props.dispatch({ type: 'DECREMENT' })
        // store.dispatch({ type: 'DECREMENT' })
    }
    render() {
        console.log(this.props);

        const { counter, INCREMENT, DECREMENT } = this.props
        return (
            <div>
                about {counter}
                <br />
                {/* <button onClick={this.ADD_NUMBER}>ADD_NUMBER</button>
                <button onClick={this.SUB_NUMBER}>SUB_NUMBER</button> */}
                <button onClick={INCREMENT}>INCREMENT</button>
                <button onClick={DECREMENT}>DECREMENT</button>
            </div>
        );
    }
}
const mapStateToProps = (status, ownProps) => {
    // console.log(status,ownProps)
    return status
}
// 方式一
// const mapDispatchToProps = (dispatch) => {
//     return {
//         INCREMENT:()=>dispatch({type: 'INCREMENT'}),
//         DECREMENT:()=>dispatch({type: 'DECREMENT'})
//     }
// }
// 方式二
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         INCREMENT:()=>({type: 'INCREMENT'}),
//         DECREMENT:()=>({type: 'DECREMENT'})
//     },dispatch)
// }
// console.log(mapDispatchToProps);

// 方式三
const mapDispatchToProps = {
    INCREMENT: () => ({ type: 'INCREMENT' }),
    DECREMENT: () => ({ type: 'DECREMENT' })
}

// export default connect((status) => status, { INCREMENT: incAction, DECREMENT: decAction })(About);
export default connect((status) => status, mapDispatchToProps)(About);