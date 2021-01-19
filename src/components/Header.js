import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <nav>
        <ul>
          {props.routes.map((prop, key) => {
            return (
              <li key={key}>
                <NavLink to={prop.path}>{prop.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
