import React from 'react';
import { render } from 'react-dom';
import MyReactComponent from './MyReactComponent';

const rootElement = document.getElementById('app');

render(<MyReactComponent />, rootElement);