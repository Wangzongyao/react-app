import _ from 'lodash';
import './style.css';
import Icon from './webpack.png';

function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	// 将图像添加到我们现有的 div。
	var myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);
	
	return element;
}

document.body.appendChild(component());
