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
console.log("1.ver\n" +
    "2.agregar\n" +
    "3.eliminar\n" +
    "4.actualizar\n"
);


var opciones = prompt("Porfavor elije una ópcion")

if (opciones == 1) {
    for (i = 0; i < json.length; i++) {
        console.log(json[i])


    }

}


if (opciones == 2) {


    console.log(" bienvenido por favor ingresa informacion personal ");

    var nombre = prompt("ingrese nombre")
    var edad = prompt("ingresa la edad")
    console.log("datos de direccion");
    var calle = prompt("ingresa la calle")
    var numero = prompt(" numero de vivienda ")
    var ciudad = prompt("ingresa la ciudad")
    console.log("datos de contacto");
    var correo = prompt("ingresa tu correo")
    var telefono = prompt("ingresa tu telefono")

    console.log("ingresa tu historial educativo");
    var niveleducativo = prompt("ingresa tu nivel educativo")
    var institucion = prompt("ingresa el instituto donde estudiaste")
    var anioinicio = prompt("ingresa el año de inicio")
    var aniofin = prompt("ingresa el año que finalizaste ")
    var nivel = prompt(" ingresa tu nivel academico")
    var institucion2 = prompt("nombre de la institucio")
    var titulo = prompt("ingresa el titulo que optubiste")
    var anio_in2 = prompt("ingresa el año de inicio")
    var anio_fi2 = prompt("ingrisa el año de fin")


    console.log("ingresa tu experiencia laboral");
    var puesto = prompt("ingresa el puesto que has ejercido")
    var empresa = prompt("ingresa el nombre de la empresa")
    var periodo = prompt("ingresa el periodo dentro de la empresa")
    var responsabilidades = prompt("ingresa tus responsabilidades en la empresa")

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
    
    function eliminar (json,elemento){
        var resultado = []
        for (i = 0; i < json.length; i++) {
            if(json[i]!==elemento){
                resultado.push(json[i]);
            }
            
        }
    }
    return resultado
}

if (opciones == 4) {
    console.log();

}