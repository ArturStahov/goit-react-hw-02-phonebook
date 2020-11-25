import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const TaskList = styled.ul`
max-width:700px;
margin:0 auto;
`
const TaskItem = styled.li`
padding:10px 10px 10px 10px;
width:100%;
display:flex;
justify-content:space-between;
background-color:grey;
border:2px solid black;
border-radius:0.5rem;
margin-bottom:10px;
box-shadow: 10px 5px 5px grey;
`
const TaskItemElements = styled.p`

&:not(:last-child){
    margin-right:10px;
}
`
const Button = styled.button`
padding:5px 10px;
max-width:200px;
height:30px;
background-color:goldenrod;
border:none;
border-radius:0.5rem;
font-size:0.8rem;
color:#fff;
text-transform:uppercase;
cursor:pointer;
`

export default function ContactList({ items, onDeleteContact }) {
    return (

        <TaskList>
            {items.map(i => (
                <TaskItem key={i.id}>
                    <TaskItemElements>{i.name} :</TaskItemElements>
                    <TaskItemElements>{i.number}</TaskItemElements>
                    <Button type="button" onClick={() => onDeleteContact(i.id)}>Delete</Button>
                </TaskItem>
            ))}
        </TaskList>
    )
}

ContactList.propTypes = {
    items: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func
};