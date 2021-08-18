$(function () {
  $.getJSON('data/AFINN.json', function (AFINN) {
    /// analyzer///

    function tokenize(text) {
      return text.toLowerCase().split(' ');
    }

    function deleteUselessChars(word) {
      return word.replace(/[^\w]/g, '');
    }

    function rateWord(word) {
      return word in AFINN ? AFINN[word] : 0;
    }

    function sum(x, y) {
      return x + y;
    }

    function analyze(text) {
      return tokenize(text).map(deleteUselessChars).map(rateWord).reduce(sum);
    }

    $('.classify').on('click', function () {
      var text = $('.text-entry').val();
      var result = analyze(text);
      console.log(result);

      if (result < 0) {
        results = 'Negative';
      } else if (result == 0) {
        results = 'Neutral';
      } else {
        results = 'Positive';
      }

      console.log(results);

      document.getElementById('results').innerHTML = results;
    });
  });
});
