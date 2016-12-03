
Turns a given div element into a dynamic clock that updates every second.
Time can be system time or from Date() object.

### USAGE:

Use defaults:
```JavaScript
$("div#clock").jqClock();
```

### Options:
all default options
```JavaScript
$("div#clock").jqClock({date: new Date(), locale: "en-Us", mFormat: "numeric", hour12: false, showdate: true});
```

	date			Date object, which you can set. If date is not set, then current time is used.
	locale			Locale for date and time for example "en-Us" or "ru-Ru"
	mFormat			Format for month name.Possible values: "numeric" (12),"long" (December), "short" (Dec)
	hour12			true for 12 hour format (10:00 AM)
	showdate		if false, then show only time


### Commands:
```JavaScript
$("div#clock").jqClock(command);
```

Where command can be "start", "stop", "destroy"

	"stop"		for pausing time
	"start"		for unpausing time
	"destroy"	for destroying jqClock object
