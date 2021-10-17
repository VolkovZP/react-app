import React from 'react';
import style from './ResponsiveMediaWrapper.module.sass';
import cx from 'classnames';
import PropTypes from 'prop-types';

function ResponsiveMediaWrapper ({ className, children, ...others }) {
  return (
    <div className={cx(style.outerWrapper, className)} {...others}>
      <div className={style.innerWrapper}>{children}</div>
    </div>
  );
}
export default ResponsiveMediaWrapper;

ResponsiveMediaWrapper.propTypes = {
  children: PropTypes.element,
};
