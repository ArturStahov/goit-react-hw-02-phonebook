import React, { Component } from 'react';
import uniqid from 'uniqid'
import SectionBlock from './components/Section/Section'
import PhoneForm from './components/PhoneForm/PhoneForm'
import ContactsList from './components/ContactList/ContactList'
import FilterContacts from './components/FilterContacts/FilterContacts'
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

export default class App extends Component {

    state = {
        contacts: [],
        nameFilter: ''
    }

    filterContactList = () => {
        return this.state.contacts.filter(item =>
            item.name.toLowerCase().includes(this.state.nameFilter.toLowerCase())
        )
    }

    addContact = (name, number) => {
        let isContactPresent = this.state.contacts.some(item => item.name.toLowerCase().includes(name.toLowerCase()))
        if (!isContactPresent) {
            this.isContactPres = false
            const contact = {
                name,
                number,
                id: uniqid(),
            }
            this.setState(prevState => {
                return {
                    contacts: [...prevState.contacts, contact]
                }
            })

        } else {
            error({
                title: "Hi!",
                text:
                    "This contact is present in phone-book!",
                delay: 2000,
            });

        }
    }

    deleteContact = (id) => {
        this.setState((prevState) => {
            return {
                contacts: prevState.contacts.filter(e => e.id !== id)
            }
        })
    }
    contactsFilterInput = (inputValue) => {
        this.setState({
            nameFilter: inputValue,
        })
    }

    render() {
        const { nameFilter } = this.state
        const visibleContacts = this.filterContactList();
        return (
            <>
                <SectionBlock title="Phone-book">
                    <PhoneForm onAddContact={this.addContact} />
                </SectionBlock>
                <SectionBlock title="Contacts">
                    <FilterContacts value={nameFilter} OnInputFilter={this.contactsFilterInput} />
                    <ContactsList items={visibleContacts} onDeleteContact={this.deleteContact} />
                </SectionBlock>
            </>
        )
    }
}