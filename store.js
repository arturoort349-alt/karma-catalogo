/* Datos compartidos entre el catálogo y el panel de admin */
window.DEFAULT={
  settings:{name:'Karma Candles',wa:'',title:'Velas hechas a mano,<br><em>con intención</em>',sub:'Elige tus velas, arma tu pedido y nos llega directo por WhatsApp.'},
  products:[
    {id:'p1',name:'Oráculo II',phrase:'Algunas respuestas llegan con el tiempo.',desc:'Vela en lata negra con calaveritas de cera.\nEnciende. Espera. Hay un mensaje esperando por ti.',price:280,cat:'Colección Mística',tag:'Nuevo',avail:true,photos:['img/oraculo_0.jpg','img/oraculo_1.jpg','img/oraculo_2.jpg','img/oraculo_3.jpg']},
    {id:'p2',name:'Metamorfosis I · Verde',phrase:'Hay fuegos que no consumen. Transforman.',desc:'Vela verde con calavera y flor negra de cera, cuarzos y mecha de madera.\nEnciende, observa, deja que suceda.',price:320,cat:'Colección Mística',tag:'',avail:true,photos:['img/meta_verde_0.jpg','img/meta_verde_1.jpg','img/meta_verde_2.jpg','img/meta_verde_3.jpg']},
    {id:'p3',name:'Metamorfosis I · Lila',phrase:'Hay fuegos que no consumen. Transforman.',desc:'Vela lila de doble mecha con calavera y flor negra de cera y amatistas.\nEnciende, observa, deja que suceda.',price:350,cat:'Colección Mística',tag:'',avail:true,photos:['img/meta_lila_0.jpg','img/meta_lila_1.jpg','img/meta_lila_2.jpg','img/meta_lila_3.jpg']},
    {id:'p4',name:'Cempasúchil',phrase:'Para iluminar el camino de los que regresan.',desc:'Flor de cempasúchil de cera en vaso de vidrio, con listón de cuadros y moño.',price:250,cat:'Día de Muertos',tag:'Temporada',avail:true,photos:['img/cempasuchil_0.jpg','img/cempasuchil_1.jpg','img/cempasuchil_2.jpg','img/cempasuchil_3.jpg']}
  ]
};
window.KEY='karma-catalogo-v1';
window.idb=(()=>{let p;function open(){return p||(p=new Promise((res,rej)=>{const r=indexedDB.open('karma',1);r.onupgradeneeded=()=>r.result.createObjectStore('kv');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)}))}
 return{async get(k){try{const d=await open();return await new Promise(r=>{const q=d.transaction('kv').objectStore('kv').get(k);q.onsuccess=()=>r(q.result);q.onerror=()=>r(null)})}catch(e){return null}},
        async set(k,v){try{const d=await open();await new Promise(r=>{const t=d.transaction('kv','readwrite');t.objectStore('kv').put(v,k);t.oncomplete=r;t.onerror=r})}catch(e){}}}})();
