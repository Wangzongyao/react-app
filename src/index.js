import React from 'react';
import ReactDOM from 'react-dom';

import WebpackDemo from './pages/index';

ReactDOM.render(<WebpackDemo />, document.getElementById('app'));

// if (module.hot) {
// 	module.hot.accept('./math.js', function () {
// 		component();
// 	})
// }
