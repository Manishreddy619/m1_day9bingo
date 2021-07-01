let cellsContainer = document.getElementById('cells');

const numbercells = () => {
	for (let i = 1; i < 77; i++) {
		let newcell = document.createElement('td');
		newcell.innerText = i;
		newcell.classList.add('numbercell');
		cellsContainer.appendChild(newcell);
	}
};

numbercells();
const generateNumber = () => {
	let random = Math.floor(Math.random() * 76) + 1;
	// console.log(random);
	let value = document.querySelectorAll('td');

	for (let i = 0; i < value.length; i++) {
		if (parseInt(value[i].innerText) === random) {
			value[i].style.color = 'green';
			value[i].style.backgroundColor = 'orange';
		}
	}
};
