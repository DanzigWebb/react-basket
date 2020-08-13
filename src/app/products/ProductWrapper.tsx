import React, { Component } from 'react';
import { IProduct } from '../basket/types';
import { Product } from './Product';
import { BASKET } from '../basket/Basket';

type products = {
  products: IProduct[]
}

export class ProductWrapper extends Component<{}, products> {

  constructor(props: any) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.setState({
      products: BASKET.state.getValue()
    });

    BASKET.state.subscribe(products => {
      console.log(products);
      this.setState({products});
    });
  }

  addProduct(product: IProduct): void {
    BASKET.add(product);
  }

  removeProduct(product: IProduct): void {
    BASKET.remove(product)
  }

  render = () => (
    <div className="container">
      <div className="columns goods-container">
        {this.state.products.map(product => (
          <div className="column" key={product.id}>
            <Product
              product={product}
              handleCheck={() => this.addProduct(product)}
              handleUnCheck={() => this.removeProduct(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
