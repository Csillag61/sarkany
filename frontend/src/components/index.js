import React from 'react';
import {render} from 'react-dom';
import {Generation} from './Generation';
import Dragon from './Generation';

render(
    <div>
       <Generation />
       <Dragon />
    </div>,
    document.getElementById('root')
);