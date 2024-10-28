import React from "react";
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {getActorImages} from "../../api/tmdb-api";
import {useQuery} from "react-query";
import Spinner from "../spinner";
