/** Dependencies */
import React, { useState, useContext } from 'react';

/** Components */

/** Context */
import GithubContext from '../../context/github/githubContext';

/** Fragment */
const Search = () => {
  // Initialize GithubContext
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    githubContext.searchUsers(text);
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
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-danger btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear Search List
        </button>
      )}
    </div>
  );
};

export default Search;
