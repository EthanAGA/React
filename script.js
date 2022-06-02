function posts() {
    const API_URL = 'https://jsonplaceholder.typicode.com';
    const xhr = new XMLHttpRequest();
    function onRequest(){
        if(this.readyState == 4 && this.status == 200){
            const data = JSON.parse(this.response);
            const HTMLResponse = document.querySelector("#app");
            const tpl = data.map(user => 
                `<p><strong>UserId:</strong> ${user.userId}</p> 
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Title:</strong> ${user.title}</p>
                <p><strong>Body:</strong> ${user.body}</p>`
                )
            HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}
    xhr.addEventListener("load", onRequest);
    xhr.open('GET', `${API_URL}/posts`);
    xhr.send();
}
function fotos() {
    const API_URL = 'https://jsonplaceholder.typicode.com';
    const xhr = new XMLHttpRequest();
    function onRequest(){
        if(this.readyState == 4 && this.status == 200){
            const data = JSON.parse(this.response);
            const HTMLResponse = document.querySelector("#app");
            const tpl = data.map(user => 
                `<p><strong>PostId:</strong> ${user.postId}</p> 
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>E-mail:</strong> ${user.email}</p>
                <p><strong>Body:</strong> ${user.body}</p>`
                )
            HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}
    xhr.addEventListener("load", onRequest);
    xhr.open('GET', `${API_URL}/comments`);
    xhr.send();
}
