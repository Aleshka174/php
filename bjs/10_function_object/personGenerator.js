const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Екатерина",
            "id_2": "Анна",
            "id_3": "Рита",
            "id_4": "Мария",
            "id_5": "Юлия",
            "id_6": "Алиса",
            "id_7": "Полина",
            "id_8": "Соня",
            "id_9": "Ольга",
            "id_10": "Елена"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    middleNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александро",
            "id_2": "Максимо",
            "id_3": "Ивано",
            "id_4": "Артемо",
            "id_5": "Дмитре",
            "id_6": "Никито",
            "id_7": "Михаило",
            "id_8": "Даниило",
            "id_9": "Егоро",
            "id_10": "Андрее"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря" 
        }
    }`,
    professionJson: `{
        "count": 12,
        "list": {     
            "id_1": "Шахтер",
            "id_2": "Повар",
            "id_3": "Врач",
            "id_4": "Медсестра",
            "id_5": "Водитель",
            "id_6": "Строитель",
            "id_7": "Официант",
            "id_8": "Программист",
            "id_9": "Инженер",
            "id_10": "Солдат",
            "id_11": "Менеджер",
            "id_12": "Риэлтор" 
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        return this.randomValue(this.firstNameMaleJson);

    },

    randomFirstNameShe: function() {

        return this.randomValue(this.firstNameFemaleJson);

    },

    randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },

    randomMiddleName: function() {

        return this.randomValue(this.middleNameJson);

    },

    randomMonth: function () {

        return this.randomValue(this.monthJson);

    },

    randomProfession: function () {

        return this.randomValue(this.professionJson);

    },

    randomGender: function () {
        const randomGender=this.randomIntNumber(2, 1);
        if (randomGender==1) {
            return this.GENDER_MALE;
        }else {
            return this.GENDER_FEMALE;
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.year = this.randomIntNumber(2002, 1920);
        const crazyYear = this.person.year % 4;
        this.person.month = this.randomMonth();
        if ((this.person.month == "Апреля") || (this.person.month == "Июня") || (this.person.month == "Сентября") || (this.person.month == "Ноября")) {
            this.person.day = this.randomIntNumber(30, 1);
        }else if (this.person.month == "Февраля") {
            if (crazyYear == 0) {
                this.person.day = this.randomIntNumber(29, 1);
            }else {
            this.person.day = this.randomIntNumber(28, 1);};
        }else{
            this.person.day = this.randomIntNumber(30, 1);};
        this.person.profession = this.randomProfession();
        if (this.person.profession == "Медсестра") {
            this.person.gender = this.GENDER_FEMALE;
        }else if ((this.person.profession == "Шахтер") || (this.person.profession == "Строитель") || (this.person.profession == "Солдат")) {
            this.person.gender = this.GENDER_MALE;
        }else {
            this.person.gender = this.randomGender();
        };
        if (this.person.gender == this.GENDER_MALE) {
            this.person.firstName = this.randomFirstName();
            this.person.surname = this.randomSurname();
            this.person.middleName = `${this.randomMiddleName()}вич`;
        }else {
            this.person.firstName = this.randomFirstNameShe();
            this.person.surname = `${this.randomSurname()}a`;
            this.person.middleName = `${this.randomMiddleName()}вна`;       
        }
        
        return this.person;
    },

};
