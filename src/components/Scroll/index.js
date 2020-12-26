import smoothscroll from 'smoothscroll-polyfill';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Scroll = (props) => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    let elem = 0;
    let scroll = true;
    const { type, element, offset, timeout } = props;
    if (type && element) {
      switch (type) {
        case 'class':
          elem = document.getElementsByClassName(element)[0];
          scroll = elem ? true : false;
          break;
        case 'id':
          elem = document.getElementById(element);
          scroll = elem ? true : false;
          break;
        default:
      }
    }
    scroll
      ? scrollTo(elem, offset, timeout)
      : console.log(`Element not found: ${element}`); // eslint-disable-line
  };
  const scrollTo = (element, offSet = 0, timeout = null) => {
    const elemPos = element
      ? element.getBoundingClientRect().top + window.pageYOffset
      : 0;
    if (timeout) {
      setTimeout(() => {
        window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
      }, timeout);
    } else {
      window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
    }
  };

  const Element = (props) => {
    return props.children;
  };

  return (
    <Element>
      {typeof props.children === 'object' ? (
        React.cloneElement(props.children, { onClick: handleClick })
      ) : (
        // eslint-disable-next-line
        <span onClick={handleClick}>{props.children}</span>
      )}
    </Element>
  );
};

Scroll.propTypes = {
  type: PropTypes.string,
  element: PropTypes.string,
  offset: PropTypes.number,
  timeout: PropTypes.number,
  children: PropTypes.node.isRequired
};

export default Scroll;
