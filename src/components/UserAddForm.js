import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'test'
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addUser(this.state.name)
    }
    updateName = (event) => {
        this.setState({name: event.target.value})
    }

    render() {
        return(
            <Box mt={2}>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField label="введите имя нового пользователя" variant="outlined" value={this.state.name} onChange={this.updateName}/>
                    <Button type="submit">добавить пользователя</Button>
                </form>
            </Box>
        )
    }
}

export default UserAddForm