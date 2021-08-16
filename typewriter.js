const printSentence = function(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(()=> {
      process.stdout.write(sentence[i]);
    }, i * 50);

  }
};
console.log(printSentence("hello there from lighthouse labs"));