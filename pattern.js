// Q1. Printing pattern 1

function pattern_1(n){
    var res =""
    for(row = 0;row<n;row++){
        for(col=0;col<n-row;col++){
            res += "*"

        }
        res += "\n"
    }
    return res

}
var pat = pattern_1(4)
console.log(pat)

// Q2. Printing Pattern 2

function pattern_2(n){
    var res =""
   for(row =0;row<n;row++){
   for(col = 0;col<n-row;col++){
    res += "*"  
    }
   res += "\n"

   for( k=0;k<=row;k++){
       res += "-"
   }

   }
return res

}
var r = pattern_2(4)
console.log(r)

//Q3. Printing pattern 3

function pattern_3(n){
    var res =""
  for(row =0;row<n;row++){
        for(col = 0;col<=row;col++){
           res += "*"  
              
        }


for( k=1;k<n-row;k++){
    res += "-"
}
res += "\n"
}
return res

}
var r = pattern_3(4)
console.log(r)

// Q4 Printing Pattern 4

function pattern_4(n){
    var res = ""
    for(row = 0;row<n;row++){
        for(col = 0;col<n-row-1;col++){
           res += "-"

        

        }
        for(j = 0;j<=row;j++){
            res += "*"
        }
        res += "\n"

    }
    return res
}
var pat = pattern_4(4)
console.log(pat)