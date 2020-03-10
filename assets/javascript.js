//VARIABLE DECLARATION GOES HERE
let name, yourname, nation, x, i, tree1, tree2, tree3, tree4, dt, hrs, min, sec, time;

//ASK, STORE & RETRIEVE USER NAME FROM SESSION STORAGE
if (typeof(Storage) !== "undefined") {
    yourname = sessionStorage.getItem("yourname");
    if(yourname == null){
        name = prompt("Please enter your name:", "User");
        sessionStorage.setItem("yourname", name);
    }

    document.getElementById("yourname").innerHTML = sessionStorage.getItem("yourname");
} else {
    name = prompt("Please enter your name:", "User");
    if (name == null || name == "") {
        name = "User";
    }
    document.getElementById("yourname").innerHTML = name;
}

//SWITCHING NATION INFO CODE START HERE
$('.flag').click(function () {
    $('.welcome').hide();
    $('[id*=info-]').hide();
    $('[id*=ship-]').hide();
    $('.wows-info').show();
    $('.wows-dd').show();
    $('.wows-ca').show();
    $('.wows-bb').show();
    $('.wows-cv').show();
    $('#info-' + $(this).attr('target')).show();
    $('#dd-info-' + $(this).attr('target')).show();
    $('#ca-info-' + $(this).attr('target')).show();
    $('#bb-info-' + $(this).attr('target')).show();
    $('#cv-info-' + $(this).attr('target')).show();
    nation = $(this).attr('target');
    tree1 = 1; //Identity for DD Ship
    tree2 = 1; //Identity for CA Ship
    tree3 = 1; //Identity for BB Ship
    tree4 = 1; //Identity for CV Ship
    document.getElementById("tree1").innerHTML = "View Ship Tree";
    document.getElementById("tree2").innerHTML = "View Ship Tree";
    document.getElementById("tree3").innerHTML = "View Ship Tree";
    document.getElementById("tree4").innerHTML = "View Ship Tree";
    $('.tree').show();

    //Hide unneeded DIV for some nations
    if(nation == "ussr" || nation == "fr" || nation == "ita" || nation == "pa" || nation == "eu"){
    	$('.wows-cv').hide();
    } else if (nation == "cmw"){
    	$('.wows-bb').hide();
    	$('.wows-cv').hide();
    } else if (nation == "pac"){
    	$('.wows-dd').hide();
    	$('.wows-bb').hide();
    	$('.wows-cv').hide();
    }

    //Hide and Rearrange content for some nations
    if(nation == "gmy"){
    	$('#cv-info-' + nation).hide();
    	$('#cv-ship-' + nation).show();
    	x = document.getElementsByClassName("tree");
		for(i=6;i<=7;i++){
			x[i].style.display = 'none';
		}
    } else if(nation == "cmw"){
    	$('.tree').hide();
    	$('#dd-info-' + nation).hide();
    	$('#ca-info-' + nation).hide();
    	$('#dd-ship-' + nation).show();
    	$('#ca-ship-' + nation).show();
    } else if(nation == "ita"){
    	$('.tree').hide();
    	$('#dd-info-' + nation).hide();
    	$('#ca-info-' + nation).hide();
    	$('#bb-info-' + nation).hide();
    	$('#dd-ship-' + nation).show();
    	$('#ca-ship-' + nation).show();
		$('#bb-ship-' + nation).show();
    } else if(nation == "pa"){
    	$('.tree').hide();
    	$('#ca-info-' + nation).hide();
    	$('#bb-info-' + nation).hide();
    	$('#ca-ship-' + nation).show();
		$('#bb-ship-' + nation).show();
		x = document.getElementsByClassName("tree");
		for(i=0;i<=1;i++){
			x[i].style.display = 'inline-block';
		}
    } else if(nation == "eu"){
    	$('.tree').hide();
    	$('#dd-info-' + nation).hide();
    	$('#ca-info-' + nation).hide();
    	$('#bb-info-' + nation).hide();
    	$('#dd-ship-' + nation).show();
    	$('#ca-ship-' + nation).show();
		$('#bb-ship-' + nation).show();
    } else if(nation == "pac"){
    	$('.tree').hide();
    	$('#ca-info-' + nation).hide();
    	$('#ca-ship-' + nation).show();
    }

});

//SWITCHING SHIP INFO & TREE CODE START HERE
$('#tree1').click(function() {
	if (tree1 == 1){
		$('#' + $(this).attr('target') + '-info-' + nation).hide();
    	$('#' + $(this).attr('target') + '-ship-' + nation).show();
    	tree1 = 0;
    	document.getElementById("tree1").innerHTML = "View Ship Info";
	} else {
		$('#' + $(this).attr('target') + '-info-' + nation).show();
    	$('#' + $(this).attr('target') + '-ship-' + nation).hide();
    	tree1 = 1;
    	document.getElementById('tree1').innerHTML = "View Ship Tree";
	};  
});

$('#tree2').click(function() {
	if (tree2 == 1){
		$('#' + $(this).attr('target') + '-info-' + nation).hide();
    	$('#' + $(this).attr('target') + '-ship-' + nation).show();
    	tree2 = 0;
    	document.getElementById("tree2").innerHTML = "View Ship Info";
	} else {
		$('#' + $(this).attr('target') + '-info-' + nation).show();
    	$('#' + $(this).attr('target') + '-ship-' + nation).hide();
    	tree2 = 1;
    	document.getElementById('tree2').innerHTML = "View Ship Tree";
	};  
});

$('#tree3').click(function() {
	if (tree3 == 1){
		$('#' + $(this).attr('target') + '-info-' + nation).hide();
    	$('#' + $(this).attr('target') + '-ship-' + nation).show();
    	tree3 = 0;
    	document.getElementById("tree3").innerHTML = "View Ship Info";
	} else {
		$('#' + $(this).attr('target') + '-info-' + nation).show();
    	$('#' + $(this).attr('target') + '-ship-' + nation).hide();
    	tree3 = 1;
    	document.getElementById('tree3').innerHTML = "View Ship Tree";
	};  
});

$('#tree4').click(function() {
	if (tree4 == 1){
		$('#' + $(this).attr('target') + '-info-' + nation).hide();
    	$('#' + $(this).attr('target') + '-ship-' + nation).show();
    	tree4 = 0;
    	document.getElementById("tree4").innerHTML = "View Ship Info";
	} else {
		$('#' + $(this).attr('target') + '-info-' + nation).show();
    	$('#' + $(this).attr('target') + '-ship-' + nation).hide();
    	tree4 = 1;
    	document.getElementById('tree4').innerHTML = "View Ship Tree";
	};  
});

// LOCAL CLOCK SCRIPT STARTING HERE
function lclock() {
    dt = new Date();
    hrs = dt.getHours();
    min = dt.getMinutes();
    sec = dt.getSeconds();

    hrs = Clock(hrs);
    min = Clock(min);
    sec = Clock(sec);

    document.getElementById('dc').innerHTML = hrs + ":" + min;
    document.getElementById('dc_second').innerHTML = sec;

    if (hrs > 12) { 
        document.getElementById('dc_hour').innerHTML = 'PM'; 
    }
    else { 
        document.getElementById('dc_hour').innerHTML = 'AM'; 
    }

    time = setInterval('lclock()', 1000);
}

function Clock(ticVal) {
    if (ticVal < 10) {
        ticVal = "0" + ticVal;
    }
    return ticVal;
}

