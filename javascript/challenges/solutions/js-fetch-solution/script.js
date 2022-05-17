function grabBacon () {
  const targetElement = document.getElementById('target')

  fetch("https://baconipsum.com/api/?type=meat-and-filler")
  .then(response => response.json())
  .then(response => {
    const mappedArray = response.map(index => {
      console.log(index)
     return `<p> ${index} </p>`
      }
    )
    targetElement.innerHTML = mappedArray.join("\n")
  })

}

