
const tetrisManager = new TetrisManager(document);
const localTetris = tetrisManager.createPlayer();
localTetris.element.classList.add('local');
localTetris.run();

const connectionManager = new ConnectionManager(tetrisManager);
connectionManager.connect('ws://' + window.location.hostname + ':443');

const keyListener = (event) => {
	[
		[90, 67, 81, 87, 88],
		[97, 99, 104, 105, 98],
	].forEach((key, index) => {
		const player = localTetris.player;
		if(event.type === 'keydown') {
			if (event.keyCode === key[0]) {
					player.move(-1);
			//move right
				} else if (event.keyCode === key[1]) {
					player.move(1);
				//drop dwon extra postiotn
				}  else if (event.keyCode === key[2]) {
					player.rotate(-1)
				} else if (event.keyCode === key[3]) {
					player.rotate(1)
				}
			}
			if (event.keyCode === key[4]) {
				if (event.type === 'keydown') {
					if (player.dropInterval !== player.DROP_FAST){						
						player.drop();
						player.dropInterval = player.DROP_FAST;
					}
				} else {
					player.dropInterval = player.DROP_SLOW;
				}
			}
		});
};



//moveive pieces based on keys
document.addEventListener('keydown', keyListener);
document.addEventListener('keyup', keyListener);



