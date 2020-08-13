import React, { ReactNode } from 'react';

export const Sidebar = (props: {children: ReactNode}) => (
  <aside className="sidebar">
    {props.children}
  </aside>
)
