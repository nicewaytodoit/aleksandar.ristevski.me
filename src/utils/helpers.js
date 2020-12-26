import * as moment from 'moment';

/* eslint-disable import/prefer-default-export */
export const formatReadingTime = (minutes) => {
  const cups = Math.round(minutes / 5);
  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
};

export const formatDate = (date, format) => {
  return moment(date || new Date()).format(!format?'DD/MM/YYYY HH:mm':format);
};