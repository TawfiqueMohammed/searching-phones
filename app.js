const loadMobiles = () => {
    const searchText = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    console.log(url);
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
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}