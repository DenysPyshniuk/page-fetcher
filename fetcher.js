const request = require("request");
const fs = require("fs");  // => require file system

const adressRequest = process.argv[2]; //=> instead of slice going to get specific index
const downloadTo = process.argv[3]

request(adressRequest, (error, response, body) => {
  if (error) {
    console.log("error:", error); // Print the error if one occurred
  }
  fs.writeFile(downloadTo, body, function(error) { //=> writes content from the adressRequest to 'downloadTo adress(index.html in this case)'
    if (error) {
      console.log("error:", error); // Print the error if one occurred
    } else {
      // console.log("statusCode:", response); // Print the response status code if a response was received
      console.log(
        `Downloaded and saved ${response.headers["content-length"]} bytes to ${downloadTo}`
      ); // Print the information what and where was written
    }
  })
});


// > node fetcher.js http://www.example.edu/ ./index.html  //=> command to run this file from node command line
// Downloaded and saved 3261 bytes to ./index.html  //=> information should be printed in the end

// npm install request@2.81.0 => command if you don`t have a modules inside the project

// response.headers["content-length"] //=> !!!!special if yuo`ll request responce information instead you`ll see lot's of information that includes Headers object with 'content-length' key
// thanks @Julien Atanassian