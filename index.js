
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const  quotes =  [{
    quote:  `"You only live once, but if you do it right, once is enough." `,
    person: `Mae West `
}, {
    quote:  `"Not how long, but how well you have lived is the main thing.” `,
    person: `Seneca`
}, {
    quote:  `“If life were predictable it would cease to be life, and be without flavor.” `,
    person: `Eleanor Roosevelt `
}, {
    quote:  `“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.” `,
    person: `Henry Ford `
}, {
    quote:  `“The big lesson in life, baby, is never be scared of anyone or anything.”` ,
    person: `Frank Sinatra `
}, {
    quote: `“Curiosity about life in all of its aspects, I think, is still the secret of great creative people.”` ,
    person: `Leo Burnett `
}, {
    quote:  `“Life is not a problem to be solved, but a reality to be experienced.”` ,
    person: `Soren Kierkegaard `
}, {
    quote:   `"The way I see it, if you want the rainbow, you gotta put up with the rain." ` ,
    person: `Dolly Porton `
}, {
    quote:   `"Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this."`  ,
    person: `Celine Dion `
}, {
    quote:  `"Life is like riding a bicycle. To keep your balance, you must keep moving."` ,
    person: ` Albert Einstein `
}, {
    quote: `"Life is a succession of lessons which must be lived to be understood."` ,
    person: `Helen Keller `
},
];



btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})