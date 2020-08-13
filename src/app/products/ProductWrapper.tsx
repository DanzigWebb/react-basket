import React from 'react';
import { ProductsMock } from './Mock';
import { IProduct } from '../basket/types';
import { Product } from './Product';

const goods: IProduct[] = ProductsMock;

export function ProductWrapper() {
  return (
    <div className="container">
      <div className="columns goods-container">
        {goods.map(item => (
          <div className="column" key={item.id}>
            <Product product={item}/>
          </div>
        ))}
      </div>
    </div>
  );
}
