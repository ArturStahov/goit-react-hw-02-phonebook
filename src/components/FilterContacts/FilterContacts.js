import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const FilterBlock = styled.div`
width:100%;
padding-bottom:20px;
`
const Label = styled.label`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:center;
`
const Title = styled.p`
width:100%;
text-align:center;
margin-bottom:5px;
`
const Input = styled.input`
width:50%;
`

export default function FilterContacts({ value, OnInputFilter }) {
    return (
        <FilterBlock>
            <Label>
                <Title>Find Contacts by name</Title>
                <Input type="text" value={value} onChange={event => OnInputFilter(event.target.value)} />
            </Label>
        </FilterBlock>
    )
}


FilterContacts.propTypes = {
    OnInputFilter: PropTypes.func,
    value: PropTypes.string
};