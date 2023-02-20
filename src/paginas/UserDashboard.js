import * as React from "react";
import Container from "@mui/material/Container";

import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../components/Chart";
import Orders from "../components/Orders";
import Deposits from "../components/Deposits";
import { Link } from "react-router-dom";
import Card from "../components/Crad"
import { getAuth } from "firebase/auth";
import {GetUserRecipes, CreateRecipe, DeleteRecipe} from "../backend/firebaseCRUD"

export default function UserDashboard(params) {

  let auth = getAuth();
  let myUid = auth.currentUser.uid;
  return (
    <Container maxWidth="lg" sx={{ mt: 15 }}>
      <Grid container spacing={3}>
        <GetUserRecipes uid={myUid}/>

      </Grid>
    </Container>
  );
}
