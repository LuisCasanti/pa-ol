// const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
// addToShoppingCartButtons.forEach((addToCartButton) => {
//   addToCartButton.addEventListener('click', addToCartClicked);
// });

// const comprarButton = document.querySelector('.comprarButton');
// comprarButton.addEventListener('click', comprarButtonClicked);

// const comprarButtonRfid = document.querySelector('#prestRfid');
// comprarButtonRfid.addEventListener('click', comprarButtonClickedRfid);

// const shoppingCartItemsContainer = document.querySelector(
//   '.shoppingCartItemsContainer'
// );    

// function addToCartClicked(event) {
//   const button = event.target;
//   const item = button.closest('.item');
//   var botonAgregar = document.getElementById('agregarHerramientaButtonClicked');
//   const itemTitle = item.querySelector('.item-title').textContent;
//   const itemId = item.querySelector('.item-title').id;

//   addItemToShoppingCart(itemTitle, itemId);
//   //console.log(itemId);
  

  
//   var conts = $(this).attr('contador');
//   var tomacont = conts-1;
//   $('#cont'.conts).text(tomacont);

//   console.log('tomacont: '.tomacont);

//   if (tomacont == 0){
//     $('#cont'+conts).attr('disabled', true);
//   }
// }  


// // var limiteHerramientas = 0;
// // var cantidadActual = 0; 

// // function agregarHerramientaButtonClicked() {


//   // var botonAgregar = document.getElementById('agregarHerramientaButtonClicked');

//   // if (cantidadActual < limiteHerramientas) {
    
//   //   cantidadActual++;

//   // } else {
    
//   //   botonAgregar.disabled = true;
    
//   // }

// function addItemToShoppingCart(itemTitle, itemId) {
//   const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
//     'shoppingCartItemTitle'
//   );
//   for (let i = 0; i < elementsTitle.length; i++) {
//     if (elementsTitle[i].innerText === itemTitle) {
//       let elementQuantity = elementsTitle[
//         i
//       ].parentElement.parentElement.parentElement.querySelector(
//         '.shoppingCartItemQuantity'
//       );
//       elementQuantity.value++;
//       $('.toast').toast('show');
//       updateShoppingCartTotal();
//       return;
//     }
//   }

//   const shoppingCartRow = document.createElement('div');
//   const shoppingCartContent = `  
//     <div class="shoppingCartItem">
//         <div class="row g-0">
//             <li class="list-group-item shopping-cart-item-title shoppingCartItemTitle">${itemTitle}</li>
//         </div>

//         <div class="row g-0 mb-3">
//             <div class="btn-group btn-group-sm shopping-cart-quantity"> <!-- col-3 -->
//                 <input type="number" class="btn btn-dark shopping-cart-quantity-input shoppingCartItemQuantity"  id="${itemId}" value="1">
//                 <button type="button" class="btn btn-danger buttonDelete"><i class="fas fa-times"></i></button>
//             </div>
//         </div>
//     </div>
//     `;
//   shoppingCartRow.innerHTML = shoppingCartContent;
//   shoppingCartItemsContainer.append(shoppingCartRow);

//   shoppingCartRow
//     .querySelector('.buttonDelete')
//     .addEventListener('click', removeShoppingCartItem);

//   shoppingCartRow
//     .querySelector('.shoppingCartItemQuantity')
//     .addEventListener('change', quantityChanged);

//   updateShoppingCartTotal();
// }

// function updateShoppingCartTotal() {
//   let total = 0;
//   const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

//   const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

//   shoppingCartItems.forEach((shoppingCartItem) => {

//     const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
//       '.shoppingCartItemQuantity'
//     );
//     const shoppingCartItemQuantity = Number(
//       shoppingCartItemQuantityElement.value
//     );
//     total = total + shoppingCartItemQuantity;
//   });
//   shoppingCartTotal.innerHTML = `${total.toFixed(2)} cantidades`;
// }

// function updateShoppingCartTotalEnvioDatos() {
//   let total = 0;

//   const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

//   const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

//   shoppingCartItems.forEach((shoppingCartItem) => {

//     const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
//       '.shoppingCartItemQuantity'
//     );
//     const shoppingCartItemQuantity = Number(
//       shoppingCartItemQuantityElement.value
//     );
//     total = total + shoppingCartItemQuantity;
//   });
//   shoppingCartTotal.innerHTML = `${total.toFixed(2)} cantidades`;
// }

// function removeShoppingCartItem(event) {
//   const buttonClicked = event.target;
//   buttonClicked.closest('.shoppingCartItem').remove();
//   updateShoppingCartTotal();
// }

// function quantityChanged(event) {
//   const input = event.target;
//   input.value <= 0 ? (input.value = 1) : null;
//   updateShoppingCartTotal();
// }

// //enviar datos
// function comprarButtonClicked() {
//   let validar = {
//     dni: document.getElementById('dniPrestado'),
//     nya: document.getElementById('nomyapePrestado'),
//     curso: document.getElementById('cursoPrestado'),
//     grupo: document.getElementById('grupoPrestado')
//   }

//   if (validar.dni.value != '' && validar.nya.value != '' && validar.curso.value != '' && validar.grupo.value != '') {
//     var myArray = [];
//     $(".shoppingCartItemQuantity").each(function () {
//       var ArrayHerramientas = {
//         id: $(this).attr("id"),
//         cantidad: $(this).val()
//       };
//       myArray.push(ArrayHerramientas);
//       //$(this).val()
//     });

//     var herramientas = [];
//     var totalHerramientas = [];
//     myArray.forEach(function (element) {

//       herramientas.push(element.id);
//       totalHerramientas.push(element.cantidad);
//     });
//     console.log(totalHerramientas);
//     console.log(herramientas);

//     $.ajax({
//       url: "../proyecto-carrito-compra-con-JS/envioPrestamos.php",
//       type: "POST",
//       data: {
//         dniPrestado: $("#dniPrestado").val(),
//         nomyapePrestado: $("#nomyapePrestado").val(),
//         grupo: $("#grupoPrestado").val(),
//         cursoPrestado: $("#cursoPrestado").val(),
//         idHerramientas: JSON.stringify(herramientas),
//         numbHerramientras: JSON.stringify(totalHerramientas)
//       },
//       success: function (response) {
//         console.log(response);
//         console.log(totalHerramientas);
//       }
//     });

//     shoppingCartItemsContainer.innerHTML = '';
//     updateShoppingCartTotal();
//     window.location = "prestarHerramientas.php";

//   }
// }

// function comprarButtonClickedRfid() {
//   var rfid = $("#rfidPrestado").val();

//   if (rfid != '') {
//     var myArray = [];
//     $(".shoppingCartItemQuantity").each(function () {
//       var ArrayHerramientas = {
//         id: $(this).attr("id"),
//         cantidad: $(this).val()
//       };
//       myArray.push(ArrayHerramientas);
//       //$(this).val()
//     });

//     var herramientas = [];
//     var totalHerramientas = [];
//     myArray.forEach(function (element) {

//       herramientas.push(element.id);
//       totalHerramientas.push(element.cantidad);
//     });
//     console.log(totalHerramientas);
//     console.log(herramientas);

//     $.ajax({
//       url: "../proyecto-carrito-compra-con-JS/envioRfid.php",
//       type: "POST",
//       data: {
//         rfid: rfid,
//         idHerramientas: JSON.stringify(herramientas),
//         numbHerramientras: JSON.stringify(totalHerramientas)
//       },
//       success: function (response) {
//         console.log(response);
//         console.log(totalHerramientas);
//       }
//     });

//     shoppingCartItemsContainer.innerHTML = '';
//     updateShoppingCartTotal();
//     window.location = "prestarHerramientas.php";

//   }

// }

// function agregarHerramientaButtonClicked(id, stock, limiteHerramientas) {

//   // alert("ddd")
//   const addToCartButtons = document.querySelectorAll('.addToCart');
//   addToCartButtons.forEach((button) => {
//       button.addEventListener('click', (event) => {
//           event.preventDefault();
          
//           // Obtener la cantidad de herramientas a agregar
//           const cantidadInput = event.target.parentElement.querySelector('.shoppingCartItemQuantity');
//           const cantidad = parseInt(cantidadInput.value);

//           // Verificar si hay stock suficiente
//           if (cantidad > 0 && cantidad <= stock) {
//               // Verificar el límite de herramientas perdidas
//               if (cantidadActual < limiteHerramientas) {
//                   addItemToShoppingCart(id, cantidad);
//                   // Reducir el stock en la base de datos
//                   reduceStock(id, cantidad);
//                   $('.toast').toast('show');
//                   cantidadActual++;
//               } else {
//                   // Mostrar alerta de límite alcanzado
//                   alert('Se ha alcanzado el límite de herramientas perdidas.');
//               }
//           } else {
//               alert('No hay suficiente stock disponible.');
//           }
//       });
//   });
// }
