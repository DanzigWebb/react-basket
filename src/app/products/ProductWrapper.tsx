import React, { Component } from 'react';
import { IProduct } from '../basket/types';
import { Product } from './Product';
import { BasketService } from '../basket/BasketService';
import './Product.scss';

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
      products: BasketService.state.getValue()
    });

    BasketService.state.subscribe(products => {
      this.setState({products});
    });
  }

  addProduct(product: IProduct): void {
    BasketService.add(product);
  }

  removeProduct(product: IProduct): void {
    BasketService.remove(product);
  }

  render = () => (
    <div className="goods-container">
      {this.state.products.map(product => (
        <Product
          product={product}
          key={product.id}
          handleCheck={() => this.addProduct(product)}
          handleUnCheck={() => this.removeProduct(product)}
        />
      ))}
    </div>
  );
}
