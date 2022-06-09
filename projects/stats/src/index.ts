import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(reader);
matchReader.load();
