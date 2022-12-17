
const randomF1FactOne = 'F1 cars produce more G-Force than a space shuttle';
const randomF1FactTwo = 'Modern F1 cars cost more than $12 million each';
const randomF1FactThree = 'F1 teams can have up to 600 members';
const randomF1FactFour = 'The steering wheel of an F1 car has upwards of 25 buttons';
const randomF1FactFive = 'The brake discs of F1 cars can reach 1,000 degrees celsius';
const randomF1FactSix = 'Each F1 car has more than 80,000 components';
const randomF1FactSeven = 'The fastest pit crew tire change record was 1.92 seconds';
const randomF1FactEight = 'An F1 engine\'s lifespan is less than 7 races';
const randomF1FactNine = 'F1 drivers lose an average of 3kg per race';
const randomF1FactTen = 'F1 cars can drive upside down with the right conditions';

const randomF1Facts = [randomF1FactOne, randomF1FactTwo, randomF1FactThree, randomF1FactFour, randomF1FactFive, randomF1FactSix, randomF1FactSeven, randomF1FactEight, randomF1FactNine, randomF1FactTen];

const teams = [
    {
        name: 'Ferrari',
        drivers: ['Max Verstappen', 'Sergio Perez']
    },
    {
        name: 'Mercedes',
        drivers: ['Charles LeClerc', 'Carlos Sainz']
    },
    {
        name: 'Red Bull Raching',
        drivers: ['George Russell', 'Lewis Hamilton']
    },
    {
        name: 'Alpine',
        drivers: ['Esteban Ocon', 'Fernando Alonso']
    },
    {
        name: 'McLaren',
        drivers: ['Lando Norris', 'Daniel Ricciardo']
    },
    {
        name: 'Alfa Romeo',
        drivers: ['Valtteri Bottas', 'Zhou Guanyu']
    },
    {
        name: 'Aston Martin',
        drivers: ['Lance Stroll', 'Sebastian Vettel']
    },
    {
        name: 'Haas',
        drivers: ['Mick Schumacher', 'Kevin Magnussen']
    },
    {
        name: 'AlphaTauri',
        drivers: ['Pierre Gasly', 'Yuki Tsunoda']
    },
    {
        name: 'Williams',
        drivers: ['Nicholas Latifi', 'Alexander Albon']
    }
]

const getRandomF1Fact = () => {
    let randomF1FactIndex = Math.floor(Math.random() * (randomF1Facts.length - 1));
    return(`Fun F1 fact of the day: ${randomF1Facts[randomF1FactIndex]}`)
};

const getRandomTeamFact = () => {
    let randomTeamIndex = Math.floor(Math.random() * (teams.length - 1));
    return `Teams and their drivers: ${teams[randomTeamIndex].name} has ${teams[randomTeamIndex].drivers[0]} and ${teams[randomTeamIndex].drivers[1]}.`;
}

const getRandomFact = () => {
    console.log(getRandomF1Fact());
    console.log(getRandomTeamFact())
};

getRandomFact();