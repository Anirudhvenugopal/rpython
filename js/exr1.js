function createExcercise(){

	layExr = app.CreateLayout("Linear","Vertical,FillXY");
	layExr.SetBackground("/Res/drawable/android");

	lay_em = app.CreateLayout("Linear","Horizontal");
	layExr.AddChild(lay_em);

	//Creating bars icon formenutoggle
	bk = app.CreateText("[fa-arrow-circle-left]",0.2,0.1,"FontAwesome,Bold");
	bk.SetBackColor("#232323");
	bk.SetPadding(0.02,0.024,0.02,0.02);
	bk.SetTextSize(36);
	bk.SetTextColor("green");
	bk.SetOnTouchUp(exrBack);
	lay_em.AddChild(bk);
	//Creating heading text
	ex = app.CreateText("<b>E X C E R C I S E</b>",0.8,0.1,"FontAwesomeLeft,Bold,HTML");
	ex.SetFontFile("font/head.ttf");
	ex.SetBackColor("#232323");
	ex.SetTextColor("green");
	ex.SetTextSize(35);
	ex.SetPadding(0.02,0.02,0.02,0.02);
	lay_em.AddChild(ex);
	//Creating green line
	ln = app.CreateText("",1,0.01);
	ln.SetBackColor("green");
	layExr.AddChild(ln);
																							
	
	//Creating List
	lst = app.CreateList("",1,0.9,"WhiteGrad,HTML");
	var tp = app.ReadFile("data/excercise/topic");
	lst.SetEllipsize("end");
	lst.SetFontFile("font/HEAD.otf");
	lst.SetTextColor1("#454545");
	lst.SetTextColor2("#787878");
	lst.SetTextSize1(18);
	lst.SetTextSize2(14);
	var arr = tp.split("\n");
	tp = arr.join(",");
	lst.SetList(tp);
	stat = app.CreateText("exr",1);
	lst.SetOnTouch(exrTopic);
	//layExr.AddChild(lst);

	//Creating exr topic to get active styate
	exrT = app.CreateText("");

	

	tabs = app.CreateTabs("QUESTION,THEORY,SOLUTION",1,0.9);
	layQs = tabs.GetLayout("QUESTION");
	layQs.SetBackColor("#ffffff");
	layExr.AddChild(tabs);


	layExr.SetVisibility("Hide");
}
