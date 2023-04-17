let birthYear = prompt('What is your year of birh?');
let city = prompt('Which city do you live?');
let sport = prompt('What is your favourity sport?');
birthYear = Number(birthYear);
let messageBithYear;
if (birthYear){
    messageBithYear = `You are ${2023 - birthYear} years`
}
else {
    messageBithYear = 'Sadly, that you didn`t want to enter your year of birth =(' 
}
let messageCity;
if (city === 'Kyiv'){
    messageCity = 'You live in the capital of Ukraine!'
}
else if (city === 'Washington'){
    messageCity = 'You live in the capital of USA!'
}
else if (city === 'London'){
    messageCity = 'You live in the capital of UK!'
}
else if (city) {
    messageCity = `You live in ${city}`
}
else  {
    messageCity = 'Sadly, that you didn`t want to enter your city =('
}
let messageSport;
if (sport === 'football'){
    messageSport = 'Wow! Do you want to be like Christiano Ronaldo?'
}
else if (sport === 'box'){
    messageSport = 'Wow! Do you want to be like Oleksandr Usyk?'
}
else if (sport === 'gymnastics'){
    messageSport = 'Wow! Do you want to be like Ganna Rizatdinova?'
}
else if (sport){
    messageSport = `Wow! ${sport} is good sport!`
}
else { 
    messageSport = 'Sadly, that you didn`t want to enter your favourite sport =(' 
}
alert(`${messageBithYear} \n${messageCity} \n${messageSport}`) 
