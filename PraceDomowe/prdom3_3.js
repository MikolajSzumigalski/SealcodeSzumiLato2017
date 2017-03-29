function find(x, y){
	var i=1, j = y[0];
	prawda = true;
	var wynik = new Array(2); 
	while(i< y.length && prawda == true)
	{
		if(y[i] == x)
		{
			wynik[0] = i;
			wynik[1] = y[i];
			return(wynik);
		}
		i++;
	}
	return(0);
}

var spr = [1,2,3,4,5,6,7,8,9,10];

console.log(find(5, spr));