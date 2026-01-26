<script>

'use strict';

function maximumOccurringCharacter(text) {
  console.log(text);

  var i = 0;
  var maxCount = 0;
  var maxCountChar = '';

  while (i < text.length) {

    var thisChar = text.charAt(i);
    console.log(thisChar);

    var re = new RegExp(thisChar, 'g');
    var thisCharCount = text.match(re).length;

    console.log(thisCharCount);

    if (thisCharCount > maxCount) {
      var maxCountChar = thisChar;
    }

    console.log(maxCountChar);

    var maxCount = thisCharCount;
    i++;
  }

  return maxCountChar;

}

maximumOccurringCharacter('foollllee');

</script>


<?php



?>