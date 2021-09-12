import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'



const Details = () => {
    return (
        <div>
            <CardHeader title="Income">
            <CardContent>
                <Typography variant="h5"> $50 </Typography>
                <Doughnut data="DATA"> </Doughnut>
            </CardContent> 
            </CardHeader>            
        </div>
    )
}

export default Details
