import { Container } from '@mui/system'
import React from 'react'
import { Button } from '@mui/material'

const link = 'https://blog.spendesk.com/en/budget-manager#:~:text=Simply%20put%2C%20budget%20managers%20are,department%20heads%20and%20other%20executives.'
const Home = () => {
    return (
        <Container sx={{textAlign: 'left',fontSize: '150%',margin: 'auto',justify: 'center'}}>
            <h1>Budget Manager</h1>
            <p>Tracking and managing finances and expenses with a budget manager.</p>
            <Button variant="outlined" href={link}>Learn More</Button>
        </Container>
    )
}

export default Home