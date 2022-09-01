const propiedadesJSON = [
  {
    nombre: "Casa de campo",
    descripcion: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    cuartos: 2,
    metros: 170
  },
  {
    nombre: "Casa de playa",
    descripcion: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    cuartos: 2,
    metros: 130
  },
  {
    nombre: "Casa en el centro",
    descripcion: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    cuartos: 1,
    metros: 80
  },
  {
    nombre: "Casa rodante",
    descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    cuartos: 1,
    metros: 6
  },
  {
    nombre: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    cuartos: 3,
    metros: 200
  },
  {
    nombre: "Mansión",
    descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    cuartos: 5,
    metros: 500
  }
];

//Template para la carta
function templateDpto(dpto) {
  return `
  <div class="propiedad">
  <div class="img" style="background-image: url('${dpto.src}')"></div>
  <section>
      <h5>${dpto.nombre}</h5>
      <div class="d-flex justify-content-between">
          <p>Cuartos: ${dpto.cuartos}</p>
          <p>Metros: ${dpto.metros}</p>
      </div>
      <p class="my-3">${dpto.descripcion}</p>
      <button class="btn btn-info">Ver más</button>
  </section>
  </div>`
}
//carga inicial
function initialLoad(dptosContainer) {
  let html = ""

  for (const dpto of propiedadesJSON) {
    html += templateDpto(dpto)
  }
  dptosContainer.innerHTML = html
}
//Funcion para buscar
function search() {
  const inputRooms = document.querySelector("#inputRooms").value
  const inputFromMeters = document.querySelector("#inputFromMeters").value
  const inputToMeters = document.querySelector("#inputToMeters").value

  if (inputRooms === "" || inputFromMeters == "" || inputToMeters === "") {
    alert("Faltan campos por llenar")
    return
  }

  if (isNaN(inputRooms) || isNaN(inputFromMeters) || isNaN(inputToMeters)) {
    alert("Los datos ingresados deben ser de tipo numerico.")
  }

  let html = ""
  let count = 0
  for (const dpto of propiedadesJSON) {
    if (dpto.cuartos >= inputRooms && (dpto.metros >= inputFromMeters && dpto.metros <= inputToMeters)){
      html += templateDpto(dpto)
      count += 1
    }
  }
  const dptosContainer = document.getElementsByClassName("propiedades")[0]
  dptosContainer.innerHTML = html
  document.getElementById("total").innerHTML = `Total: ${count}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
  const dptosContainer = document.getElementsByClassName("propiedades")[0]
  const searchBtn = document.querySelector("#btn-search")

  searchBtn.addEventListener('click', search)

  initialLoad(dptosContainer)
})
//funcion para modo Dark/light
function changeMode(){
  var element = document.body;
  element.classList.toggle("light-mode")
}