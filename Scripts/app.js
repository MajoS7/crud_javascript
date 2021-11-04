const main = document.querySelector('#principal-container');
const btn_generate =document.querySelector('#btn_generate');
const shopping_card = document.querySelector('#products');
const overlay = document.querySelector("#overlay");
const popup= document.querySelector("#popup");
const btn_close_popup = document.querySelector("#btn-close-popup");


create_Cards();

function create_Cards() {
    foods.forEach((food) => {
    const card = document.createElement('div');
    const image_food = document.createElement('img');
    const card_content =document.createElement('div');
    const title_card = document.createElement('h2');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const button_card = document.createElement('button');
    
    

    title_card.style.marginBottom='2vh';                                                                                     
    button_card.textContent = 'Add';
    title_card.textContent = food.name;
    description.textContent=food.descrip;
    price.textContent=food.price;
    image_food.src = food.img;

    price.classList.add('price');
    card_content.classList.add('cardContent');
    card.classList.add('card');

    
    card.appendChild(image_food);
    card.appendChild(card_content);
    card_content.appendChild(title_card);
    card_content.appendChild(description);
    card_content.appendChild(price);
    card_content.appendChild(button_card);
    main.appendChild(card);
  }); 
}

shopping_card.addEventListener('click', show_cart)


function show_cart(){
  overlay.classList.add('activate');
  popup.classList.add('activate');
}

btn_close_popup.addEventListener('click', close_cart)

function close_cart(){
  overlay.classList.remove('activate');
  popup.classList.remove('activate');
}






