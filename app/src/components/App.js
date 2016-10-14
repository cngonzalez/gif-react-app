import React from 'react';
import Search from './Search';
import VisiblePics from './containers/VisiblePics'
import ViewToggle from './ViewToggle'

const App = () => (
      <div>
        <Search />  
        <ViewToggle />
        <VisiblePics />
     </div>
    )

export default App;
