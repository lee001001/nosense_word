// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}


// define generatePassword function
function generateWords(options) {
  // define thing
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let initBox = ['身為一個']
  let target = ''
  let collection = []

  // define dummy data
  //const options = {
  // engineer: 'on'
  //}
  console.log('options', options)

  if (options.target === 'engineer') {
    target = '工程師'
    collection += target
    collection = collection.concat(sample(task.engineer))
    collection = collection.concat(sample(phrase))
    console.log('collection:', collection)
  }

  if (options.target === 'desinger') {
    target = '設計師'
    collection += target
    collection = collection.concat(sample(task.designer))
    collection = collection.concat(sample(phrase))
    console.log('collection:', collection)
  }

  if (options.target === 'entrepreneur') {
    target = '創業家'
    collection += target
    collection = collection.concat(sample(task.entrepreneur))
    collection = collection.concat(sample(phrase))
    console.log('collection:', collection)
  }

  initBox += collection

  console.log('box:', initBox)
  // remove things user do not need



  // return the generated word
  return initBox
}
// export  generateWords function for other file use
module.exports = generateWords