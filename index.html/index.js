var h1Tag = document.getElementById('tag')
var btn = document.getElementById('btn')

// Add a click event listener to the button
btn.addEventListener('click', function () {
  // Change the text of the h1 tag
  h1Tag.innerText = 'Text changed!'
})
