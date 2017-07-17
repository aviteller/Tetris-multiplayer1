<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Tetris</title>
	<style>
		body{
			background: #202028;
			color: #fff;
			display: flex;
			font-family: sans-serif;
			font-size: 2em;
			text-align: center;
		}
		.player{
			flex:1 1 auto;
		}

		.player.local canvas {
			border-color: white;
		}

		canvas {
			border: solid .2em #707070;
			height:90vh;
		}
	</style>
</head>
<body>
<template id="player-template">
	<div class="player">
		<div class="score"></div>
		<canvas class="tetris" width="240" height="400"></canvas>
	</div>
</template>

<embed src="music/tetris.mp3" autostart="true" loop="true" width="2" height="0">
</embed>


	<script src="client/tetris.js"></script>
	<script src="client/tetrismanager.js"></script>
	<script src="client/connection-manager.js"></script>
	<script src="client/events.js"></script>
	<script src="client/arena.js"></script>
	<script src="client/player.js"></script>
	<script src="client/app.js"></script>
</body>
</html>