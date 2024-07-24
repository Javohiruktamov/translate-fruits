// let weekDays = prompt("Hafta kuni raqamini kiriting")

// switch(weekDays){
//     case "1":
//         console.log("Dushanba");
//         break;
//     case "2":
//         console.log("Seshanba");
//         break;
//     case "3":
//         console.log("Chorshanba");
//         break;
//     case "4":
//         console.log("Payshanba");
//         break;
//     case "5":
//         console.log("Juma");
//         break;
//     case "6":
//         console.log("Shanba");
//         break;
//     case "7":
//         console.log("Yakshanba");
//         break;
//     default:
//         console.log("Bunaqa kun raqami yo'q");
// }


// let middleMarks = prompt("Bahoyingizni kiriting")

// if(middleMarks >= 50 && middleMarks <= 70){
//     console.log(3);
// }else if (middleMarks > 70 && middleMarks <=85){
//     console.log(4);
// }else if (middleMarks > 85 && middleMarks <= 100){
//     console.log(5);
// }else if (middleMarks >100){
//     console.log("No'to'g'ri baho kiritildi");
// }else{
//     console.log(2);
// }





let meva = prompt("Meva nomini yozing")
let fruits = [
    {
        uz:"Olma",
        en:"Apple"
    },
    {
        uz:"Nok",
        en:"Pear"
    },
    {
        uz:"Uzum",
        en:"Grape"
    },
    {
        uz:"Apelsin",
        en:"Orange"
    },
    {
        uz:"Limon",
        en:"Lemon"
    },
    {
        uz:"Banan",
        en:"Banana"
    },
    {
        uz:"Anor",
        en:"Pomegranate"
    },
    {
        uz:"Shaftoli",
        en:"Peach"
    },

     {
        uz:"O'rik",
        en:"Apricot"
    },
    {
        uz:"Qulupnay",
        en:"Strawberry"
    },
    {
        uz:"Ananas",
        en:"Pineapple"
    },
     {
        uz:"Xurmo",
        en:"Persimmon"
    },
    {
        uz:"Mango",
        en:"Mango"
    },
    {
        uz:"Bexi",
        en:"Quince"
    },
    {
        uz:"Gilos",
        en:"Cherry"
    },
    {
        uz:"Olcha",
        en:"Sour Cherry"
    },
    {
        uz:"Kivi",
        en:"Kiwi"
    },
    {
        uz:"Tarvuz",
        en:"Watermelon"
    },
    {
        uz:"Qovun",
        en:"Melon"
    }, {
        uz:"Malina",
        en:"Raspberry"
    },
]


fruits.filter(item => {
   switch(meva.toLowerCase()){
    case item.uz.toLowerCase():
        text.textContent = item.en;
        break;
   }
})


// let mevalar = prompt("Meva nomini yozing")
// let fruits1 = [
//     {
//         uz:"Olma",
//         en:"Apple"
//     },
//     {
//         uz:"Nok",
//         en:"Pear"
//     },
//     {
//         uz:"Uzum",
//         en:"Grape"
//     },
//     {
//         uz:"Apelsin",
//         en:"Orange"
//     },
//     {
//         uz:"Limon",
//         en:"Lemon"
//     },
//     {
//         uz:"Banan",
//         en:"Banana"
//     },
//     {
//         uz:"Anor",
//         en:"Pomegranate"
//     },
//     {
//         uz:"Shaftoli",
//         en:"Peach"
//     },

//      {
//         uz:"O'rik",
//         en:"Apricot"
//     },
//     {
//         uz:"Qulupnay",
//         en:"Strawberry"
//     },
//     {
//         uz:"Ananas",
//         en:"Pineapple"
//     },
//      {
//         uz:"Xurmo",
//         en:"Persimmon"
//     },
//     {
//         uz:"Mango",
//         en:"Mango"
//     },
//     {
//         uz:"Bexi",
//         en:"Quince"
//     },
//     {
//         uz:"Gilos",
//         en:"Cherry"
//     },
//     {
//         uz:"Olcha",
//         en:"Sour Cherry"
//     },
//     {
//         uz:"Kivi",
//         en:"Kiwi"
//     },
//     {
//         uz:"Tarvuz",
//         en:"Watermelon"
//     },
//     {
//         uz:"Qovun",
//         en:"Melon"
//     }, {
//         uz:"Malina",
//         en:"Raspberry"
//     },
// ]

// fruits1.filter(item => {
//     if(item.uz == mevalar){
//         console.log(item.en);
//     }
// })


// let month = prompt("Oy nomini kiriting")

// switch(month){
//     case "dekabr":
//     case "yanvar":
//     case "fevral":
//         console.log("Qish");
//         break;
//     case "mart":
//     case "aprel":
//     case "may":
//         console.log("Bahor");
//         break;
//     case "iyun":
//     case "iyul":
//     case "avgust":
//         console.log("Yoz");
//         break;
//     case "sentabr":
//     case "oktabr":
//     case "noyabr":
//         console.log("kuz");
  
// }






// let juftArr = [ ]

// for(let i = 1; i <= 50 ; i++){
//     if(i % 2 == 0){
//         juftArr.push(i)
//     }
// }
// console.log(juftArr);


// for(let i = 1; i <= 50 ; i++){
//     if(i % 3 == 0){
//         console.log(i);
//     }
// }

// for(let i = 1; i <= 400 ; i++){
//     if(i % 3 == 0 && i % 5 == 0 && i % 7 == 0){
//         console.log(i);
//     }
// }