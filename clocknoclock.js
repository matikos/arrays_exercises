const get_minutes_between = (start,end) => {

  //Making sure that both start and end have uniform length
  if (start.length == 6) {
    start = "0" + start
  };
  if (end.length == 6) {
    end = "0" + end
  };
  //Setting variables to hold time markers
  let startTime = 0;
  let endTime = 0;

  //Parsing information from the input string
  if (start.includes('a')) {
    startTime = (Number(start.slice(0,2)) * 60) + (Number(start.slice(3,5)))
  } else {
    startTime = (Number(start.slice(0,2)) + 12) * 60 + (Number(start.slice(3,5)))
    };
  if (end.includes('a')) {
    endTime = (Number(end.slice(0,2)) * 60) + (Number(end.slice(3,5)))
  } else {
    endTime = (Number(end.slice(0,2)) + 12) * 60 + (Number(end.slice(3,5)))
    };
    let diff = 0;
    if (endTime > startTime) {
      diff = endTime - startTime;
      console.log(`It is ${diff} minutes between ${start} and ${end}`);
    } else {
      diff = startTime - endTime;
      console.log(`It is ${diff} minutes between ${end} and ${start}`);
    };
  

  
}
get_minutes_between("1:30pm", "6:45am");