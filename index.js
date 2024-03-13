
let mode = 'full'
const output = document.getElementById('output')
const fullBtn = document.getElementById('fullBtn')
const dataBtn = document.getElementById('dataBtn')
const timeBtn = document.getElementById('timeBtn')

fullBtn.onclick = function () {
      mode = 'full'
      upDate()
}
dataBtn.onclick = function () {
      mode = 'date'
      upDate()
}
timeBtn.onclick = function () {
      mode = 'time'
      upDate()
}

upDate()

setInterval(() => {
      upDate()
}, 1000)

function upDate() {
      output.textContent = format(mode)
}

function format(formatMode) {
      const now = new Date()

      switch (formatMode) {
            case 'time': return now.toLocaleTimeString();
            case 'date': return now.toLocaleDateString();
            case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
            default: return now.toLocaleTimeString();
      }
}