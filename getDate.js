exports.getTodayDateLong = function () {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
};

//export date and month only
exports.getTodayDateShort = function () {
  let today = new Date();

  let options = {
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
};
