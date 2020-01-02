// 5   1
//  4 2
//   3
//  2 4
// 1   5
function daigonal(n) {
    var m;
    m = (n + 1) / 2;
    var arr = [];
    for (var i = 1; i <= n; i++) {
        var str = "";
        for (var j = 1; j <= n; j++) {
            if (i == j) {
                if (i < m) {
                    str = str + (n - j + 1)
                }
                else {
                    str = str + (i);
                }
            }
            else if (i + j == n + 1) {
                if (i < m) {
                    str = str + (i);
                }
                else {
                    str = str + (j);
                }

            }
            else {
                str = str + " ";
            }
        }
        console.log(str)
     }
    // ----------------------------------------------------------------------------------------------


    function num(n) {
        var a = 1;
        for (var i = 1; i <= n; i++) {
            var str = ""
            for (var j = 1; j <= i; j++) {
                console.log(a)
                str = str + (a % 2);
                a++
            }
            console.log(str)
        }
    }
    num(5)

}
daigonal(5)

// 1
// 01
// 010
// 1010
// 10101
// ----------------------------------------------------------------------------
function reverse() {
    for (var i = 1; i <= n; i++) {
        var str = ""
        var str1 = ""
        if (i % 2 == 1) {
            str1 = str1 + ("*")
            for (var j = 1; j <= i; j++) {
                str = str + (j)
            }
            console.log(str1 + "" + str)
        }

        else {
            str1 = str1 + ("*")
            for (var j = i; j > 0; j--) {
                str = str + (j)
            }
            console.log(str + "" + str1)
        }

    }

}
reverse(8)

// Hint: hit control+c anytime to enter REPL.
// *1
// 21*
// *123
// 4321*
// *12345
// 654321*
// *1234567
// 87654321*
