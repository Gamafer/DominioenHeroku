import * as React from "react";
import Container from "@mui/material/Container";

import Button from '@mui/material/Button';
import {CreateRecipe} from "../backend/firebaseCRUD"
import { getAuth} from "firebase/auth";

export default function CreateForm() {
  let auth = getAuth();
  let myUid = auth.currentUser.uid;

  return (
    <Container maxWidth="lg" sx={{ mt: 15 }}>
    <h1>Create a Recipe</h1>
        <form class='add'>
            <label for="titulo">Titulo: </label>  
            <input type="text" name="Titulo" id="Titulo" required></input>
            <br/>
            <br/>

            <label for="ingredientes">Ingredientes: </label>  
            <input type="text" name="Ingredientes" id="Ingredientes" required></input>
            <br/>
            <br/>

            <label for="procedimiento">Procedimiento: </label>  
            <input type="text" name="Procedimiento" id="Procedimiento" required></input>
            <br/>
            <br/>

            <label for="duracion">Duracion: </label>  
            <input type="text" name="Duracion" id="Duracion" required></input>
            <br/>
            <br/>

            <Button color="primary" onClick={() => { 
                CreateRecipe({
                  uid: myUid,
                    titulo:document.getElementById("Titulo").value,
                    ingredientes:document.getElementById("Ingredientes").value,
                    procedimiento:document.getElementById("Procedimiento").value,
                    duracion:document.getElementById("Duracion").value
                }).then(()=>{location.assign("/")}); 
                console.log('POST successful.'); }}>
            AGREGAR
            </Button>
        </form>
    </Container>
  );
}
