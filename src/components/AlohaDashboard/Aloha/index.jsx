import { Component } from 'react'

class Aloha extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            isGreeting: true,
        }
    }
    handlerAloha = () => {
        const { isGreeting } = this.state
        this.setState({ isGreeting: !isGreeting })
    }

    delete = () => {
        const { userId, deleteUser } = this.props;
        deleteUser(userId)
    }

    render() {
        const { name } = this.props
        const { isGreeting } = this.state
        return (
            <>
                <h1>{isGreeting ? 'Hello' : 'Bye'} {name}</h1>
                <button onClick={this.handlerAloha}>switch</button>
                <button onClick={this.delete}>delete</button>
            </>
        )
    }
}
export default Aloha