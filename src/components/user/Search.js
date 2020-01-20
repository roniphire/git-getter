import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClearButton, clearUsers }) => {
  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    searchUsers(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-blue btn-block'
        />
      </form>
      {showClearButton && (
        <button className='btn btn-danger btn-block' onClick={clearUsers}>
          Clear Search List
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearButton: PropTypes.bool.isRequired,
};

export default Search;
