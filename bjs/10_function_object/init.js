const generation = document.getElementById('btnStart');
const reset = document.getElementById('btnReset');

generation.addEventListener('click', function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('middleName').innerText = initPerson.middleName;
    document.getElementById('surnameOutput').innerText = `Фамилия: ${initPerson.surname}`;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('dayOutput').innerText = initPerson.day;
    document.getElementById('monthOutput').innerText = initPerson.month;
    document.getElementById('profession').innerText = initPerson.profession;
});

reset.addEventListener('click', function()
{
    document.getElementById('surnameOutput').innerText = "Генерация фамилии: Иванов";
    document.getElementById('firstNameOutput').innerText = "Иван";
    document.getElementById('middleName').innerText = "Иванович";
    document.getElementById('genderOutput').innerText = "Генерация пола";
    document.getElementById('birthYearOutput').innerText = "Генерация года рождения";
    document.getElementById('dayOutput').innerText = "";
    document.getElementById('monthOutput').innerText = "";
    document.getElementById('profession').innerText = "Профессия";
    document.getElementById('middleName').innerText = "Иванович";
});
