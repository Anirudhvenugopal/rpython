function createQuestion(){

	layQs = app.CreateLayout("Linear","Vertical,FillXY");
	layQs.SetBackground("/Res/drawable/android");

	lay_qm = app.CreateLayout("Linear","Horizontal");
	layQs.AddChild(lay_qm);

	//Creating bars icon formenutoggle
	bke = app.CreateText("[fa-arrow-circle-left]",0.2,0.1,"FontAwesome,Bold");
	bke.SetBackColor("#232323");
	bke.SetPadding(0.02,0.024,0.02,0.02);
	bke.SetTextSize(36);
	bke.SetTextColor("green");
	//bke.SetOnTouchUp(qsExr);
	lay_qm.AddChild(bke);
	//Creating heading text
	etp = app.CreateText("<b></b>",0.8,0.1,"FontAwesomeLeft,Bold,HTML");
	etp.SetFontFile("font/head.ttf");
	etp.SetBackColor("#232323");
	etp.SetTextColor("green");
	etp.SetTextSize(35);
	etp.SetPadding(0.02,0.02,0.02,0.02);
	lay_qm.AddChild(etp);
	//Creating green line
	ln = app.CreateText("",1,0.01);
	ln.SetBackColor("green");
	layQs.AddChild(ln);
																							
	
	//Creating List
	lst2 = app.CreateList("",1,0.9,"WhiteGrad,HTML");
	lst2.SetEllipsize("end");
	lst2.SetFontFile("font/HEAD.otf");
	lst2.SetTextColor1("#454545");
	lst2.SetTextColor2("#787878");

	layQs.AddChild(lst2);
	layQs.SetVisibility("Hide");
}
