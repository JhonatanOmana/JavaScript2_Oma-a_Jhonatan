document.getElementById("button1").addEventListener('click', () => {
    const id = document.getElementById('input1').value;


    fetch(`https://swapi.py4e.com/api/people/ ${id}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('DIV').innerHTML += `
     
        <table class="table table-dark table-striped">
        <thead>
            <tr>
            <td scope="col">Name</td>
            <td scope="col">${data.name}</td>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td scope="col">Height</td>
            <td scope="col">${data.height}</td>
            </tr>
            <tr>
            <td scope="col">mass</td>
            <td scope="col">${data.mass}</td>
            </tr>
            <tr>
            <td scope="col">hair_color</td>
            <td scope="col">${data.hair_color}</td>
            </tr>
            <tr>
            <td scope="col">skin_color</td>
            <td scope="col">${data.skin_color}</td>
            </tr>
            <tr>
            <td scope="col">eye_color</td>
            <td scope="col">${data.eye_color}</td>
            </tr>
            <tr>
            <td scope="col">birth_year</td>
            <td scope="col">${data.birth_year}</td>
            </tr>
            <tr>
            <td scope="col">gender</td>
            <td scope="col">${data.gender}</td>
            </tr>
            <tr>
            <td scope="col">Homeworldr</td>
            <td>
                <ul class="list-group">
                    <li class="list-group-item">${data.homeworld}</li>
                    <li class="list-group-item">dfdffddf</li>
                    <li class="list-group-item">dfdffdf</li>
                </ul>
            </td>
            </tr>
        </tbody>
        </table>


        `
        })

})