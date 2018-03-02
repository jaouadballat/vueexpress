export default {
    methods: {
        addToCart(product) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (cart.length === 0) { 
                cart.push({
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    qty: 1
                });

                localStorage.setItem('cart', JSON.stringify(cart));

            } else {
                let item = cart.find(item => {
                    return item.id === product._id;
                });
                if (item) { // check if is not new item
                    item.qty++;
                    localStorage.setItem('cart', JSON.stringify(cart));
                } else {
                    cart.push({
                        id: product._id,
                        name: product.name,
                        price: product.price,
                        qty: 1
                    });
                    localStorage.setItem('cart', JSON.stringify(cart));
                }

            }

        }
    }
}