function isPalindrome(string) {
  // Start coding here
  // ลบช่องว่างและแปลงเป็นตัวพิมพ์เล็กทั้งหมด
  string = string.replace(/\s/g, '').toLowerCase();
  // สร้างสตริงที่กลับด้าน
  const reversedString = string.split('').reverse().join('');
  // เปรียบเทียบสตริงต้นฉบับกับสตริงที่กลับด้าน
  return string === reversedString;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false