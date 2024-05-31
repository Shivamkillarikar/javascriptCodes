function passwordGenerator(length,uc,lc,sp,nu) {
uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lowercase="abcdefghijklmnopqrstuvwxyz";
special="$#@!%^&*()_-+=";
number="012345689";

let passwd="";
let pas="";
passwd += uc ? uppercase : "";
passwd += lc ? lowercase : "";
passwd += sp ? special : "";
passwd += nu ? number : "";

for(let i=0; i<length; i++) {
    let randomIndex = Math.floor(Math.random() * passwd.length);
    pas+= passwd[randomIndex];
}
return pas;
}

length=10;
lc=true;
uc=true;
sp=true;
nu=true;
const pa= passwordGenerator(length,uc,lc,sp,nu);
console.log(pa);