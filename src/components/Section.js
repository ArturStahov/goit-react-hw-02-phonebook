import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Section = styled.section`
padding:20px 0px 20px;
max-width:600px;
margin: 0 auto;
display:flex;
flex-wrap:wrap;
justify-content:center;
`
const Title = styled.h2`
width:100%;
text-align:center;
font-size:1rem;
color:green;
font-weight:600;
text-transform:uppercase;
margin-bottom:20px;
`

export default function SectionBlock({ title, children }) {
    return (
        <Section>
            <Title>{title}</Title>
            {children}
        </Section>
    )
}

SectionBlock.propTypes = {
    title: PropTypes.string,
};