import _ from 'lodash';
import { cube } from './math.js';
import printMe from './print';
import './style.css';
import Icon from './webpack.png';

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	/* 	// 将图像添加到我们现有的 div。
		var myIcon = new Image();
		myIcon.src = Icon;
		element.appendChild(myIcon); */

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());


if (module.hot) {
	module.hot.accept('./print.js', function () {
		console.log('Accepting the updated printMe module!');
		printMe();
	})
}
