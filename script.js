const person = {
  
  //basic
    firstName: 'Bella ',
    middleName: 'Ann ',
    lastName: 'Rose ',
    gender: 'female ',
    age: 42,
    dateOfBirth: '1978-08-22 ',
    nationality: 'France ',
    cityOfBirth: 'Nice ',
    permanentAddress: 'New York ',
    education: ['Pratt ','Parsons '],
    degree: 'graduate ',
    occupation: 'professor ',
  
  //contact
    phoneNumber: '917-000-9179 ',
    emailAdress: 'bellaannrose822@gmail.com ',
    instagram: 'i_am_bellaannrose ',
    facebook: 'Bella Anna Rose ',
  
  //family
    familyMember:[
      {
        name: 'Tom Rose ',
        gender: 'male ',
        age: 45,
        dateOfBirth: '1975-03-15 ',
        nationality: 'Frence ',
        cityOfBirth: 'Paris ',
        relationship: 'husband ',
        occupation: 'dentist ',
      },
      
      {
        name: 'Martin Rose ',
        gender: 'male ',
        age: 14,
        dateOfBirth: '2005-11-07 ',
        nationality: 'United State ',
        cityOfBirth: 'New York ',
        relationship: 'son ',
        occupation: 'student ',
      },

      {
        name: 'Ella Rose ',
        gender: 'female ',
        age: 12,
        dateOfBirth: '2008-06-28 ',
        nationality: 'United State ',
        cityOfBirth: 'New York ',
        relationship: 'daughter ',
        occupation: 'student ',
      },
      
      {
        name: 'Paul da Costa ',
        gender: 'male ',
        age: 70,
        dateOfBirth: '1950-02-19 ',
        nationality: 'France ',
        cityOfBirth: 'Nice ',
        relationship: 'father ',
        occupation: 'Artist ',
      },
      
      {
        name: 'Adele da Costa ',
        gender: 'male ',
        age: 65,
        dateOfBirth: '1955-01-22 ',
        nationality: 'France ',
        cityOfBirth: 'Nice ',
        relationship: 'mather ',
        occupation: 'math teacher ',
      },
      
      {
      name: 'Bette Henry ',
        gender: 'female ',
        age: 40,
        dateOfBirth: '1980-01-07 ',
        nationality: 'France ',
        cityOfBirth: 'Nice ',
        relationship: 'sister ',
        occupation: 'vintage shop owner ',
      },

      {
        name: 'Poppy ',
        gender: 'male ',
        age: 02,
        dateOfBirth: '2018-07-09 ',
        kind: 'dog ',
        relationship: 'pet ',
      }
    ],
  
  //interests
    favoriteColor: ['red ','yellow ','orange '],
    favoriteFood: ['lasagna ','tacos ','rice '],
    favoriteSport: ['surfing ','beach volleyball '],
    favoriteArtist: ['Frida Kahlo ','Andy Warhol '],
  
    herName: function(){
      const fullName = person.firstName + person.middleName + person.lastName;
      return fullName;
    }
}
    var heading = document.querySelector('h1');
    heading.innerHTML = person.firstName + person.middleName + person.lastName;

    var words = document.querySelector('p');
    words.innerHTML = person.gender + person.cityOfBirth + person.firstName + person.favoriteFood[0] + person.degree + person.favoriteArtist[0] + person.familyMember[2].name + person.favoriteColor[2] + person.familyMember[6].kind + person.education[1] + person.emailAdress + person.familyMember[3].cityOfBirth + person.dateOfBirth + person.favoriteFood[1] + person.instagram + person.favoriteArtist[1] + person.favoriteSport[1] + person.facebook + person.nationality + person.phoneNumber;