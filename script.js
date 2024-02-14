var arr = [
    {name: 'Having a good lunch', image: 'https://plus.unsplash.com/premium_photo-1707241901839-2e0c972ef5e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D'},
    {name: 'Enjoy', image: 'https://images.unsplash.com/photo-1599113615507-13f78150fb2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5qb3l8ZW58MHx8MHx8fDA%3D'},
    {name: 'On a long ride', image: 'https://images.unsplash.com/photo-1707669291003-a7afa20b0a05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D'},
    {name: 'Delicious food', image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVuam95fGVufDB8fDB8fHww'},
    {name: 'Going through history', image: 'https://images.unsplash.com/photo-1707495805709-bd63472f64bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D'},
    {name: 'I love coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29mZmVlfGVufDB8fDB8fHww'},
    {name: 'Few minutes to exercise', image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGV4ZXJjaXNlfGVufDB8fDB8fHww'},
    {name: 'Juicy vibes', image: 'https://images.unsplash.com/photo-1462887749044-b47cb05b83b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEp1aWNlJTIwd2l0aCUyMGZyaWVuZHxlbnwwfHwwfHx8MA%3D%3D'},
    {name: 'Life is everything', image: 'https://images.unsplash.com/photo-1546512636-aa323a4d8a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGVuam95fGVufDB8fDB8fHww'},
    {name: "Can't wait to have it", image: 'https://plus.unsplash.com/premium_photo-1675754403388-7548ba37809e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D'},
    {name: "Keep smiling everyday", image: 'https://images.unsplash.com/photo-1590698933947-a202b069a861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtaWxlfGVufDB8fDB8fHww'},
    {name: "Isn't it cute?", image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0fGVufDB8fDB8fHww'},
    {name: "For car-lovers", image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D'},
    {name: "Maintained everything", image: 'https://plus.unsplash.com/premium_photo-1663100678842-d89cb7b084ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzaWdufGVufDB8fDB8fHww'},
    {name: "Smells good", image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww'},
    {name: "The art", image: 'https://images.unsplash.com/photo-1602532305019-3dbbd482dae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFydHxlbnwwfHwwfHx8MA%3D%3D'},
    {name: "Sketching something", image: 'https://images.unsplash.com/photo-1625212895824-ff2232e9f304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2tldGNofGVufDB8fDB8fHww'},
    {name: "I love greenery", image: 'https://images.unsplash.com/photo-1536147116438-62679a5e01f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JlZW5lcnl8ZW58MHx8MHx8fDA%3D'},
    {name: "Nature is my love", image: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'},
    {name: "Who's birds lover?", image: 'https://plus.unsplash.com/premium_photo-1687880581926-e3d23bde38e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D'},
    {name: "Let's have a ride", image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D'},
]


function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" onclick="openDiv()" src="${obj.image}" alt="image">
        <div class="caption">${obj.name} </div>
    </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}
var input = document.querySelector('#search-input')
function searchImages(){
    input.addEventListener('focus',function(){
    document.querySelector('.overlay').style.display = 'block';
    })
    input.addEventListener('blur',function(){
    document.querySelector('.overlay').style.display = 'none';
    })
}
searchImages();
showTheCards();

function openDiv(){
    document.querySelector('.cont .left').style.backgroundImage = `url(${event.target.src})`
    document.querySelector('.cont').style.transform = 'translate(-50%,-50%) scale(1)';
    document.querySelector('.cont').style.opacity = '1';
}
function closeDiv(){
    document.querySelector('.cont').style.transform = 'translate(-50%,-50%) scale(0)';
    document.querySelector('.cont').style.opacity = '0';
}
