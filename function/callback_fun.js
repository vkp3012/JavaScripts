

//callback function
function ask(question, yes, no) {
    if (confirm(question)){
        yes()
    }else{
        no();
    } 
}

function showOk() {
    console.log( "You agreed." );
}

function showCancel() {
    console.log( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);



function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);