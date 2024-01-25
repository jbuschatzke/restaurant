console.log("Hello World!");

import createPage from "./homepage";

createPage();

const homeDiner = document.createElement("img");
homeDiner.src = "./tables.jpg";
document.getElementById('content').appendChild(homeDiner);