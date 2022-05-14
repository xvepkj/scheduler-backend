import moment from "moment";


const util = {};

util.constants = {
   DATE_FORMAT: "YYYY-MM-DD",
   TIME_FORMAT: "HH:mm"
 };

 util.date = {};

 util.date.current = function () {
   return moment().format(util.constants.DATE_FORMAT);
 };
 
 util.date.isValid = function (d) {
   return moment(d, util.constants.DATE_FORMAT, true).isValid();
 };

 util.date.isBefore = function (date1, date2) {
   let format = util.constants.DATE_FORMAT;
   return moment(date1, format).isBefore(moment(date2, format));
 };

util.time = {};

 util.time.current = function () {
   return moment().format(util.constants.TIME_FORMAT);
 };
 
 util.time.isValid = function (t) {
   return moment(t, util.constants.TIME_FORMAT, true).isValid();
 };

 util.time.isBeforeTime = function (time1, time2) {
   let format = util.constants.TIME_FORMAT;
   return moment(time1, format).isBefore(moment(time2, format));
 };

 export default util
 