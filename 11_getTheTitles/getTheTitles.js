const getTheTitles = function (arr) {
  let titles = [];

  for (let i = 0; i < arr.length; i++) {
    let currentTitle = arr[i].title;
    titles.push(currentTitle);
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
