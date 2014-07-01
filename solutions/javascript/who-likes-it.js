define(function () {
    return {
        whoLikesIt: function(names) {
            var numLikes = names.length,
                nameString = '';

            if (!numLikes) {
              nameString = 'no one';
            } else if (numLikes < 4) {
              for (var i = 0; i < numLikes; i++) {
                if (i === 0) {
                  nameString += names[i];
                } else if (i === 1 && numLikes <= 2) {
                  nameString += ' and ' + names[i];
                } else if (i === 1 && numLikes > 2) {
                  nameString += ', ' + names[i];
                } else if (i === 2) {
                  nameString += ' and ' + names[i];
                }
              }
            } else {
              nameString += names[0] + ', ' + names[1] + ' and ' + (numLikes - 2) + ' others';
            }
            return nameString += numLikes < 2 ? ' likes this' : ' like this';
        }
    };
});
