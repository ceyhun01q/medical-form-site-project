let form = document.querySelector(".form")
let button = document.querySelector("button")

button.addEventListener("click",()=>{
      alert("Kart qeydiyyatdan keçdi")

      form.addEventListener('submit', (event) => {
    event.preventDefault();
    let  data = new FormData(event.target);

  console.log(data.get('ad'));
  console.log(data.get('seriya'));
  console.log(data.get('cins'));
  console.log(data.get('yas'));
  console.log(data.get('mail'));
  console.log(data.get('tel'));
  console.log(data.get('yazi'));
  })
      
      
  })