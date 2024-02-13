// importamos express y cookie-parser
import express from "express";
import cookieParser from "cookie-parser";

// creamos una instancia de express
const app = express();

// le decimos a express que use cookie-parser
app.use(cookieParser());

// definimos las rutas
app.get("/", (req, res) => {
  res.send("Servidor express");
});

//
app.get("/establecercookie", (req, res) => {
    // establecemos la cookie "nombre" "valor"
  res.cookie("mi cookie", "mi cookie", {
    maxAge: 1000 * 120, // tiempo de vida de la cookie (2 minutos para este ejemplo)
    httpOnly: true, // solo se puede acceder a la cookie desde el servidor
    secure: true, // solo se envia por https
    sameSite: "lax", // solo se envia por https
});
  res.send("Cookie establecida");
});

// leer cookies existentes y mostrarlas en consola
app.get("/obtenercookie", (req, res) => {
  console.log(req.cookies);
  res.send("leyendo cookies");
});

// eliminar cookies
app.get("/eliminarcookie", (req, res) => {
  console.log(req.cookies);
  res.clearCookie("mi cookie");
  res.send("eliminando cookies");
});

// iniciamos el servidor
app.listen(3000);
console.log(`Server running on port 3000`);
