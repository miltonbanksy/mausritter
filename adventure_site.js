const btnRandomAdventureSite = document.querySelector('#btn-random-adventure-site');
const displayAdventureSite = document.querySelector('#display-adventure-site');

btnRandomAdventureSite.addEventListener('click', () => {
    const construction = getRandomFromArray(site_construction);
    const ruination = getRandomFromArray(site_ruination);
    const denizens = getRandomFromArray(site_denizens);
    const searching_for = getRandomFromArray(site_denizens_searching_for);
    const secret = getRandomFromArray(site_secrets);
    
    displayAdventureSite.innerHTML = `
        Construction: ${construction}
        <br><br>Ruination: ${ruination}
        <br><br>Inhabitants: ${denizens} searching for ${searching_for}
        <br><br>Secret: ${secret}
    `;
});