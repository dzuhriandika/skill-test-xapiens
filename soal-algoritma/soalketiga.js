String.prototype.count=function(c) { 
    var result = 0, i = 0;
    for(i;i<this.length;i++)if(this[i]==c)result++;
    return result;
  };

var data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.';
var i;
for(i=1;i<27;i++) {
  console.log('Karakter '+(i+9).toString(36)+' sebanyak = '+data.count((i+9).toString(36)));
  console.log('Karakter '+(i+9).toString(36).toUpperCase()+' sebanyak = '+data.count((i+9).toString(36).toUpperCase()));
}