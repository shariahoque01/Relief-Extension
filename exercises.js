
function getRandomExercise(arr){
    const randomIndex = Math.floor(Math.random()*arr.length);

    const exercise = arr[randomIndex];
    
    return exercise;
}

const exercise = ['pushups','curlups','pullups']; //Add more, or more comprehensive way to obtain exercises.

const result = getRandomExercise(exercise);
console.log(result);