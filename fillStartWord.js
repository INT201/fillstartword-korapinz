// const { template } = require('@babel/core')

function fillStartWord(startWord, word) {

    if (word == undefined || null ){
      return undefined
     
    }else if(startWord==undefined || null){
        return "startword"+word
    }else{
      return startWord+word
    }
    
  }

    console.log(fillStartWord("mom","dad"))
    console.log(fillStartWord("Marie",null))
    console.log(fillStartWord(undefined,"dad"))
    console.log(fillStartWord(undefined,null))
// module.exports = fillStartWord
