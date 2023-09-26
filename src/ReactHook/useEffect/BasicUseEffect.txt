import {useEffect} from 'react'

//Runs afer every render
useEffect(() => {
    //Side-effect
});

//Runs once afer
//Mounting(Initial render)
useEffect(() => {
    //Side-effect
},[]);

//Runs only after
//State changes
useEffect(() => {
    //Side-effect
},[state]);

//Runs only after
//Props changes
useEffect(() => {
    //Side-effect
},[props]);

//Runs only after
//Props and/or state changes
useEffect(() => {
    //Side-effect
},[props, state]);

useEffect(() => {
    //Side-effect
    return () => {
        //Side-effects Cleanup
    };
},[props, state]);