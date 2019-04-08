const terminalCommands = require('./terminal-commands');

terminalCommands.ls();
terminalCommands.mkdir('new-folder');
terminalCommands.touch('./new-file.txt', 'I\'m New');