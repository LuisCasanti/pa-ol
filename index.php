<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <title>LOGIN</title>
</head>
<body class="bg-grey">

  <section class="h-100 gradient-form">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                  <img class="img-fluid" src="assets/favicon.png" alt="Logo Tecnica">
                  <h4 class="mt-1 mb-5 pb-1">INICIAR SESIÓN</h4>
                </div>

                <div class="error">
                <form id="form-login" action="modules/loginMod.php" method="POST">
                  <p>Ingrese su llave de seguridad o DNI</p>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" name="password" id="password" class="form-control" required/>
                  </div>
                  
                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn bg-black text-white btn-block fa-lg mb-3" type="submit" id="submit" name="submit">
                      Ingresar
                    </button>
                  </div>
                  
                </form>
                </div>

              </div>
            </div>

            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">Bienvenido a gestor de prestado de herramientas (POZO) virtual</h4>
                <p class="small mb-0">Custodiar, controlar y entregar apoyo en lo que respecta a la distribución de suministros y gestión de inventarios en la institución. Supervisar, Ejecutar y Tomar registro de bienes materiales que se ingresen los insumos que salen de bodega conforme a requerimientos de jefaturas superiores son solo algunos de los ejercicios del pañol virtual</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!--swal cdn -->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>


<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js" integrity="sha256-eTyxS0rkjpLEo16uXTS0uVCS4815lc40K2iVpWDvdSY=" crossorigin="anonymous"></script>

<script type="text/javascript" src="JS/app.js"></script>
</body>
</html>