function lstMenu_OnTouch(title, body, type, index){
	//Close Drawer
	app.CloseDrawer("Left");

	//Highlight chosen menu item
	if( this==lstMenu1 ) lstMenu2.SelectItemByIndex(-1);
	else lstmenu2.SelectItemByIndex(-1);
	this.SelectItemByIndex( index, true );
	nav_to(title);
}

function nav_to(g){
	var fr,to;

	fr = act.GetText();
	switch(g){
		case "Home":
			to = "layMain";
			break;
		case "Tutorial":
			to = "layTut";
			break;
		case "Excercise":
			to = "layExr";
			break;
		case "Projects":
			to = "layPro";
			break;
		case "About app":
			to = "layAbt1";
			break;
		case "Donate":
			to = "layDon";
			break;
		case "About Me":
			to = "layAme";
			break;
		case "Contact Me":
			to = "layCnt";
			break;
		case "Website":
			to = "layWeb";
			break;
	}
	if(fr == to){
		return;
	}	
	switch(fr){
		case "layMain":
			layMain.Animate("SlideToLeft");
			break;
		case "layTut":
			layTut.Animate("SlideToRight");
			break;
		case "layExr":
			layExr.Animate("SlideToRight");
			break;
		case "layPro":
			layPro.Animate("SlideToRight");
			break;
		case "layAbt1":
			layAbt1.Animate("SlideToRight");
			break;
		case "layDon":
			layDon.Animate("SlideToRight");
			break;
		case "layAme":
			layAme.Animate("SlideToRight");
			break;
		case "layCnt":
			layCnt.Animate("SlideToRight");
			break;
		case "layWeb":
			layWeb.Animate("SlideToRight");
			break;
	}
	switch(to){
		case "layMain":
			layMain.Animate("SlideFromLeft");
			lstMenu1.SelectItemByIndex(0);
			act.SetText("layMain");
			exits.SetText("no");
			break;
		case "layTut":
			layTut.Animate("SlideFromRight");
			lstMenu1.SelectItemByIndex(1);
			act.SetText("layTut");
			exits.SetText("no");
			break;
		case "layExr":
			layExr.Animate("SlideFromRight");
			lstMenu1.SelectItemByIndex(2);
			act.SetText("layExr");
			exits.SetText("no");
			break;
		case "layPro":
			layPro.Animate("SlideFromRight");
			lstMenu1.SelectItemByIndex(3);
			act.SetText("layPro");
			exits.SetText("no");
			break;
		case "layAbt1":
			layAbt1.Animate("SlideFromRight");
			lstMenu1.SelectItemByIndex(4);
			act.SetText("layAbt1");
			exits.SetText("no");
			break;
		case "layDon":
			layDon.Animate("SlideFromRight");
			lstMenu1.SelectItemByIndex(5);
			act.SetText("layDon");
			exits.SetText("no");
			break;
		case "layAme":
			layAme.Animate("SlideFromRight");
			lstMenu2.SelectItemByIndex(0);
			act.SetText("layAme");
			exits.SetText("no");
			break;
		case "layCnt":
			layCnt.Animate("SlideFromRight");
			lstMenu2.SelectItemByIndex(1);
			act.SetText("layCnt");
			exits.SetText("no");
			break;
		case "layWeb":
			layWeb.Animate("SlideFromRight");
			lstMenu2.SelectItemByIndex(2);
			act.SetText("layWeb");
			exits.SetText("no");
			break;
	}

}

function open_d(){
	app.OpenDrawer("Left");
}

function homeExr(){
	layMain.Animate("SlideToLeft");
	layExr.Animate("SlideFromRight");
}



//Function asswholes
function to_home(){
	nav_to("Home");
}
function to_tut(){
	nav_to("Tutorial");
}

function to_exr(){
	nav_to("Excercise");
}
function to_pro(){
	nav_to("Projects");
}
function to_don(){
	nav_to("Donate");
}
function to_ame(){
	nav_to("About Me");
}
function to_cnt(){
	nav_to("Contact Me");
}
function to_web(){
	nav_to("Website");
}


function exrTopic(title,body,type,index){
	var solt;
	if(type == "topic"){
		stat.SetText("qs");
		var ls = app.ReadFile("data/excercise/question/"+index);
		var arr = ls.split("\n");
		ls = arr.join(",");
		lst.SetList(ls);
	}else{
		solt = app.ReadFile("data/excercise/solution/"+type+"/"+index);
		solt = synt(solt);
		srcd.SetHtml(solt);
		stat.SetText("sol");
		lst.SetVisibility("Gone");
		laySol.SetVisibility("Show");
	}
}

function exrBack(){
	if(stat.GetText() == "exr"){
		nav_to("Home");
	}else if( stat.GetText()=="sol" ){
		laySol.SetVisibility("Gone");
		lst.SetVisibility("Show");
		stat.SetText("qs");
	}else{
		var t = app.ReadFile("data/excercise/topic");
		var arr = t.split("\n");
		t = arr.join(",");
		lst.SetList(t);
		stat.SetText("exr");
	}
}

function OnBack(){
	var a,b;
	a = act.GetText();
	if( a=="layExr" ){
		b = stat.GetText();
		if( b=="exr" )
			nav_to("Home");
		else if( b=="sol" ){
			laySol.SetVisibility("Gone");
			lst.SetVisibility("Show");
			stat.SetText("qs");
		}else{
			var t = app.ReadFile("data/excercise/topic");
			var arr = t.split("\n");
			t = arr.join(",");
			lst.SetList(t);
			stat.SetText("exr");
		}
	}else if( a=="layMain" ){
		var tm = exits.GetText();
		if( tm=="no" ){
			exits.SetText("yes");
			app.ShowPopup("Press again to Exit","Short");
			setTimeout(function(){
				exits.SetText("no");
			},2500);
		}else{
			app.Exit();
		}
	}else{
		nav_to("Home");
	}
}

function yesnoOnTouch(){
	app.Exit();
}

function synt(cd){
	var rs1 = "input,print,import,elif,def,for";
	var rs2 = "(,),{,},+,-,[,],*,&,%,!";
	var rsk1 = rs1.split(",");
	var rsk2 = rs2.split(",");
	var i,j;
	var tm;
	tm = cd.split("\n");
	cd = tm.join("<br />");
	for(i=rsk1.length-1;i>=0;i--){
		tm = cd.split(rsk1[i]);
		cd = tm.join("<font color='green'>"+rsk1[i]+"</font>");
	}
	for(i=rsk2.length-1;i>=0;i--){
		tm = cd.split(rsk2[i]);
		cd = tm.join("<font color='silver'>"+rsk2[i]+"</font>");
	}
	return cd;
}
