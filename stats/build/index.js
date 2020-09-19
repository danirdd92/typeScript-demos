"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./composition-approach/CsvFileReader");
var MatchReader_1 = require("./composition-approach/MatchReader");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summery_1 = require("./Summery");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
var summery = new Summery_1.Summery(new WinsAnalysis_1.WinsAnalysis('Man United'), 
// new ConsoleReport()
new HtmlReport_1.HtmlReport('report.html'));
summery.buildAndPrintReport(matchReader.matches);
