import React from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import styles from './Cards.modules.css'


const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if (!confirmed) {
        return 'Loading'

    }
    return(
    <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <Grid item component ={Card}>
                <CardContent>
                    <Typography color="textSecondary">Infected </Typography>
                    <Typography variant="h5"> {confirmed.value} </Typography>
                    <Typography>Real Date</Typography>
                    <Typography>Number of Active Cases of Covid</Typography>
                </CardContent>

            </Grid>

            <Grid item component ={Card}>
                <CardContent>
                    <Typography color="textSecondary">Recovered </Typography>
                    <Typography> Real Data </Typography>
                    <Typography>Real Date</Typography>
                    <Typography>Number of Recovered Cases of Covid</Typography>
                </CardContent>

            </Grid>

            <Grid item component ={Card}>
                <CardContent>
                    <Typography color="textSecondary">Deaths </Typography>
                    <Typography> Real Data </Typography>
                    <Typography>Real Date</Typography>
                    <Typography>Number of Death Cases of Covid</Typography>
                </CardContent>

            </Grid>

        </Grid>


    </div>
    )
}

export default Cards