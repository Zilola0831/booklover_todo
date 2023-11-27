let input = document.querySelector("input");
let shortUrl = document.querySelector(".short-urls");
let playlistName = "myFovouriteVideos"

// let playlistArr = []
// if (localStorage.getItem(playlistName)) {
//     playlistArr = JSON.parse(localStorage.getItem(playlistName));
//     for (let i = 0; i < playlistArr.length; i++) {
//         function add1(el) {
//             let left = document.createElement("div")
//             left.classList = "left";
//             let right = document.createElement("div");
//             let text = document.createElement("p");
//             left.textContent = playlistArr[i].inputvalue;
//             let button = document.createElement("button")
//             button.addEventListener("click", () => {
//                 navigator.clipboard.writeText(el[i].resss)
//             })

//             button.textContent = "copy";
//             text.textContent = el[i].resss;

//             shortUrl.appendChild(left)
//             shortUrl.appendChild(right)
//             right.appendChild(text);
//             right.appendChild(button);
//         }
//         add1(playlistArr);

//     }
//     b();
// }

input.addEventListener("keyup", function (el) {
    if (el.key == "Enter") {
        b();
        // localStorage.setItem(playlistName, JSON.stringify(playlistArr))
        
    }
})
button1.addEventListener("click", function () {
    b();
})


async function b() {
    shortUrl.innerHTML = "";
    const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'd90d40abd9msh066c72be6f76abep17856ejsn71bff152cbd0',
            'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
        },
        body: new URLSearchParams({
            url: input.value
        })
    };
    const response = await fetch(url, options);
    const result = await response.json();
    res = result.result_url;

    // let k = {
    //     inputvalue: input.value,
    //     resss: res
    // }
    // playlistArr.push(k);

    function add() {
        let shortUrlschild=document.createElement("div")
        let left = document.createElement("div")
        left.classList = "left";
        let right = document.createElement("div");
        let text = document.createElement("p");
        text.textContent = res;
        left.textContent = input.value;
        let button = document.createElement("button")
        button.addEventListener("click", () => {
            navigator.clipboard.writeText(text.textContent)
        })

        button.textContent = "copy"
        shortUrl.appendChild(shortUrlschild);
        shortUrlschild.appendChild(left);
        shortUrlschild.appendChild(right)
        right.appendChild(text);
        right.appendChild(button);
    }
    add();
    input.value = ""


}