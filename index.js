const dayErrorMesssage = document.getElementById('day-error');
const monthErrorMesssage = document.getElementById('month-error');
const yearErrorMesssage = document.getElementById('year-error');


const submitBtn = document.getElementById('submit-button');


function checkDayAndMonth() {

    const MonthInputEl = document.getElementById('month-input');

    const dayInputEl = document.getElementById('day-input');

    const yearInputEl = document.getElementById('year-input');

    userYear = yearInputEl.value;

    const userday = Number(dayInputEl.value);
    
    const usermonth = Number(MonthInputEl.value);
    
    if (userday > 30 && usermonth === 4) {
        dayErrorMesssage.innerHTML =  'Must be a valid Day--4';
        console.log('Must be a valid Day--4');
    } else if (userday > 30 && usermonth === 6) {
        dayErrorMesssage.innerHTML =  'Must be a valid Day--6';
        console.log('Must be a valid Day--6');
    } else if (userday > 30 && usermonth === 9) {
        dayErrorMesssage.innerHTML =  'Must be a valid Day--9';
        console.log('Must be a valid Day--9');
    } else if (userday > 30 && usermonth === 11) {
        dayErrorMesssage.innerHTML =  'Must be a valid Day--11';
        console.log('Must be a valid Day--11');
       
    }

}



submitBtn.addEventListener('click', ()=>{
    checkDayAndMonth();
})


//-------------------------------------

function validateDay() {
    const dayInputEl = document.getElementById('day-input');
    
    userDay = dayInputEl.value;
    
    if (userDay === '') {
        dayErrorMesssage.innerHTML = 'Field is required';
    } else if (userDay > 31) {
        dayErrorMesssage.innerHTML = 'Must be a valid day';
    }
}

submitBtn.addEventListener('click', ()=>{
    validateDay();
    
})

//----------------------------------;

function clearInput() {
    const dayInputEl = document.getElementById('day-input');
    const MonthInputEl = document.getElementById('month-input');
    const yearInputEl = document.getElementById('year-input');
    
    setTimeout(()=>{
        dayInputEl.value = '';
        MonthInputEl.value = '';
        yearInputEl.value = '';
    }, 100)

    
}

submitBtn.addEventListener('click', ()=>{
    clearInput();
})

//----------------------------------;

function validateMonth() {
    const MonthInputEl = document.getElementById('month-input');
    
    userMonth = MonthInputEl.value;
    
    if (userMonth === '') {
        monthErrorMesssage.innerHTML = 'Field is required';
    } else if (userMonth > 12) {
        monthErrorMesssage.innerHTML = 'Must be a valid Month';
    } 

}

submitBtn.addEventListener('click', ()=>{
    validateMonth();
})

//------------------------------------;

function validateYear() {
    const yearInputEl = document.getElementById('year-input');

    userYear = yearInputEl.value;

    const currentYear = new Date().getFullYear();


    if (userYear === '') {
        yearErrorMesssage.innerHTML = 'Field is required';
    } else if (userYear > currentYear) {
        yearErrorMesssage.innerHTML = 'Must be in the past';
    } else {
        console.log(userYear)
    }
}

submitBtn.addEventListener('click', ()=>{
    validateYear();
})


//---------------------------------------;

function calculateAge() {
    const MonthInputEl = document.getElementById('month-input');

    const dayInputEl = document.getElementById('day-input');

    const yearInputEl = document.getElementById('year-input');

    const userYear = yearInputEl.value;
    console.log(userYear)
    const userMonth = MonthInputEl.value;
    console.log(userMonth)
    const userDay = dayInputEl.value;
    console.log(userDay)

    const thisYear = new Date().getFullYear();

    if (userYear === '') {
        console.log('year must be available')
        return
    } else if (userYear > thisYear) {
        return
    }

    const userDate = `${userYear}-${userMonth}-${userDay}`;

    const userBirthDate = new Date(userDate);

    
    const dayDiff = new Date().getDate() - userBirthDate.getDate();
    const monthDiff = new Date().getMonth() - userBirthDate.getMonth();
    const yearDiff = new Date().getFullYear() - userBirthDate.getFullYear();


    const yearDisplayEl = document.getElementById('year-display').innerHTML = yearDiff;

    const monthDisplayEl = document.getElementById('month-display').innerHTML = monthDiff;

    const dayDisplayEl = document.getElementById('day-display').innerHTML = dayDiff;
}

submitBtn.addEventListener('click', ()=>{
    calculateAge();
})

/*
function DisplayStaticText1() {
    const MonthInputEl = document.getElementById('month-input');

    const dayInputEl = document.getElementById('day-input');

    const yearInputEl = document.getElementById('year-input');

    userYear = yearInputEl.value;

    const userday = dayInputEl.value;
    
    const usermonth = MonthInputEl.value;

    const yearDisplayEl = document.getElementById('year-display');

    const monthDisplayEl = document.getElementById('month-display');

    const dayDisplayEl = document.getElementById('day-display');
    
    if (userday > 30 && usermonth === 4) {
        yearDisplayEl.innerHTML = '--';
        monthDisplayEl.innerHTML = '--';
        dayDisplayEl.innerHTML = '---';
    } else if (userday > 30 && usermonth === 6) {
        yearDisplayEl.innerHTML = '--';
        monthDisplayEl.innerHTML = '--';
        dayDisplayEl.innerHTML = '---';
    } else if (userday > 30 && usermonth === 9) {
        yearDisplayEl.innerHTML = '--';
        monthDisplayEl.innerHTML = '--';
        dayDisplayEl.innerHTML = '---';
    } else if (userday > 30 && usermonth === 11) {
        yearDisplayEl.innerHTML = '--';
        monthDisplayEl.innerHTML = '--';
        dayDisplayEl.innerHTML = '---';
    }

}

submitBtn.addEventListener('click', ()=>{
    DisplayStaticText1();
})
*/