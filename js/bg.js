// const coloredDiv = document.getElementById("game");

// coloredDiv.addEventListener("mousemove", function(event) {
//   const x = event.clientX - coloredDiv.offsetLeft;
//   const y = event.clientY - coloredDiv.offsetTop;

//   // Aplicar gradiente radial à div com base na posição do mouse
//   coloredDiv.style.background = `radial-gradient(circle at ${x}px ${y}px, #151515, transparent)`;
// });

// document.body.addEventListener("mousemove", function(event) {
//     const x = event.clientX;
//     const y = event.clientY;
  
//     // Aplicar gradiente radial ao corpo com base na posição do mouse
//     document.body.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, #151515, transparent)`;
//   });
  
// document.body.addEventListener("mousemove", function(event) {
//     const x = event.clientX;
//     const y = event.clientY;
  
//     // Cores pastéis para o gradiente
//     const pastelColors = ["#e57373", "#ffb74d", "#fff176", "#81c784", "#64b5f6", "#9575cd", "#ff8a65"];
  
//     // Gerar gradiente radial pastel com base na posição do mouse
//     const gradientColors = pastelColors.map((color, index) => {
//       const percentage = (index / (pastelColors.length - 1)) * 100;
//       return `${color} ${percentage}%`;
//     }).join(", ");
  
//     // Aplicar gradiente radial ao corpo
//     document.body.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, ${gradientColors})`;
//   });
  
// document.body.addEventListener("mousemove", function(event) {
//     const x = event.clientX / window.innerWidth * 100; // Posição horizontal do mouse em relação à largura da janela
//     const y = event.clientY / window.innerHeight * 100; // Posição vertical do mouse em relação à altura da janela

//     // Cores pastéis para o gradiente
//     const pastelColors = ["#ff9ff3", "#a29bfe", "#74b9ff", "#55efc4"]; // 4 cores

//     // Gerar gradiente linear pastel com base na posição do mouse
//     const gradientColors = pastelColors.join(", ");

//     // Aplicar gradiente linear ao corpo com base na posição do mouse
//     document.body.style.backgroundImage = `linear-gradient(${45 + x}deg, ${gradientColors})`;
//   });

document.body.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;

    // Cores pastéis para o gradiente
    const pastelColors = ["#74b9ff", "#55efc4", "#a29bfe", "#9575cd"]; // 4 cores

    // Gerar gradiente radial pastel com base na posição do mouse
    const gradientColors = pastelColors.join(", ");

    // Aplicar gradiente radial ao corpo com base na posição do mouse
    document.body.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, ${gradientColors})`;
  });