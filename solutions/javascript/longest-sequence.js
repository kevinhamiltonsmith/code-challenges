define(function () {
    return {
        longestSequence: function(grid) {
            var longest = 0;

            var adjNodes = {
                up: [-1, 0],
                right: [0, 1],
                down: [1, 0],
                left: [0, -1],
                upLeft: [-1, -1],
                upRight: [-1, 1],
                downLeft: [1, -1],
                downRight: [1, 1]
            };

            //custom underscore extend and each functions to deep copy the properties of an object
            var extend = function(obj) {
                each(arguments, function(item) {
                    if (item){
                        for (var newKey in item) {
                            obj[newKey] = item[newKey];
                        }
                    }
                });
              return obj;
            };
            var each = function(obj, iterator) {
                for(var key in obj){
                    if(obj.hasOwnProperty(key)){
                        iterator(obj[key], key, obj);
                    }
                }
            };

            var buildSequence = function(nodeCoords, nodeValue, visited) {
                visited = visited || {};
                visited[nodeCoords] = true;

                var coordArray = nodeCoords.split("-");
                var y = parseInt(coordArray[0], 10);
                var x = parseInt(coordArray[1], 10);

                for (var key in adjNodes) {
                    //build a temp node for each adjacent node
                    var n = {
                        y: y + adjNodes[key][0],
                        x: x + adjNodes[key][1],
                        val: null,
                        coord: ""
                    };

                    if (n.y >= 0 && n.y < grid.length) { //check if temp node has a valid row
                        if (n.x >= 0 && n.x < grid[0].length) { //check if temp node has a valid column
                            n.val = grid[n.y][n.x];
                            n.coord = "" + n.y + "-" + n.x;
                            if (nodeValue <= n.val && visited[n.coord] !== true) { //check if temp node is a valid move in the sequence
                                //extend objects for recursion by value, without reference
                                var newVisited = extend({}, visited);
                                var newN = extend({}, n);

                                buildSequence(newN.coord, newN.val, newVisited);
                            }
                        }
                    }
                }

                if (Object.keys(visited).length > longest) {
                    longest = Object.keys(visited).length;
                }
            };

            for (var i = 0; i < grid.length; i++) {
                for (var j = 0; j < grid[i].length; j++) {
                    var nodeCoords = "" + i + "-" +j;
                    var nodeValue = grid[i][j];
  
                    buildSequence(nodeCoords, nodeValue);
                }
            }

          return longest;
        }
    };
});
