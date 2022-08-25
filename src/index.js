document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTask(e.target.new_task_description.value)
    form.reset()
  })
});

function addTask(e) {
  let li = document.createElement('li')
  li.innerText = e
  li.style.fontSize = '2vw'
  document.getElementById('tasks').appendChild(li)
  if (li.innerText === '') {
    li.remove()
  }

  let button = document.createElement('button')
  button.innerText = "X"
  button.style.fontSize = '1vw'
  button.style.marginLeft = '15px'
  button.style.backgroundColor = 'black'
  button.style.color= 'red'
  li.appendChild(button)

  removeTask(button)
}

function removeTask(e) {
  e.addEventListener('click', () => e.parentNode.remove()
)}