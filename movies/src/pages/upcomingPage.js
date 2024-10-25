import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddPlaylistIcon from "../components/cardIcons/addPlaylist";

const UpcomingPage =(props)=>{

    const {data,error,isLoading,isError}=useQuery("upcoming",getUpcomingMovies)

    if(isLoading){
        return <Spinner/>
    }

    if(isError){
        return <h1>{error.message}</h1>
    }

    const upcomingMovies=data.results;



    return(
        <PageTemplate
            title="Upcoming Movies"
            movies={upcomingMovies}
            action={(movie)=>{
                return <AddPlaylistIcon movie={movie}/>
            }}
        />
    )
}
export default UpcomingPage