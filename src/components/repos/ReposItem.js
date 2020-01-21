/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Components */

/** Context */

/** Fragment */
const ReposItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default ReposItem;
