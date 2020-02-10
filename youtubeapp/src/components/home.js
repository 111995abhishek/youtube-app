import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
        <Link to='/reactjs'>
        <h1>welcome to react js course</h1>
        </Link>
        <Link to='/nodejs'>
        <h1>welcome to node js course</h1>
        </Link>
  
    </div>
  );
}

export default Home;
