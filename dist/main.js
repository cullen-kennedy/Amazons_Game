/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/class/board.js":
/*!****************************!*\
  !*** ./src/class/board.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return board; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * This class takes care of the visual board\r\n */\nvar board =\n/*#__PURE__*/\nfunction () {\n  function board(room) {\n    _classCallCheck(this, board);\n\n    this.room = room;\n    this.stageProps = {\n      size: 500,\n      num_rows: 10,\n      num_cols: 10,\n      block_size: 500 / 10\n    };\n  }\n\n  _createClass(board, [{\n    key: \"displayBoard\",\n    value: function displayBoard(ctx) {\n      for (var r = 0; r < this.stageProps.num_rows; r++) {\n        for (var b = 0; b < this.stageProps.num_rows; b++) {\n          ctx.strokeRect(r * this.stageProps.block_size, b * this.stageProps.block_size, this.stageProps.block_size, this.stageProps.block_size);\n        }\n      }\n    }\n    /**\r\n     * Note:\r\n     * Most of these functions only use player.colour or oppcolour \r\n     * from the player object. Change it.\r\n     */\n\n  }, {\n    key: \"default\",\n    value: function _default(ctx, player) {\n      var _this = this;\n\n      ctx.fillStyle = player.colour;\n      player.pieces.forEach(function (value) {\n        console.log('default');\n        ctx.fillRect(value.col * _this.stageProps.block_size, value.row * _this.stageProps.block_size, _this.stageProps.block_size, _this.stageProps.block_size);\n      });\n    }\n  }, {\n    key: \"oppDefault\",\n    value: function oppDefault(ctx, player) {\n      var _this2 = this;\n\n      ctx.fillStyle = player.oppColour;\n      player.oppPieces.forEach(function (value) {\n        console.log('oppDefault');\n        ctx.fillRect(value.col * _this2.stageProps.block_size, value.row * _this2.stageProps.block_size, _this2.stageProps.block_size, _this2.stageProps.block_size);\n      });\n    }\n  }, {\n    key: \"moveStart\",\n    value: function moveStart(ctx, player) {\n      console.log(\"movestart\");\n      ctx.fillStyle = 'green';\n      ctx.fillRect(player.selection.col * this.stageProps.block_size, player.selection.row * this.stageProps.block_size, this.stageProps.block_size, this.stageProps.block_size);\n    }\n  }, {\n    key: \"moveEnd\",\n    value: function moveEnd(ctx, player, x, y) {\n      ctx.fillStyle = player.colour;\n      ctx.fillRect(x * this.stageProps.block_size, y * this.stageProps.block_size, this.stageProps.block_size, this.stageProps.block_size);\n    }\n  }, {\n    key: \"shoot\",\n    value: function shoot(ctx, x, y) {\n      ctx.fillStyle = 'black';\n      ctx.fillRect(x * this.stageProps.block_size, y * this.stageProps.block_size, this.stageProps.block_size, this.stageProps.block_size);\n    }\n  }, {\n    key: \"oppMove\",\n    value: function oppMove(ctx, player, x, y) {\n      ctx.fillStyle = player.oppColour;\n      ctx.fillRect(x * this.stageProps.block_size, y * this.stageProps.block_size, this.stageProps.block_size, this.stageProps.block_size);\n    }\n  }, {\n    key: \"oppShoot\",\n    value: function oppShoot(ctx, x, y) {\n      ctx.fillStyle = 'black';\n      ctx.fillRect(x * this.stageProps.block_size, y * this.stageProps.block_size, this.stageProps.block_size, this.stageProps.block_size);\n    }\n  }]);\n\n  return board;\n}();\n\n\n\n//# sourceURL=webpack:///./src/class/board.js?");

/***/ }),

/***/ "./src/class/game.js":
/*!***************************!*\
  !*** ./src/class/game.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return game; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * This class takes care of the games logic\r\n */\nvar game =\n/*#__PURE__*/\nfunction () {\n  function game(roomId) {\n    _classCallCheck(this, game);\n\n    this.roomID = roomId;\n    this.empty = 0;\n    this.arrow = 9;\n    this.player1IDs = [1, 2, 3, 4];\n    this.player2IDs = [5, 6, 7, 8];\n    this.player1Pos = [{\n      \"row\": 3,\n      \"col\": 0\n    }, {\n      \"row\": 0,\n      \"col\": 3\n    }, {\n      \"row\": 0,\n      \"col\": 6\n    }, {\n      \"row\": 3,\n      \"col\": 9\n    }];\n    this.player2Pos = [{\n      \"row\": 6,\n      \"col\": 0\n    }, {\n      \"row\": 9,\n      \"col\": 3\n    }, {\n      \"row\": 9,\n      \"col\": 6\n    }, {\n      \"row\": 6,\n      \"col\": 9\n    }];\n    this.board = [[0, 0, 0, 2, 0, 0, 3, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 4], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [5, 0, 0, 0, 0, 0, 0, 0, 0, 8], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 6, 0, 0, 7, 0, 0, 0]];\n    this.moves = 0;\n  }\n\n  _createClass(game, [{\n    key: \"moveEnd\",\n    value: function moveEnd(player, x, y) {\n      if (this.board[y][x] == this.empty) {\n        this.board[player.selection.row][player.selection.col] = 0;\n        player.pieces.set(player.selection.ID, {\n          row: y,\n          col: x\n        });\n        this.board[y][x] = player.selection.ID;\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"oppMove\",\n    value: function oppMove(player, ID, x, y) {\n      this.board[player.oppPieces.get(ID).row][player.oppPieces.get(ID).col] = 0;\n      player.oppPieces.set(ID, {\n        row: y,\n        col: x\n      });\n      this.board[y][x] = ID;\n    }\n  }, {\n    key: \"shoot\",\n    value: function shoot(x, y) {\n      if (this.board[y][x] == this.empty) {\n        this.board[y][x] = this.arrow; //print the board to check\n\n        console.log(this.board);\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"oppShoot\",\n    value: function oppShoot(x, y) {\n      this.board[y][x] = this.arrow;\n    }\n  }]);\n\n  return game;\n}();\n\n\n\n//# sourceURL=webpack:///./src/class/game.js?");

/***/ }),

/***/ "./src/class/myCanvas.js":
/*!*******************************!*\
  !*** ./src/class/myCanvas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return myCanvas; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar myCanvas = function myCanvas() {\n  _classCallCheck(this, myCanvas);\n\n  this.canvas = document.getElementById('canvas');\n  this.ctx = canvas.getContext('2d');\n  this.stageProps = {\n    size: 500,\n    num_rows: 5,\n    num_cols: 5,\n    block_size: 500 / 5\n  };\n  this.canvas.width = 500;\n  this.canvas.height = 500;\n};\n\n\n\n//# sourceURL=webpack:///./src/class/myCanvas.js?");

/***/ }),

/***/ "./src/class/player.js":
/*!*****************************!*\
  !*** ./src/class/player.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return player; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * This class is mostly for player identifying variables for now\r\n */\nvar player =\n/*#__PURE__*/\nfunction () {\n  function player(name, colour, oppColour, turn) {\n    _classCallCheck(this, player);\n\n    this.myTurnStart = turn;\n    this.myTurnEnd = false;\n    this.myShoot = false;\n    this.colour = colour;\n    this.oppColour = oppColour;\n    this.name = name;\n    this.selection = {\n      ID: 0,\n      row: 0,\n      //row and col may not be needed\n      col: 0\n    };\n    this.pieces = new Map();\n    this.oppPieces = new Map();\n  }\n\n  _createClass(player, [{\n    key: \"setup\",\n    value: function setup(ID, startPos, oppID, oppStartPos) {\n      this.pieces.set(ID[0], startPos[0]);\n      this.pieces.set(ID[1], startPos[1]);\n      this.pieces.set(ID[2], startPos[2]);\n      this.pieces.set(ID[3], startPos[3]); //This might not be needed either, but I'll keep it and update it \n      //it for now just incase :)\n\n      this.oppPieces.set(oppID[0], oppStartPos[0]);\n      this.oppPieces.set(oppID[1], oppStartPos[1]);\n      this.oppPieces.set(oppID[2], oppStartPos[2]);\n      this.oppPieces.set(oppID[3], oppStartPos[3]);\n    }\n  }]);\n\n  return player;\n}();\n\n\n\n//# sourceURL=webpack:///./src/class/player.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/player */ \"./src/class/player.js\");\n/* harmony import */ var _class_myCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/myCanvas */ \"./src/class/myCanvas.js\");\n/* harmony import */ var _class_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class/game */ \"./src/class/game.js\");\n/* harmony import */ var _class_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class/board */ \"./src/class/board.js\");\n\n\n\n\nvar socket = io.connect('http://localhost:5000');\nvar canvas = new _class_myCanvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar player, game, board;\n/***************************************************************************************\r\n * Player 1 functions\r\n */\n//New game\n\n$('#new').on('click', function () {\n  var name = $('#nameNew').val();\n  socket.emit('createGame', {\n    name: name\n  }); //server.js on.createGame\n\n  player = new _class_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, 'blue', 'red', true); //first player with name and initial starting point\n}); //Called by server.js with on.createGame\n//It passes back the name of the player and the room name that was created\n\nsocket.on('newGame', function (data) {\n  game = new _class_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"](data.room);\n  board = new _class_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"](data.room);\n  player.setup(game.player1IDs, game.player1Pos, game.player2IDs, game.player2Pos);\n  board.displayBoard(canvas.ctx);\n  document.getElementById(\"message\").innerHTML = data.room + ' ' + player.name + ' ' + player.myTurnStart;\n}); //Called by server.js, broadcast to player 1 by player 2\n//sends player 1 the room name and a name\n//CHECK WHAT NAME IS SENT BACK?\n\nsocket.on('player1', function (data) {\n  var message = 'Hello, player1'; //Default value are hardcoded in game and player class\n\n  board[\"default\"](canvas.ctx, player);\n  board.oppDefault(canvas.ctx, player);\n  canvas.canvas.addEventListener('click', function (e) {\n    processClick(e.clientX, e.clientY);\n  });\n});\n/****************************************************************************************\r\n * Player 2 functions\r\n */\n//Join created game\n\n$('#join').on('click', function () {\n  var name = $('#nameJoin').val();\n  var roomID = $('#room').val();\n  socket.emit('joinGame', {\n    name: name,\n    room: roomID\n  }); //server.js on.joinGame \n\n  player = new _class_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, 'red', 'blue', false); //second player with name and initial starting point\n}); //Displays board and does the same as on.'player1'\n\nsocket.on('player2', function (data) {\n  var message = 'Hello, player2';\n  game = new _class_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"](data.room);\n  board = new _class_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"](data.room);\n  player.setup(game.player2IDs, game.player2Pos, game.player1IDs, game.player1Pos);\n  document.getElementById(\"message\").innerHTML = data.room;\n  board.displayBoard(canvas.ctx);\n  board[\"default\"](canvas.ctx, player);\n  board.oppDefault(canvas.ctx, player);\n  /*\r\n  socket.emit('default', {\r\n      row: player.piece.row,\r\n      col: player.piece.col,\r\n      room: data.room\r\n  });\r\n  */\n\n  canvas.canvas.addEventListener('click', function (e) {\n    processClick(e.clientX, e.clientY);\n  });\n});\n/**************************************************************************\r\n* Game Controller functions\r\n* Game class controls the logic while board class controls the\r\n* visuals. Player class also keeps track of own pieces, opponent\r\n* pieces and selected piece\r\n**************************************************************************/\n\n/**\r\n * Opponent functions to update board with data from server\r\n */\n//Update Move\n\nsocket.on('oppMove', function (data) {\n  console.log('oppmove');\n  canvas.ctx.fillStyle = 'white';\n  canvas.ctx.fillRect(player.oppPieces.get(data.selID).col * 50, player.oppPieces.get(data.selID).row * 50, 50, 50);\n  game.oppMove(player, data.selID, data.col, data.row);\n  board.oppMove(canvas.ctx, player, data.col, data.row);\n}); //Update opponents arrow\n\nsocket.on('oppShoot', function (data) {\n  game.oppShoot(data.col, data.row);\n  board.oppShoot(canvas.ctx, data.col, data.row);\n  player.myTurnStart = true;\n}); //The event listener is always listening, \n//but the action that is takes depends on player variables\n\nfunction processClick(x, y) {\n  if (player.myTurnStart == true) {\n    var xcoord = ~~((x - canvas.canvas.offsetLeft) / 50);\n    var ycoord = ~~((y - canvas.canvas.offsetTop) / 50);\n\n    if (processMoveStart(xcoord, ycoord) == true) {\n      player.myTurnStart = false;\n      player.myTurnEnd = true;\n    } else {\n      console.log(\"Not your piece\");\n    }\n  } else if (player.myTurnEnd == true) {\n    var _xcoord = ~~((x - canvas.canvas.offsetLeft) / 50);\n\n    var _ycoord = ~~((y - canvas.canvas.offsetTop) / 50);\n\n    if (processMoveEnd(_xcoord, _ycoord) == true) {\n      socket.emit('playersMove', {\n        selID: player.selection.ID,\n        newrow: _ycoord,\n        newcol: _xcoord,\n        room: game.roomID\n      });\n      player.myTurnEnd = false;\n      player.myShoot = true;\n    } else {\n      console.log('Not Legal Move');\n    }\n  } else if (player.myShoot == true) {\n    var _xcoord2 = ~~((x - canvas.canvas.offsetLeft) / 50);\n\n    var _ycoord2 = ~~((y - canvas.canvas.offsetTop) / 50);\n\n    if (processShoot(_xcoord2, _ycoord2) == true) {\n      socket.emit('playersShoot', {\n        row: _ycoord2,\n        col: _xcoord2,\n        room: game.roomID\n      });\n      player.myShoot = false; //print player instant pieces\n\n      console.log(player.pieces);\n      console.log(player.oppPieces);\n    } else {\n      console.log(\"Not legal shot\");\n    }\n  } else {\n    console.log(\"not your turn\");\n  }\n\n  function processMoveStart(x, y) {\n    console.log(game.board[y][x]);\n\n    if (player.pieces.has(game.board[y][x])) {\n      player.selection.ID = game.board[y][x];\n      player.selection.row = y;\n      player.selection.col = x;\n      board.moveStart(canvas.ctx, player);\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  function processMoveEnd(x, y) {\n    if (game.moveEnd(player, x, y) == true) {\n      //Replace these next two lines with a function\n      canvas.ctx.fillStyle = 'white';\n      canvas.ctx.fillRect(player.selection.col * 50, player.selection.row * 50, 50, 50);\n      board.moveEnd(canvas.ctx, player, x, y);\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  function processShoot(x, y) {\n    if (game.shoot(x, y) == true) {\n      board.shoot(canvas.ctx, x, y);\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });