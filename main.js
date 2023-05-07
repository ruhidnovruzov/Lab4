let a = prompt("Birinci ədədi daxil edin: ");
let b = prompt("İkinci ədədi daxil edin: ");
let hasil = 1;
let cem = 0;

a = parseInt(a);
b = parseInt(b);

for (i = a; i <= b; i++) {
    if (i % 19 === 0) {
        hasil = hasil * i;
        cem = cem + i;
    }
}

if (hasil !== 1 && cem !== 0)
    alert(`19-a bölünən tam ədədlərin hasili: ${hasil}\n19-a bölünən tam ədədlərin cəmi: ${cem}`)
else {
    alert("19-a tam bölünən heç bir ədəd yoxdur.")
}