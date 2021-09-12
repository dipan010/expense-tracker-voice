import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'

const Main = () => {
    return (
        <Card className={mergeClasses.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            
        </Card>
    )
}

export default Main
