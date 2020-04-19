class Cart{
    constructor(containerCart, catalogCounter, catalogProduct){
        this.containerCart = document.querySelector(containerCart);
        this.catalogCounter = document.querySelector(catalogCounter);
        this.catalogProduct = catalogProduct;
        this.createCart();
    }

    createCart(){
        this.catalogCounter.addEventListener('click', function(){

            let containerProduct =document.querySelector('.container_products');
            let sliders = document.querySelector('#sliders');
            let text = document.querySelector('#text');
            let advantages = document.querySelector('#advantages');

            containerProduct.style.display = 'none';
            sliders.style.display = "none";
            text.style.display = "none";
            advantages.style.display = "none";

            cart.containerCart.style.display = 'block';
            let productsCart = cart.getProductCart();
            let wrapper = document.createElement('slot');

            let resultCost = document.createElement('p');
            resultCost.classList.add('cost');
            let cost = 0;

            for(let i = 0; i < productsCart.length; i++){
                let item = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'item'
                });
                let img = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'img',
                    bgImage: `url(${productsCart[i].img})`
                });
                let name = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'name',
                    nameText: 'Название товара: ' + productsCart[i].name
                });
                let price = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'price',
                    nameText: 'Стоимость: ' + productsCart[i].price
                });

                cost += productsCart[i].price;

                item.appendChild(img);
                item.appendChild(name);
                item.appendChild(price);
                wrapper.appendChild(item);
            };

            resultCost.innerHTML = 'Итого: ' + cost;
            wrapper.appendChild(resultCost);

            let close = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'close'
            });

            close.addEventListener('click', function(){
                cart.containerCart.style.display = 'none';
                cart.containerCart.innerHTML = '';

                containerProduct.style.display = 'flex';
            });

            cart.containerCart.appendChild(close);
            cart.containerCart.appendChild(wrapper);
        })
    };

    getProductCart(){
        let products = store.getProducts();
        let productsCart = [];
        for(let i = 0; i < this.catalogProduct.length; i++){
            if(products.indexOf(this.catalogProduct[i].id) !== -1){
                productsCart.push(this.catalogProduct[i]);
            }
        }
        return productsCart;
    }
}

let cart = new Cart('.container_cart', '.catalog_counter', catalogProduct);