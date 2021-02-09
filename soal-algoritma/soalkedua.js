var bigArr = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3]
var a = bigArr.slice(0,11)
var b = bigArr.slice(11,22)
var c = bigArr.slice(22,32)
let totalA = 0;
for(var i=0;i<a.length;i++){
  totalA += a[i];
}
let totalB = 0;
for(var i=0;i<b.length;i++){
  totalB += b[i];
}
let totalC = 0;
for(var i=0;i<c.length;i++){
  totalC += c[i];
}
console.log('Bagi data tersebut menjadi 3 kelompok'+'\n\n'+'Data A = '+a+'\n'+'Data B = '+b+'\n'+'Data C = '+c)

console.log('\nTampilkan data setiap kelompok secara terurut dari besar ke kecil')
console.log('Data A = '+a.sort(function(a, b){return a - b}).reverse())
console.log('Data B = '+b.sort(function(a, b){return a - b}).reverse())
console.log('Data C = '+c.sort(function(a, b){return a - b}).reverse())

console.log('\nHitung total setiap kelompok data')
console.log('Data A = '+totalA+'\nData B = '+totalB+'\nData C = '+totalC)

console.log('\nHitung rata rata setiap kelompok data')
console.log('Data A = '+totalA/a.length+'\nData B = '+totalB/b.length+'\nData C = '+totalC/c.length)

console.log('\nCarilah nilai tertinggi dan terendah setiap kelompok data')
console.log('Data A nilai tertinggi = '+a.reduce(function(a, b) {
    return Math.max(a, b);
})+' nilai terendah = '+a.reduce(function(a, b) {
    return Math.min(a, b);
}))
console.log('Data B nilai tertinggi = '+b.reduce(function(a, b) {
    return Math.max(a, b);
})+' nilai terendah = '+a.reduce(function(a, b) {
    return Math.min(a, b);
}))
console.log('Data C nilai tertinggi = '+c.reduce(function(a, b) {
    return Math.max(a, b);
})+' nilai terendah = '+a.reduce(function(a, b) {
    return Math.min(a, b);
}))