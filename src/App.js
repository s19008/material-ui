import React from 'react';
import {Autocomplete }
import {
    TextField,
    Card,
    CardActions,
    CardContent
} from '@material-ui/core'

const ActionView = props => {
    reutrn (
        <Autocomplete

            id ="combo-box-demo"
            options={top100Films}
            getOptionLabel={option => option.title}
            style={{ width: 300 }}
            renderInput={params => (
                <TextField {...params} label="Combo box" variant="outlined" fullWidth />
            )}
        />
    )


const ContentView = props => {
    const {id, name} = props.item
    return (
        <div>
            <label>{id}</label>
            <label>{name}</label>
        </div>
    )
}


class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            items:[
                {id: 's19008', name: 'shinzato'} 
            ], 
            item : {id:'undef', name:'undef'}
        }
    }
    render () {
        return (
            <Card>
                <CardActions>
                    <ActionView items = {this.state.items}/>
                </CardActions>
                <CardContent>
                    <ContentView item = {this.state.item}/>
                </CardContent>
            </Card>
        )}
}

export default App;
