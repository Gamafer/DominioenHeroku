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
import { useState, useEffect } from "react";
import {GetRecipes, GetUserRecipes, CreateRecipe, DeleteRecipe} from "../backend/firebaseCRUD"

export default function DashBoard(params) {

  return (
    <Container maxWidth="lg" sx={{ mt: 15 }}>
      <Grid container spacing={3}>
        <GetRecipes/>

      </Grid>
    </Container>
  );
}
