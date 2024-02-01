export default function createPage() {
    const homeContainer = document.getElementById('content');

    const homeHeader = document.createElement('h1');
    homeHeader.textContent = "Welcome to Five Nights At Luigi's!";
    homeContainer.appendChild(homeHeader);

    const homeFiller = document.createElement('p');
    homeFiller.textContent = 
        "Spend five wonderful nights with us at Luigi's and experience a dining adventure the likes of which has never been seen before. With incredible dishes, exciting mysteries, and a killer chef, you'll never know what to expect next, but one things for certain: your taste buds will be delighted at every turn!";
    homeContainer.appendChild(homeFiller);

    const homeDiner = document.createElement("img");
    homeDiner.src = "./tables.jpg";
    document.getElementById('content').appendChild(homeDiner);
};