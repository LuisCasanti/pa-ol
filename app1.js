// $(document).ready(function () {


const colores = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "orange",
    "violet",
    "gray",
    "brown",
    "turquoise",
    "purple",
    "skyblue",
    "salmon",
    "cyan",
    "olive",
    "teal"
];

// function cargarcat() {

//     $.ajax({
//         type: "GET",
//         url: "../user/modules/mostrarcats.php",
//         data: { q: "1" },
//         success: function (response) {
//             let res = JSON.parse(response)
//             let html = ""

//             colores.sort(() => Math.random() - 0.5);

//             let colorIndex = 0; // Inicializar el índice del color

//             res.forEach(x => {
//                 // const element = array[i];
//                 let color = colores[colorIndex % colores.length];
//                 colorIndex++;
//                 html += `
//                 <button id="divide-cats"class="all-cats"  style="background-color: ${color}; " data-id="${x.id}"  >${x.nom_cat}<i class="fa-solid fa-circle cats" style="color: ${color}; "></i></button>
//                 `


//             });


//             $("#categorias").html(html)

//         }
//     });

// }

// cargarcat();

// let clickCounter = 0;
// let productClicks = {};  // Estructura para almacenar los clicks de cada producto
// let selectedProducts = {};  // Estructura para almacenar los productos seleccionados

// $(document).on('click', '#divide-cats', function () {
//     let id = $(this).data("id");
//     $.ajax({
//         url: "../user/modules/mostrarcats.php",
//         type: "GET",
//         data: {
//             q: "2",
//             data: id
//         },
//         success: function (response) {
//             let res = JSON.parse(response);
//             let html = "";
//             res.forEach(x => {
//                 let remainingStock = x.cant - (productClicks[x.id_] || 0); // Calcular el stock restante considerando los clics guardados
//                 html += `
//                 <div class="item card" style="width: 250px" id="product-${x.id_}">
//                 <img src="${x.img}" class="rounded" style="width: 250px"/>
//                         <div class="card-body text-center">
//                         <h5 class="card-title fw-bold item-title">${x.nombre}</h5>
//                             <p id="dis-${x.id_}" class="stock-quantity">${remainingStock}</p>
//                             <p>Categoría: ${x.nom_cat}</p>
//                             <button type="button" class="btn btn-outline-info mt-auto item-button" data-bs-toggle="modal" data-bs-target="#descModal">Ver descripción</button>
//                             <button data-id="${x.id_}" data-name="${x.nombre}" data-category="${x.nom_cat}" class="btn btn-outline-dark mt-auto item-button addToCart">Agregar</button>
//                         </div>
//                         </div>
//                     `;
//             });
//             $("#items").html(html);
//         }
//     });
// });


// function mostrartodo() {
//     $.ajax({
//         url: "../user/modules/mostrarcats.php",
//         type: "GET",
//         data: {
//             q: "4",

//         },
//         success: function (response) {
//             let res = JSON.parse(response);
//             let html = "";
//             res.forEach(x => {
//                 let remainingStock = x.cant - (productClicks[x.id_] || 0); // Calcular el stock restante considerando los clics guardados
//                 html += `
//                 <div class="item card" style="width: 250px" id="product-${x.id_}">
//                         <img src="${x.img}" class="rounded" style="width: 250px"/>
//                         <div class="card-body text-center">
//                             <h5 class="card-title fw-bold item-title">${x.nombre}</h5>
//                             <p id="dis-${x.id_}" class="stock-quantity">${remainingStock}</p>
//                             <p>Categoría: ${x.nom_cat}</p>
//                             <button type="button" class="btn btn-outline-info mt-auto item-button" data-bs-toggle="modal" data-bs-target="#descModal">Ver descripción</button>
//                             <button data-id="${x.id_}" data-name="${x.nombre}" data-category="${x.nom_cat}" class="btn btn-outline-dark mt-auto item-button addToCart">Agregar</button>
//                             </div>
//                             </div>
//                             `;
//             });
//             $("#items").html(html);
//         }
//     });
// }
// mostrartodo()
let productosSeleccionados = [];

$(document).on('click', '.addToCart', function () {
    $("#GOpress").prop('disabled', false);

    let productId = $(this).data("id");
    let productName = $(this).data("name");
    let productCategory = $(this).data("category");
    let $stockQuantity = $(`#dis-${productId}`);
    let currentStock = parseInt($stockQuantity.text());

    if (currentStock > 0) {
        $stockQuantity.text(currentStock - 1);
        clickCounter++;
        $('#clickCounter').text(clickCounter);

        // Incrementar el contador de clics del producto
        if (!(productId in productClicks)) {
            productClicks[productId] = 0;
        }
        productClicks[productId]++;

        // Resaltar el producto agregado
        $('.item.card').removeClass('selected-product');
        $(`#product-${productId}`).addClass('selected-product');

        // Actualizar la lista de productos seleccionados
        if (!(productId in selectedProducts)) {
            selectedProducts[productId] = {
                name: productName,
                category: productCategory,
                clicks: 0
            };
        }
        selectedProducts[productId].clicks = productClicks[productId];
        updateProductList();
    }
});

function updateProductList() {
    let productListHtml = ''; // HTML para mostrar la lista de productos seleccionados

    productosSeleccionados = []; // Reiniciar la lista de productos seleccionados

    for (let productId in selectedProducts) {
        let product = selectedProducts[productId];

        // Agregar el producto a la lista de productos seleccionados
        productosSeleccionados.push({
            id: productId,
            nombre: product.name,
            cantidad: product.clicks,
            categoria: product.category
        });

        // Construir el HTML para mostrar el producto en la lista
        productListHtml += `<li>${product.name} (ID: ${productId}) - Cantidad: ${product.clicks} - Categoría: ${product.category}
        <button class="decreaseQuantity" data-id="${productId}">Restar</button>
        </li>`;
    }

    // Mostrar la lista de productos seleccionados en el elemento con id 'productList'
    $('#productList').html(productListHtml);
}

$(document).on('click', '.decreaseQuantity', function () {
    let productId = $(this).data("id");
    if (productClicks[productId] > 0) {
        productClicks[productId]--;
        let $stockQuantity = $(`#dis-${productId}`);
        let currentStock = parseInt($stockQuantity.text());
        $stockQuantity.text(currentStock + 1);

        if (productClicks[productId] === 0) {
            delete selectedProducts[productId];
        } else {
            selectedProducts[productId].clicks = productClicks[productId];
        }

        clickCounter--;
        $('#clickCounter').text(clickCounter);

        updateProductList();
    }
});



//console.log("Jquery is Working");
$(document).on('click', '#buttonModal', function () {




    $(document).on('click', '#enviar', function () {
        // var e = document.getElementById("categoria");
        // var value = e.value;

        var textoSeleccionado = $('#categoria_ option:selected').val();
        // console.log(textoSeleccionado);
        console.log(textoSeleccionado);

        var data = new FormData();
        data.append('producto', $("#producto").val());
        data.append('cantidad', $("#cantidad").val());
        data.append('categoria', textoSeleccionado);
        data.append('descripcion', $("#descripcion").val());
        data.append('url', $('#url_').val()); // Agrega el archivo a FormData
        data.append('codigo', $('#codigo_').val()); // Agrega el archivo a FormData



        $.ajax({
            url: '../user/modules/administrarMod.php',
            data: data,
            type: 'POST',
            processData: false, // No procesar los datos
            contentType: false, // No establecer el tipo de contenido
            success: function (response) {

                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
                console.log(response); // Maneja la respuesta del servidor
            },
            error: function (xhr, status, error) {
                console.error("Error en la solicitud: ", error); // Maneja errores
            }
        });
    });
    $(document).on('click', '#enviar_nueva_categoria', function () {
        // Get the value of the input field for the category name
        var nuevaCategoria = $("#nombreCategoria").val();

        // Ensure the input isn't empty
        if (!nuevaCategoria) {
            alert("Por favor ingrese un nombre para la categoría.");
            return;
        }

        // Create FormData object to send
        var data = new FormData();
        data.append('nuevaCategoria', nuevaCategoria);

        // AJAX request to send the data to the server
        $.ajax({
            url: '../user/modules/cargar_categoria.php',
            type: 'POST',
            data: data,
            contentType: false, // Ensures that the request sends FormData correctly
            processData: false, // Prevents jQuery from processing the data
            success: function (response) {
                console.log(response); // Handle the response
                var res = JSON.parse(response); // Assuming JSON response
                if (res.status === "success") {
                    alert(res.message);
                    // Optionally close modal or reset form here
                    $("#nombreCategoria").val(''); // Reset input field
                } else {
                    alert(res.message);
                }
            },
            error: function (xhr, status, error) {
                console.error("Error in the request: ", error);
                alert("Hubo un error al procesar la solicitud.");
            }
        });
    });


});


$(document).on("click", "#actualizar", function () {
    let name = $("#name").val()
    let cant = $("#cant").val()
    let descrip = $("#descrip").val()
    let id = $("#herraup").val()


    $.ajax({
        type: "POST",
        url: "modules/editarMod2.php",
        data: {
            data: {
                id,
                name,
                cant,
                descrip
            }
        },
        success: function (response) {
            console.log(response);
            const res = JSON.parse(response)
            if (res[0].status == "success") {
                console.log("bien");
                cerrar();
            }



        }
    });
});

function confirmar() {





}
$(document).ready(function () {
    // Declara el array fuera de la función AJAX
    let id_herramientas_temp = [];

    $('#numberInput').on('input', function () {
        $.ajax({
            type: "POST",
            url: "../user/modules/prestarMod.php",
            data: {
                id: $(this).val()
            },
            success: function (response) {
                let data = JSON.parse(response);

                if (data.error) {
                    $('#body').html('');
                    return;
                }

                let html = '';
                data.forEach(element => {
                    html += `
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.herramienta}</td>
                            <td><input type="number" id="stock_${element.id}" data-stock="${element.cant}" class="cantidad form-control" value="1"></td>
                            <td><button class="btn btn-primary confirmar_btn" data-stock="${element.cant}" data-id="${element.id}">Confirmar</button></td>
                        </tr>
                    `;
                });

                $("#body").html(html);
            }
        });
    });

    // Delegación de eventos para los botones de confirmar
    $("#body").on('click', '.confirmar_btn', function () {
        const id = $(this).data('id');
        const stock = parseInt($(this).data('stock'));
        const cantidad = $(this).closest('tr').find('.cantidad').val();
    
        const buscarHerramienta = id_herramientas_temp.findIndex(item => item.id === id);
    
        if (buscarHerramienta !== -1) {
            console.log(`El índice de ${id} es: ${buscarHerramienta}`);
        } else {
            if (cantidad > 0 && cantidad <= stock) {
                $('#lista-confirmados').append(`
                    <li id="item_${id}">
                        <b>ID: </b> ${id}, 
                        <b>Nombre:</b> Martillo, 
                        <b>Cantidad:</b> <input id="editar_${id}" type="number" value="${cantidad}" disabled>
                        <button class="btn btn-success editar_cantidad" data-id="${id}">Editar cantidad</button>
                        <button class="btn btn-danger eliminar_todo_" data-id="${id}">Eliminar</button>
                        <button class="btn btn-success confirmar_nueva_cantidad" style="display:none;" data-id="${id}">Confirmar</button>
                    </li>
                `);
                // Agregar la herramienta al array temporal
                id_herramientas_temp.push({ id: id, cantidad: cantidad, ediciones: [] });
            } else {
                alert('Por favor, ingrese una cantidad válida y no mayor al stock disponible.');
            }
        }
    });
    
    $('#lista-confirmados').on('click', '.editar_cantidad', function () {
        const id = $(this).data('id');
        
        // Hacer que el input de cantidad sea editable
        $(`#editar_${id}`).prop('disabled', false);
    
        // Mostrar el botón de confirmar y ocultar el de eliminar
        $(this).hide();
        $(this).siblings('.confirmar_nueva_cantidad').show();
        $(this).siblings('.eliminar_todo_').hide(); // Ocultar eliminar al editar
    
        // Confirmar la nueva cantidad
        $(this).siblings('.confirmar_nueva_cantidad').off('click').on('click', function () {
            const nuevaCantidad = parseInt($(`#editar_${id}`).val()); // Obtener la cantidad ingresada
            const stock = parseInt($(`#stock_${id}`).data('stock')); // Obtener el stock disponible
    
            if (nuevaCantidad > stock) {
                alert("No se puede llevar más que el stock disponible.");
                return;
            }
    
            // Actualiza la cantidad en el array y guarda la edición
            const index = id_herramientas_temp.findIndex(item => item.id === id);
            if (index !== -1) {
                // Guardar la edición
                id_herramientas_temp[index].ediciones.push(nuevaCantidad);
                // Actualiza la cantidad
                id_herramientas_temp[index].cantidad = nuevaCantidad;
            }
    
            // Deshabilitar el campo de edición
            $(`#editar_${id}`).prop('disabled', true);
    
            // Volver a mostrar el botón de eliminar y ocultar el de confirmar
            $(this).hide();
            $(this).siblings('.editar_cantidad').show(); // Mostrar editar nuevamente
            $(this).siblings('.eliminar_todo_').show(); // Mostrar eliminar nuevamente
        });
    });
    
    
    $(document).on('click', '.eliminar_todo_', function () {
        const id = $(this).data('id');
        
        // Eliminar la herramienta del DOM (la lista de confirmados)
        $(`#item_${id}`).remove();
    
        // Eliminar la herramienta del array id_herramientas_temp
        const index = id_herramientas_temp.findIndex(item => item.id === id);
        if (index !== -1) {
            id_herramientas_temp.splice(index, 1); // Eliminar la herramienta del array
            console.log(`Herramienta con ID ${id} eliminada del array.`);
        }
    });
    
    // Crear botón de guardar

    $('#lista-confirmados').after('<button id="guardar" class="btn btn-success">Guardar</button>');


    // Evento para el botón de guardar
    $('#guardar').on('click', function () {

        if (id_herramientas_temp.length !== 0) {

            // let resumen = 'Herramientas:\n';
            // id_herramientas_temp.forEach(item => {
            //     // resumen += `ID: ${item.id}, Cantidad: ${item.cantidad}\n`;
            // });


            Swal.fire({
                title: 'Resumen de Herramientas',
                html: `
               <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="miCheckbox">
                    <label class="form-check-label" for="flexCheckDefault">
                       <b>Profesor</b> 
                    </label>
                </div>
                    <div id="formulario" style="display: flex; flex-direction: column; width: 400px;">
                        
                        <label for="dni">DNI:</label>
                        <input type="text" id="dni" class="swal2-input" placeholder="DNI del alumno">
            
                        <input type="text" id="nombre" class="swal2-input" placeholder="Nombre del alumno" disabled>
            
                        <input type="text" id="apellido" class="swal2-input" placeholder="Apellido del alumno" disabled>
            
                        <label for="cursos">Seleccione su curso:</label>
                        <select id="cursos" class="swal2-input" style="border: 1px solid #ccc; padding: 8px; border-radius: 4px;">
                            <option value="" disabled>Seleccione un curso</option>
                           
                        </select>
            
                        <label for="grupos">Seleccione su grupo:</label>
                        <select id="grupos" class="swal2-input" style="border: 1px solid #ccc; padding: 8px; border-radius: 4px;">
                            <option value="" disabled>Seleccione un grupo</option>
                          
                        </select>
                    </div>
                `,
                focusConfirm: false,
                preConfirm: () => {



                    const dni = $('#dni').val();
                    const nombre = $('#nombre').val();
                    const apellido = $('#apellido').val();
                    const profesor = $('#profesor').val();
                    const nombreProfe = $('#mostrar').val();

                    const curso = $('#cursos').find('option:selected').text();
                    const grupo = $('#grupos').find('option:selected').text();
                    if ($("#miCheckbox").is(':checked')) {
                        console.log("d");

                        if (!profesor) {
                            Swal.showValidationMessage('Por favor, complete todos los campos del profesor');
                            return;
                        }
                        return { profesor, nombreProfe }

                    }

                    if (!dni || !curso || !grupo || !nombre || !apellido) {
                        Swal.showValidationMessage('Por favor, complete todos los campos del alumno');
                        return;
                    }

                    // console.log("bien?");

                    return { dni, curso, grupo, nombre, apellido };
                },
                confirmButtonText: 'Guardar',
                cancelButtonText: 'Cancelar',
                showCancelButton: true
            }).then((result) => {
                console.log(result);

                let datos = {
                    persona: '',
                    herramientas: id_herramientas_temp
                }

                if (result.isConfirmed) {

                    if (result.value.profesor) {

                        const { profesor, nombreProfe } = result.value;
                        console.log(`${profesor}`);
                        datos.persona = { profesor, nombreProfe }


                        console.log(id_herramientas_temp);
                    } else {

                        const { dni, curso, grupo, nombre, apellido } = result.value;
                        console.log(`DNI: ${dni}, Curso: ${curso}, Grupo: ${grupo}`);
                        datos.persona = {
                            dni,
                            nombre,
                            apellido,
                            curso,
                            grupo
                        }

                        console.log(id_herramientas_temp);
                    }

                }

                console.log(datos);


                function guardar() {

                    $.ajax({
                        type: "post",
                        url: "../user/guardar-prestamo.php",
                        data: { info: datos },

                        success: function (response) {

                            console.log(response);

                            // $.ajax({
                            //     type: "post",
                            //     url: "",
                            //     data: { data: response },

                            //     success: function (response) {

                            //     }
                            // });

                        }
                    });
                }
                guardar()
            });

            // Cambia el evento de cambio del checkbox
            $('#miCheckbox').on('change', function () {
                if ($(this).is(':checked')) {
                    $('#formulario').html(`
            <label for="dni">DNI del profesor:</label>
            <input type="text" id="profesor" class="swal2-input" placeholder="DNI del profesor">
            <input type="text" id="mostrar" class="swal2-input" disabled>
            <p id="showInfo"><p>
        `);
                } else {
                    $('#formulario').html(`
            <label for="dni">DNI:</label>
            <input type="text" id="dni" class="swal2-input" placeholder="DNI del alumno">
            <input type="text" id="nombre" class="swal2-input" placeholder="Nombre del alumno" disabled>
            <input type="text" id="apellido" class="swal2-input" placeholder="Apellido del alumno" disabled>
            <label for="cursos">Seleccione su curso:</label>
            <select id="cursos" class="swal2-input" style="border: 1px solid #ccc; padding: 8px; border-radius: 4px;">
                <option value="" disabled>Seleccione un curso</option>
            </select>
            <label for="grupos">Seleccione su grupo:</label>
            <select id="grupos" class="swal2-input" style="border: 1px solid #ccc; padding: 8px; border-radius: 4px;">
                <option value="" disabled>Seleccione un grupo</option>
            </select>
        `);

                    // Volver a cargar los cursos en el nuevo select
                    cargarCursos();
                }
            });

            // Función para cargar cursos
            function cargarCursos() {
                $.ajax({
                    type: "get",
                    url: "../user/buscar.php",
                    data: { q: "2" },
                    success: function (response) {
                        let data = JSON.parse(response);
                        $("#cursos").empty().append('<option value="" disabled>Seleccione un curso</option>');
                        $.each(data, function (indexInArray, values) {
                            $("#cursos").append(`<option value="${values.id}">${values.ano}-${values.division}</option>`);
                        });
                    }
                });
            }

            // Delegación para el campo del profesor
            $('#formulario').on('input', '#profesor', function () {
                console.log($(this).val());
                $.ajax({
                    type: "get",
                    url: "../user/buscar.php",
                    data: {
                        dni_p: $(this).val(),
                        q: "5"
                    },
                    success: function (response) {
                        console.log(response);
                        let data = JSON.parse(response);
                        // console.log(data);

                        if (data.length > 0) {
                            $("#mostrar").val(`${data[0]['nombre']} ${data[0]['apellido']}`);
                            $("#showInfo").html(``)
                        } else {
                            $("#mostrar").val(''); // Limpiar si no hay resultado
                            $("#showInfo").html(`<b> ingrese el dni del profesor</b>`)
                            console.log(data);

                            console.log("No se encontró el profesor");
                        }
                    }
                });
            });

            // Delegación para el DNI del alumno
            $('#formulario').on('input', '#dni', function () {
                const dniValue = $(this).val();
                $("#nombre").val('');
                $("#apellido").val('');
                if (dniValue.length > 0) {
                    $.ajax({
                        type: "get",
                        url: "../user/buscar.php",
                        data: {
                            dni: dniValue,
                            q: "1"
                        },
                        success: function (response) {
                            let data = JSON.parse(response);
                            if (data.length > 0) {
                                $("#nombre").val(data[0]['nombre']);
                                $("#apellido").val(data[0]['apellido']);
                            } else {
                                console.log("No se encontró el alumno");
                            }
                        },
                        error: function () {
                            console.error("Error en la solicitud AJAX");
                        }
                    });
                }
            });

            
            $('#formulario').on('change', '#cursos', function (e) {
                e.preventDefault();
                console.log(e.target.value);
                $("#grupos").empty().append('<option value="" disabled>Seleccione un grupo</option>');
                $.ajax({
                    type: "get",
                    url: "../user/buscar.php",
                    data: {
                        curso: e.target.value,
                        q: "3"
                    },
                    success: function (response) {
                        let data = JSON.parse(response);
                        $.each(data, function (indexInArray, values) {
                            $("#grupos").append(`<option value="${values.id}">${values.nombre}</option>`);
                        });
                    }
                });
            });


            cargarCursos();


            // alert(resumen);
        } else {
            alert("busque su herramienta")
        }
    });
});




$("#buscar_h").on("click", function () {
    alert("hola")
});

$(document).on('click', '#submitEditar', function () {
    const url = "modules/editarMod2.php";

    // console.log(foto);

    const postData = {
        producto: $("#nuevoNombreProducto").val(),
        cantidad: $("#nuevaCantidad").val(),
        imagen: $("#nuevaImagen").val(),
        id: id


    };

    $.ajax({
        type: "POST",
        url: url,
        data: postData,
        success: function (response) {
            console.log(response);
        }
    });

    console.log(postData);
    if (postData.producto && postData.cantidad) {
        // // console.log("pim");
        // $.post(url, postData, (response) => {
        //     const rta = JSON.parse(response);
        //     console.log(rta);
        //     if (rta == 1) {
        //         window.location = "administrar.php";
        //     }
        //     console.log(response);
        // });
    } else {
        let timerInterval
        Swal.fire({
            title: 'Complete todos los datos para seguir!',
            html: 'Cerrando en.. 2 Segundos',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }







});

// });


// $(document).on("click", "#cerrar_", function () {
//     cerrar()
// });





// eliminar herramienta
$(document).on('click', '#eliminar', function () {

    let id = $(this).data('id');

    console.log(id);
    const postData = {
        id: id
    };
    const url = "modules/eliminarMod.php";

    console.log(postData);
    $.post(url, postData, (response) => {
        const rta = JSON.parse(response);
        if (rta == 1) {
            window.location = "administrar.php";
        }
        console.log(response);

    });


});
// });

// export function myFunction() {
//     return productosSeleccionados;
// }
// export function reset() {
//     clickCounter = 0;
//     productClicks = {};
//     selectedProducts = {};
//     productosSeleccionados = []; // Vaciar el array global
//     $('#clickCounter').text(clickCounter); // Actualizar el contador de clics en la UI
//     updateProductList(); // Actualizar la lista de productos seleccionados en la UI
// }

