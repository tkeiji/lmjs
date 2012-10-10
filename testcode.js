var keiobusreg = "7:05 7:28 7:35 7:47 \
8:02 8:08 8:18 8:24 8:37 8:50 \
9:00 9:20 9:35 \
10:07 10:20 10:27 10:40 10:50 \
11:00 11:07 11:20 11:30 11:50 \
12:00 12:10 12:30 12:50 \
13:00 13:10 13:20 13:40 13:50 \
14:00 14:10 14:20 14:30 14:38 14:46 14:54 \
15:02 15:09 15:16 15:24 15:31 15:43 15:56 \
16:08 16:13 16:25 16:38 16:50 \
17:10 17:23 17:35 17:48 17:55 \
18:08 18:20 18:40 18:47 \
19:07 19:20 19:30 19:40 19:50 \
20:00 20:10 20:20 20:30 20:40 20:50 \
21:00 21:15 21:30 21:50 \
22:10 22:30 22:50 \
23:15";
var keiobustwin = "7:00 7:15 7:32 7:40 7:45 7:55 \
8:12 8:22 8:32 8:42 8:55 \
9:10 9:30 9:50 \
10:00 \
11:40 \
12:20 12:40 \
13:30 \
15:21 15:38 15:51 \
16:03 16:20 16:33 16:45 16:58 \
17:05 17:18 17:30 17:43 \
18:03 18:16 18:28 18:35 18:55 \
19:01 19:15";

// document.writeln(keiobusreg);
// document.writeln(keiobustwin);

var busregArray = keiobusreg.split(" ");
var bustwinArray = keiobustwin.split(" ");
var busArray = [];
var basetime = new Date();
basetime.setSeconds(0);

// document.writeln("busregArray.length = " + busregArray.length ); 
for( var i=0 ; i<busregArray.length ; i++ ) {
	btime = busregArray[i].split(':');
	var bustime = new Date(basetime);
	bustime.setHours(btime[0]);
	bustime.setMinutes(btime[1]);
    busArray.push(bustime);
}
// document.writeln("busArray.length = "+busArray.length );

// document.writeln("bustwinArray.length = " + bustwinArray.length ); 
for( var i=0 ; i<bustwinArray.length ; i++ ) {
	btime = bustwinArray[i].split(':');
	var bustime = new Date(basetime);
	bustime.setHours(btime[0]);
	bustime.setMinutes(btime[1]);
    busArray.push(bustime);
}
// document.writeln("busArray.length = "+busArray.length );

busArray.sort(function(a, b) {
	return ( a > b ? 1 : -1);
});

var currentTime = new Date();
// currentTime.setHours(19);
// currentTime.setMinutes(00);
var diffMin;
var next=false;

min = currentTime.getMinutes();
if (min < 10){ min = "0"+min; } 
document.writeln("Current Time = "+currentTime.getHours()+":"+min);

document.writeln("---------");				
for( var i=0 ; i<busArray.length ; i++ ) {
	diffMin = (currentTime - busArray[i])/60000;
	if ( (diffMin <= 10)&&(diffMin >= -30) ){
		if(next === false){
			if(currentTime<busArray[i]){
				next = true;
				document.writeln("---NOW---");				
			}
		}
		min = busArray[i].getMinutes();
		if (min < 10){ min = "0"+min; } 
		document.writeln(busArray[i].getHours()+":"+min);
	}	
}

document.writeln("---------");
