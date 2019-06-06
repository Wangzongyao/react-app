import ReactDOM from 'react-dom';
import WebpackDemo from './pages/home/index.js';

ReactDOM.render(<WebpackDemo />, document.getElementById('app'));

// if (module.hot) {
// 	module.hot.accept('./math.js', function () {
// 		component();
// 	})
// }
