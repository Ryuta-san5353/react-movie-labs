import React from "react";
import { useQuery } from "react-query";
import { getPopularMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage"
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites"
import AddPlaylistIcon from "../components/cardIcons/addPlaylist";

const PopularPage=() => {
    const {data,error,isLoading,isError} = useQuery(
        "popular",getPopularMovies
    );

    if(isLoading){
        return <Spinner />
    }
    if (isError){
        return <h1>{error.message}</h1>
    }
    const popularMovies=data.results;


    return(
        <PageTemplate
            title="Popular Movies"
            movies={popularMovies}
            action={(movie)=>{
                return (
                <>
                    <AddToFavoritesIcon movie={movie}/>
                    <AddPlaylistIcon movie={movie}/>

                </>)
            }}
        />
    )

}
export default PopularPage;