import React, { Component } from 'react';
import { IProduct } from '../types';
import { BasketService } from '../BasketService';
import { BasketItem } from './BasketItem';

type products = {
  products: IProduct[]
}

export class BasketRef extends Component<{}, products> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    BasketService.state.subscribe(products => {
      const filtered = products.filter(item => item.quality)
      this.setState({products: filtered});
    });
  }

  renderItems = () => {
    return this.state.products.map(product => (
      <BasketItem product={product} key={product.id} />
    ))
  }

  render = () => (
    <div className="basketRef">
      {
        this.renderItems()
      }
    </div>
  )
}
