/**
 * Utility functions for time
 *
 * @format
 */

const MS_IN_SEC = 1000;
const SECS_IN_MIN = 60;
const MINS_IN_HR = 60;
const HRS_IN_DAY = 24;
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;

const DAYS_IN_YEAR = 365;
const DAYS_IN_HALF = 365 / 2;
const DAYS_IN_QUARTER = 365 / 4;

export const secToMs = (seconds: number): number => {
	return seconds * MS_IN_SEC;
};
export const msToSecs = (ms: number): number => {
	return ms / MS_IN_SEC;
};

export const minsToSecs = (minutes: number): number => {
	return minutes * SECS_IN_MIN;
};
export const secsToMins = (secs: number): number => {
	return secs / SECS_IN_MIN;
};

export const hrsToSecs = (hours: number): number => {
	return hours * minsToSecs(MINS_IN_HR);
};
export const secsToHrs = (secs: number): number => {
	return secs / minsToSecs(MINS_IN_HR);
};

export const daysToSecs = (days: number): number => {
	return days * hrsToSecs(HRS_IN_DAY);
};
export const secsToDays = (secs: number): number => {
	return secs / hrsToSecs(HRS_IN_DAY);
};

export const weeksToSecs = (weeks: number): number => {
	return weeks * daysToSecs(DAYS_IN_WEEK);
};
export const secsToWeeks = (secs: number): number => {
	return secs / daysToSecs(DAYS_IN_WEEK);
};

export const monthsToSecs = (months: number): number => {
	return months * daysToSecs(DAYS_IN_MONTH);
};
export const secsToMonths = (secs: number): number => {
	return secs / daysToSecs(DAYS_IN_MONTH);
};

export const quartersToSecs = (quarters: number): number => {
	return quarters * daysToSecs(DAYS_IN_QUARTER);
};
export const secsToQuarters = (secs: number): number => {
	return secs / daysToSecs(DAYS_IN_QUARTER);
};

export const halvesToSecs = (halves: number): number => {
	return halves * daysToSecs(DAYS_IN_HALF);
};
export const secsToHalves = (secs: number): number => {
	return secs / daysToSecs(DAYS_IN_HALF);
};

export const yearsToSec = (years: number): number => {
	return years * daysToSecs(DAYS_IN_YEAR);
};
export const secsToYears = (secs: number): number => {
	return secs / daysToSecs(DAYS_IN_YEAR);
};
