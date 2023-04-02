// code your solution here
const superbowlWin = (array) => {
    if (array.find(winresult => winresult.result === "W") !== undefined) {
        return array.find(winresult => winresult.result === "W").year;
    } else {
        return undefined;
    }
}


/*const superbowlWin = (array) => {
    return array.find(winresult => winresult.result === "W") ? array.find(winresult => winresult.result === "W").year : undefined;
}
*/