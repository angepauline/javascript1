

     function sum (x,y)
     {
      num1=parseInt(x)
    	num3=parseInt(y)
    	return (num1+num2)
     }
     var input1 = window.prompt("Enter a number: ", 0);
     var input2 = window.prompt("Enter another number: ", 0);
     var input3 = window.prompt("Enter another number: ", 0);
     var value1 = parseFloat(input1 + input2);
     var value3 = parseFloat(input3);
     var sum = sum(value1 + value3);
     document.writeln("<h1> First number: " + value1 + "</h1>");
     document.writeln("<h1> Second number: " + value3 + "</h1>");
     document.writeln("<h1> Sum: " + sum + "</h1>");