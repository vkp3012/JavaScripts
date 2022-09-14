// Learn About Functional Programming
// Functional programming is a style of programming where solutions are simple, isolated functions, 
// without any side effects outside of the function scope: 

//                         INPUT -> PROCESS -> OUTPUT

// Functional programming is about:

// Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

// Pure functions - the same input always gives the same output

// Functions with limited side effects - any changes, or mutations, to the state of the program outside 
// the function are carefully controlled

// The members of freeCodeCamp happen to love tea.

// In the code editor, the prepareTea and getTea functions are already defined for you.
//  Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.


const prepareTea = () => "greenTea"

const getTea = (noOfCups) => {
    const cupsTea = [];

    for(let cups = 1;cups <= noOfCups;cups += 1){
        const teaCup = prepareTea();
        cupsTea.push(teaCup);
    }

    return cupsTea;
}

const tea4TeamFCC = getTea(10);
console.log(tea4TeamFCC);

