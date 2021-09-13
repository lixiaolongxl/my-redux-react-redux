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
            <div class="container mx-auto px-4 select-none">
                bumber {counter}
                <br />
                {/* <button onClick={this.ADD_NUMBER}>ADD_NUMBER</button>
                <button onClick={this.SUB_NUMBER}>SUB_NUMBER</button> */}
                <button class="group relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={INCREMENT}>INCREMENT</button>
                <button class="group relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={DECREMENT}>DECREMENT</button>
                <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div class="max-w-md w-full space-y-8">
                        <div>
                            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                Sign in to your account
                            </h2>
                            <p class="mt-2 text-center text-sm text-gray-600">
                                Or
                                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                    start your 14-day free trial
                                </a>
                            </p>
                        </div>
                        <form class="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" value="true" />
                            <div class="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label for="email-address" class="sr-only">Email address</label>
                                    <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                                </div>
                                <div>
                                    <label for="password" class="sr-only">Password</label>
                                    <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                                </div>
                            </div>

                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div class="text-sm">
                                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">

                                        <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
// const mapStateToProps = (status, ownProps) => {
//     // console.log(status,ownProps)
//     return status
// }
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