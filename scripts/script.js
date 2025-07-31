document.addEventListener("DOMContentLoaded", () => {
    const entrada = document.getElementById("textoEntrada");
    const salida = document.getElementById("textoSalida");
    const btnEncriptar = document.getElementById("encriptar");
    const btnDesencriptar = document.getElementById("desencriptar");
    const btnCopiar = document.getElementById("copiar");
    const btnBorrar = document.getElementById("borrar");

    const reglas = {
        a: "Ai", e: "Enter", i: "Imes", o: "Ober", u: "Ufat", b: "Bravo", c: "Charlie", d: "Delta", f: "Fox",
        g: "Golfo", h: "Hotel", j: "Julieta", k: "Kilo", l: "Lima", m: "Metro", n: "Nectar", p: "Papa", q: "Quebec",
        r: "Romero", s: "Sierra", t: "Tango", v: "Victor", w: "Whiskey", x: "X-ray", y: "Yankee", z: "Zulu"
    };

  function encriptar(texto) {
    return texto.replace(/[abcdefghijklmnopqrstuvwxyz]/g, letra => reglas[letra]);
  }

  function desencriptar(texto) {
    for (let [letra, codigo] of Object.entries(reglas)) {
      texto = texto.replaceAll(codigo, letra);
    }
    return texto;
  }

  function guardarEnLocalStorage(clave, valor) {
    localStorage.setItem(clave, valor);
  }

  btnEncriptar.addEventListener("click", () => {
    const texto = entrada.value.toLowerCase();
    const textoEncriptado = encriptar(texto);
    salida.value = textoEncriptado;
    guardarEnLocalStorage("ultimoEncriptado", textoEncriptado);
  });

  btnDesencriptar.addEventListener("click", () => {
    const texto = entrada.value.toLowerCase();
    const textoDesencriptado = desencriptar(texto);
    salida.value = textoDesencriptado;
    guardarEnLocalStorage("ultimoDesencriptado", textoDesencriptado);
  });

  btnCopiar.addEventListener("click", () => {
    salida.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
  });

  btnBorrar.addEventListener("click", () => {
    entrada.value = "";
    salida.value = "";
    localStorage.removeItem("ultimoEncriptado");
    localStorage.removeItem("ultimoDesencriptado");
    alert("Contenido borrado");
  });
  
  const ultimo = localStorage.getItem("ultimoEncriptado");
  if (ultimo) {
    salida.value = ultimo;
  }
});