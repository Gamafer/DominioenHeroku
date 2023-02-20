import getFirebase from "../firebase/firebaseconfiguration";

import { 
    addDoc,
    deleteDoc,
    getFirestore,
    collection, 
    getDoc, 
    getDocs, 
    doc,
    updateDoc,
    query,
    where
} from "firebase/firestore";
import { useState, useEffect } from "react";
import Card from "../components/Crad"
import EditForm from "../paginas/EditForm"

getFirebase();
const db = getFirestore();
const collectionRef = collection(db, 'Recipes')


function GetRecipes(){
    const [recipe, setRecipes] = useState([]);

    useEffect(() => {
        const GetAll = async () => {
            getDocs(collectionRef)
                .then((snapshot) => {
                    let recipes = [];
                    snapshot.docs.forEach((docu) => {
                        recipes.push({...docu.data(), id: docu.id});
                    })
                    console.log(recipes);
                    setRecipes(recipes);
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    
        GetAll();
    }, []);

    return (
    recipe.map((index, i)=>(
        <Card
          titulo = {index.titulo}
          duracion = {index.duracion}
          ingredientes = {index.ingredientes}
          procedimiento = {index.procedimiento}
          index = {i}
          cardId = {index.id}
          uid = {index.uid}
          >
        </Card>)));
}

function GetUserRecipes(props){
    const [recipe, setRecipes] = useState([]);

    useEffect(() => {
        const GetAll = async () => {
            const q = query(collectionRef, where("uid", "==", props.uid));
            getDocs(q)
                .then((snapshot) => {
                    let recipes = [];
                    snapshot.docs.forEach((docu) => {
                        recipes.push({...docu.data(), id: docu.id});
                    })
                    setRecipes(recipes);
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    
        GetAll();
    }, []);

    return (
    recipe.map((index, i) => (
        <Card
          titulo = {index.titulo}
          duracion = {index.duracion}
          ingredientes = {index.ingredientes}
          procedimiento = {index.procedimiento}
          index = {i}
          cardId = {index.id}
          uid = {index.uid}
          >
        </Card>)));
}

async function CreateRecipe(props) {
    await addDoc(collectionRef, {
        titulo:         props.titulo,
        ingredientes:   props.ingredientes,
        procedimiento:  props.procedimiento,
        duracion:       props.duracion,
        uid:            props.uid
       });
    return(<br/>);
}

function GetRecipe(props) {
    const recipeId = props.recipeId;
    const docRef = doc(db, 'Recipes', recipeId);
    getDoc(docRef)
    .then((snapshot) => {
        console.log(snapshot.data());
    })
    .catch(err => {
        console.log(err.message);
    });

    return(<br/>);
}


async function UpdateRecipe(props) {
    const recipeId = props.card;
    const docRef = doc(db, 'Recipes', recipeId);
    await updateDoc(docRef, {"duracion": props.duracion, "ingredientes": props.ingredientes, "procedimiento": props.procedimiento, "titulo": props.titulo})
    .then(() => {
        console.log("Record Updated");
    })

    return(0);
}


async function DeleteRecipe(props) {
    console.log("Recipe ID: ", props.rid);
    await deleteDoc(doc(db, 'Recipes', props.rid));
    return(<br/>);
}

export {CreateRecipe, DeleteRecipe, GetRecipes, GetUserRecipes, GetRecipe, UpdateRecipe};
