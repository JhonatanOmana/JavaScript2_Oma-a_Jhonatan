let json=[

    {
        "products": [
          {
            "id": 1,
            "name": "Laptop",
            "category": "Electronics",
            "price": 999.99,
            "quantityInStock": 50,
            "supplierId": 101
          }
        ],
        "suppliers": [
          {
            "id": 101,
            "name": "Tech Supplies Inc.",
            "contactInfo": {
              "phone": "123-456-7890",
              "email": "sales@techsupplies.com",
              "address": "123 Tech Lane, Silicon Valley, CA"
            }
          }
        ],
        "orders": [
          {
            "orderId": 1001,
            "productId": 1,
            "quantity": 5,
            "orderDate": "2024-08-23",
            "status": "Delivered"
          }
       ]
    }
]
    
console.log(json);


//MENU DE LOS DIFERENTES PERFILES------------------------------

console.log("======MENU======");
console.log("1.Product Management\n" +
    "2.Supplier Management\n" +
    "3.Order Management\n" 
);

var opc=prompt("Elige una opción:")

//PERFIL DE LA PRIMERA OPCION----------------------------------

if(opc==1);
console.clear
console.log("======PRODUCT MANAGEMENT======");
console.log("1.Ver\n" +
    "2.Agregar\n" +
    "3.Eliminar\n" +
    "4.Actualizar\n"
 );

var x=prompt("Elige lo que deseas hacer");

if(x==1){
    for (i = 0; i < json.length; i++) {
        console.log(json[i])
    }
}

if(x==2){
    console.log("Bienvenido por favor ingrese los productos");
    var id=prompt("ingrese el id");
    var name=prompt("ingrese el nombre");
    var category=prompt("ingrese la categoria");
    var price=prompt("ingresa el precio")
    var quantityInStock=prompt("ingresa la cantidad en stock")
    var supplierId=prompt("ingrese id del proveedor")
    var nuevoProducto={

        "products": [
            {
                "id": id,
                "name": name,
                "category": category,
                "price": price,
                "quantityInStock": quantityInStock,
                "supplierId": supplierId
            }
        ]
    }
    json.push(nuevoProducto)
    console.log(json);
}
if(x==3){
    
}

 //PERFIL DE LA SEGUNDA OCPION
if(opc==2);
    console.clear
    console.log("======SUPPLIER MANAGEMENT======");
    console.log("1.Ver\n" +
        "2.Agregar\n" +
        "3.Eliminar\n" +
        "4.Actualizar\n"
 );
if(opc==3);
    console.clear
    console.log("======ORDER MANAGEMENT======");
    console.log("1.Ver\n" +
        "2.Agregar\n" +
        "3.Eliminar\n" +
        "4.Actualizar\n"
);
