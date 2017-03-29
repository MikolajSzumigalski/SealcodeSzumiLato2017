function bin(a){
	var bin = 1; //nasza liczba binarna
	var b = 0; //licznik pętli
	var x = a; //wartość a do dzielenia
	var binary = 0; // licznik do tablicy
	var binarytab =[];
	while(x > 0)
	{
		binarytab[binary] = x%2;
		binary++;
		x=Math.floor(x/2);
		b++;
	}
	for(binary = b-2; binary >=0; binary--) // wiadomo, że pierwsza cyfra w liczbie binarnej to 1
	{
	 bin=bin*10+binarytab[binary];
	}
	return (bin);
}

console.log(bin(433));