// gastos del cliente
const ticket = 12000;

// descuentos

let descactivo = 0.50;
let descadherente = 0.25;
let descbocashop = 0.75;

// obtenemos los elementos
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');

// console.log(cantidad);
// funcion para calcular
function calcularPago(){
    let total = cantidad.value * ticket
    switch (categoria.value) {
        case "activo":
            total = total - (total * descactivo);
            break;
            case "adherente":
                total = total - (total * descadherente);
                break;
                case "bocashop":
            total = total - (total * descbocashop);
            break;
        
            break;
    } 
    
    totalPagar.textContent = `Total a Pagar: $ ${total}`
}

btnResumen.addEventListener('click',(e)=>{
    e.preventDefault()
    calcularPago()
});

