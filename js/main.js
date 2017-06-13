var app = {
  countWords: function countWords (text) {
    var wordList = Object.create(null)
    text.split(/[\s.,?!;:'"()]+/).forEach(function countWord (word) {
  	  var tempWord = word.toLowerCase()
      if (wordList[tempWord]) {
        wordList[tempWord] += 1
      }
      else if (tempWord.length >= 2) {
        wordList[tempWord] = 1
      }
    })
    return wordList
  },
  createUlFromWordsList: function createUlFromWordsList (list) {
  	var myUl = document.createElement("ul")
  	Object.keys(list).forEach(function (index) {
      var li = document.createElement("li"),
        text = document.createTextNode(index + ' : ' + list[index])
      li.appendChild(text)
      myUl.appendChild(li)
    })
    return myUl
  }
}

document.body.appendChild(
  app.createUlFromWordsList(
    app.countWords(
      document.getElementById('div1').innerText
    )
  )
)

