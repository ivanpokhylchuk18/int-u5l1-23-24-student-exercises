// Scenario:
// You're building an application for a music shop. They want a feature that 
// recommends an song based on their current mood.

// 1. Create a variable named mood.
//  - Assign it a string value of "happy".
let mood = "happy";

// 2. Create a variable named recommendedSong. Do not assign a value.
let recommendedSong;

// 3. Implement the recommendation logic.
// - If the mood is equal to "happy", recommend "Here Comes the Sun by The Beatles".
if(mood === "happy") {
    recommendedSong = "Here Comes the Sun by The Beatles";
}
// - If the mood is equal to "sad", recommend "Someone Like You by Adele".
else if(mood === "sad") {
    recommendedSong = "Someone Like You by Adele";
}
// - Anything else, recommend "Break My Soul by Beyonce".
else{
    recommendedSong = "Break My Soul by Beyonce"
}

// 4. Console log the recommended song.
console.log(recommendedSong);