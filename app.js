
   

const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "yellow", "blue", "green", "cyan", "pink", "prple", "orange", "darkgreen", "grey", "red", "gold", "#fc03d3", "#03fcc6", "#b6fc03", "#4f3f8c", "#38786f", "#783838"
];

button.addEventListener("click", changeBackgronund);
let sira = 0;
function changeBackgronund() {
  //rasgele bir renk
//const rastgelesayi = (Math.random() * colors.length );
//const seilenRenk = colors(rastgelesayi);
//console.log(rasgalesayi,seçilenRenk);
//
  //sıraya arkaplan rendi seç
  //console.log(sıra);
  //const seçilenRenk = colors[sira];
    
    //body.style.backgroundColor = red;
    if(sira ==17) sira =0;
    const secilenRenk = colors[sira];
  sira++;
  body.style.backgroundColor = secilenRenk;
}


