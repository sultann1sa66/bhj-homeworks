const cartProducts = document.querySelector('.cart__products');
const product = document.querySelectorAll('.product');
const productQuantityControl = document.querySelectorAll('.product__quantity-control');
const productQuantityValue = document.querySelectorAll('.product__quantity-value');
const productAdd = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart');

let idArr = [];

if(idArr.length === 0){
    cart.style.display = 'none';
}

for(let btn of productQuantityControl) {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('product__quantity-control_dec')) {
            let num = Number(btn.parentNode.childNodes[3].textContent)
            if(num === 1){
                btn.parentNode.childNodes[3].textContent;
            } else {
                num--;
                btn.parentNode.childNodes[3].textContent = num;
            }

        } else {
            let num = btn.parentNode.childNodes[3].textContent
            Number(num);
            num++;
            btn.parentNode.childNodes[3].textContent = num;
        }
    })
}
for(let addBtn of productAdd) {
    addBtn.addEventListener('click', () => {

        let cartProduct = document.createElement('div');
        cartProduct.classList.add('cart__product');

        let cartProductImage = document.createElement('img');
        cartProductImage.classList.add('cart__product-image');

        let cartProductCount = document.createElement('div');
        cartProductCount.classList.add('cart__product-count');


        let imgSrc = addBtn.closest('.product').childNodes[3].getAttribute('src');
        let dataId = addBtn.closest('.product').dataset.id;
        parseInt(dataId);
        let productCount = addBtn.previousElementSibling.childNodes[3].textContent;
        parseInt(productCount);


        cartProductCount.textContent = productCount;
        cartProductImage.setAttribute('src', imgSrc);
        cartProduct.setAttribute('data-id', dataId);

        
        cartProduct.appendChild(cartProductImage);
        cartProduct.appendChild(cartProductCount);
        

           if(!cartProducts.children.length > 0){
            idArr.push(dataId);
             cartProducts.appendChild(cartProduct);
             cart.style.display = 'block';
            
           } else {
            
            if(!idArr.includes(dataId)) {
                idArr.push(dataId);
                cartProducts.appendChild(cartProduct);
            } else {
                for(let i = 0; i < cartProducts.children.length; i++){
                    if(cartProducts.children[i].getAttribute('data-id') === dataId){
                        let num1 = parseInt(cartProducts.children[i].lastChild.textContent);
                        let num2 = parseInt(productCount);
                        cartProducts.children[i].lastChild.textContent = num1 + num2;
                    }     
                }
           
           }
           
        } 
   
   
          
       
    })    
}
