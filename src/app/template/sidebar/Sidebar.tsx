import React, { ReactNode } from 'react';
import './Sidebar.scss'

export const Sidebar = (props: {children: ReactNode}) => (
  <aside className="sidebar">
    <div className="sidebar__content">
      <h2 className="sidebar__title">Корзина</h2>
      {props.children}
    </div>
  </aside>
)
