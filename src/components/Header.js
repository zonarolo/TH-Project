import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <nav>
        <ul>
          {props.routes.map((prop, key) => {
            return (
              <li>
                <NavLink to={prop.path} key={key}>
                  {prop.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
