import React from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import img from '../../images/film-poster-placeholder.png'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Spinner from "../spinner";
import { Typography } from "@mui/material";

const MovieCastList=(movie)=>{

    const {data,error,isLoading,isError}=useQuery(
        ["movieCredits",{id:movie.id}],
        getMovieCredits
    );

    if(isLoading){
        return <Spinner/>
    }

    if(isError){
        return <h1>{error.message}</h1>
    }
    
    const cast=data.cast.slice(0,10);

    return(
        <div>
            <Typography variant="h5">
                Cast
            </Typography>
            <Grid container>
                {cast.map((actor)=>(
                    <Grid key={actor.id}>
                        <Link to={`/actors/${actor.id}`}>

                        <Card
                            sx={{
                                height:"100%",
                                display:"flex",
                                flexDirectoin:"column",
                            }}
                            >
                            <CardMedia
                                component="img"
                                height="300"
                                image={
                                    actor.profile_path
                                        ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                                        :img
                                }
                                alt={actor.name}/>
                            <CardContent>
                                <Typography variant="h6">
                                    {`${actor.name} as ${actor.character}`}
                                </Typography>
                            </CardContent>

                        </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>

    );
};


export default MovieCastList