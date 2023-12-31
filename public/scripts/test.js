
// Verificar la autenticación al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const cuerpoPagina = document.querySelector("body"); // Selecciona el elemento que deseas ocultar

  // Verificar si el usuario está autenticado
  if (!userInfo || !userInfo.token) {
      // Si no está autenticado, redirigir a la página de inicio de sesión
      window.location.href = "signin.html";
  } else {
      // Si está autenticado, mostrar el contenido
      cuerpoPagina.classList.remove("ocultar");
  }
});

window.copiarAlPortapapeles = (texto) => {
  const textarea = document.createElement('textarea');
  textarea.value = texto;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('API Key copiada al portapapeles');
  };
  
  
  document.addEventListener("DOMContentLoaded", function () {
  // Tu código de account.js aquí
  // Función para copiar al portapapeles
  
  // TRAE LA INFO DEL USUARIO
  async function obtenerUsuario(req, res) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const id = userInfo._id;
  
  try {
      const { data } = await axios.get(`/users/userinfo/${id}`);
      // Devolver un array con un solo elemento que contiene el objeto de datos
      console.log([data])
      return [data];
  } catch (error) {
      console.log("entra en el error");
      // alerta en caso de error
      return []; // Devolver un array vacío en caso de error
  }
  }
  
  // Definir display globalmente
  const display = document.getElementById("display-data2");
  
  const mostrarData = async () => {
  const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  const payload = await obtenerUsuario();
  
  if (Array.isArray(payload)) {
    const user = payload[0];
  
    if (user) {
      const renderizarPropiedad = (etiqueta, valor) => {
        if (etiqueta === 'API Key') {
          return valor ? `<p class="text-white text-3xl">${etiqueta}: ${valor}</p>` : '<p class="text-white text-2xl">API Key: Todavía no hay apiKey generada</p>';
        } else {
          return valor ? `<p class="text-white text-3xl">${etiqueta}: ${valor}</p>` : '';
        }
      };
  
      const renderizarFecha = (etiqueta, fecha) => {
        return fecha ? renderizarPropiedad(etiqueta, fecha) : '';
      };
  
      const renderizarEnlace = (etiqueta, enlace) => {
        return enlace ? `<p class="text-white">${etiqueta}: <a href="${enlace}" target="_blank">Ver factura</a></p>` : '';
      };
      
      const apiPro = 'be3b76d1a581960973dccf6ec0c26563';
      const apiPremium = '1e30cbfe912e3b8125283ddfe4d8bb8d';
      const apiExpired = '4e06307a4a582ac6d13aee9aebc8d4d2';

      const renderizarCredenciales = (apiKey) => {
        if (apiKey) {
          return `
            <div class="mt-5">
              <div class="flex items-center">
                <p class="text-blue-500 text-4xl">${renderizarPropiedad('YOUR API KEY', apiKey)}</p>
                <button onclick="copiarAlPortapapeles('${apiKey}')" class="ml-5 bg-blue-500 text-white px-4 py-2 rounded">Copy</button>
              </div>
              <div>
                ${renderizarSubscriptionDetails2(fechaInicio, fechaFin, subscripcionTitle)}
              </div>
              <div class="mt-0">
                  
                    <div class="flex items-center mt-3 mb-3">
                    <p class="text-blue-400 text-2xl">API KEY PRO 'be3b76d1a581960973dccf6ec0c26563'</p>
                    <button onclick="copiarAlPortapapeles('${apiPro}')" class="ml-5 bg-blue-500 text-white px-4 py-2 rounded">Copy</button>
                    </div>

                    <div class="flex items-center">
                    <p class="text-yellow-500 text-2xl">API KEY PREMIUM '1e30cbfe912e3b8125283ddfe4d8bb8d'</p>
                    <button onclick="copiarAlPortapapeles('${apiPremium}')" class="ml-5 bg-blue-500 text-white px-4 py-2 rounded">Copy</button>
                    </div>
                    <div class="flex items-center mt-3">
                    <p class="text-red-400 text-2xl">API KEY EXPIRED '4e06307a4a582ac6d13aee9aebc8d4d2'</p>
                    <button onclick="copiarAlPortapapeles('${apiExpired}')" class="ml-5 bg-blue-500 text-white px-4 py-2 rounded">Copy</button>
                    </div>
                </div>
            </div>
          `;
        } else {
          return `
            <div class="mt-2 flex items-center w-full gap-32">
  
                <div>
          <h1 class="text-white text-3xl mb-4">CREATE YOUR FIRST KEY</h1>
  
                <a href="/pricing.html" class="text-white text-xl border rounded p-2 hover:text-blue-400">Create your 100% free test subscription.</a>
                </div>
  
                <div class="mt-0">
                    <h1 class="text-white text-3xl mb-2">API KEYS FREE</h1>
  

                  <div class="my-4">
                    <a href="/pricing.html" class="text-white text-xl border rounded p-2 hover:text-blue-400">CREATE YOUR FIRST API KEY</a>
                  </div>
                    
                    <div class="flex items-center my-4">
                      <p class="text-white">FREE KEY PRO 'be3b76d1a581960973dccf6ec0c26563'</p>
                      <button onclick="copiarAlPortapapeles('${apiPro}')" class="ml-5 bg-blue-500 text-white px-4 py-2 rounded">Copy</button>
                    </div>
                    <div class="flex items-center">
                      <p class="text-white">FREE KEY PREMIUM '1e30cbfe912e3b8125283ddfe4d8bb8d'</p>
                      <button onclick="copiarAlPortapapeles('${apiPremium}')" class="ml-5 bg-blue-500 text-white px-4 py-2 rounded">Copy</button>
                    </div>
                </div>
            </div>
          `;
        }
      };
      
      const renderizarSubscriptionDetails = (fechaInicio, fechaFin, subscripcionTitle) => {
        if (fechaInicio || fechaFin || subscripcionTitle) {
          return `
            <div class="mt-5">
              ${renderizarFecha('Start Date', fechaFormateadaInicio)}
              ${renderizarFecha('End Date', fechaFormateadaFin)}
              ${renderizarPropiedad('Subscription Title', subscripcionTitle)}
            </div>
          `;
        } else {
          return `
            <div class="">
              <p class="text-white">Aún no te has suscrito a ningún servicio</p>
            </div>
          `;
        }
      };
      const renderizarSubscriptionDetails2 = (fechaInicio, fechaFin, subscripcionTitle) => {
        if (fechaInicio || fechaFin || subscripcionTitle) {
          return `
           
          `;
        } else {
          return `
            <div class="">
              <p class="text-white">Aún no te has suscrito a ningún servicio</p>
            </div>
          `;
        }
      };
      const renderizarBilling = (precioSuscripcion, invoice) => {
        if (precioSuscripcion || invoice) {
          return `
            <div class="mt-5">
              ${renderizarPropiedad('Subscription Price', precioSuscripcion ? `${precioSuscripcion} USD` : '')}
              ${renderizarEnlace('Invoice', invoice)}
            </div>
          `;
        } else {
          return `
            <div class="">
              <p class="text-white">Aún no tienes facturas generadas</p>
            </div>
          `;
        }
      };
  
      const {
        nombre,
        apellido,
        email,
        apiKey,
        fechaSubscripcion,
        fechaVencimiento,
        precioSuscripcion,
        subscripcionTitle,
        typeSuscription,
        invoice
      } = user;
  
      const fechaInicio = fechaSubscripcion ? new Date(fechaSubscripcion) : null;
      const fechaFormateadaInicio = fechaInicio ? fechaInicio.toLocaleDateString('es-ES', opcionesFecha) : '';
  
      const fechaFin = fechaVencimiento ? new Date(fechaVencimiento) : null;
      const fechaFormateadaFin = fechaFin ? fechaFin.toLocaleDateString('es-ES', opcionesFecha) : '';
  
      const userHtml = `
      <div class="flex p-2 m-auto">
      <div class="flex flex-col p-1">
        ${renderizarCredenciales(apiKey)}
      </div>
    </div>
      `;
  
      display.innerHTML = userHtml;
  
      
    } else {
      console.error("La estructura del objeto de usuario no es la esperada:", user);
    }
  } else {
    console.error("La respuesta de obtenerUsuario no tiene la estructura esperada:", payload);
  }
  };
  
  mostrarData();
  
  });
  
