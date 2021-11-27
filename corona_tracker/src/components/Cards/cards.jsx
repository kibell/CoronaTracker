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
import CountUp from 'react-countup';
import cx from 'classnames'


const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if (!confirmed) {
        return 'Loading'

    }
    return(
    <div className={styles.container}>
       
        <Grid container spacing={3} justify="center">
            <Grid item component ={Card} xs={12} md={3} className="card infected">
                <CardContent>
                    <Typography color="textSecondary">Infected </Typography>
                    <Typography variant="h5">
                        <CountUp
                        start = {0}
                        end={confirmed.value}
                        duration={2.5}
                        separator=","
                         /> 
                         
                         </Typography>
                    <Typography>Last Updated: {new Date (lastUpdate).toDateString()}</Typography>
                    <Typography>Number of Active Cases of Covid</Typography>
                </CardContent>


            </Grid>

            <Grid item component ={Card} xs={12} md={3} className= "card recovered">

                <CardContent>
                    <Typography color="textSecondary">Recovered </Typography>
                    <Typography> 
                        <CountUp
                        start = {0}
                        end={recovered.value}
                        duration={2.5}
                        separator=","
                         /> 
                     </Typography>
                     <Typography>Last Updated: {new Date (lastUpdate).toDateString()}</Typography>
                    <Typography>Number of Recovered Cases of Covid</Typography>
                </CardContent>

            </Grid>

            <Grid item component ={Card} xs={12} md={3} className="card deaths">

                <CardContent>
                    <Typography color="textSecondary">Deaths </Typography>
                    <Typography> <CountUp
                        start = {0}
                        end={deaths.value}
                        duration={2.5}
                        separator=","
                         />  </Typography>
                   <Typography>Last Updated: {new Date (lastUpdate).toDateString()}</Typography>
                    <Typography>Number of Death Cases of Covid</Typography>
                </CardContent>

            </Grid>

        </Grid>


    </div>
    )
}

export default Cards