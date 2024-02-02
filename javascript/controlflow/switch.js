//switch
//switch is a conditional statement that evaluates an expression and executes code as a result of a match.
 //syntax of switch
// switch (expression) {
//     case value1:
//         //Statements executed when the result of expression matches value1
//         break;
//     case value2:
//         //Statements executed when the result of expression matches value2
//         break;
//     case valueN:
//         //Statements executed when the result of expression matches valueN
//         break;
//     default:
//         //Statements executed when none of the values match the value of the expression
//         break;
// }

const month = 6;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;    
    default:
        console.log("Month is not January or February");
        break;
}