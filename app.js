var pronoun = ['the','our','his','her','its','their'];
var adj = ['great', 'big','amazing','super','ultra','infernal'];
var noun = ['jogger','racoon','majesty','power','pony','empanada'];
var domain = ['.com','.cl','.org','.com.ar','.jp','.de']

for(var X=0;X<pronoun.length;X++){
 for(var Y=0;Y<adj.length;Y++){
  for(var Z=0;Z<noun.length;Z++){
    for(var A=0;A<domain.length;A++){
console.log(pronoun[X]+adj[Y]+noun[Z]+domain[A])
            }
        }
     
    } 
}




