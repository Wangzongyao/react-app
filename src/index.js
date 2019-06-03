// import _ from 'lodash';
import { cube } from './math.js';
import printMe from './print';
import './style.css';
// import Icon from './webpack.png';

function component() {
	var element = document.createElement('div');

	element.classList.add('hello');
	element.innerHTML = '5 cubed is equal to ' + cube(5);

	return element;
}

document.body.appendChild(component());


if (module.hot) {
	module.hot.accept('./print.js', function () {
		console.log('Accepting the updated printMe module!');
		printMe();
	})
}
