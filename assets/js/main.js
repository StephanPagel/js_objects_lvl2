// Lvl 2_1

// let edelMetallPreise = [
//     { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
//     { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
//     { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
//     { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
//     { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
//     { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
//     { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
//     { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
//     { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
// ];

// let nameArray = [];
// let nameArray2 = [];
// let preiseGramEuroArray = [];
// let preiseGramEuroArray2 = [];
// let preiseGramEuroArray3 = [];
// let veraenderungArray = [];
// let veraenderungArray2 = [];

// edelMetallPreise.forEach(elt => {
//     nameArray.push(elt.name);
// })

// console.log(nameArray);

// //

// edelMetallPreise.map(elt => {
//     nameArray2.push(elt.name);
// })

// console.log(nameArray2);

// //

// edelMetallPreise.forEach(elt => {
//     preiseGramEuroArray.push(elt.preiseGramEuro);
// })

// console.log(preiseGramEuroArray);

// //

// edelMetallPreise.map(elt => {
//     preiseGramEuroArray2.push(elt.preiseGramEuro);
// })

// console.log(preiseGramEuroArray2);

// //

// edelMetallPreise.forEach(elt => {
//     veraenderungArray.push(elt.veraenderung)
// })

// console.log(veraenderungArray);

// //

// edelMetallPreise.map(elt => {
//     veraenderungArray2.push(elt.veraenderung)
// })

// console.log(veraenderungArray2);

// //

// edelMetallPreise.filter(elt => {
//     if (elt.preiseGramEuro > 50) {
//         preiseGramEuroArray3.push(elt);
//     }
// })

// console.log(preiseGramEuroArray3);

// Lvl 2_2

// const singers = [
//     { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
//     { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
//     { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
//     { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
//     { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
//     { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
//     { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
//     { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
// ];

// singers.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     } else {
//         return -1;
//     }
// })

// console.log(singers);
