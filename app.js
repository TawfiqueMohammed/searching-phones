// loading mobiles after clicking search button
const loadMobiles = () => {
    document.getElementById("mobile-container").innerHTML = "";
    document.getElementById('details-container').innerHTML = "";
    document.getElementById("spinner").style.display = "block";
    const searchText = document.getElementById("search-box").value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMobiles(data.data));
    // searchText.value = " ";
}
// displaying mobiles
const displayMobiles = (mobiles) => {
    // const div = document.getElementById('search-button');
    // console.log(mobiles.length);
    // console.log(mobiles[0]);

    if (mobiles[0]) {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("warning-div").style.display = "none";
    }
    else {
        document.getElementById("spinner").style.display = "block";
        document.getElementById("warning-div").style.display = "block";
    }
    // console.log(mobiles.length);
    // console.log(mobiles);
    for (const mobile of mobiles.slice(0, 20)) {
        console.log(mobile);
        const parent = document.getElementById('mobile-container');
        const div = document.createElement('div');
        div.innerHTML = `<div class="card card-transform align-items-center p-5">
        <img class="w-30" src="${mobile.image}" alt="">
        <div class="card-body">
            <h4><span class ="bold-text">Phone Name:</span> ${mobile.phone_name}</h4>
            <h5><span class ="bold-text">Brand:</span> ${mobile.brand}</h5>
        </div>
        
        <div class="all-button">
            <button onclick="details('${mobile.slug}')" class="btn btn-success">Details</button>
        </div>
    </div>`
        parent.appendChild(div);
    }
    document.getElementById("showall-button").style.display = "block";
}







// extra

const showallButton = () => {
    document.getElementById("mobile-container").innerHTML = "";
    document.getElementById('details-container').innerHTML = "";
    document.getElementById("spinner").style.display = "block";
    const searchText = document.getElementById("search-box").value;
    document.getElementById("search-box").value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllMobiles(data.data));
}

const displayAllMobiles = (mobiles) => {
    // const div = document.getElementById('search-button');
    // console.log(mobiles.length);
    // console.log(mobiles[0]);

    if (mobiles[0]) {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("warning-div").style.display = "none";
    }
    else {
        document.getElementById("spinner").style.display = "block";
        document.getElementById("warning-div").style.display = "block";
    }
    // console.log(mobiles.length);
    // console.log(mobiles);
    for (const mobile of mobiles) {

        const parent = document.getElementById('mobile-container');
        const div = document.createElement('div');
        div.innerHTML = `<div class="card card-transform align-items-center p-5">
        <img class="w-30" src="${mobile.image}" alt="">
        <div class="card-body">
            <h4><span class ="bold-text">Phone Name:</span> ${mobile.phone_name}</h4>
            <h5><span class ="bold-text">Brand:</span> ${mobile.brand}</h5>
        </div>
        
        <div class="all-button">
            <button onclick="details('${mobile.slug}')" class="btn btn-success">Details</button>
        </div>
    </div>`
        parent.appendChild(div);
    }
    document.getElementById("showall-button").style.display = "block";
}

//extra




// details of single mobile brought by id
const details = (slug) => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.data))
}

// setting details of single mobileid
const setDetails = (info) => {
    console.log(info.releaseDate);

    document.getElementById('details-container').innerHTML =
        `
        <div id="mobile-background" class="card" style="width: 20rem;">
            <img src="${info.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <p><span class = "bold-text">Name:</span> ${info.name}</p>
                <p><span class = "bold-text">Storage:</span> ${info.mainFeatures.storage}</p>
                <p><span class = "bold-text">Display Size:</span> ${info.mainFeatures.displaySize}</p>
                <p><span class = "bold-text">Chipset:</span> ${info.mainFeatures.chipSet}</p>
                <p><span class = "bold-text">Memory:</span> ${info.mainFeatures.memory}</p>
                <p><span class = "bold-text">Sensors:</span> ${info.mainFeatures.sensors}</p>
                <p><span class = "bold-text">Release Date:</span> ${info.releaseDate ? info.releaseDate : 'Unknown Release Date'}</p>
                <span class = "bold-text">Other Features:</span>
                <div id="others">
                    <p><span class = "bold-text">Bluetooth:</span> ${info?.others?.Bluetooth ? info.others.Bluetooth : 'no'}</p>
                    <p><span class = "bold-text">GPS:</span> ${info?.others?.GPS ? info.others.GPS : 'no'}</p>
                    <p><span class = "bold-text">NFC:</span> ${info?.others?.NFC ? info.others.NFC : 'no'}</p>
                    <p><span class = "bold-text">Radio:</span> ${info?.others?.Radio ? info.others.Radio : 'no'}</p>
                    <p><span class = "bold-text">USB:</span> ${info?.others?.USB ? info.others.USB : 'no'}</p>
                    <p><span class = "bold-text">WLAN:</span> ${info?.others?.WLAN ? info.others.WLAN : 'no'}</p>
                </div>
            </div>
        </div>
    `
}