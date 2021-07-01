let cellsContainer = document.getElementById('cells');

const numbercells = () => {
	for (let i = 1; i < 77; i++) {
		let newcell = document.createElement('td');
		newcell.innerText = i;
		newcell.id = 'numbercell';
		cellsContainer.appendChild(newcell);
	}
};
window.onload = function () {
	numbercells();
};

const generateNumber = () => {
	let random = Math.floor(Math.random() * 76) + 1;

	console.log(`generated random number 🤓:${random}`);
	let value = document.querySelectorAll('td');

	for (let i = 0; i < value.length; i++) {
		if (
			value[i].style.color === 'green' &&
			value[i].style.backgroundColor === 'orange'
		) {
			console.log(
				'-----------------used 😛bingo numbers until now------------------',
			);
			console.log(` ${value[i].innerText}`);
			console.log('-----------------------------------');
		} else {
			if (parseInt(value[i].innerText) === random) {
				// console.log(random, 'random number');
				// console.log(parseInt(value[i].innerText), 'bingo number');
				console.log(
					`generated random number: ${random} is matching😍😎 bingo number ${parseInt(
						value[i].innerText,
					)}`,
				);
				value[i].style.color = 'green';
				value[i].style.backgroundColor = 'orange';
			}
		}
	}
};
// let randomNumbers = [];
// const letsrun = () => {
// 	for (let i = 0; i < 77; i++) {
// 		let random = Math.floor(Math.random() * 76) + 1;
// 		randomNumbers.push(random);
// 	}
// 	return randomNumbers;
// };
// console.log(letsrun());
