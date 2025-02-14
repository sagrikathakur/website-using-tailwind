const navDia =document.getElementById('navDia');
function handleMenu(){
  navDia.classList.toggle('hidden');
}


//////////////////////////////////////////////////////footer///////////////////
document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("bg-gray-100");
  document.body.classList.toggle("bg-gray-800");
});

