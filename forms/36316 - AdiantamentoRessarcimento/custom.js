function styleFormatDisable() {
    let arrayInput = document.getElementsByTagName("input");
    let arraySpan = document.getElementsByTagName("span");
    let arraySelect = document.getElementsByTagName("select");
    let arrayP = document.getElementsByTagName("p");
    let arrayTextA = document.getElementsByTagName("textarea");
    let arrayli = document.getElementsByTagName("li");
    let arrayA = document.getElementsByTagName("a");;
    let arrayLabel = document.getElementsByTagName("Label");
    //let arrayStrong     = document.getElementsByTagName("strong");
    let arrayTotal = [arrayInput, arraySpan, arraySelect, arrayP, arrayTextA, arrayli, arrayA, arrayLabel/*, arrayStrong*/];
    for (i = 0; i < arrayTotal.length; i++) {
        let arrayGo = arrayTotal[i];
        for (y = 0; y < arrayGo.length; y++) {
            if (arrayGo[y].getAttribute("class") != "fluigicon fluigicon-zoom-in" && arrayGo[y].getAttribute("class") != "input-group-addon"
                && arrayGo[y].getAttribute("class") != "select2-selection__choice__remove" && arrayGo[y].getAttribute("class") != "Obrigatorio") {
                //console.log(arrayGo[y].getAttribute("class"))
                arrayGo[y].style.color = "black";
            }
        }
    }
}
function controllerTime() { setTimeout(styleFormatDisable, 200); }
window.addEventListener("load", controllerTime);


function deadlineReceipts(){
    let state           = window.parentOBJ.ECM.workflowView.sequence
    let dataUtiliza     = document.getElementById('dataUtilizacao').value
    console.log(dataUtiliza)
    let dataReceipts    = document.getElementById('hdn_prazo1')
    dataUtiliza         = new Date(dataUtiliza+"T00:00:00")
    dia                 = dataUtiliza.getDate()    
    CountDays           = 5 
    if(dia < 10){ dia = '0' + dia };
    console.log(dataUtiliza)
    try{
        if(state == 4 || state == 0){
            for(i = 0; i < CountDays; i++){
                dataUtiliza.setDate(dataUtiliza.getDate() + 1);
                var dia_N_Util = new String(dataUtiliza);
                if(dia_N_Util.indexOf('Sat') != -1 || dia_N_Util.indexOf('Sun') != -1){
                    CountDays++ 
                }
            }
            console.log(dataUtiliza.toJSON().split('T')[0])
            dataReceipts.value = dataUtiliza.toJSON().split('T')[0]
            return dataReceipts.value
        }
    }catch{ err.message }
   
}window.addEventListener('load', deadlineReceipts)
function changeDateReceipts() { document.getElementById('dataUtilizacao').onchange = function () { deadlineReceipts() }}
window.addEventListener('load', changeDateReceipts)
function changeTypeRequest(){
    let state           = window.parentOBJ.ECM.workflowView.sequence
    if(state == 4 || state == 0){
        let v               = document.getElementById('slc_PagamentoPara').value
        let dataUtiliza     = document.getElementById('dataUtilizacao').parentElement.parentElement
        let dataUtiliza2     = document.getElementById('dataUtilizacao2').parentElement.parentElement
        let card1 = document.getElementById('cardAdiantamento');
        let card2 = document.getElementById('cardRessarcimento');
        //console.log(dataUtiliza)
        if(v == 1){
            dataUtiliza.style.display = 'block'
            dataUtiliza2.style.display = 'block'
            card1.style.display = 'block'
            card2.style.display = 'none'
        }
        if(v == 2){
            card2.style.display = 'block'
            dataUtiliza.style.display = 'none'
            dataUtiliza2.style.display = 'none'
            card1.style.display = 'none'
        }
        else if( v ==0) {
            dataUtiliza.style.display = 'none'
            dataUtiliza2.style.display = 'none'
            card1.style.display = 'none'
            card2.style.display = 'none'
        }   
    }
    else{
        var v = document.getElementById('slc_PagamentoPara')
        var card1 = document.getElementById('cardAdiantamento');
        var card2 = document.getElementById('cardRessarcimento');
        if(v.innerText == 'Adiantamentos'){
            card1.style.display = 'block'
            card2.style.display = 'none'
        }
        if(v.innerText == 'Ressarcimentos'){
            card1.style.display = 'none'
            card2.style.display = 'block'
        }
    }
}
window.addEventListener('load', function() { changeTypeRequest();document.getElementById('slc_PagamentoPara').onchange = function () { changeTypeRequest() } })

function defineField(){
        var valRef  = document.getElementById('txt_valor')
        var valTol  = document.getElementById('txt_ValorTotal')
        var valRef_m = moeda.desformatar(valRef.value) + ''
        var valTol_m = moeda.desformatar(valTol.value) + ''

        var val_r = parseInt(valRef_m.replace(/[\D]+/g, ''));
        var val_t = parseInt(valTol_m.replace(/[\D]+/g, ''));

        document.getElementById('hdn_valorRef').value = val_r
        document.getElementById('hdn_valorTotal').value = val_t
}
function markField(){
    document.getElementById('txt_valor').addEventListener("keyup", function(){
        defineField()
    });
}
window.addEventListener('load', markField)


function calc(){
    var soma = 0;
    var valorTotal  = document.getElementById('txt_ValorTotal')
    var table       = document.getElementById('dadosItem')
    var arrayInp    = table.getElementsByTagName('input')
    for(i = 0; i < arrayInp.length; i++){
        if(arrayInp[i].id.indexOf('txt_valorItem___') != -1){
            if(arrayInp[i].value == ""){
                arrayInp[i].value = "0,00"
            }
            var valor = moeda.desformatar(arrayInp[i].value)
            console.log(valor)
            soma += valor   
        }
    }
    valorTotal.value = moeda.formatar(soma) 
    defineField()
    myDefinition.installment()
}
function markCalc(){
    var table       = document.getElementById('dadosItem')
    var arrayInp    = table.getElementsByTagName('input')
    for(i = 0; i < arrayInp.length; i++){
        if(arrayInp[i].id.indexOf('txt_valorItem___') != -1){
            arrayInp[i].addEventListener("change", function(){
                calc();
            });
            /*arrayInp[i].addEventListener("change", function(){
                defineField()
            });*/
        }
    }
}
window.addEventListener('load', markCalc)
/*
function enableDetails(){
    var tipo    = document.getElementById('slc_PagamentoPara')
    tipo.onclick = function (){
        mecanica()
    }
    mecanica()
}
function mecanica(){

    var state = window.parentOBJ.ECM.workflowView.sequence
    console.log(state)
    var tipo    = document.getElementById('slc_PagamentoPara')
    var panel   = document.getElementById('despesas')
    if(tipo.value == 1 && state != 72|| tipo.value == 0 && state != 72){
        panel.style.display = 'none'
    }else if(tipo.value == 2){
        panel.style.display = 'block'
    }else if(tipo.value == 1 && state == 72){
        panel.style.display = 'block'
    }
}
window.addEventListener('load', enableDetails)
*/

function enviarStop(){
    var buttons = window.parentOBJ.document.getElementsByTagName('button')  
    var lis     = window.parentOBJ.document.getElementsByTagName('li')
    var arrEnv = Object.assign({}, lis, buttons)
    for (let x in arrEnv) {
        var btn = arrEnv[x].getAttribute('data-send');
        if(btn == ''){
            arrEnv[x].onclick = function (){
                var state   = document.getElementById('hdn_State').value
                if(state == 15 || state == 78){
                    doctrine();
                }
            }
        }
    }
}

function doctrine(){
    var ini = setInterval(nextActivitys, 100);
    function nextActivitys(){
        var selected    = window.parentOBJ.document.getElementById('nextActivity')
        console.log(selected.children)
        if(selected.children != undefined){//&& flow != undefined
            var buttonsMoviment = window.parentOBJ.document.getElementById('moviment-button')
            buttonsMoviment.disabled = true
            var stateLast   = document.getElementById('hdn_lastState').value
            var options     = selected.children
            console.log(options.length)
            var din_length = options.length;
            while(options.length != 1){
                for(i=0; i < din_length; i++){
                    var ant = options[i].value
                    if(ant == stateLast){
                    options[i].selected = true;
                    console.log(options[i])
                    console.log(stateLast)
                    console.log(ant)
                    }else {
                        console.log(options[i])
                        console.log(ant)
                        selected.removeChild(options[i])
                        din_length--
                        console.log(din_length)
                    }
                }
            }console.log(options.length)
            buttonsMoviment.disabled = false
            clearInterval(ini);
        }
    }
}
//window.addEventListener("load", enviarStop)

function ANT_STATE(){
    var state       = window.parentOBJ.ECM.workflowView.sequence
    var stateSave   = document.getElementById('hdn_State')
    var stateLast   = document.getElementById('hdn_lastState')
    console.log(stateSave)
    console.log(state)
    console.log(stateLast)
    if(stateSave.value){
        if(state != stateSave.value){
            stateSave.disabled = false
            stateLast.disabled = false
            console.log(stateSave)
            console.log(state)
            console.log(stateLast)
            stateLast.value   = stateSave.value
            stateSave.value   = state 
        }
    }else { stateSave.value = state}
    console.log(stateSave)
    console.log(state)
    console.log(stateLast)
}
window.addEventListener("load", ANT_STATE);







function setSuper(){
    document.getElementById("cmb_GerenteSolicitante").onchange = function () { getSuper() }
}
function getSuper(){
    var hdn_Super   = document.getElementById("numSuperior")
    console.log(DatasetFactory.getDataset("dsc_Unidades", null, null, null))
    setTimeout(hdn_Super.value = document.getElementById("cmb_GerenteSolicitante").value, 6000);
    var dataset     = DatasetFactory.getDataset("dsc_Unidades", null, null, null)
    for(i = 0; i < dataset.values.length; i++){
        var mat     = dataset.values[i].Matricula
        if(mat == hdn_Super.value){
            var un  = dataset.values[i].NomeUnidade
            document.getElementById("cmb_UnidadeSolicitante").value = un
            dir = dataset.values[i].MatSuperior
            console.log(dir)
            if(dir == "00000428"){
                document.getElementById("hdn_diretoria").value =  'Pool:Role:DITEC'
            }else if(dir == "80000318"){
                document.getElementById("hdn_diretoria").value =  'Pool:Role:DISUP'
            }else if(dir == "00000656"){  
                document.getElementById("hdn_diretoria").value =  'Pool:Role:DIRAF' 
            }else if(dir == "00000527"){  document.getElementById("hdn_diretoria").value =  '00000527' }
        }
    }
} 
window.addEventListener("load", setSuper)
window.addEventListener("load", getSuper)

function teste(index, idx){  
    var n = 0;
    if(idx == 1){
        n = "z3"
    }else{ n = "z1"}
    var spn1 = document.getElementById(n).children[0].children[2]
    var ul1 = spn1.children[0].getElementsByTagName("ul")[0] 
    var li2 = ul1.childNodes[0]
    console.log(ul1.childNodes[0])
    if(li2.title != ""){
        ul1.removeChild(ul1.childNodes[0]);
        li2 = ul1.childNodes[0]
        console.log(ul1.childNodes[0])
    }
    var elem = document.createElement("LI")
    ul1.replaceChild(elem, ul1.childNodes[0])
    console.log(ul1.childNodes[0])
    ul1.appendChild(li2)
    var ipt = li2.children[0]
    ipt.placeholder=""
    ipt.style="width: 0.75em;"
    var li1 = ul1.children[0]
    li1.className = "select2-selection__choice"
    li1.title = index
    li1.innerHTML = "<span class=\"select2-selection__choice__remove\" role=\"presentation\">×<\/span>"+index
    

    ul1.childNodes[0].onclick = function () { teste2();console.log("asdasfasf") }
}
function teste2(){
    var spn1 = document.getElementById("z3").children[0].children[2]
    var ul1 = spn1.children[0].getElementsByTagName("ul")[0] 
    ul1.removeChild(ul1.childNodes[0])
    var spn1 = document.getElementById("z1").children[0].children[2]
    var ul1 = spn1.children[0].getElementsByTagName("ul")[0] 
    ul1.removeChild(ul1.childNodes[0])
    var fields = ["txt_CNPJ_CPF"]//, "txt_InscMun", "txt_InscEst", "txt_Banco", "txt_Agencia", "txt_CCorrente"
    for(i = 0; i < fields.length; i++){
        document.getElementById(fields[i]).value = "";
    }
}
function init(){ document.getElementById("txt_Favorecido").onchange = function () { inputAuto(this) }; 
//document.getElementById("txt_NomeFantasia").onchange = function () { inputAuto(this) }

                document.getElementById("txt_CNPJ_CPF").onchange = function () { inputAuto(this) }}

function MrTime(){ setTimeout(init, 6000); }
function inputAuto(elem){
    var f = elem.value
    var selectIndex = elem.selectedIndex
    var nome = 0;
    var idx  = 0;
    var nomeidx  = 0;
    var n = 0;
    if(elem.id == "txt_Favorecido"){
        nome    = "NOME"
        idx     = 3;
        nomeidx = "txt_CNPJ_CPF"
        n       = "z3";
    }else if(elem.id == "txt_CNPJ_CPF"){ nome = "CGCCFO"; idx = 1; nomeidx = "txt_Favorecido"; n = "z1";
            //document.getElementById("txt_Favorecido").value = elem.value 
        }/*else if((elem.id == "txt_CNPJ_CPF"){
            nome    = "Pedido_de_Pagamento.html"
            idx     = 3;
            nomeidx = "txt_NomeFantasia"
            n       = "z2";
        }*/

    //var fields = ["txt_InscMun", "txt_InscEst", "txt_Banco", "txt_Agencia", "txt_CCorrente"]
    if(selectIndex != -1){
        var c = DatasetFactory.createConstraint(nome, f, f, ConstraintType.MUST);
        var constraint = new Array(c);
        var dataset = DatasetFactory.getDataset("dsc_Favorecido", null, constraint, null);
        var Obj         = dataset.values[0];
       // var Order  = ["5", "4", "6", "8", "10"];
        //for(i = 0; i < Order.length; i++){
        //    var Obj         = dataset.values[0];
        //    var index       = Order[i]
        //    document.getElementById(fields[i]).value = Obj[dataset.columns[index]];
        //}
        var indexZ = Obj[dataset.columns[idx]];
        document.getElementById(nomeidx).innerHTML = "<option value=\""+Obj[dataset.columns[idx]]+"\">"+
        Obj[dataset.columns[idx]]+"<\/option>"
        document.getElementById(nomeidx).value = Obj[dataset.columns[idx]]
        teste(indexZ, idx)
    } else {
        //for(i = 0; i < fields.length; i++){
        //    document.getElementById(fields[i]).value = "";
        //}   
        var spn1 = document.getElementById(n).children[0].children[2]
        var ul1 = spn1.children[0].getElementsByTagName("ul")[0] 
        ul1.removeChild(ul1.childNodes[0])    
        var li1 = ul1.childNodes[0]
        var ipt = li1.children[0];
        ipt.placeholder="Escolha o Favorecido"
        ipt.style="width: 372.409px;"
        document.getElementById(nomeidx).value = ""
    }
}
window.addEventListener("load", MrTime)

function formatarMoeda(elem) {
	var id = elem.id
	var valor = moeda.desformatar(elem.value)
	var valorDif = moeda.formatar(valor)
	document.getElementById(id).value = valorDif
}












var moeda = {
    desformatar: function(num) {
        num = num.replace(/\./g, "");
        num = num.replace(/\,/g, ".");
        return parseFloat(num);
    },
    formatar: function(num) {
        x = 0;
        if (num<0) {
            num = Math.abs(num);
            x = 1;
        }
        if (isNaN(num)) num = "0";
        cents = Math.floor((num*100+0.5)%100);
        num = Math.floor((num*100+0.5)/100).toString();
        if (cents < 10) cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
            num = num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
        //ret = num + '.' + cents;
        ret = num + ',' + cents;
        if (x == 1) ret = ' – ' + ret;
        return ret;
    },
    arredondar: function(num) {
        return Math.round(num*Math.pow(10,2))/Math.pow(10,2);
    }
}
function formataCasasDecimais(valor) {
    valor = "" + valor;

    if (valor.lastIndexOf(".") == -1) {
        valor = valor + ".00";
    }
    else {
        var casasDecimais = valor.substring(valor.lastIndexOf(".") + 1, valor.length);
        if (casasDecimais.length > 2)
            casasDecimais = casasDecimais.substring(0, 2);
        else {
            while (casasDecimais.length < 2) {
                casasDecimais = casasDecimais + "0";
            }
        }
        valor = valor.substring(0, valor.lastIndexOf(".") + 1) + casasDecimais;
    }

    return valor;
}

function addItens(){
    wdkAddChild("dadosItem");
    markCalc()
    calc()
}

function fnCustomDeleteItem(elem) {
    fnWdkRemoveChild(elem);
    calc()
}

function addRateioz(){
    wdkAddChild("dadosrateio");
    insertINP()
}

function fnCustomDelete(elem) {
    fnWdkRemoveChild(elem);
}

function validateValor(){
    tabela      = document.getElementById("dadosrateio");
    itens       = tabela.getElementsByTagName("input");
    valor       = document.getElementById("txt_valor")
    valorTotal  = 0;
    for(i = 0; i < itens.length; i++){
        if(itens[i].id.indexOf("txt_valorUtil___") != -1){
            iTvalor = itens[i].value
            valorTotal += moeda.desformatar(iTvalor)
        }
    }
    if(valorTotal != moeda.desformatar(valor)){
        console.log(valorTotal)
        console;log(moeda.desformatar(valor))
    }
}

function setSelectedZoomItem(selectedItem) {

    var indice = -1;
    var arraySelectedItem = selectedItem.inputId.split("___");

    if (arraySelectedItem != null && arraySelectedItem != undefined && arraySelectedItem.length > 1) {
        indice = arraySelectedItem[1];
    }

    if (selectedItem["inputId"] == "txt_projeto___" + indice) {

        document.getElementById("txt_codprojeto___" + indice).value = selectedItem["CODCCUSTO"];

        reloadZoomFilterValues("txt_acao___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_acao___" + indice).value);

    }
    if (selectedItem["inputId"] == "txt_acao___" + indice) {

        document.getElementById("txt_codacao___" + indice).value = selectedItem["CODACAO"];

        reloadZoomFilterValues("txt_recursos___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_codacao___" + indice).value);

        buscaSaldo(document.getElementById("txt_codprojeto___" + indice), document.getElementById("txt_codacao___" + indice))
        
        var saldo = document.getElementById("txt_saldo___"+indice).value

        console.log(saldo)
        saldo = formataCasasDecimais(saldo)
        console.log(saldo)
        saldo = moeda.formatar(saldo)
        document.getElementById("txt_saldo___"+indice).value = saldo
    
    }
}

function buscaSaldo(projeto, acao) {

    console.log("projeto VALUE: " + projeto.value);
    console.log("acao VALUE: " + acao.value);

    var campo = acao;

    if (campo.value != "") {
        var id = projeto.name.replace("txt_codprojeto___", "");
        console.log("cc id " + id);
        var cc1 = new Array(projeto.value + "." + acao.value);
        datasetsaldo = DatasetFactory.getDataset("dssaldo", cc1, null, null);

        console.log("DATASET SALDO LENGHT " + datasetsaldo.values.length);
        console.log(datasetsaldo);
        if (datasetsaldo.values.length > 0) {
            var record = datasetsaldo.values[0];
            saldo = eval("record[\"SALDO\"]");
        }
        if(saldo == 0 || saldo == "0,00"){
            document.getElementById("txt_saldo___" + id).value = saldo;
            document.getElementById("txt_saldo___" + id).style = "background-color:#ea8989";
            //styleFormatDisable()
        } 
        else if(saldo != 0 || saldo != "0,00") {
            document.getElementById("txt_saldo___"+ id).value = saldo;
            document.getElementById("txt_saldo___" +id).style = "background-color:#86dc9c";
            //styleFormatDisable()
        }
        
    }
}


function sintetic() {
    var natuGeralElements = document.querySelectorAll("[id^='slc_naturezaItem___']");
    var natuAnaliticaElements = document.querySelectorAll("[id^='naturezaAnalitica___']");

    for (var i = 0; i < natuGeralElements.length; i++) {
        var natuGeral = natuGeralElements[i];
        var natuAnalitica = natuAnaliticaElements[i];

        if (!natuGeral || !natuAnalitica) {
            continue;
        }

        var natuValueSelecionada = natuGeral.value;
        var dataset = DatasetFactory.getDataset("dsNatureza", null, null, null);
        var selectedValue = natuAnalitica.value;

        var optionExists = false;
        for (var k = natuAnalitica.options.length - 1; k >= 0; k--) {
            if (natuAnalitica.options[k].value == selectedValue) {
                optionExists = true;
                break;
            }
        }

        natuAnalitica.innerHTML = "";
        for (var j = 0; j < dataset.values.length; j++) {
            var row = dataset.values[j];
            if (row.valor == natuValueSelecionada) {
                var option = document.createElement("option");
                option.value = row.analitica;
                option.text = row.analitica;
                option.title = row.descricao;
                natuAnalitica.appendChild(option);
            }
        }

        if (optionExists) {
            natuAnalitica.value = selectedValue;
        }
    }
}

// Adiciona um event listener para chamar a função sintetic quando qualquer mudança ocorre
document.addEventListener("change", function(event) {
    if (event.target && event.target.id.startsWith("slc_naturezaItem___")) {
        sintetic();
    }
});
/* 
Função para exibir a descrição no tooltip no campo de id="naturezaAnalitica", através do onchange

function analitic(){
    for(var k = 1; ; k++){
        var natuOptions = document.getElementById("naturezaAnalitica___" + k);
        var desc1 = document.getElementById("campoDesc___" + k);
        
        if (!natuOptions || !desc1) {
            break;
        }
        var natuOptionsVal = natuOptions.value;
        var dataset = DatasetFactory.getDataset("dsNatureza", null, null, null);

        for (var j = 0; j< dataset.values.length; j++) {
            var row = dataset.values[j];
            if(row.analitica === natuOptionsVal){
                //desc1.value = row.descricao
                natuOptions.setAttribute('data-original-title', row.descricao)
            }
        }
    }
}
window.addEventListener("change", analitic); */

function someCard(){
    let state           = window.parentOBJ.ECM.workflowView.sequence
    //let v  = document.getElementById('slc_PagamentoPara').value;
    //let v2 = document.getElementById('slc_PagamentoPara').innerText;

    if( state != 0 && state != 4 && state != 15){
        document.getElementById("cardAdiantamento").style.display = "none";
        document.getElementById("cardRessarcimento").style.display = "none";
    }
}
window.addEventListener("load", someCard);