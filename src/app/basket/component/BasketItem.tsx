import React from 'react';
import { IProduct } from '../types';
import { maxLength } from '../../pipes/maxLenght';
import './basketRef.scss'

export const BasketItem = (props: { product: IProduct }) => (
  <section className="box basket__item">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={props.product.img} alt="" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <div className="description">
            <strong>{maxLength(props.product.title, 20)}</strong>
            <small>{props.product.price * props.product.quality!} р</small>
          </div>
        </div>
      </div>
    </article>
  </section>
)
