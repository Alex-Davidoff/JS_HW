fetch('https://dummyjson.com/carts')
.then(res => res.json())
.then(retrobj => showCarts(retrobj.carts));

function showCarts(carts){
    function insertTextOrImg(parent, tag, textorsrs, ...classname){
        let titem_c = document.createElement(tag);
        parent.appendChild(titem_c);
        if (tag !== 'img'){
            titem_c.innerText = textorsrs;
        } else {
            titem_c.src = textorsrs;
        }
        if (arguments.length>3) {titem_c.classList.add(...classname)};
    }

    function insertDiv(parent,...classname){
        let titem_c = document.createElement('div');
        parent.appendChild(titem_c);
        if (arguments.length>1){titem_c.classList.add(...classname)};
        return titem_c;
    }

    console.log(`carts.length ${carts.length}`);
    
    let carts_c = insertDiv(document.body, 'allcarts');
    for (const cart of carts){
        let cart_c = insertDiv(carts_c, 'cart')
        //id's
        insertTextOrImg(cart_c, 'p', 'Cart id '+cart.id+' / userId '+cart.userId);
            //products
            let cart_products_c = insertDiv(cart_c, 'cart_products');
            for (const product of cart.products){
                let product_c = document.createElement('div');
                cart_products_c.appendChild(product_c);
                insertTextOrImg(product_c, 'h3', product.title);
                insertTextOrImg(product_c, 'img', product.thumbnail)
                insertTextOrImg(product_c, 'p', 'id:'+product.id);
                insertTextOrImg(product_c, 'p', 'Price: '+product.price+'$','product_price')
                insertTextOrImg(product_c, 'p', `quantity: ${product.quantity}`);
                insertTextOrImg(product_c, 'p', `total: ${product.total}$`);
                insertTextOrImg(product_c, 'p', `discount: ${product.discountPercentage}%`);
                insertTextOrImg(product_c, 'p', `Discounted total: ${product.discountedTotal}$`, 'tbold');
            }
        //total & price
        insertTextOrImg(cart_c, 'p', 'Products: '+cart.totalProducts+' / totalQuantity: '+cart.totalQuantity);
        insertTextOrImg(cart_c, 'p', 'Total = '+cart.total+'$', 'cart_total', 'tbold');
        insertTextOrImg(cart_c, 'p', 'Discounted total = '+cart.discountedTotal+'$','cart_disc_total', 'tbold');
    }
};