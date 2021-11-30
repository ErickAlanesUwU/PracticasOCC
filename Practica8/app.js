const express = require('express')
const app = express()

app.use(express,json())
const professors = [
    {
        id: 1,
        name: 'Federico',
        lastName: 'Panca',
        city: 'cochabamba',
        birthDate: '1990-07-21',
        salary:2000
    },
    {
        id: 2,
        name: 'Richard',
        lastName: 'Aguirre',
        city: 'oruro',
        birthDate: '1999-08-01',
        salary:1510.50
    },
    {
        id: 3,
        name: 'Juan',
        lastName: 'Rosales',
        city: 'cochabamba',
        birthDate: '1995-07-27',
        salary:1900.90
    }
]


app.get('/hello', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>Hello world</h1>')
})


app.get('/products', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(professors))
})



app.post('/products', (req, res) => {
    let professor = req.body;
    let professorCount = professors.length;

    professor.id = professorCount + 1;

    professors.push(professor);

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({response: 'ok'}))
});

app.put('/products', (req, res) => {
    let professor = req.body;

    for (let existingProfessor of professor) {
        if (existingProfessor.id === professor.id) {
            existingProfessor.name = professor.name;
            existingProfessor.lastName = professor.lastName;
            existingProfessor.city = professor.city;
            existingProfessor.birthDate = professor.birthDate;
            existingProfessor.salary = professor.salary;
            break;
        }
    }
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({response: 'ok'}))
})



app.delete('/products/:id', (req, res) => {
    let id = parseInt(req.params.id);
    for (let i = 0; i < professors.length; i++) {
        let professor = professors[i];
        if (professor.id === id) {
            professor.splice(i, 1);
            break;
        }
    }
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({response: 'ok'}))



})

app.listen(3000, () => {
    console.log('Server initialized')
})