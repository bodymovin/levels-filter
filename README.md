# levels-filter
A module for creating level filters.  
### Usage  

`var levels = require('levels-filter');
var levelsInstance = levels();
levelsInstance.outputBlack = 100;
levelsInstance.gamma = 1.5;
var table = levelsInstance.getTableValues()`

### Properties  
* inputBlack
* outputBlack
* gamma
* outputBlack
* inputBlack


### Methods  

* setLevelValues: accepts an object with one or more of the level properties
* getLevelValues: returns an object with the level properties
* reset: resets all properties to default values
* getTableValues: returns the table values