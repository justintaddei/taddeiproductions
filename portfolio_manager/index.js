"use strict";
exports.__esModule = true;
var path_1 = require("path");
var PORTFOLIO_DIR = path_1.join(__dirname, 'assets', 'portfolio');
/**
 * Category > photo[]
 */
var portfolioRecords = new Map();
var directories = getDirectories(PORTFOLIO_DIR);
