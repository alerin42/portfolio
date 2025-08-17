const certificados = [
  {
    titulo: "Curso de Angular - Básico ao Avançado",
    descricao: "PDF do certificado",
    imagem: "certificados/angular.png", // logo do Angular
    link: "https://drive.google.com/file/d/1SK1f7EYCqaVaoM5jm2oV2e-0_CYXcgqO/view?usp=sharing"
  },
  {
    titulo: "Certificação C# e .NET",
    descricao: "PDF do certificado",
    imagem: "certificados/csharp.png", // logo do C#
    link: "https://drive.google.com/file/d/1IfCUgBmYe9PcXLIaawDVelUoUQsik5yd/view?usp=sharing"
  },
  {
    titulo: "Curso de HTML, CSS e JavaScript",
    descricao: "PDF do certificado",
    imagem: "certificados/javascript.png", // logo do JS
    link: "https://drive.google.com/file/d/1mZhkYpzffZJiI4tT-0jBEYNo1OW2ZVJk/view?usp=sharing"
  }
];

const grid = document.getElementById("certificados-grid");

certificados.forEach(cert => {
  const card = document.createElement("div");
  card.className = "certificado-card";
  card.innerHTML = `
    <img src="${cert.imagem}" alt="${cert.titulo}">
    <h3>${cert.titulo}</h3>
    <p>${cert.descricao}</p>
  `;

  card.addEventListener("click", () => {
    window.open(cert.link, "_blank");
  });

  grid.appendChild(card);
});
