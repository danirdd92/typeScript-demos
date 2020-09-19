import { CsvFileReader } from './composition-approach/CsvFileReader';
import { MatchReader } from './composition-approach/MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summery } from './Summery';
import { HtmlReport } from './reportTargets/HtmlReport';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

const summery = new Summery(
	new WinsAnalysis('Man United'),
	// new ConsoleReport()
	new HtmlReport('report.html')
);

summery.buildAndPrintReport(matchReader.matches);
