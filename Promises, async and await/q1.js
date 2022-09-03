

function loadScripts(src){
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let scripts = document.createElement('script');
    scripts.src = src;
    document.head.append(scripts);
}

// load and execute the script at the given path
loadScripts('/my/script.js');