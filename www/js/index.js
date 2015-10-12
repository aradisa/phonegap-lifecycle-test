var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
		//the event listener is defined, making sure that PhoneGap is ready
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		//jQuery used to output to the display
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		//event outputting to the phone informing that PhoneGap is ready
		/*alert*/console.log("device ready");
        //event listener for resume and pause of the application
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		/*alert*/console.log("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
