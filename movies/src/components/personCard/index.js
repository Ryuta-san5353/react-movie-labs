import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import {Link} from "react-router-dom";
import img from '../../images/actor-placeholder.png'

const ActorCard = ({actor,action})=>{
    return (
        <Card>
            <CardHeader>
                title={
                    <Typography variant="h5" component="p">
                        {actor.name}
                    </Typography>
                }
            </CardHeader>
            <CardMedia>
                sx={{height:500}}
                image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
            </CardMedia>
            <CardContent>
                <Grid container>
                    <Grid size={{xs:6}}>
                        <Typography variant="h6" component="p"> 
                            Born on : {actor.birthday}
                        </Typography>
                    </Grid> 
                    <Grid size={{xs:6}}>
                        <Typography variant="h6" component="p">
                            Known for :{actor.known_for_department}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                {action(actor)}
                <Link to={`/actors/${actor.id}`}>
                    <Button variant="outlined" size="medium" color="primary">
                        More Info ...
                    </Button>
                
                </Link>
            </CardActions>
        </Card>
    )
}

export default ActorCard;