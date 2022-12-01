
function consultarVotaciones() {
    fetch("http://localhost:9000/candidatos")
    .then((respuesta) => respuesta.json())
    .then((datosEntrada) => {
        console.log(datosEntrada);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Se ejecutó la petición");
    });
}

function consultarSeguridad() {
    fetch("http://localhost:8080/usuarios/listar")
    .then((respuesta) => respuesta.json())
    .then((datosEntrada) => {
        console.log(datosEntrada);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Se ejecutó la petición");
    });
}

function consultarGateway() {
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2OTg1MDM4OCwianRpIjoiNjc2NThmNDAtZTE3YS00ZmE5LWI3NTMtMjI5NjQ2NjYwMDFjIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJfaWQiOiI2Mzg1OTVjMzU3MWZlNjU4NmJkYmI4OTciLCJub21icmVfdXN1YXJpbyI6Iml2YW4udmFyZ2FzIiwiZW1haWwiOiJpdmFuLnZhcmdhc0ByZWdpc3RyYWR1cmlhLmdvdi5jbyIsImNvbnRyYXNlbmEiOiIiLCJyb2wiOnsiX2lkIjoiNjM4NTk0Yjg1NzFmZTY1ODZiZGJiODk0Iiwibm9tYnJlIjoiQWRtaW5pc3RyYWRvciIsImRlc2NyaXBjaW9uIjoiQWNjZXNvIFRvdGFsIE5PIGluZ3Jlc2Egdm90b3MifX0sIm5iZiI6MTY2OTg1MDM4OH0.DhEmT-DhmSnGhdCe7qANku3eaCSvjqHxAVsdkreKZaQ");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "apellido": "Prueba01",
  "cedula": "Prueba01",
  "nombre": "Prueba01",
  "resolucion": "Prueba01"
});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:5000/candidatos", requestOptions, {
})
    .then((respuesta) => respuesta.json())
    .then((datosEntrada) => {
        console.log(datosEntrada);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Se ejecutó la petición");
    });
}