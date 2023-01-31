//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/


function findWords(dog_names, dog_string){
    //Your code goes here
    //start at 0 and loop through as long as the length of i is less than the list
    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.includes(dog_names[i])) {
            console.log("Matched dog_name", dog_names[i])
        } else{
            console.log("No match", dog_names[i]);
        }
}
}

let dog_string = "Hello Peter, my name is Dog, and I have purple eyes!"
let dog_names = ["Peter","HAS","PuRple","dog"]
findWords(dog_names, dog_string)


//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


function replaceEvens(arr){
    //code goes here
    //loop through the array from the last value as long as i >= 0 and go down the list by one
    for (let i = arr.length-1; i >= 0; i--){
        //as long as the amount of letter in the array is even, splice it and replace with words:
        if (i%2 === 0){
            arr.splice(i, 1, "even index");
        }
    }
    return arr
   
}
arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
console.log(replaceEvens(arr))


