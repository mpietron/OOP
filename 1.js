! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).uuidv4 = e()
}(this, (function () {
    "use strict";
    var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
        e = new Uint8Array(16);

    function o() {
        if (!t) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return t(e)
    }
    for (var n = [], r = 0; r < 256; ++r) n.push((r + 256).toString(16).substr(1));
    return function (t, e, r) {
        var u = (t = t || {}).random || (t.rng || o)();
        if (u[6] = 15 & u[6] | 64, u[8] = 63 & u[8] | 128, e) {
            r = r || 0;
            for (var d = 0; d < 16; ++d) e[r + d] = u[d];
            return e
        }
        return function (t, e) {
            var o = e || 0;
            return (n[t[o + 0]] + n[t[o + 1]] + n[t[o + 2]] + n[t[o + 3]] + "-" + n[t[o + 4]] + n[t[o + 5]] + "-" + n[t[o + 6]] + n[t[o + 7]] + "-" + n[t[o + 8]] + n[t[o + 9]] + "-" + n[t[o + 10]] + n[t[o + 11]] + n[t[o + 12]] + n[t[o + 13]] + n[t[o + 14]] + n[t[o + 15]]).toLowerCase()
        }(u)
    }
}));


// zasady solid

// 1 - Single responsibility principle (SRP) - 
// Jedna rzecz(metoda) = Jedna odpowiedzialność.
// Minimalizujemy wielkość klas i metod. 
// Rzeczy niezwiązane z logiką klasy / metody wyciągamy do osobnej klasy metody.

// 2 - Open/Closed class -
// Czysty kod (Pull request - sprawdzanie czystości kodu)
// Staramy się nie zmieniać klasy nadrzędnej(abstrakcyjnej)
// Staramy się parametryzować w obrębie metody

// 3 - Liskov Substitution (podstawienie Liskov)
// Klasa dziedzicząca powinna rozszerzać tylko mozliwosc klasy bazowej. (jesli tworzymy egzemplarz klasy dziedziczacej, to niezaleznie od tego co znajdzie sie we wskazniku na zmienna, wywolywanie metody ktora pierwotnie zdefiniowano w klasie bazowej powinno dac te same rezultaty,)


// 4 - Interface segregation principle(zasada segregacji interfejsów) - w klasie nie budujemy metod, które potem nie będą wykorzystywane, budujemy tylko te metody które są potrzebne i wykorzystywane(staramy się rowniez myslec nad rozdzielaniem interfejsu wykonujace podobne metody a jednak inne na inne metody )

// 5 -  Dependency inversion principle (odwrocenie zaleznosci)

//Wysokopoziomowe klasy nie powinny zalezec od niskopoziomowych

// Co to są te wysokopoziomowe klasy? Co to są niskopoziomowe? 
//Ciezko mi tą zasade zrozumieć

// opisac każdą z liter (swoimi slowami)


// "1) Stwórz strukturę danych związaną z książką adresową.

// Obiekt 
// książka adresowa 
// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów.
// Ma umożliwiać: można szukać kontaktu po frazie, można dodać kontakt do grupy

//     Obiekt charakteryzujący pojedyńczy kontak:
//     Ma mieć: Imie, Nazwisko, adres - emial, datę modyfikacji / utworzenia, uuid
// Ma umożliwiać: aktualizację datę modyfikacji, wyświetlać
// w odpowiednim formacie przy wywołaniu, pozwalac na modyfikację imienia, nazwiska oraz adresu email

// Obiekt charakteryzujący grupę kontaktów:
//     Ma mieć: listę kontaktów
// Ma umożliwiać: Można zmienić nazwę grupy, można dodać lub usunac kontakt z grupy "				

class Validator {
    static isEmptyString = (stringLikeValue) => {
        const notaString = typeof stringLikeValue !== 'string'
        const lengthIsNotZero = stringLikeValue.length !== 0

        const cond = (notaString || lengthIsNotZero)
        if (!cond) throw new Error('Params must be string')
    }

    static isWrongEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) throw new Error('Email must be a letter and must contain between 3-25 characters, and must have special characters "@"')
    }
    static isContact = (value) => {
        return value instanceof Contact;
    }

    static isGroupContact = (value) => {
        return value instanceof GroupContact;
    }
    static isSameType = (value, type) => {
        //value wartosc ktora walidujemy
        //type moze wejsc jako konstruktor i jako string
    }
}

class AddressBook {
    constructor() {
        this.listOffAllContacts = [
            // list wszystkich kontaktów
        ];
        this.listOffAllGroups = [
            // list wszystkich grup
        ];
        
        // - list of contacts in groups
        this.listOffAllContactsInGroups = [
            // user_uuid
            // group_uuid
        ];
        
    }
    addContactsToListOffContacts = (...contacts) => {
        contacts.forEach(contact => {
            if (!Validator.isContact(contact)) {
                return false;
            }
            this.listOffAllContacts.push(contact);
        })
        return this.listOffAllContacts;
    }
    
    //addContactsToGroup = ([_params_]) =>{
    //    
    //}


    addGroupToListOfGroups = (...nameGroup) => {
        nameGroup.forEach(name => {
            if (!Validator.isGroupContact(name)) return false;
            this.listOffAllGroups.push(name);
        })
        return this.listOffAllGroups
    }


    // search contacts by phrase
    searchContactFromPharse = (pharse) => {
        // context to listOfAllContacts


        const foundCondition = (contact) => {
            return true // false
        }
    }
//     to remove: addContactToGroup = () => {
//
//     }
}


deleteContact = (uuid) => {
    this.isEmptyString(uuid);

    const contact = this.listOfContacts.find((contactItem) => contactItem.uuid === uuid)
    if (this.listOfContacts.includes(contact)) {
        const contacts = this.listOfContacts.filter((contactItem) => {
            contactItem.uuid !== contact.uuid
        })
        this.listOfContacts = contacts
    } else {
        return `args not found`
    }
}


class Contact {
    constructor(name, surname, email) {
        // super();
        Validator.isEmptyString(name)
        Validator.isEmptyString(surname)
        Validator.isWrongEmail(email)

        this.uuid = uuidv4()
        this.name = name
        this.surname = surname
        this.email = email
        this.updatedDate = Date.now()
    }
    updateDate = () => {
        this.updatedDate = Date.now()
    }

    show = () => {
        return (
            `
        Imię: ${this.name},
        Nazwisko: ${this.surname},
        Email: ${this.email},
        Data utworzenia: ${this.updatedDate},
        ID:${this.uuid}
        `
        )
    }

    update = (key, value) => {
        if (!['name', 'surname', 'email'].includes(key)) {
            throw new Error(`${key} is a wrong key`)
        }
        if (key === 'email') {
            Validator.isWrongEmail(value)
        } else {
            Validator.isEmptyString(value)
        }
        this[key] = value
    }
}

class GroupContact {
    constructor(nameGroup) {
        this.isEmptyString(nameGroup);

        this.uuid = uuidv4();
        this.name = nameGroup;
        this.listOfContacts = [];
    }

    isEmptyString = (stringLikeValue) => {
        const notaString = typeof stringLikeValue !== 'string'
        const lengthIsNotZero = stringLikeValue.length !== 0

        const cond = (notaString || lengthIsNotZero)
        if (!cond) throw new Error('Params must be string')
    }
    changeNameGroup = (nameGroup) => {
        Validator.isEmptyString(nameGroup);
        return this.name = nameGroup;
    }
//  to remove:   addContact = (contact) => {
//         if (!Validator.isContact(contact)) return false
//         this.listOfContacts.push(contact)
//         return this.listOfContacts;
//     }

//   to remove:  addContacts = (...contacts) => {
//         contacts.forEach(contact => {
//             if (!Validator.isContact(contact)) {
//                 return false;
//             }
//             this.listOfContacts.push(contact);
//         })
//         return this.listOfContacts;
//     }
    
//    to remove:  deleteContact = (uuid) => {
//         this.isEmptyString(uuid);

//         const contact = this.listOfContacts.find((contactItem) => contactItem.uuid === uuid)
//         if (this.listOfContacts.includes(contact)) {
//             const contacts = this.listOfContacts.filter((contactItem) => {
//                 contactItem.uuid !== contact.uuid
//             })
//             this.listOfContacts = contacts
//         } else {
//             return `args not found`
//         }
//     }
}


const contact = new Contact('Piotr', "J", 'p.j@gmail.com')
const contact2 = new Contact('Jarek', 'Michalczewsk', 'JM@interia.pl')


const groupContact = new GroupContact('Rodzina');
const groupFriends = new GroupContact('Znajomi');

groupContact.addContact(new Contact('p', 'kowalski', 'Piotr@gmail.com'));
groupContact.addContact(new Contact('piotr', 'kowalczyk', 'piotr@jsakes.pl'))
groupContact.addContact(contact)
groupContact.addContact(new Contact('p', 'kowalski', 'Piotr@gmail.com'));
groupContact.addContacts(new Contact('piotr', 'kowalczyk', 'piotr@jsakes.pl'), new Contact('jarek', 'darek', 'dfs@gmail.com', new Contact('fds', 'dfsfd', '32432@gmail.com')))

groupFriends.addContact(new Contact('karol', 'olszewski', 'KO@gmail.com'))

const adressBook = new AddressBook();
console.log(adressBook)


adressBook.addContact(contact1) // 1
adressBook.addContact(contact2) // 2
adressBook.addContact(contact3) // 3
adressBook.addContact(contact4) // 4

// to add:
// addressBook.addContactsToGroups({contact1.uuid, groupContact.uuid}, {contact2.uuid, groupFriends.uuid})

// const newGroupContact = new GroupContact('Znajomi')
// newGroupContact.addContact(new Contact('jarek', 'ka', 'jarek.ka@gmail.com'))
// newGroupContact.addContact(new Contact('slawek', 'dfsfka', 'jarek.ka@gmail.com'))
// // console.log(newGroupContact)
// adressBook.addContactsToListOfContacts(groupContact)
// adressBook.addContactsToListOfContacts(newGroupContact)
