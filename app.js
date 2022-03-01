const loadMobiles = () => {
    document.getElementById("mobile-container").innerHTML = "";
    document.getElementById("spinner").style.display = "block";
    const searchText = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMobiles(data.data));

}
const displayMobiles = (mobiles) => {
    // const div = document.getElementById('search-button');
    console.log(mobiles.length);
    console.log(mobiles[0]);

    if (mobiles[0]) {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("warning-div").style.display = "none";

    }
    else {
        document.getElementById("spinner").style.display = "block";
        document.getElementById("warning-div").style.display = "block";
        // document.getElementById("warning-div").innerHTML = `
        // <h4 class="text-center text-white w-50 mx-auto p-2 m-2 bg-danger">No Mobiles Found !</h4>
        // `;
    }
    for (const mobile of mobiles) {
        // console.log(mobile);
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
    document.getElementById('details-container').innerHTML =
        `
        <div id="mobile-background" class="card" style="width: 18rem;">
            <img src="${info.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <p><span class = "bold-text">Name:</span> ${info.name}</p>
                <p><span class = "bold-text">Storage:</span> ${info.mainFeatures.storage}</p>
                <p><span class = "bold-text">Display Size:</span> ${info.mainFeatures.displaySize}</p>
                <p><span class = "bold-text">Chipset:</span> ${info.mainFeatures.chipSet}</p>
                <p><span class = "bold-text">Memory:</span> ${info.mainFeatures.memory}</p>
                <p><span class = "bold-text">Sensors:</span> ${info.mainFeatures.sensors}</p>
                <p><span class = "bold-text">Release Date:</span> ${info.releaseDate}</p>
                <p><span class = "bold-text">Other Features:</span> ${info.others}</p>
            </div>
        </div>
    `
    // `
    //     <div class="card mobile-background">
    //         <img class="w-30 mx-auto mobile-image" src="${info.image}" alt=""><br><br>
    //         <div class="card-body">
    //             <p><span class = "bold-text">Name:</span> ${info.name}</p>
    //             <p><span class = "bold-text">Storage:</span> ${info.mainFeatures.storage}</p>
    //             <p><span class = "bold-text">Display Size:</span> ${info.mainFeatures.displaySize}</p>
    //             <p><span class = "bold-text">Chipset:</span> ${info.mainFeatures.chipSet}</p>
    //             <p><span class = "bold-text">Memory:</span> ${info.mainFeatures.memory}</p>
    //             <p><span class = "bold-text">Sensors:</span> ${info.mainFeatures.sensors}</p>
    //             <p><span class = "bold-text">Release Date:</span> ${info.releaseDate}</p>
    //             <p><span class = "bold-text">Other Features:</span> ${info.others}</p>
    //         </div>
    //     </div>
    // `
}