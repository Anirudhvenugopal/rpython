str = input( "Enter a string : " )

ln = len(str)

if ln%2 !=0 or ln==0:
		print("Wrong Input!")
		exit()

i = int(ln/2)

strn = str[:i]

print( "1st half = " + strn )

