import React, { Component } from 'react';
import { bindActionCreators } from './redux'

const MyContext = React.createContext(null);
/**
 * @Description Provider 传store
 * @Author Aaron
 * @Date 2021/09/11 20:29:21
 * @param { Boolean }
 * @return { Boolean }
 */
export class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <MyContext.Provider value={this.props.store}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

/**
 * @Description connect
 * @Author Aaron
 * @Date 2021/09/11 20:28:53
 * @param { mapStateToProps ,mapDispatchToProps}
 * @return { WrapperComponent }
 */
export const connect = (mapStateToProps, mapDispatchToProps) => (WrapperComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                props: {}
            }
        }
        static contextType = MyContext;
        componentDidMount() {
            console.log(this.context);
            const { subscribe } = this.context
            this.update()
            subscribe(() => {
                this.update()
            })

        }
        update() {
            const { getState, dispatch } = this.context
            let stateToProps = mapStateToProps(getState())
            let dispatchToProps = null;

            switch (typeof mapDispatchToProps) {
                case 'function':
                    dispatchToProps = mapDispatchToProps(dispatch);
                    break;
                case 'object':
                    dispatchToProps = bindActionCreators(mapDispatchToProps, dispatch);
                    break;
                default:
                    dispatchToProps = { dispatch }
                    break;
            }

            this.setState({
                props: { ...stateToProps, ...dispatchToProps }
            })
        }
        render() {
            return (
                // <MyContext.Consumer>
                //     {theme => <WrapperComponent {...props} theme={theme} />}
                // </MyContext.Consumer>
                <WrapperComponent {...this.state.props} />
            );
        }
    }
}