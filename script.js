const byteSize = (str) => {
  // write your code here
	if (!str) return 0; // handle empty string
  
  // Use TextEncoder to encode string to UTF-8 bytes
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  return bytes.length;
	
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
