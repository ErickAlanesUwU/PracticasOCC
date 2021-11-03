var productController;

class Product {
    constructor(nameProduct, priceProduct, productQuantity) {
        this.nameProduct = nameProduct;
        this.priceProduct = priceProduct;
        this.productQuantity = productQuantity;
    }
}

class Item extends Product {
    constructor(nameProduct, priceProduct, productQuantity, productDescription) {
        super(nameProduct, priceProduct, productQuantity);
        this.productDescription = productDescription;
    }
}

class ProductController {
    constructor() {
        this.txtNameProduct = document.getElementById('txtNameProduct');
        this.txtPrecio = document.getElementById('txtPrecio');
        this.txtCantidad = document.getElementById('txtCantidad');
        this.txtDescripcion = document.getElementById('');
        this.tbBody = document.getElementById('tbBody');

        this.Products = new Array();
    }

    addProduct() {
        let nameProduct = this.txtNameProduct.value;
        let priceProduct = parseInt(this.txtPrecio.value);
        let productQuantity = parseInt(this.txtCantidad.value);
        let productDescription = this.txtDescripcion.value;

        let product = new Product(nameProduct, priceProduct, productQuantity, productDescription);
        this.Products.push(product);

        this.displayProducts();

        this.txtNameProduct.value = '';
        this.txtPrecio.value = '';
        this.txtCantidad.value = '';
        this.txtDescripcion.value = '';
    }

    deleteProduct(i) {
        this.Products.splice(i, 1);
        this.displayProducts();
    }

    displayProducts() {
        this.tbBody.innerHTML = '';

        for (let i in this.Products) {
            let product = this.Products[i];

            let tr = document.createElement('tr');

            let tdnameProduct = document.createElement('td');
            tdnameProduct.innerHTML = product.nameProduct;

            let tdpriceProduct = document.createElement('td');
            tdpriceProduct.innerHTML = product.priceProduct;

            let tdproductQuantity = document.createElement('td');
            tdproductQuantity.innerHTML = product.productQuantity;

            let tdproductDescription = document.createElement('td');
            tdproductDescription.innerHTML = product.productDescription;

            let tdOption = document.createElement('td');
            let btnDelete = document.createElement('button');

            btnDelete.type = 'button';
            btnDelete.innerHTML = 'Delete';
            btnDelete.className = 'btn btn-primary';

            btnDelete.onclick = function() {
                productController.deleteProduct(i);
            };

            tdOption.append(btnDelete);

            tr.appendChild(tdnameProduct);
            tr.appendChild(tdpriceProduct);
            tr.appendChild(tdproductQuantity);
            tr.appendChild(tdproductDescription);
            tr.appendChild(tdOption);

            this.tbBody.appendChild(tr);
        }
    }
}

window.onload = function() {
    productController = new ProductController();
}