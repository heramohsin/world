/** Problem -01 ( Divide the Asset ) */
var area = 400;
//write your code here
var land=area/2;
console.log(land);


// assinment-2

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here
if(money >=25000 ){
    console.log("Laptop");
}
else if(money >= 10000 ){
    console.log("Cycle");
}
else{
    console.log("Chocolate ");
}


// assiment-3

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here

for (var day = 1; day <= lastDay; day++) {
    if (day  % 3 === 0) {
        console.log( day + "- medicine");
    } else {
        console.log(day + "- rest");
    }
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

var extension = fileName.split(".").pop().toLowerCase();

if (fileName.startsWith("#") || extension === "pdf" || extension === "docx") {
    console.log("Store");
} else {
    console.log("Delete");
}