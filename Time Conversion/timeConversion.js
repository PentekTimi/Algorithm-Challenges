function timeConversion(s) {
    // extract the hour from the string and turn it into a number
    let hour = Number(s.substring(0,2));
    // extract the minutes and seconds from the string
    let minutes = s.substring(2, 8);
    // check if the string includes pm or am
    if (s.includes("PM") && hour < 12) {
        // if it includes pm check if the hour is less than 12, in which case changes need to be made
        // convert the hour and return the new string
        let convertedHour = hour + 12;
        return convertedHour.toString() + minutes;
    } else if (s.includes("AM") && hour === 12) {
        // if the string contains am, check if the hour is 12, in which case changes need to be made
        // convert the hour and return the updated string
        let convertedHour = hour - 12;
        return "0" + convertedHour.toString() + minutes; 
    } else {
        return s.substring(0,8);
    }

}