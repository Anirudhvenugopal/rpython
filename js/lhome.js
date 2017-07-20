function createHome(){
	
	layMain = app.CreateLayout("Linear","Vertical,FillXY");
	layMain.SetBackground("/Res/drawable/android");

	lay_mn = app.CreateLayout("Linear","Horizontal");
	layMain.AddChild(lay_mn);

	//Creating bars icon formenutoggle
	mn = app.CreateText("[fa-bars]",0.2,0.1,"FontAwesome,Bold");
	mn.SetBackColor("#232323");
	mn.SetPadding(0.02,0.024,0.02,0.02);
	mn.SetTextSize(36);
	mn.SetTextColor("green");
	mn.SetOnTouchUp(open_d);
	lay_mn.AddChild(mn);
	//Creating heading text
	lg = app.CreateText("<b>R - P Y T H O N</b>",0.8,0.1,"FontAwesomeLeft,Bold,HTML");
	lg.SetFontFile("font/head.ttf");
	lg.SetBackColor("#232323");
	lg.SetTextColor("green");
	lg.SetTextSize(35);
	lg.SetPadding(0.02,0.02,0.02,0.02);
	lay_mn.AddChild(lg);

	//Creating green line
	ln = app.CreateText("",1,0.01);
	ln.SetBackColor("green");
	layMain.AddChild(ln);

	scr = app.CreateScroller(1,0.9,"FillX");
	layMain.AddChild(scr);

	//Creating Main Layout For Home
	layHome = app.CreateLayout("Linear","Vertical,FillXY");
	scr.AddChild(layHome);
	
	//Creating full width tex
	fl = app.CreateText("",1,0.05);
	layHome.AddChild(fl);


	//Creating Quotation layout
	layQ = app.CreateLayout("Linear","Vertical,FillX");
	layQ.SetVisibility("Hide");
	layHome.AddChild(layQ);
	//Creating Quoation
	qt = app.CreateText("<b>life runs on code</b>",1,0.08,"HTML");
	qt.SetFontFile("font/HEAD.otf");
	qt.SetTextSize(35);
	qt.SetTextColor("#454545");
	layQ.AddChild(qt);
	//Creating devider
	dvq = app.CreateText("",0.6,0.005);
	dvq.SetBackColor("#565656");
	layQ.AddChild(dvq);
	qt1 = app.CreateText("<b>so learn to code</b>",1,0.05,"HTML");
	qt1.SetFontFile("font/HEAD.otf");
	qt1.SetTextSize(22);
	qt1.SetTextColor("#565656");
	layQ.AddChild(qt1);
	fl = app.CreateText("",1,0.07);
	layHome.AddChild(fl);
	setTimeout(function(){
		layQ.Animate("SlideFromBottom");
	},100);
	




	//Creating Tutorial & Excercise layout
	layHr = app.CreateLayout("Linear","Horizontal,FillX");
	layHome.AddChild(layHr);
	layHr.SetVisibility("Hide");
	//Creating Two learn and excercise 
	tt = app.CreateImage("Img/tutorial.png",0.45,0.06);
	tt.SetMargins(0.03,0.0,0.02,0.0);
	layHr.AddChild(tt);
	ex = app.CreateImage("Img/excercise.png",0.45,0.06);
	ex.SetMargins(0.03,0.0,0.02,0.0);
	layHr.AddChild(ex);
	ex.SetOnTouchUp(to_exr);	
	fl = app.CreateText("",1,0.07);
	layHome.AddChild(fl);
	setTimeout(function(){
		layHr.Animate("SlideFromBottom");
	},200);
	



	//TUTORIALS
	layHome1 = app.CreateLayout("Linear","Vertical,FillXY");
	layHome.AddChild(layHome1);
	layHome1.SetVisibility("Hide");
	//Creating Topic1
	tp = app.CreateText("<b>TUTORIALS</b>",0.94,0.09,"HTML,Left");
	tp.SetFontFile("font/head.ttf");
	tp.SetTextSize(25);
	tp.SetPadding(0.03,0.02,0.03,0.02);
	tp.SetBackColor("#343434");
	tp.SetTextColor("#ffffff");
	layHome1.AddChild(tp);
	//Devider
	dv1 = app.CreateText("",0.94,0.005);
	dv1.SetBackColor("green");
	layHome1.AddChild(dv1);
	//Details of topic1
	tp1 = app.CreateText("<p>Learn to code the interact way with free pdf & video tutorials.</p>",0.94,0.12,"Multiline,HTML,Left");
	tp1.SetTextSize(18);
	tp1.SetTextColor("white");
	tp1.SetPadding(0.03,0.02,0.03,0.02);
	tp1.SetFontFile("font/head.ttf");
	tp1.SetBackColor("#454545");
	layHome1.AddChild(tp1);
	fl = app.CreateText("",1,0.05);
	layHome1.AddChild(fl);
	setTimeout(function(){
		layHome1.Animate("SlideFromBottom");
	},300);




	//EXCERCISE 
	layHome2 = app.CreateLayout("Linear","Vertical,FillXY");
	layHome.AddChild(layHome2);
	layHome2.SetVisibility("Hide");
	//Topic1
	tp = app.CreateText("<b>EXCERCISES</b>",0.94,0.09,"HTML,Left");
	tp.SetFontFile("font/head.ttf");
	tp.SetTextColor("#ffffff");
	tp.SetTextSize(25);
	tp.SetPadding(0.03,0.02,0.03,0.02);
	tp.SetBackColor("#343434");
	layHome2.AddChild(tp);
	//Devider
	dv1 = app.CreateText("",0.94,0.005);
	dv1.SetBackColor("green");
	layHome2.AddChild(dv1);
	//Details of topic1
	tp1 = app.CreateText("<p>More than 300 excercises for you to solve and improve your coding skills</p>",0.94,0.12,"Multiline,HTML,Left");
	tp1.SetTextSize(18);
	tp1.SetTextColor("white");
	tp1.SetPadding(0.03,0.02,0.03,0.0);
	tp1.SetFontFile("font/head.ttf");
	tp1.SetBackColor("#454545");
	layHome2.AddChild(tp1);
	fl = app.CreateText("",1,0.05);
	layHome2.AddChild(fl);
	setTimeout(function(){
		layHome2.Animate("SlideFromBottom");
	},400);

	







	//PROJECTS
	layHome3 = app.CreateLayout("Linear","Vertical,FillXY");
	layHome.AddChild(layHome3);
	layHome3.SetVisibility("Hide");
	//Topic1
	tp = app.CreateText("<b>PROJECTS</b>",0.94,0.09,"HTML,Left");
	tp.SetFontFile("font/head.ttf");
	tp.SetTextColor("#ffffff");
	tp.SetTextSize(25);
	tp.SetPadding(0.03,0.02,0.03,0.02);
	tp.SetBackColor("#343434");
	layHome3.AddChild(tp);
	//Devider
	dv1 = app.CreateText("",0.94,0.005);
	dv1.SetBackColor("green");
	layHome3.AddChild(dv1);
	//Details of topic1d
	tp1 = app.CreateText("<p>Get realtime projects with free online storage and free sub-domain.</p>",0.94,0.12,"Multiline,HTML,Left");
	tp1.SetTextSize(18);
	tp1.SetTextColor("white");
	tp1.SetPadding(0.03,0.02,0.03,0.02);
	tp1.SetFontFile("font/head.ttf");
	tp1.SetBackColor("#454545");
	layHome3.AddChild(tp1);
	fl = app.CreateText("",1,0.05);
	layHome3.AddChild(fl);
	setTimeout(function(){
		layHome3.Animate("SlideFromBottom");
	},500);









}
