const brgrBtn = document.querySelector('#brgr')
const brgrBox = document.querySelector('.brgrbox')
const close = document.querySelector('.close')
const parent = document.querySelector('.parent')
const cards = document.querySelector('.cards')
const deleteBtn = document.querySelector('.delete')

brgrBtn.addEventListener('click', () => {
    brgrBox.classList.add('active')
    parent.classList.toggle('active2')

})

close.addEventListener('click', () => {
    brgrBox.classList.remove('active')
})
parent.addEventListener('click', () => {
    brgrBox.classList.remove('active')
    parent.classList.toggle('active2')
})


let data = [
    {
        id: 1,
        name: 'sarecxis manqana',
        price: 400,
        soldOut: 12,
        imageUrl: 'https://shorturl.at/mBFO3'
    },
    {
        id: 2,
        name: 'macivari',
        price: 800,
        soldOut: 2,
        imageUrl: 'https://shorturl.at/mBFO3'
    },
    {
        id: 3,
        name: 'televizori',
        price: 1400,
        soldOut: 1,
        imageUrl: 'https://shorturl.at/mBFO3'
    },
    {
        id: 4,
        name: 'Laptop',
        price: 1200,
        soldOut: 0,
        imageUrl: 'https://shorturl.at/mBFO3'
    }
    ,
    {
        id: 5,
        name: 'damenas manqana',
        price: 1200,
        soldOut: "sheufasebelia",
        imageUrl: 'https://shorturl.at/mBFO3'
    }
]

function deleteItems(id){
    console.log(data)
    data = data.filter(el => el.id != id)


    drawCards()
}


function drawCards(){
    cards.innerHTML = data.map(el => (
        `
            <div class="card">
                <img class="image" src=${el.imageUrl}  />
                <h2>Name: ${el.name}</h2>
                <h2>Price: ${el.price}</h2>
                <h2>In Stock: ${el.soldOut ? el.soldOut : "Ar gagimartla"}</h2>
                <button onclick={deleteItems(${el.id})} class="delete">Delete</button>
            </div>
        `
    )).join('')
}

drawCards();