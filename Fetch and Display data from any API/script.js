async function get() {
    const data = await fetch('https://fakestoreapi.com/products').then(res => res.json());
    data.map(e => {
        const para = document.createElement("p");
        para.innerHTML = e.title;
        document.getElementById("card").appendChild(para);
    })
}
get();
