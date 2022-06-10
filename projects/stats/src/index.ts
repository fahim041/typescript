import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reporttargets/ConsoleReport";
import { WinAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./summary";

const reader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(reader);
matchReader.load();
const summary = new Summary(new WinAnalysis("Chelsea"), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
