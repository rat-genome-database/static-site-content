(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["configuration"],{"829a":function(e,l,a){"use strict";a.r(l);var t=a("7a23"),o=a("99ba"),c=a.n(o),s=a("5b98"),i=a("6c02"),u=a("5502"),n=a("f212"),v=a("0daf"),d=a("a372"),b=a("0613");Object(t["B"])("data-v-4037536c");const p={class:"configuration-header"},r=Object(t["i"])("img",{alt:"VCMap Logo",class:"logo",src:c.a},null,-1),m=Object(t["i"])("h3",{class:"header"},"VCMap",-1),O={class:"version-label"},j={class:"grid"},f=Object(t["i"])("div",{class:"col-12 text-center"},[Object(t["i"])("h2",null,"Backbone Configuration")],-1),g={class:"col-12 text-center"},h={class:"col-12"},y={class:"grid"},k={class:"lg:col-6 lg:col-offset-3 md:col-8 md:col-offset-2 sm:col-10 sm:col-offset-1"},C=Object(t["i"])("h4",null,"Species",-1),V={class:"grid"},S={class:"lg:col-6 lg:col-offset-3 md:col-8 md:col-offset-2 sm:col-10 sm:col-offset-1"},K=Object(t["i"])("h4",null,"Assembly",-1),w={class:"p-fluid grid"},M={class:"lg:col-6 lg:col-offset-3 md:col-8 md:col-offset-2 sm:col-10 sm:col-offset-1"},L=Object(t["i"])("h4",null,"Gene Symbol",-1),P={key:0},G={class:"grid"},x={class:"lg:col-6 lg:col-offset-3 md:col-8 md:col-offset-2 sm:col-10 sm:col-offset-1"},D={key:0,class:"label-description"},I={key:0},U={key:1,class:"label-description"},A=Object(t["k"])(" Gene Start: "),E={key:0},B={key:2,class:"label-description"},N=Object(t["k"])(" Gene Stop: "),T=Object(t["i"])("div",{class:"p-fluid grid"},[Object(t["i"])("div",{class:"lg:col-2 lg:col-offset-3 md:col-1 md:col-offset-2 sm:col-2 sm:col-offset-1"}),Object(t["i"])("div",{class:"lg:col-2 md:col-3 sm:col-4"}),Object(t["i"])("div",{class:"lg:col-2 md:col-3 sm:col-4"})],-1),W=Object(t["i"])("div",{class:"col-12 text-center"},[Object(t["i"])("h2",null,"Comparative Species")],-1),R={class:"col-12 text-center"},_={class:"col-6 col-offset-3"},q=Object(t["k"])("Selecting 4 or more species might cause display errors"),Q={class:"lg:col-3 lg:col-offset-3 md:col-3 md:col-offset-2 sm:col-4 sm:col-offset-1"},J={class:"lg:col-2 md:col-3 sm:col-4"},z={key:0,class:"warning-text"},F={class:"lg:col-1 md:col-2 sm:col-2"},H={class:"grid"},X=Object(t["i"])("div",{class:"col-12 text-center"},[Object(t["i"])("h2",null,"Backbone Configuration")],-1),Y={class:"col-12 text-center"},Z={class:"col-12"},$={class:"grid"},ee={class:"lg:col-6 lg:col-offset-3 md:col-8 md:col-offset-2 sm:col-10 sm:col-offset-1"},le=Object(t["i"])("h4",null,"Species",-1),ae={class:"grid"},te={class:"lg:col-6 lg:col-offset-3 md:col-8 md:col-offset-2 sm:col-10 sm:col-offset-1"},oe=Object(t["i"])("h4",null,"Assembly",-1),ce={class:"grid"},se={class:"lg:col-6 lg:col-offset-3 md:col-8 md:col-offset-2 sm:col-10 sm:col-offset-1"},ie=Object(t["i"])("h4",null,"Chromosome",-1),ue={class:"p-fluid grid"},ne={class:"lg:col-3 lg:col-offset-3 md:col-4 md:col-offset-1 sm:col-5 sm:col-offset-1"},ve={key:0,class:"label-description"},de={class:"lg:col-3 md:col-3 sm:col-5"},be={key:0,class:"label-description"},pe=Object(t["i"])("div",{class:"col-12 text-center"},[Object(t["i"])("h2",null,"Comparative Species")],-1),re={class:"col-12 text-center"},me={class:"col-6 col-offset-3"},Oe=Object(t["k"])("Selecting 4 or more species might cause display errors"),je={class:"lg:col-3 lg:col-offset-3 md:col-3 md:col-offset-2 sm:col-4 sm:col-offset-1"},fe={class:"lg:col-2 md:col-3 sm:col-4"},ge={key:0,class:"warning-text"},he={class:"lg:col-1 md:col-2 sm:col-2"},ye={class:"grid"},ke={class:"lg:col-6 lg:col-offset-3 md:col-8 md:col-offset-2 sm:col-10 sm:col-offset-1"};Object(t["z"])();var Ce=Object(t["m"])({setup(e){const l=Object(i["c"])(),a=Object(u["b"])(b["b"]),o={GENE:0,POSITION:1},c=Object(t["D"])(o.GENE),Ce=Object(t["D"])([]),Ve=Object(t["D"])(null),Se=Object(t["D"])(!1),Ke=Object(t["D"])(null),we=Object(t["D"])([]),Me=Object(t["D"])([]),Le=Object(t["D"])(null),Pe=Object(t["D"])(null),Ge=Object(t["D"])(!1),xe=Object(t["D"])(0),De=Object(t["D"])(0),Ie=Object(t["D"])([]),Ue=Object(t["D"])(null),Ae=Object(t["D"])(!1),Ee=Object(t["D"])(null),Be=Object(t["D"])(null),Ne=Object(t["D"])(null),Te=Object(t["D"])([]),We=Object(t["D"])(!1),Re=Object(t["D"])("");Object(t["w"])(Xe),Object(t["P"])(Ke,()=>{Te.value.forEach(e=>{cl(e)})});const _e=Object(t["d"])(()=>{const e=Ve.value&&Te.value.length>0&&Te.value.every(e=>0!==e.typeKey&&0!==e.mapKey);return!!e&&(c.value===o.POSITION?Ue.value:c.value===o.GENE&&Pe.value)}),qe=Object(t["d"])(()=>Te.value.length>=5);async function Qe(e){if(null!=Ve.value){Ge.value=!0;try{const l=await s["a"].getGenesBySymbol(Ve.value.activeMap.key,Ve.value.name,e.query);Me.value=l}catch(l){$e(l,"An error occurred while looking up genes")}finally{Ge.value=!1}}}function Je(e){Ke.value=null,we.value=[],Ie.value=[],Ue.value=null,Ee.value=null,Be.value=null,Ne.value=null,Le.value=null,Pe.value=null,xe.value=null,De.value=null,null!=e&&(we.value=e.maps,Ke.value=e.activeMap,ze(Ke.value))}async function ze(e){if(Ie.value=[],Ue.value=null,Ee.value=null,Be.value=null,Ne.value=null,Le.value=null,Pe.value=null,xe.value=null,De.value=null,null!=e){Ae.value=!0;try{const l=await s["a"].getChromosomes(e.key);Ie.value=l}catch(l){$e(l,"An error occurred while looking up chromosomes for the selected backbone species")}finally{Ae.value=!1}Ie.value.length>0&&(Ue.value=Ie.value[0],Fe(Ue.value))}}function Fe(e){var l,a,t;Ee.value=0,Be.value=null!==(l=null===e||void 0===e?void 0:e.seqLength)&&void 0!==l?l:0,Ne.value=null!==(a=null===(t=Ue.value)||void 0===t?void 0:t.seqLength)&&void 0!==a?a:null}async function He(e){var l,a;if(null!=e&&null!=Ve.value)try{Pe.value=await s["a"].getChromosomeInfo(e.chromosome,Ve.value.activeMap.key)}catch(t){$e(t,"An error occurred while getting chromosome data for the gene")}xe.value=null!==(l=null===e||void 0===e?void 0:e.start)&&void 0!==l?l:0,De.value=null!==(a=null===e||void 0===e?void 0:e.stop)&&void 0!==a?a:0}async function Xe(){var e,l;c.value=a.state.configTab,Se.value=!0;const t=a.state.selectedBackboneRegion;try{Ce.value=await s["a"].getSpecies()}catch(p){$e(p,"An error occurred while looking up the available species")}finally{Se.value=!1}if(0===Ce.value.length||null==a.state.species)return;const o=a.state.species;if(Ve.value=null!==(e=Ce.value.filter(e=>e.typeKey===o.typeKey)[0])&&void 0!==e?e:null,null==Ve.value)return;if(we.value=Ve.value.maps,0===we.value.length)return;const i=o.activeMap?o.activeMap.key:o.defaultMapKey;if(Ke.value=null!==(l=we.value.filter(e=>e.key===i)[0])&&void 0!==l?l:null,null!=Ke.value){Ae.value=!0;try{Ie.value=await s["a"].getChromosomes(Ke.value.key)}catch(p){$e(p,"An error occurred while looking up chromosomes for the selected backbone species")}finally{Ae.value=!1}if(0!==Ie.value.length){if(a.state.chromosome){var u;const e=a.state.chromosome;var n,v;if(Ue.value=null!==(u=Ie.value.filter(l=>l.chromosome===e.chromosome)[0])&&void 0!==u?u:null,null!=Ue.value)Ne.value=e.seqLength,Ee.value=null!==(n=a.state.startPos)&&void 0!==n?n:0,Be.value=null!==(v=a.state.stopPos)&&void 0!==v?v:0}if(a.state.gene){const e=a.state.gene;var d,b;if(Le.value=e.speciesName===Ve.value.name?e:null,t.baseSelection.length>0&&t.baseSelection.basePairStart<=e.start&&t.baseSelection.basePairStop>=e.stop)xe.value=null!==(d=a.state.startPos)&&void 0!==d?d:0,De.value=null!==(b=a.state.stopPos)&&void 0!==b?b:0;else xe.value=e.start,De.value=e.stop;if(!a.state.chromosome&&null!=Ve.value){const l=await s["a"].getChromosomeInfo(e.chromosome,Ke.value.key);Ue.value=l}Pe.value=Ue.value}if(a.state.comparativeSpecies){const e=a.state.comparativeSpecies,l=[];e.forEach(e=>{l.push({typeKey:e.typeKey,mapKey:e.activeMap?e.activeMap.key:e.defaultMapKey,showWarning:!1})}),Te.value=l,Te.value.forEach(e=>cl(e))}}}}function Ye(){var e,t,s,i,u,n,v,d,b;if(null!=Ve.value&&null!=Ke.value&&(Ve.value.activeMap=Ke.value),Ze(),a.dispatch("setSpecies",Ve.value),a.dispatch("setLoadedGenes",[]),c.value===o.GENE)a.dispatch("setGene",Le.value),a.dispatch("setChromosome",Pe.value),a.dispatch("setStartPosition",null!==(e=xe.value)&&void 0!==e?e:null===(t=Le.value)||void 0===t?void 0:t.start),a.dispatch("setStopPosition",null!==(s=De.value)&&void 0!==s?s:null===(i=Le.value)||void 0===i?void 0:i.stop),a.dispatch("setLoadStart",null!==(u=xe.value)&&void 0!==u?u:null===(n=Le.value)||void 0===n?void 0:n.start),a.dispatch("setLoadStop",null!==(v=De.value)&&void 0!==v?v:null===(d=Le.value)||void 0===d?void 0:d.stop),a.dispatch("setSelectedGeneIds",[null===(b=Le.value)||void 0===b?void 0:b.rgdId]||!1);else if(c.value===o.POSITION){var p,r,m;a.dispatch("setChromosome",Ue.value),a.dispatch("setStartPosition",null!==(p=Ee.value)&&void 0!==p?p:0),a.dispatch("setStopPosition",null!==(r=Be.value)&&void 0!==r?r:null===(m=Ue.value)||void 0===m?void 0:m.seqLength),a.dispatch("setGene",null),a.dispatch("setSelectedGeneIds",[])}else console.warn("Unknown active tab. State may not be set correctly.");const O=[];Te.value.forEach(e=>{if(0!==e.typeKey)for(let l=0;l<Ce.value.length;l++)if(Ce.value[l].typeKey===e.typeKey){const a=Ce.value[l].copy();for(let l=0;l<a.maps.length;l++)if(a.maps[l].key===e.mapKey){a.activeMap=a.maps[l];break}O.push(a);break}}),a.dispatch("setComparativeSpecies",O),a.dispatch("setConfigTab",c.value),l.push("/main")}function Ze(){var e,l,t,s,i,u,n,v;(null===(e=a.state.species)||void 0===e?void 0:e.typeKey)===(null===(l=Ve.value)||void 0===l?void 0:l.typeKey)&&(null===(t=a.state.species)||void 0===t?void 0:t.activeMap.key)===(null===(s=Ve.value)||void 0===s?void 0:s.activeMap.key)&&(c.value!==o.GENE||(null===(i=a.state.chromosome)||void 0===i?void 0:i.chromosome)===(null===(u=Pe.value)||void 0===u?void 0:u.chromosome)&&a.state.startPos===xe.value&&a.state.stopPos===De.value)&&(c.value!==o.POSITION||(null===(n=a.state.chromosome)||void 0===n?void 0:n.chromosome)===(null===(v=Ue.value)||void 0===v?void 0:v.chromosome)&&a.state.startPos===Ee.value&&a.state.stopPos===Be.value)||a.dispatch("clearBackboneSelection")}function $e(e,l){console.error(e),Re.value=l,We.value=!0}function el(){let e=Te.value.length;e<5&&Te.value.push({typeKey:0,mapKey:0,showWarning:!1})}function ll(e){Te.value.splice(e,1)}function al(e){if(Te.value.length<=e)return[];for(let l=0;l<Ce.value.length;l++)if(Ce.value[l].typeKey===Te.value[e].typeKey)return Ce.value[l].maps;return[]}function tl(e){return e.primaryRefAssembly?e.name+" (primary)":e.name}function ol(e){let l;for(let a=0;a<Ce.value.length;a++)if(Ce.value[a].typeKey===Te.value[e].typeKey){l=Ce.value[a];break}null!=l&&(Te.value[e].mapKey=l.defaultMapKey),cl(Te.value[e])}function cl(e){null!=Ve.value&&null!=Ke.value&&e.typeKey===Ve.value.typeKey&&e.mapKey===Ke.value.key?e.showWarning=!0:e.showWarning=!1}function sl(){Ve.value=null,Ke.value=null,Ue.value=null,Le.value=null,Pe.value=null,Ee.value=null,Be.value=null,Ne.value=null,xe.value=null,De.value=null,Te.value=[],Ie.value=[],a.dispatch("clearConfiguration")}return(e,l)=>{const a=Object(t["G"])("Button"),o=Object(t["G"])("Dropdown"),s=Object(t["G"])("ProgressSpinner"),i=Object(t["G"])("AutoComplete"),u=Object(t["G"])("Message"),b=Object(t["G"])("TabPanel"),Xe=Object(t["G"])("InputNumber"),Ze=Object(t["G"])("TabView");return Object(t["y"])(),Object(t["h"])(t["a"],null,[Object(t["i"])("div",p,[r,m,Object(t["i"])("span",O,"v"+Object(t["K"])(Object(t["M"])(n["a"])),1)]),Object(t["i"])("div",null,[Object(t["l"])(Ze,{activeIndex:c.value,"onUpdate:activeIndex":l[15]||(l[15]=e=>c.value=e)},{default:Object(t["Q"])(()=>[Object(t["l"])(b,{header:"Load by Gene"},{default:Object(t["Q"])(()=>{var e;return[Object(t["i"])("div",j,[f,Object(t["i"])("div",g,[Object(t["l"])(a,{onClick:sl,label:"Clear All",class:"p-button-sm p-button-secondary",style:{"margin-right":".5em"}})]),Object(t["i"])("div",h,[Object(t["i"])("div",y,[Object(t["i"])("div",k,[C,Object(t["l"])(o,{modelValue:Ve.value,"onUpdate:modelValue":l[0]||(l[0]=e=>Ve.value=e),options:Ce.value,loading:Se.value,onChange:l[1]||(l[1]=e=>Je(e.value)),optionLabel:"name",placeholder:"Backbone Species"},null,8,["modelValue","options","loading"])])]),Object(t["i"])("div",V,[Object(t["i"])("div",S,[K,Object(t["l"])(o,{modelValue:Ke.value,"onUpdate:modelValue":l[2]||(l[2]=e=>Ke.value=e),options:we.value,disabled:!Ve.value,onChange:l[3]||(l[3]=e=>ze(e.value)),optionLabel:tl,placeholder:"Backbone Assembly"},null,8,["modelValue","options","disabled"])])]),Object(t["i"])("div",w,[Object(t["i"])("div",M,[L,Ge.value?(Object(t["y"])(),Object(t["h"])("div",P,[Object(t["l"])(s,{style:{width:"50px",height:"50px"}})])):Object(t["g"])("",!0),Object(t["l"])(i,{modelValue:Le.value,"onUpdate:modelValue":l[4]||(l[4]=e=>Le.value=e),suggestions:Me.value,disabled:!Ve.value,onComplete:l[5]||(l[5]=e=>Qe(e)),onItemSelect:l[6]||(l[6]=e=>He(e.value)),field:"symbol",minLength:3},null,8,["modelValue","suggestions","disabled"])])]),Object(t["i"])("div",G,[Object(t["i"])("div",x,[Pe.value?(Object(t["y"])(),Object(t["h"])("p",D,[Object(t["k"])(" Chromosome: "+Object(t["K"])(null===(e=Pe.value)||void 0===e?void 0:e.chromosome)+" ",1),Pe.value?(Object(t["y"])(),Object(t["h"])("span",I,"(Length: "+Object(t["K"])(Object(t["M"])(v["a"]).addCommasToBasePair(Pe.value.seqLength))+" bp)",1)):Object(t["g"])("",!0)])):Object(t["g"])("",!0),xe.value?(Object(t["y"])(),Object(t["h"])("p",U,[A,xe.value?(Object(t["y"])(),Object(t["h"])("span",E,Object(t["K"])(xe.value)+" bp",1)):Object(t["g"])("",!0)])):Object(t["g"])("",!0),De.value?(Object(t["y"])(),Object(t["h"])("p",B,[N,Object(t["i"])("span",null,Object(t["K"])(De.value)+" bp",1)])):Object(t["g"])("",!0)])]),T,W,Object(t["i"])("div",R,[Object(t["l"])(a,{onClick:el,label:Object(t["M"])(qe)?"Limit Reached":"Add Species",disabled:Object(t["M"])(qe),icon:"pi pi-plus-circle",class:"p-button",style:{"margin-right":".5em"}},null,8,["label","disabled"])]),Object(t["i"])("div",_,[Te.value.length>=4?(Object(t["y"])(),Object(t["f"])(u,{key:0,severity:"warn",closeable:""},{default:Object(t["Q"])(()=>[q]),_:1})):Object(t["g"])("",!0)]),(Object(t["y"])(!0),Object(t["h"])(t["a"],null,Object(t["E"])(Te.value,(e,l)=>(Object(t["y"])(),Object(t["h"])("div",{class:"grid",key:l},[Object(t["i"])("div",Q,[Object(t["l"])(o,{modelValue:Te.value[l].typeKey,"onUpdate:modelValue":e=>Te.value[l].typeKey=e,loading:Se.value,options:Ce.value,onChange:e=>ol(l),optionValue:"typeKey",optionLabel:"name",placeholder:"Comparative Species"},null,8,["modelValue","onUpdate:modelValue","loading","options","onChange"])]),Object(t["i"])("div",J,[Object(t["l"])(o,{modelValue:Te.value[l].mapKey,"onUpdate:modelValue":e=>Te.value[l].mapKey=e,disabled:0===Te.value[l].typeKey,options:al(l),optionLabel:tl,onChange:e=>cl(Te.value[l]),optionValue:"key",placeholder:"Comparative Assembly",class:Object(t["t"])({"border-warning":Te.value[l].showWarning})},null,8,["modelValue","onUpdate:modelValue","disabled","options","onChange","class"]),Te.value[l].showWarning?(Object(t["y"])(),Object(t["h"])("small",z,"Warning: Selected same species and assembly as the backbone")):Object(t["g"])("",!0)]),Object(t["i"])("div",F,[Object(t["l"])(a,{onClick:e=>ll(l),label:"Remove",icon:"pi pi-minus-circle",class:"p-button-sm p-button-danger"},null,8,["onClick"])])]))),128))])])]}),_:1}),Object(t["l"])(b,{header:"Load by Position"},{default:Object(t["Q"])(()=>[Object(t["i"])("div",H,[X,Object(t["i"])("div",Y,[Object(t["l"])(a,{onClick:sl,label:"Clear All",class:"p-button-sm p-button-secondary",style:{"margin-right":".5em"}})]),Object(t["i"])("div",Z,[Object(t["i"])("div",$,[Object(t["i"])("div",ee,[le,Object(t["l"])(o,{modelValue:Ve.value,"onUpdate:modelValue":l[7]||(l[7]=e=>Ve.value=e),options:Ce.value,loading:Se.value,onChange:l[8]||(l[8]=e=>Je(e.value)),optionLabel:"name",placeholder:"Backbone Species"},null,8,["modelValue","options","loading"])])]),Object(t["i"])("div",ae,[Object(t["i"])("div",te,[oe,Object(t["l"])(o,{modelValue:Ke.value,"onUpdate:modelValue":l[9]||(l[9]=e=>Ke.value=e),options:we.value,disabled:!Ve.value,onChange:l[10]||(l[10]=e=>ze(e.value)),optionLabel:e=>e.primaryRefAssembly?e.name+" (primary)":e.name,placeholder:"Backbone Assembly"},null,8,["modelValue","options","disabled","optionLabel"])])]),Object(t["i"])("div",ce,[Object(t["i"])("div",se,[ie,Object(t["l"])(o,{onChange:l[11]||(l[11]=e=>Fe(e.value)),modelValue:Ue.value,"onUpdate:modelValue":l[12]||(l[12]=e=>Ue.value=e),disabled:!Ie.value.length,options:Ie.value,loading:Ae.value,optionLabel:"chromosome"},null,8,["modelValue","disabled","options","loading"])])]),Object(t["i"])("div",ue,[Object(t["i"])("div",ne,[Object(t["i"])("h4",{class:Object(t["t"])({"config-label":Ue.value})},"Start Position",2),Ue.value?(Object(t["y"])(),Object(t["h"])("p",ve,"Min: 0bp")):Object(t["g"])("",!0),Object(t["l"])(Xe,{showButtons:"",modelValue:Ee.value,"onUpdate:modelValue":l[13]||(l[13]=e=>Ee.value=e),disabled:!Ue.value,suffix:"bp",step:1e3,max:null!=Ne.value?Ne.value-1:1,min:0},null,8,["modelValue","disabled","max"])]),Object(t["i"])("div",de,[Object(t["i"])("div",null,[Object(t["i"])("h4",{class:Object(t["t"])({"config-label":Ue.value})},"Stop Position",2),Ne.value?(Object(t["y"])(),Object(t["h"])("p",be,"Max: "+Object(t["K"])(Object(t["M"])(v["a"]).addCommasToBasePair(Ne.value))+"bp",1)):Object(t["g"])("",!0),Object(t["l"])(Xe,{showButtons:"",modelValue:Be.value,"onUpdate:modelValue":l[14]||(l[14]=e=>Be.value=e),disabled:!Ue.value,suffix:"bp",step:1e3,max:Ne.value,min:1},null,8,["modelValue","disabled","max"])])])]),pe,Object(t["i"])("div",re,[Object(t["l"])(a,{onClick:el,label:Object(t["M"])(qe)?"Limit Reached":"Add Species",disabled:Object(t["M"])(qe),icon:"pi pi-plus-circle",class:"p-button",style:{"margin-right":".5em"}},null,8,["label","disabled"])]),Object(t["i"])("div",me,[Te.value.length>=4?(Object(t["y"])(),Object(t["f"])(u,{key:0,severity:"warn",closeable:""},{default:Object(t["Q"])(()=>[Oe]),_:1})):Object(t["g"])("",!0)]),(Object(t["y"])(!0),Object(t["h"])(t["a"],null,Object(t["E"])(Te.value,(e,l)=>(Object(t["y"])(),Object(t["h"])("div",{class:"grid",key:l},[Object(t["i"])("div",je,[Object(t["l"])(o,{modelValue:Te.value[l].typeKey,"onUpdate:modelValue":e=>Te.value[l].typeKey=e,loading:Se.value,options:Ce.value,onChange:e=>ol(l),optionValue:"typeKey",optionLabel:"name",placeholder:"Comparative Species"},null,8,["modelValue","onUpdate:modelValue","loading","options","onChange"])]),Object(t["i"])("div",fe,[Object(t["l"])(o,{modelValue:Te.value[l].mapKey,"onUpdate:modelValue":e=>Te.value[l].mapKey=e,disabled:0===Te.value[l].typeKey,options:al(l),optionLabel:tl,onChange:e=>cl(Te.value[l]),optionValue:"key",placeholder:"Comparative Assembly",class:Object(t["t"])({"border-warning":Te.value[l].showWarning})},null,8,["modelValue","onUpdate:modelValue","disabled","options","onChange","class"]),Te.value[l].showWarning?(Object(t["y"])(),Object(t["h"])("small",ge,"Warning: Selected same species and assembly as the backbone")):Object(t["g"])("",!0)]),Object(t["i"])("div",he,[Object(t["l"])(a,{onClick:e=>ll(l),label:"Remove",icon:"pi pi-minus-circle",class:"p-button-sm p-button-danger"},null,8,["onClick"])])]))),128))])])]),_:1})]),_:1},8,["activeIndex"]),Object(t["i"])("div",ye,[Object(t["i"])("div",ke,[Object(t["l"])(a,{onClick:Ye,disabled:!Object(t["M"])(_e),label:"Load VCMap",icon:"pi pi-play",class:"p-button-lg p-button-success"},null,8,["disabled"])])])]),Object(t["l"])(d["a"],{show:We.value,"onUpdate:show":l[16]||(l[16]=e=>We.value=e),header:"Error",message:Re.value,theme:"error"},null,8,["show","message"])],64)}}}),Ve=(a("c601"),a("6b0d")),Se=a.n(Ve);const Ke=Se()(Ce,[["__scopeId","data-v-4037536c"]]);l["default"]=Ke},c601:function(e,l,a){"use strict";a("f178")},f178:function(e,l,a){}}]);
//# sourceMappingURL=configuration.1f7fa84b.js.map