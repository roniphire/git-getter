/** Dependencies */
import React, { Fragment } from 'react';
import spinner from './spinner.gif';

/** Components */

/** Context */

/** Fragment */
const Spinner = () => (
  <Fragment>
    <img
      data-testid='spinner'
      src={spinner}
      alt='loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
