

const day = "Friday";
const month = "September";
const date = 29;
const time = "21:49";

const macTimeDisplay = `${day.slice(0,3)} ${date} ${month.slice(0,3)} ${time}`;

// Before running code, answer the following - write down your answers:
// a) how many function calls are there in this file?
// b) predict and explain what macTimeDisplay will evaluate to. You can use documentation to look up slice
//a) There are 2 function calls in this file: `slice` is called twice on `day` and `month`
//b) `macTimeDisplay` will evaluate to "Fri 29 Sep 21:49". The `slice` method is used to extract the first three characters from `day` and `month`, resulting in "Fri" and "Sep" respectively. The final string is constructed by combining these with the date and time.