import React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import './styles.scss';
import Link from '../link';

const LeftNavItem = ({ className = '', setCollapsed, collapsed, url, title, items, label }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const currentPath =
    (location &&
      (location.pathname.substr(-1) === '/'
        ? location.pathname.slice(0, -1)
        : location.pathname)) ||
    '';

  const active =
    currentPath && (currentPath === url || currentPath === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''} ${
    isCollapsed ? 'closed' : 'open'
  }`;

  let isItemOpen = false;
  if (currentPath === url || currentPath.startsWith(url)) {
    isItemOpen = true;
  }

  return (
    <li className={calculatedClassName}>
      {title && (
        <>
          <Link to={url}>{title}</Link>
          {!config.sidebar.frontLine && title && hasChildren ? (
            <>
              <input
                type="checkbox"
                defaultChecked={isItemOpen}
                id={label}
                className="toggleInput"
              />
              <label htmlFor={label} className="closed">
                <ClosedSvg />
              </label>
              <label htmlFor={label} className="open">
                <OpenedSvg />
              </label>
            </>
          ) : null}
        </>
      )}

      {hasChildren ? (
        <ul className="subMenu">
          {items.map((item, index) => (
            <LeftNavItem
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default LeftNavItem;
