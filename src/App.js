import React from 'react'
import UsersList from './components/UsersList'
import UserAddForm from "./components/UserAddForm";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [{
                    id: 1,
                    name: 'ser',
                },
                {
                    id: 2,
                    name: 'mar',
                },
                {
                    id: 3,
                    name: 'kar',
                }],
            btnTitle: 'Hello World'
        };
    }

    btnClicked = () => {
        this.setState({btnTitle: 'Goodbye World'})
    }
    addUser = (name) => {
        console.log('addUser', name)
        const newUser = {
            name,
            id: Date.now(),
        }
        this.setState(prevState => ({
            users: [...prevState.users, newUser]
        }))
    }

    render() {
        return(
            <Container maxWidth="sm">
                <Button variant="contained" color="primary" onClick={this.btnClicked}>
                    {this.state.btnTitle}
                </Button>
                <UsersList users={this.state.users}/>
                <UserAddForm addUser={this.addUser}/>
            </Container>
        )
    }
}

export default  App