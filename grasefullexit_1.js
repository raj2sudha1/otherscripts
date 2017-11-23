process.title="HelloApp"
console.log("Hello World 5");

//TODO : test the below code for npm stop command
process.on("SIGINT", () => {console.log("SignOut from HelloApp");});

// Prevents the program from closing instantly
process.stdin.resume();

//setTimeout(() => { console.log($(date));/* Just to keep process running */ }, 1000000);
/*
process.on("SIGINT", () => {
  console.log("Caught SIGINT. Exiting in 5 seconds.");

  setTimeout(() => {
    console.log("This should appear in the Electron console but the process will be long killed.");
    process.exit(0);
  }, 5000);
});
*/
