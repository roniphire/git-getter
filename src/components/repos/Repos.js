/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ReposItem from './ReposItem';

/** Components */

/** Context */

/** Fragment */
const Repos = ({ repos }) => {
  return repos.map(repo => <ReposItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
