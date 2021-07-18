console.log("Connected");
const rockRow = document.getElementById("rock");
const metalRow = document.getElementById("metal");
const popRow = document.getElementById("pop");
const electronicRow = document.getElementById("electronic");
const bluesRow = document.getElementById("blues");
const jazzRow = document.getElementById("jazz");
const classicalRow = document.getElementById("classical");
const countryRow = document.getElementById("country");
const rapRow = document.getElementById("rap");
const viewAlbumImg = document.getElementById("viewAlbumcover");
const songlistEl = document.getElementById("songlist");
const closeViewAlbumBtn = document.getElementById("closeViewAblum");
const albumrowParentEl = document.getElementById("album_row_wrapper");
const viewAlbumParentEl = document.getElementById("popup_container");
const commentEl = document.getElementById('album-comments');

function getRock() {
    var apiUrl = "/api/albums/rock";
    console.log(apiUrl);
    fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            console.log(data);
            let rockAlbumimg = document.createElement("img");
            rockAlbumimg.src = `./images/${data[i].cover}`;
            rockAlbumimg.className = "albumArt";
            rockAlbumimg.addEventListener("click", () => {
                commentEl.innerHTML = '';
                albumrowParentEl.style.display = "none";
                viewAlbumParentEl.style.display = "block";
                viewAlbumImg.src = `./images/${data[i].cover}`;
                songlistEl.innerHTML = data[i].spotify_embed;
                let theseComments = data[i];
                for(let i = 0; i < theseComments.comments.length; i++) {
                    let userComment = document.createElement('p');
                    userComment.textContent = theseComments.comments[i].comment_text;
                    commentEl.appendChild(userComment);
                }
            });
            rockRow.appendChild(rockAlbumimg);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

function getMetal() {
    var apiUrl = "/api/albums/metal";
    console.log(apiUrl);
    fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let metalAlbumimg = document.createElement("img");
            metalAlbumimg.src = `./images/${data[i].cover}`;
            metalAlbumimg.className = "albumArt";
            metalAlbumimg.addEventListener("click", () => {
                albumrowParentEl.style.display = "none";
                viewAlbumParentEl.style.display = "block";
                viewAlbumImg.src = `./images/${data[i].cover}`;
                songlistEl.innerHTML = data[i].spotify_embed;
            });
            metalRow.appendChild(metalAlbumimg);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

function getPop() {
    var apiUrl = "/api/albums/pop";
    console.log(apiUrl);
    fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let popAlbumimg = document.createElement("img");
            popAlbumimg.src = `./images/${data[i].cover}`;
            popAlbumimg.className = "albumArt";
            popAlbumimg.addEventListener("click", () => {
                albumrowParentEl.style.display = "none";
                viewAlbumParentEl.style.display = "block";
                viewAlbumImg.src = `./images/${data[i].cover}`;
                songlistEl.innerHTML = data[i].spotify_embed;
            });
            popRow.appendChild(popAlbumimg);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

function getElectronic() {
    var apiUrl = "/api/albums/electronic";
    console.log(apiUrl);
    fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let electronicAlbumimg = document.createElement("img");
            electronicAlbumimg.src = `./images/${data[i].cover}`;
            electronicAlbumimg.className = "albumArt";
            electronicAlbumimg.addEventListener("click", () => {
                albumrowParentEl.style.display = "none";
                viewAlbumParentEl.style.display = "block";
                viewAlbumImg.src = `./images/${data[i].cover}`;
                songlistEl.innerHTML = data[i].spotify_embed;
            });
            electronicRow.appendChild(electronicAlbumimg);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

function getBlues() {
    var apiUrl = "/api/albums/blues";
    console.log(apiUrl);
    fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let bluesAlbumimg = document.createElement("img");
            bluesAlbumimg.src = `./images/${data[i].cover}`;
            bluesAlbumimg.className = "albumArt";
            bluesAlbumimg.addEventListener("click", () => {
                albumrowParentEl.style.display = "none";
                viewAlbumParentEl.style.display = "block";
                viewAlbumImg.src = `./images/${data[i].cover}`;
                songlistEl.innerHTML = data[i].spotify_embed;
            });
            bluesRow.appendChild(bluesAlbumimg);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

function getJazz() {
    var apiUrl = "/api/albums/jazz";
    console.log(apiUrl);
    fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let jazzAlbumimg = document.createElement("img");
            jazzAlbumimg.src = `./images/${data[i].cover}`;
            jazzAlbumimg.className = "albumArt";
            jazzAlbumimg.addEventListener("click", () => {
                albumrowParentEl.style.display = "none";
                viewAlbumParentEl.style.display = "block";
                viewAlbumImg.src = `./images/${data[i].cover}`;
                songlistEl.innerHTML = data[i].spotify_embed;
            });
            jazzRow.appendChild(jazzAlbumimg);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

function getClassical() {
    var apiUrl = "/api/albums/classical";
    console.log(apiUrl);
    fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let classicalAlbumimg = document.createElement("img");
            classicalAlbumimg.src = `./images/${data[i].cover}`;
            classicalAlbumimg.className = "albumArt";
            classicalAlbumimg.addEventListener("click", () => {
                albumrowParentEl.style.display = "none";
                viewAlbumParentEl.style.display = "block";
                viewAlbumImg.src = `./images/${data[i].cover}`;
                songlistEl.innerHTML = data[i].spotify_embed;
            });
            classicalRow.appendChild(classicalAlbumimg);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

function getCountry() {
    var apiUrl = "/api/albums/country";
    console.log(apiUrl);
    fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let countryAlbumimg = document.createElement("img");
            countryAlbumimg.src = `./images/${data[i].cover}`;
            countryAlbumimg.className = "albumArt";
            countryAlbumimg.addEventListener("click", () => {
                albumrowParentEl.style.display = "none";
                viewAlbumParentEl.style.display = "block";
                viewAlbumImg.src = `./images/${data[i].cover}`;
                songlistEl.innerHTML = data[i].spotify_embed;
            });
            countryRow.appendChild(countryAlbumimg);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

function getRap() {
    var apiUrl = "/api/albums/rap";
    console.log(apiUrl);
    fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let rapAlbumimg = document.createElement("img");
            rapAlbumimg.src = `./images/${data[i].cover}`;
            rapAlbumimg.className = "albumArt";
            rapAlbumimg.addEventListener("click", () => {
                albumrowParentEl.style.display = "none";
                viewAlbumParentEl.style.display = "block";
                viewAlbumImg.src = `./images/${data[i].cover}`;
                songlistEl.innerHTML = data[i].spotify_embed;
            });
            rapRow.appendChild(rapAlbumimg);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

function getAll() {
    getRock();
    getPop();
    getMetal();
    getJazz();
    getElectronic();
    getBlues();
    getRap();
    getClassical();
    getCountry();
}

getAll();

closeViewAlbumBtn.addEventListener("click", () => {
    albumrowParentEl.style.display = "block";
    viewAlbumParentEl.style.display = "none";
});
