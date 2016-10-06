import React from 'react';

export default function Search(props) {
  return (
    <div>
      <input type='text' value={props.current} onChange={props.updateCurrent} />
      <button onClick={props.search} value='submit' />
    </div>
   )
  }

