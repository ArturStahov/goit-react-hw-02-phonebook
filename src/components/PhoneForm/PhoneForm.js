import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Form, FormLabel, Button } from './StyledComponents'


export default class PhoneForm extends Component {

    static propTypes = {
        onAddContact: PropTypes.func.isRequired,
    };

    state = {
        nameValue: '',
        numberValue: ''
    }

    handlerInput = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value,
        })
    }

    handlerFormSubmit = e => {
        const { nameValue, numberValue } = this.state
        e.preventDefault();
        this.props.onAddContact(nameValue, numberValue)
        this.setState({
            nameValue: '',
            numberValue: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.handlerFormSubmit}>
                <FormLabel>
                    Name:
                    <input type='text' name='nameValue' onChange={this.handlerInput} value={this.state.nameValue} required />
                </FormLabel>
                <FormLabel>
                    Phone:
                    <input type='text' name='numberValue' onChange={this.handlerInput} value={this.state.numberValue}
                        placeholder="+3(___)___-__-__" minLength="13" maxLength='13' required />
                </FormLabel>
                <Button type="submit">Add Contact</Button>
            </Form>
        )
    }
}