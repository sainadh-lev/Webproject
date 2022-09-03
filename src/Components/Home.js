import { Container } from '@mui/system'
import React from 'react'
import { Button } from '@mui/material'


const Home = () => {
    return (
        <Container sx={{textAlign: 'left',fontSize: '150%'}}>
            <h1>Budget Manager</h1>
            <p>Tracking and managing finances and expenses with a budget manager.</p>
            <Button variant="outlined">Learn More</Button>
        </Container>
    )
}

export default Home