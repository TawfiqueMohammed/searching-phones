function loadMobiles() {
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => displayMobiles(data));
}
function displayMobiles(data) {
    const div = document.getElementById('search-button');
    for (const mobile of data) {
        console.log(mobile)
    }
}