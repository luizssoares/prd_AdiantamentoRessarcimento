function idxInp(elem){                      // <<<< ----------------------------------------------- Atualiza o select de Ação com base no Projeto
    var dataset1 = DatasetFactory.getDataset("dsc_CentroCusto", null, null, null); 
    inp_indx = elem.id.split('___')[1]
    console.log(inp_indx)
    inp_vlue = elem.value
    console.log(inp_vlue)
    var arr = []
    arr.push({CODIGO: 'Selecione', NOME: 'Selecione'})
    for(i = 0; i < dataset1.values.length; i++){
        var cd = dataset1.values[i].CODIGO
       //console.log(cd)
        if(cd.indexOf(inp_vlue) != -1 && cd.length == 12){
            console.log(arr)
            arr.push(dataset1.values[i])
        }    
    }
    divAll = document.getElementById('ac'+inp_indx)
    if(divAll == null) { divAll = document.getElementById('acaov1'+inp_indx) };
    if(divAll.children.length > 0){
        console.log(divAll.childNodes.length)
        var n = divAll.childNodes.length
        for(j = 0; j < n; j++){
            console.log(divAll.childNodes[0])
            divAll.removeChild(divAll.lastElementChild);
        }
    }
    slcArr(arr, inp_indx)
    insertINPun()
    document.getElementById('txt_codprojeto___'+inp_indx).value = inp_vlue
}
function insertINP(){
    inp = document.getElementsByTagName('select')
    console.log(inp)
    for(i = 0; i < inp.length; i++){
        if(inp[i].id.indexOf('txt_codprojeto1___') != -1){
            inp[i].onchange = function (){ idxInp(this) }
        }
    }
}
function inpNotIn(){                               // <<<< ----------------------------------------------- Caso não tenha valor no input, apresentar Dotações inativas  
    inpslength = objXAcao.arrFininps.length
    console.log(inpslength)
    for(nt = 0; nt < inpslength; nt++){
        dsA = DatasetFactory.getDataset('dsc_CentroCusto', null, null, null)

        inpNowNt = objXAcao.arrFininps[nt]
        inp_indx = inpNowNt.id.split('___')[1]
        console.log(inp_indx)
        inp_vlue = document.getElementById('txt_codprojeto___'+inp_indx).value
        console.log(inp_vlue)
        var arr = []
        arr.push({CODIGO: 'Selecione', NOME: 'Selecione'})
        for(i = 0; i < dsA.values.length; i++){
            var cd = dsA.values[i].CODIGO
            if(cd.indexOf(inp_vlue) != -1 && cd.length == 12){
                console.log(arr)
                arr.push(dsA.values[i])
            }    
        }
        divAll = document.getElementById('ac'+inp_indx)
        console.log(objXAcao.arrFindivs[nt])
        console.log(inp_indx)
        if(divAll == null){ divAll = objXAcao.arrFindivs[nt] }
        console.log(divAll)
        console.log(divAll.childNodes)
        if(divAll.children.length > 0){    // <<<< ----------------------------------------------- Limpa a div se já estiver com um select montado 
            console.log(divAll.childNodes.length)
            var n = divAll.childNodes.length
            for(j = 0; j < n; j++){
                console.log(divAll.childNodes[0])
                divAll.removeChild(divAll.lastElementChild);
            }
        }
        slcArr(arr, inp_indx)
        insertINPun()
        console.log(' <<<<<<<<<<<<<<<<<<<<<<< << << ')
    }
}
function slcArr(arr, ind){
    if(document.getElementById('ac'+ind)){
        var divaAll = document.getElementById('ac'+ind)
        var idA = 'txt_codacao1___'+ind
    } else if(document.getElementById('acaov'+ind)) {
        var divaAll = document.getElementById('acaov'+ind)
        var idA = 'txt_codacao1___'+ind
        var snl = 1;
        console.log('**************************************** '+idA)
    } else { 
        var divaAll = document.getElementById('acaov')
        var idA = 'txt_codacao1'
    }
    if(ind == null || ind == undefined){
        ind = 'z'
    } 
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codacao1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Ação'

    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'
    
    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    divaAll.appendChild(vlabel)
    /*****************select******************** */
    var vselect = document.createElement('select')
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = idA
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = idA
    vselect.setAttributeNode(att)
    console.log(vselect)


    if(obju.state != 4 && obju.state != 15 && obju.state != 72 && snl != 1 && obju.state != 78){  
        var aa = showDados1()
        console.log(aa)
    }else{
        console.log(objXAcao)
        for(ckiA = 0; ckiA < objXAcao.arrFininps.length; ckiA++){            // <<< ---------------------------------------------------- Caso tenha valor para apresentar com campo habilitado para modificação
            if(objXAcao.arrFininps[ckiA].value != '' && ind == 'z'){
                enabledinA = 1
                showDados1(enabledinA)
            }   
        }
        if(arr != undefined){
            for(j = 0; j < arr.length; j++){
                var voption = document.createElement('option')
                att = document.createAttribute('value')
                att.value = arr[j].CODIGO
                voption.setAttributeNode(att)
                voption.innerText = arr[j].NOME+ ' | ' + arr[j].CODIGO
                vselect.appendChild(voption)
            }
        }
    }
    divaAll.appendChild(vselect)
    console.log(divaAll)
}
var obju = {
    state: window.parentOBJ.ECM.workflowView.sequence
} 
function inp_slc11(divv, nId){
    var divaAll = document.getElementById(divv)
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codacao1___'+nId
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Ação'

    var vspan = document.createElement('span')
    att = document.createAttribute('class')

    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'
    
    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    divaAll.appendChild(vlabel)
    /*****************select******************** */
    var vselect = document.createElement('select')
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = 'txt_codacao1___'+nId
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'txt_codacao1___'+nId
    vselect.setAttributeNode(att)

    divaAll.appendChild(vselect)
    console.log(divaAll)
    return vselect
}
function showDados1(enabled){
    if(obju.state != 4){
        var objIn = objXAcao
        for(k = 0; k < objIn.arrFininps.length; k++){    
                var inpuTT = objIn.arrFininps[k].id
                vldInp = document.getElementById(inpuTT).value
            if(vldInp != ''){
                nId         = inpuTT.split('___')[1]; 
                var inpa = getINP1(inpuTT)              // <<<< ----------------------------------------------- Monta o select com base no valor do Centro de Custo salvo no input
                var slc = inp_slc11(objIn.arrFindivs[k].id, nId)
                
                insertINPun()             // <<< ---------------------------------------------------- Utilizado para indexar a função de Modificar o selecet de 'ACAO' e modificar o valor do input de Projeto 

                var voption = document.createElement('option')
                att = document.createAttribute('value')
                att.value = inpa[0]
                voption.setAttributeNode(att)
                voption.innerText =  inpa[1] + ' | ' + inpa[0]
                slc.appendChild(voption)

                if(enabled == 1){
                    console.log(enabled)
                    var arrayOptionA = DatasetFactory.getDataset("dsc_CentroCusto", null, null, null).values;  
                    console.log(arrayOptionA)
                    for(i = 0; i < arrayOptionA.length; i++){
                        if(arrayOptionA[i].CODIGO !=  inpa[0] && arrayOptionA[i].NOME != inpa[1]){
                            var voption = document.createElement('option')
                            att = document.createAttribute('value')
                            att.value = arrayOptionA[i].CODIGO
                            voption.setAttributeNode(att)
                            voption.innerText = arrayOptionA[i].NOME+ ' | ' + arrayOptionA[i].CODIGO
                            slc.appendChild(voption)
                        }
                    }
                    
                } else {
                    att = document.createAttribute('disabled')
                    att.value = true
                    slc.setAttributeNode(att)  
                }
            }
        } 
    }
    console.log(objIn)
    console.log(objXAcao)
return objIn
}
function getINP1(inp){                      // <<<< ----------------------------------------------- Obtem o valor do 'Projeto.Acao' 
    var inpGet = []
    console.log(obju.state)
    if(obju.state != 4){
        var inpNow = document.getElementById(inp)
        var dataset1 =  DatasetFactory.getDataset("dsc_CentroCusto", null, null, null);
        if(inpNow.value != null || inpNow.value != ''){
            for(i = 0; i < dataset1.values.length; i++){
                var cod = dataset1.values[i].CODIGO
                var codInp = inpNow.value
                //console.log('************************************************************ <<<<< '+ codInp)
                if(cod.indexOf(codInp) != -1 && cod.length == 12){
                    //console.log('************************************************************ <<<<< '+ dataset1.values[i].CODIGO)
                    //console.log('************************************************************ <<<<< '+ cod.indexOf(codInp))
                    inpGet[0] = cod
                    inpGet[1] = dataset1.values[i].NOME
                    console.log(cod)
                }
            }
        }
    
    } 
    console.log(inpGet)
return inpGet
}
var objXAcao = {
    arrFindivs: [],
    arrFininps: []
} 
function objXAcaoSet(){
    var rws = document.getElementById('dadosrateio').tBodies[0].rows
    console.log(rws)
    var arrInps = ['txt_codacao___']//'txt_codprojeto___', 'txt_codacao___', 'txt_codrecurso___'
    var arrdivs = ['acaov']//'projetov', 'acaov', 'unidadev'
    for(i = 1; i < rws.length; i++){ // <<<< ----------------------------------------------- Obtem a div para inserir o select
        var inputs = rws[i].getElementsByTagName('input') 
        console.log(inputs)
        for(j = 0; j < inputs.length; j++){
            for(y = 0; y <arrInps.length; y++){
    
                if(inputs[j].id.indexOf(arrInps[y]) != -1){
                    objXAcao.arrFininps.push(inputs[j])
                    var dvAk = inputs[j].parentElement.children
                    console.log(objXAcao.arrFininps)
                    for(k = 0; k < arrdivs.length; k++){
                        for(z = 0; z < dvAk.length; z++){
                            console.log(dvAk[z])
                            if(dvAk[z].id.indexOf(arrdivs[k]) != -1){
                                var indx = inputs[j].id.split('___')[1]
                                dvAk[z].id = dvAk[z].id+indx
                                objXAcao.arrFindivs.push(dvAk[z])
                                console.log(objXAcao.arrFindivs)
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(objXAcao)
    return objXAcao
}
function init3(){
    objXAcaoSet()
    var inP1 = document.getElementsByTagName('input')
    var inP = document.getElementsByTagName('span')
    var rr = 0
    console.log(inP1)
    for(i = 0; i < inP1.length; i++){
        if(inP1[i].id.indexOf('txt_acao___') != -1 && inP1[i].value != ''){
            inP1[i].parentElement.style.display = 'block'
            console.log('a')
            rr++
        }
    }   
    for(i = 0; i < inP.length; i++){
        if(inP[i].id.indexOf('txt_acao___') != -1 && inP[i].id.indexOf('txt_acao___').innerHTML != '' && inP[i].id.indexOf('txt_acao___').innerHTML != undefined){
            inP[i].parentElement.style.display = 'block'
            rr++
            console.log(rr)
        }   
    }   
    if(rr == 0){
        console.log(' --------------------------------------------------------------------------------------------- <<<<<< s')
        slcArr();
        console.log(' --------------------------------------------------------------------------------------------- <<<<<< s')
        for(cki = 0; cki < objXAcao.arrFininps.length; cki++){
            if(objXAcao.arrFininps[cki].value == ''){
                inpNotIn();
            }   
        }
        console.log(' --------------------------------------------------------------------------------------------- <<<<<< s')
    }
}
window.addEventListener('load', init3)

















































