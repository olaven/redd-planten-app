module.exports = {
    getDate : (timestamp) => {
        
        let dateArr = timestamp.split("-"); 

        console.log(dateArr[2][0] + dateArr[2][1]);

        return {
            year: dateArr[0], 
            month: dateArr[1], 
            day: dateArr[2][0] + dateArr[2][1], 
            all: dateArr[0] + "." + dateArr[1] + "." + dateArr[2][0] + dateArr[2][1]
        }
    }, 
    getTime : (timestamp) => {

        let time = timestamp.split("T")[1]; 
        time = time.split(":"); 
        time[time.length-1] = time[time.length-1].split(".")[0]; 

        return {
            hour   : time[0], 
            minute : time[1], 
            second : time[2], 
            all : time[0] + ":" + time[1] + ":" + time[2]
        }
    }
}