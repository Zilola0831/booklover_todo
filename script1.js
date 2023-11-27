let input=document.querySelector("input" );
let shortUrl=document.querySelector(".short-urls");
let shortUrls="myShortUrls";
let urlS=[]

if(localStorage.getItem(shortUrls)){
    urlS=JSON.parse(localStorage.getItem(shortUrls));
    b();
}





input.addEventListener("keyup", function(el){
    if(el.key=="Enter"){
        urlS.push(add());
        localStorage.setItem(shortUrls, JSON.stringify(urlS))
        input.value=""
        console.log(urlS); 
       
    }
})
button1.addEventListener("click", function(){
    add();
})

function add(){
    urlS.map(el=>{
        let left=document.createElement("div")
    left.classList="left";
    let right=document.createElement("div");
    let text=document.createElement("p");
    left.textContent=input.value;
    let button=document.createElement("button")
    button.textContent="copy";
    text.textContent=b();

    shortUrl.appendChild(left)
    shortUrl.appendChild(right)
    right.appendChild(text);
    right.appendChild(button);
    async function b(){
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
            res=result.result_url;
            return res;
         
            
    }
    b();})
}
async function b(){
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
        res=result.result_url;
     
        
}

