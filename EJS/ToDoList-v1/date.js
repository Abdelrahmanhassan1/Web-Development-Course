// we are not using paranethesis as this means we are calling the function 
// module.exports = getDate;

// // if i have many functions 
// module.exports.getDate = getDate;

// function getDate(){
//     var today = new Date();

//     var current_day = today.getUTCDay();
//     // console.log(today);

//     var options_1 = {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//     };

//     return today.toLocaleDateString("en-US", options_1);
// }

//////////////////////////////////////////////////////////////////////////////////////////////

// another wway to declare the function 
module.exports.getDate = function(){
    const today = new Date();

    // const current_day = today.getUTCDay();
    // console.log(today);

    const options_1 = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    return today.toLocaleDateString("en-US", options_1);
}

module.exports.getDay = getDay;

function getDay(){
    const today = new Date();

    // const current_day = today.getUTCDay();
    // console.log(today);

    const options_1 = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-US", options_1);
}