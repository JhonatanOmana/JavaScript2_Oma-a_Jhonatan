let json = [
    {
        "informacion_personal": {
            "nombre": "Juan Pérez",
            "edad": 30,
            "direccion": {
                "calle": "Calle Principal",
                "numero": 123,
                "ciudad": "Ciudad Ejemplo"
            },
            "contacto": {
                "correo": "juan.perez@example.com",
                "telefono": "+123456789"
            }
        },
        "historial_educativo": [
            {
                "nivel": "Secundaria",
                "institucion": "Instituto Secundario",
                "anio_inicio": 2000,
                "anio_fin": 2005
            },
            {
                "nivel": "Universidad",
                "institucion": "Universidad Ejemplar",
                "titulo": "Licenciatura en Ciencias",
                "anio_inicio": 2006,
                "anio_fin": 2010
            }
        ],
        "experiencia_laboral": [
            {
                "puesto": "Desarrollador de Software",
                "empresa": "Tech Solutions",
                "periodo": "2010-2015",
                "responsabilidades": [
                    "Desarrollo de aplicaciones web",
                    "Mantenimiento de bases de datos"
                ]
            },
            {
                "puesto": "Gerente de Proyectos",
                "empresa": "Proyectos Avanzados",
                "periodo": "2016-actualidad",
                "responsabilidades": [
                    "Planificación y supervisión de proyectos",
                    "Coordinación de equipos"
                ]
            }
        ]
    }
]
console.log("======MENU======");
console.log("1.Ver\n" +
    "2.Agregar\n" +
    "3.Eliminar\n" +
    "4.Actualizar\n"
);
var opciones = prompt("Por favor elije una opción")

if (opciones == 1) {
    for (i = 0; i < json.length; i++) {
        console.log(json[i])


    }
}
if (opciones == 2) {
    console.log(" Bienvenido por favor ingrese información personal ");
    var nombre = prompt("Ingrese el nombre")
    var edad = prompt("Ingrese la edad")
    console.log("datos de direccion");
    var calle = prompt("Ingrese la calle")
    var numero = prompt(" Número de vivienda ")
    var ciudad = prompt("Ingrese la ciudad")
    console.log("Datos de contacto");
    var correo = prompt("Ingresa tu correo")
    var telefono = prompt("Ingresa tu telefono")
    console.log("Ingresa tu historial educativo");
    var niveleducativo = prompt("Ingresa tu nivel educativo")
    var institucion = prompt("Ingrese el instituto donde estudió")
    var anioinicio = prompt("Ingrese el año de inicio")
    var aniofin = prompt("Ingresa el año en que finalizaste ")
    var nivel = prompt("Ingresa tu nivel académico")
    var institucion2 = prompt("Nombre de la institución")
    var titulo = prompt("Ingrese el titulo que obtuviste")
    var anio_in2 = prompt("Ingrese el año de inicio")
    var anio_fi2 = prompt("ingrisa el año de finalización ")
    console.log("Ingresa tu experiencia laboral");
    var puesto = prompt("Ingresa el puesto que has ejercido")
    var empresa = prompt("Ingresa el nombre de la empresa")
    var periodo = prompt("Ingresa el periodo dentro de la empresa")
    var responsabilidades = prompt("Ingrese tus responsabilidades en la empresa")
    var nuevoempleado = {
        "informacion_personal": [
            {
                "nombre": nombre,
                "edad": edad,
                "direccion": {
                    "calle": calle,
                    "numero": numero,
                    "ciudad": ciudad
                },
                "contacto": {
                    "correo": correo,
                    "telefono": telefono
                }
            }
        ],
        "historial_educativo": [
            {
                "nivel": niveleducativo,
                "institucion": institucion,
                "anio_inicio": anioinicio,
                "anio_fin": aniofin
            },
            {
                "nivel": nivel,
                "institucion": institucion2,
                "titulo": titulo,
                "anio_inicio": anio_in2,
                "anio_fin": anio_fi2
            }
        ],
        "experiencia_laboral": [
            {
                "puesto": puesto,
                "empresa": empresa,
                "periodo": periodo,
                "responsabilidades": [
                    responsabilidades,
                    "Mantenimiento de bases de datos"
                ]
            }

        ]
    }
    json.push(nuevoempleado)
    console.log(json);
}
if (opciones == 3) {

    console.clear()
    console.log("Eliminar información ");
    json[0]["informacion_personal"].pop();
    console.log(json);
    }

if (opciones == 4) {
    console.clear()
    console.log("informacion_personal");
    nombre=prompt("Ingrese el nombre de la persona que desea actualizar ");
    
    
}