import React from 'react';
import { IProduct } from '../basket/types';
import { maxLength } from '../pipes/maxLenght';
import './product.scss'

export function Product(props: { product: IProduct, handleCheck: any, handleUnCheck: any }) {

  const isChecked = !!props.product.quality

  const btn = () => (
    <button
      className="goods__button button is-success"
      onClick={props.handleCheck}>
      Добавить
    </button>
  );

  const plusMinus = () => (
    <div className="is-basket">
      <span className="minus" onClick={props.handleUnCheck}>-</span>
      <b className="count">{props.product.quality}</b>
      <span className="plus" onClick={props.handleCheck}>+</span>
    </div>
  );

  return (
    <div className="card goods__item">
      <header className="card-header">
        <p className="card-header-title">
          {maxLength(props.product.title, 28)}
        </p>
      </header>
      <div className="card-content">
        <img src={props.product.img} alt=""/>
        <div className="content">{props.product.description}</div>
      </div>
      <footer className="card-footer">
        <p className="price">{props.product.price} р</p>
        {
          isChecked
            ? plusMinus()
            : btn()
        }
      </footer>
    </div>
  );
}
