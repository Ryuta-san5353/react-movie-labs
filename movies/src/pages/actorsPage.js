import React from "react";
import {getPopularActors} from "../api/tmdb-api";
import PageTemplate from "../components/templateActorListPage";
import {useQuery} from "react-query";
import Spinner from "../components/spinner"

const ActorsPage=()=>{
    const {data,error,isLoading,isError}=useQuery("popularActors",getPopularActors)

    if(isLoading){
        return <Spinner/>
    }
    if(isError){
        return <h1>{error.message}</h1>
    }

    const actors=data.results;

    return (
        <PageTemplate
            title="Popular Actors"
            actors={actors}
            />
    )
}
export default ActorsPage;
