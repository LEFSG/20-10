<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Chúc Mừng Ngày 20/10</title>
</head>
<body>
	<script type="text/javascript" src="lib.js"></script>
	<script type="text/javascript">
		var scrWidth = window.innerWidth;
		var scrHeight = window.innerHeight;
		var game = new Phaser.Game(scrWidth, scrHeight, Phaser.CANVAS, '', 
			{preload: preload, create: create, update: update});
		var message;
		var roses;

		function preload() {
			game.load.spritesheet('firework1', 'firework1.png', 128, 128);
			game.load.spritesheet('firework2', 'firework2.png', 128, 128);
			game.load.spritesheet('firework3', 'firework3.png', 128, 128);
			game.load.image('message', 'message.png');
			game.load.image('roses', 'roses.jpg');
		}

		function create() {
			message = game.add.image(game.width/2, game.height/2, 'message');
			message.anchor.setTo(0.5);
			var messageScale = (scrWidth > scrHeight) ? game.height/(1.25*message.width) :
			game.width/(1.25*message.width);
			message.scale.setTo(messageScale);

			game.time.events.repeat(100, 2000, function() {
				for(var i = 0; i < 3; i++) {
					var f1 = game.add.sprite(game.rnd.integerInRange(10, game.width - 10), 
						game.rnd.integerInRange(10, game.height - 10), 'firework1');
					f1.animations.add('fire1');
					f1.animations.play('fire1', 20, false, true);

					var f2 = game.add.sprite(game.rnd.integerInRange(10, game.width - 10), 
						game.rnd.integerInRange(10, game.height - 10), 'firework2');
					f2.animations.add('fire2');
					f2.animations.play('fire2', 20, false, true);

					var f3 = game.add.sprite(game.rnd.integerInRange(10, game.width - 10), 
						game.rnd.integerInRange(10, game.height - 10), 'firework3');
					f3.animations.add('fire3');
					f3.animations.play('fire3', 20, false, true);
				}
			});

			game.time.events.add(4200, function() {
				var messageTwn = game.add.tween(message.scale).to({x: 0, y: 0}, 500, 'Linear', true);
				messageTwn.onComplete.add(function() {
					message.kill();
					roses = game.add.image(game.width/2, game.height/2, 'roses');
					roses.anchor.setTo(0.5);
					var rosesScale = (scrWidth > scrHeight) ? game.height/(1.15*roses.width) :
						game.width/(1.15*roses.width);
					roses.scale.setTo(0);

					var rTwn = game.add.tween(roses.scale).to({x: rosesScale, y: rosesScale}, 600, 'Linear', true, 200);
				});
			});
		}

		function update() {
			if(message) {
				game.world.bringToTop(message);
			}
			if(roses) {
				game.world.bringToTop(roses);
			}
		}
	</script>
</body>
</html>