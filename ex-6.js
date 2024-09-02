const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  carBrand = carBrand.toLowerCase();

  // ตรวจสอบว่ายี่ห้อรถมีอยู่แล้วใน carBrand รึเปล่า
  const existingIndex = carCollection.indexOf(carBrand);

  if (existingIndex !== -1) {
    // ถ้ามีอยู่แล้ว
    return `${carBrand} already exists in position ${existingIndex + 1} of the car collection.`;
  } else {
    // ถ้ายังไม่มี ให้เพิ่มเข้าไปในคอลเลคชัน
    carCollection.push(carBrand);
    // สร้างข้อความแสดงคอลเลคชันใหม่
    return `New car collection is: ${carCollection.join(", ")}.`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.