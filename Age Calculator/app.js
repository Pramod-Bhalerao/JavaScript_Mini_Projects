// let userInput = document.getElementById("date");
// let getResult = document.getElementById("result");

// userInput.max = new Date().toISOString().split('T')[0];

// function calculateAge() {
//     let birthDate = new Date(userInput.value);

//     let birthDay = birthDate.getDate();
//     let birthMonth = birthDate.getMonth() + 1;
//     let birthYear = birthDate.getFullYear();

//     let today = new Date();

//     let todayDay = today.getDate();
//     let todayMonth = today.getMonth() + 1;
//     let todayYear = today.getFullYear();

//     let dDay, dMonth, dYear;

//     dYear = todayYear - birthYear;

//     if(todayMonth >= birthMonth){
//         dMonth = todayMonth - birthMonth;
//     }
//     else{
//         dYear--;
//         dMonth = 12 + todayMonth - birthMonth;
//     }

//     if(todayDay >= birthDay){
//         dDay = todayDay - birthDay;
//     }
//     else{
//         dMonth--;
//         dDay = getDaysInMonth(birthYear - birthMonth) + todayDay - birthDay;
//     }

//     if(dMonth < 0){
//         dMonth = 11;
//         dYear--;
//     }
//     getResult.innerHTML = `You are ${dYear} Year, ${dMonth} Month & ${dDay} Days Old.`;
// }


// function getDaysInMonth(year,month){
//     return new Date(year,month,0).getDate();
// }


let userInput = document.getElementById("date");
let calculateButton = document.getElementById("calculate");
let getResult = document.getElementById("result");

userInput.max = new Date().toISOString().split('T')[0];

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    let today = new Date();

    let todayDay = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();

    let dYear = todayYear - birthYear;
    let dMonth = todayMonth - birthMonth;
    let dDay = todayDay - birthDay;

    if (dMonth < 0 || (dMonth === 0 && dDay < 0)) {
        dYear--;
        dMonth += 12;
    }

    if (dDay < 0) {
        let daysInLastMonth = new Date(birthYear, birthMonth, 0).getDate();
        dDay += daysInLastMonth;
        dMonth--;
    }

    getResult.innerHTML = `You are ${dYear} Year, ${dMonth} Month & ${dDay} Days Old.`;
}

calculateButton.addEventListener('click', calculateAge);
