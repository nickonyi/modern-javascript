const moment = require("moment");
console.log(moment().startOf("hour").fromNow());
console.log(moment().startOf("day").fromNow());
console.log(moment().endOf("day").fromNow());
