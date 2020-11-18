import React, { Component } from 'react'
import styled from 'styled-components'


const Form = styled.form`
max-width:100%;
display:flex;
justify-content:center;
flex-wrap:wrap;
`
const FormLabel = styled.label`
width:85%;
margin-bottom:10px;
display:flex;
justify-content:space-around;
`
const Button = styled.button`
padding:5px 10px;
max-width:250px;
height:40px;
background-color:green;
border:none;
border-radius:0.5rem;
cursor:pointer;
`

export default class PhoneForm extends Component {

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
                    <input type='text' name='numberValue' onChange={this.handlerInput} value={this.state.numberValue} pattern="\+3\s?[\]{0,1}9[0-9]{2}[\]{0,1}\s?\d{3}{0,1}\d{2}{0,1}\d{2}"
                        placeholder="+3(___)___-__-__" minLength="13" maxLength='13' required />
                </FormLabel>
                <Button type="submit">Add Contact</Button>
            </Form>
        )
    }
}