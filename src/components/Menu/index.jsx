import React from 'react';
import { Link } from 'gatsby';
import './style.scss';

class Menu extends React.Component {
  render() {
    const { data: menu } = this.props;
    console.log(menu);
    const menuBlock = (
      <ul className="menu__list">
        {menu.map((item, index) => (
          <li className="menu__list-item adc" key={`${item.path}-${index}`} custom="aaa" title={item.title}>
            <Link
              to={item.path}
              className="menu__list-item-link"
              activeClassName="menu__list-item-link menu__list-item-link--active"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    );

    return <nav className="menu">{menuBlock}</nav>;
  }
}

export default Menu;
