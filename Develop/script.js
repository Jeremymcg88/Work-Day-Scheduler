// This function sets and displays the current date
function getCurrentDate() {
    // Thursday September 3 format
    var currentDate = moment().format('dddd, MMMM, Do');
    $("#currentDay").text(currentDate);
};

