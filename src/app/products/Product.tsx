import React from 'react';
import { IProduct } from '../basket/types';

export function Product(props: { product: IProduct }) {
  return (
    <div className="card goods__item">
      <header className="card-header">
        <p className="card-header-title">{props.product.title}</p>
      </header>
      <div className="card-content">
        <img src={props.product.img} alt=""/>
        <div className="content">{props.product.description}</div>
      </div>
      <footer className="card-footer empty">
        <p className="price">{props.product.price} р</p>
        <button className="goods__button button is-success">Добавить</button>
        <div className="is-basket">
          <span className="minus">-</span>
          <b className="count">1</b>
          <span className="plus">+</span>
        </div>
      </footer>
    </div>
  );
}
