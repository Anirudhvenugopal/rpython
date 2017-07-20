
//Called when application is started.
function OnStart()
{    
    app.EnableBackKey("false");
	//Lock screen orientation to Portrait.
    app.SetOrientation( "Portrait" );
    
	thm = app.CreateTheme("Light");
	app.SetTheme(thm);
	//Creating hiden text to check active layouts
	act = app.CreateText("layMain");
	exits = app.CreateText("no");

	//Calling all functions

	//Creating home layout
	createHome();
	
	//Creating Excercise
	createExcercise();
	//Create question excercise2		
	createQuestion();
	//Create a drawer containing a menu list.
	CreateDrawer();
	
	//Add main layout and drawer to app.	
	app.AddLayout( layMain );
	app.AddLayout( layExr );
	//app.AddLayout( layQs );
	app.AddDrawer( laydr, "Left", drawerWidth );
}

//Create the drawer contents.
function CreateDrawer()
{
    //Create a layout for the drawer.
	laydr = app.CreateLayout("Linear");
	//(Here we also put it inside a scroller to allow for long menus)
	drawerWidth = 0.78;
    drawerScroll = app.CreateScroller( drawerWidth, 1 );
    drawerScroll.SetBackColor( "White" );
	layDrawer = app.CreateLayout( "Linear", "Left" );
	drawerScroll.AddChild( layDrawer );
	laydr.AddChild(drawerScroll);
	//Create layout for top of drawer.
	layDrawerTop = app.CreateLayout( "Absolute" );
	//layDrawerTop.SetBackground( "/Sys/Img/GreenBack.png" );
	layDrawerTop.SetBackGradient("#232323","#343434");
	layDrawerTop.SetSize( drawerWidth, 0.26 );
	layDrawer.AddChild( layDrawerTop );
	
	//Add an icon to top layout.
	var img = app.CreateImage( "Img/rpython.png", 0.2 );
	img.SetPosition( drawerWidth*0.06, 0.04 );
	layDrawerTop.AddChild( img );
	
	//Add user name to top layout.
	var txtUser = app.CreateText( "<b><big>RICHWEB PYTHON</big></b>",-1,-1,"Bold,HTML");
	txtUser.SetPosition( drawerWidth*0.07, 0.18 );
	txtUser.SetTextColor( "green" );
	txtUser.SetFontFile("font/head.ttf");
	txtUser.SetTextSize( 15, "dip" );
	layDrawerTop.AddChild( txtUser );
	
	//Add user email to top layout.
	txtEmail = app.CreateText( "www.richweb.in",-1,-1,"HTML");
	txtEmail.SetPosition( drawerWidth*0.07, 0.22 );
	txtEmail.SetTextColor( "#bbffffff" );
	txtEmail.SetFontFile("font/HEAD.otf");
	txtEmail.SetTextSize( 13, "dip" );
	layDrawerTop.AddChild( txtEmail );
	
	//Create menu layout.
	var layMenu = app.CreateLayout( "Linear", "Left" );
	layDrawer.AddChild( layMenu );
	
    //Add a list to menu layout (with the menu style option).
    var listItems = "Home::[fa-home],Tutorial::[fa-book],Excercise::[fa-edit],Projects::[fa-list-alt],About app::[fa-info-circle],Donate::[fa-usd]";
    lstMenu1 = app.CreateList( listItems, drawerWidth, -1, "Menu,Expand" );
    lstMenu1.SetColumnWidths( -1, 0.35, 0.18 );
    lstMenu1.SetFontFile("font/HEAD.otf");
	lstMenu1.SelectItemByIndex( 0, true );
    lstMenu1.SetOnTouch( lstMenu_OnTouch );
    layMenu.AddChild( lstMenu1 );
    
    //Add seperator to menu layout.
    var sep = app.CreateImage( null, drawerWidth,0.001,"fix", 2,2 );
    sep.SetSize( -1, 1, "px" );
    sep.SetColor( "#cccccc" );
    layMenu.AddChild( sep );
    
    //Add title between menus.
	txtTitle = app.CreateText( "Explore",-1,-1,"Left");
	txtTitle.SetTextColor( "#666666" );
	txtTitle.SetMargins( 16,12,0,0, "dip" );
	txtTitle.SetTextSize( 14, "dip" );
	layMenu.AddChild( txtTitle );
	
    //Add a second list to menu layout.
    var listItems = "About Me::[fa-user-md],Contact Me::[fa-send],Github::[fa-github]";
    lstMenu2 = app.CreateList( listItems, drawerWidth, -1, "Menu,Expand" );
    lstMenu2.SetColumnWidths( -1, 0.35, 0.18 );
    lstMenu2.SetOnTouch( lstMenu_OnTouch );
    layMenu.AddChild( lstMenu2 );
}

//Handle menu item selection.
//Called when a drawer is opened or closed.
function OnDrawer( side, state )
{
    console.log( side + " : " + state );
}





