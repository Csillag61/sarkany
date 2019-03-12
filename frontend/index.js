import React from 'react';
import {render} from 'react-dom';
import {Generation} from './src/components/Generation';
import Dragon from './src/components/Generation';

render(
    <div>
       <h2>Dragon Stack from React</h2> 
       <Generation />
       <Dragon />
    </div>,
    document.getElementById('root')
);