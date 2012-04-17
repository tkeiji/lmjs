var keiobusreg = "7:05 7:28 7:35 7:47 \
8:02 8:08 8:18 8:24 8:37 8:50 \
9:00 9:20 9:35 \
10:07 10:20 10:27 10:40 10:50 \
11:00 11:07 11:20 11:30 11:50 \
12:00 12:10 12:30 12:50 \
13:00 13:10 13:20 13:40 13:50 \
14:00 14:10 14:20 14:30 14:38 14:46 14:54 \
15:02 15:09 15:17 15:25 15:32 15:44 15:57 \
16:09 16:14 16:26 16:39 16:51 \
17:11 17:24 17:36 17:49 17:56 \
18:09 18:21 18:41 18:48 \
19:08 19:21 19:31 19:41 19:51 \
20:01 20:11 20:21 20:31 20:41 20:51 \
21:01 21:16 21:31 21:51 \
22:11 22:31 22:51 \
23:16";
var keiobustwin = "7:00 7:15 7:32 7:40 7:45 7:55 \
8:12 8:22 8:32 8:42 8:55 \
9:10 9:30 9:50 \
10:00 \
11:40 \
12:20 12:40 \
13:30 \
15:22 15:39 15:52 \
16:04 16:21 16:34 16:46 16:59 \
17:06 17:19 17:31 17:44 \
18:04 18:17 18:29 18:36 18:56 \
19:02 19:16";

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
