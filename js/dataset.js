var tbody = document.querySelector('#tbody');

function traer(){
    fetch('/Public/data.json')
    .then(response => response.json())
    .then(Data => {
        tabla(Data);
    })
}

function tabla(Data){
    tbody.innerHTML = '';
    for (let valor of Data) {
        tbody.innerHTML += `
        <tr>
            <td>${valor.codips}</td>
            <td>${valor.nombreips}</td>
            <td>${valor.precioviadeingreso}</td>
            <td>${valor.viadeingresopaciente}</td>
            <td>${valor.fechadeingreso}</td>
            <td>${valor.horadeingreso}</td>
            <td>${valor.causaexternahospitalizacion}</td>
            <td>${valor.codingreso}</td>
            <td>${valor.diagnosticoingreso}</td>
            <td>${valor.nombrecie3egreso}</td>
            <td>${valor.capitulocieegreso}</td>
        </tr>
        `
    }
}