const loadMobiles = () => {
    document.getElementById("mobile-container").innerHTML = "";
    const searchText = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMobiles(data.data));
}
const displayMobiles = (mobiles) => {
    // const div = document.getElementById('search-button');
    // console.log(mobiles);
    for (const mobile of mobiles) {
        // console.log(mobile);
        const parent = document.getElementById('mobile-container');
        const div = document.createElement('div');
        div.innerHTML = `<div class="card border p-5">
        <div class="pro-pic ">
            <img class="w-30" src="${mobile.image}" alt="">
        </div>
        <h4>Phone Name: ${mobile.phone_name}</h4>
        <h5>Brand: ${mobile.brand}</h5>
        <p></p>
        <div class="all-button">
            <button onclick="details('${mobile.slug}')" class="btn btn-success">Details</button>
        </div>
    </div>`
        parent.appendChild(div);
    }
}

const details = (slug) => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.data))
}

const setDetails = (info) => {
    console.log(info);
    document.getElementById('details-container').innerHTML = `
        <div class="text-center">
            <img src="${info.image}" alt="">
            <p>Name: ${info.name}</p>
            <p>Storage: ${info.mainFeatures.storage}</p>
            <p>Display Size: ${info.mainFeatures.displaySize}</p>
            <p>Chipset: ${info.mainFeatures.chipSet}</p>
            <p>Memory: ${info.mainFeatures.memory}</p>
            <p>Sensors: ${info.mainFeatures.sensors}</p>
            <p>Release Date: ${info.releaseDate}</p>
            <p>Other Features: ${info.others}</p>
        </div>
    `
}