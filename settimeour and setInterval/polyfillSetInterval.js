

const { setIntervalPolyfill , clearIntervalPolyfill } = createSetInterval

function createSetInterval(){

    //setinterval create a id every time
    let intervalId = 0;

    //create a blank array..
    let intervalMap = {};

    function setIntervalPolyfill(callback, delay=0, ...args){

        var id = intervalId++;

        function repeat(){
            intervalMap[id] = setTimeout(() =>{
                callback(...args);

                if(intervalMap[id]){
                    repeat();
                }
            },delay);
        }
        repeat();
        return id;
    }

    function clearIntervalPolyfill(intervalId){

        clearTimeout(intervalMap[intervalId]);
        delete intervalMap(intervalId);

    }

    return {
        setIntervalPolyfill,
        clearIntervalPolyfill
    }
}

let count = 0;
let intervalID;

function sayHi(){
    count++;

    console.log("hiii..");

    if(count >= 3){
        clearIntervalPolyfill(intervalID);
    }
}


intervalID = setIntervalPolyfill(sayHi,2000)