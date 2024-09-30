function idxInpUn(elem){
    var dataset = DatasetFactory.getDataset("dsc_CentroCusto", null, null, null);
    inp_indx = elem.id.split('___')[1]
    console.log(inp_indx)
    inp_vlue = elem.value
    console.log(inp_vlue)
    var arr = []
    for(i = 0; i < dataset.values.length; i++){
        var cd = dataset.values[i].CODIGO
       //console.log(cd)
        if(cd.indexOf(inp_vlue) != -1 && cd.length == 16){
            console.log(arr)
            arr.push(dataset.values[i])
        }    
    }
    if(arr[0] == '' || arr[0] == undefined){
        dsA = DatasetFactory.getDataset('dsc_CentroCusto', null, null, null)
        for(i = 0; i < dsA.values.length; i++){
            var cd = dsA.values[i].CODIGO
            if(cd.indexOf(inp_vlue) != -1 && cd.length == 16){
                console.log(arr)
                arr.push(dsA.values[i])
            }    
        }
    }
    divAll = document.getElementById('un'+inp_indx)
    console.log(divAll)
    if(divAll == null) { divAll = document.getElementById('unidadev'+inp_indx) };
    console.log(divAll)
    if(divAll.children.length > 0){
        /*var n = divAll.childNodes.length
        for(j = 0; j < n; j++){
            divAll.removeChild(divAll.lastElementChild);
        }*/
        divAll.innerHTML = ''
    }
    slcArrUn(arr, inp_indx)
    document.getElementById('txt_codacao___'+inp_indx).value = inp_vlue
}

function insertINPun(){
    inp = document.getElementsByTagName('select')
    console.log(inp)
    for(i = 0; i < inp.length; i++){
        if(inp[i].id.indexOf('txt_codacao1___') != -1){
            inp[i].onchange = function (){ idxInpUn(this) }
        }
    }
}
function inpNotInUn(){                               // <<<< ----------------------------------------------- Caso não tenha valor no input, apresentar Dotações inativas  
    inpslength = objXUnidade.arrFininps.length
    console.log(inpslength)
    for(nt = 0; nt < inpslength; nt++){
        dsA = DatasetFactory.getDataset('dsc_CentroCusto', null, null, null)

        inpNowNt = objXUnidade.arrFininps[nt]
        inp_indx = inpNowNt.id.split('___')[1]
        console.log(inp_indx)
        inp_vlue = document.getElementById('txt_codacao___'+inp_indx).value
        console.log(inp_vlue)
        var arr = []
        for(i = 0; i < dsA.values.length; i++){
            var cd = dsA.values[i].CODIGO
            if(cd.indexOf(inp_vlue) != -1 && cd.length == 16){
                console.log(arr)
                arr.push(dsA.values[i])
            }    
        }
        divAll = document.getElementById('un'+inp_indx)
        console.log(objXUnidade.arrFindivs[nt])
        console.log(inp_indx)
        if(divAll == null){ divAll = objXUnidade.arrFindivs[nt] }
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
        slcArrUn(arr, inp_indx)
        console.log(' <<<<<<<<<<<<<<<<<<<<<<< << << ')
    }
}

function slcArrUn(arr, ind){
    if(document.getElementById('un'+ind)){
        var divaAll = document.getElementById('un'+ind)
        var idA = 'txt_codunidade1___'+ind
    }else if(document.getElementById('unidadev'+ind)) {
        var divaAll = document.getElementById('unidadev'+ind)
        var idA = 'txt_codunidade1___'+ind
        var snl = 1;
        console.log('**************************************** '+idA)
    } else {  
        var divaAll = document.getElementById('unidadev') 
        var idA = 'txt_codunidade1'
    }
    if(ind == null || ind == undefined){
        ind = 'z'
    } 
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codacao1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Unidade'

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
    if(obju.state != 4 && obju.state != 15 && obju.state != 72 && snl != 1 && obju.state != 78){    
        var aa = showDados11()
        console.log(aa)
    }else{
        console.log(objXAcao)
        for(ckiA = 0; ckiA < objXAcao.arrFininps.length; ckiA++){            // <<< ---------------------------------------------------- Caso tenha valor para apresentar com campo habilitado para modificação
            if(objXAcao.arrFininps[ckiA].value != '' && ind == 'z'){
                enabledinU = 1
                showDados11(enabledinU)
            }   
        }
        if(arr != undefined){
            for(j = 0; j < arr.length; j++){
                var voption = document.createElement('option')
                att = document.createAttribute('value')
                att.value = arr[j].CODIGO
                voption.setAttributeNode(att)
                voption.innerText =  arr[j].NOME+ ' | ' + arr[j].CODIGO
                vselect.appendChild(voption)
            }
            console.log(' ***************************** - -  - - - ')
        }
    divaAll.appendChild(vselect)

    inp = document.getElementById(idA)
    inp_indxx = inp.id.split('___')[1]
    document.getElementById('txt_codrecurso___'+inp_indxx).value = inp.value
    inp.onchange = function (){ document.getElementById('txt_codrecurso___'+inp_indxx).value = this.value }
    }
}
var obju = {
    state: window.parentOBJ.ECM.workflowView.sequence
} 
function inp_slc111(divv, nId){
    var divaAll = document.getElementById(divv)
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codacao1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Unidade'

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
    att.value = 'txt_codunidade1___'+nId
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'txt_codunidade1___'+nId
    vselect.setAttributeNode(att)

    divaAll.appendChild(vselect)
    console.log(divaAll)
    return vselect
}
function showDados11(enabled){
    if(obju.state != 4){
        var objInUn = objXUnidade
    for(k = 0; k < objInUn.arrFininps.length; k++){
        var inpuTT = objInUn.arrFininps[k].id
        nId         = inpuTT.split('___')[1]; 
        var inpa = getINP11(inpuTT)
        var slc = inp_slc111(objInUn.arrFindivs[k].id, nId)

        var voption = document.createElement('option')
        att = document.createAttribute('value')
        att.value = inpa[0]
        voption.setAttributeNode(att)
        voption.innerText = inpa[1] + ' | ' + inpa[0]
        slc.appendChild(voption)

        if(enabled == 1){
            console.log(enabled)
            var arrayOptionU = DatasetFactory.getDataset("dsc_CentroCusto", null, null, null).values;  
            console.log(arrayOptionU)
            for(i = 0; i < arrayOptionU.length; i++){
                if(arrayOptionU[i].CODIGO !=  inpa[0] && arrayOptionU[i].NOME != inpa[1]){
                    var voption = document.createElement('option')
                    att = document.createAttribute('value')
                    att.value = arrayOptionU[i].CODIGO
                    voption.setAttributeNode(att)
                    voption.innerText = arrayOptionU[i].NOME+ ' | ' + arrayOptionU[i].CODIGO
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
    return objInUn
}
function getINP11(inp){
    var inpGet = []
    console.log(obju.state)
    if(obju.state != 4){
        var inpNow = document.getElementById(inp)
        var dataset11 =  DatasetFactory.getDataset("dsc_CentroCusto", null, null, null);
        if(inpNow.value != null || inpNow.value != ''){
            for(i = 0; i < dataset11.values.length; i++){
                var cod = dataset11.values[i].CODIGO
                var codInp = inpNow.value
                //console.log('**************************************************************')
                if(cod.indexOf(codInp) != -1 && cod.length == 16){
                    inpGet[0] = cod
                    inpGet[1] = dataset11.values[i].NOME
                    console.log(cod)
                }
            }
        }
    
    } 
    console.log(inpGet)
return inpGet
}
var objXUnidade = {
    arrFindivs: [],
    arrFininps: []
} 
function objXUnidadeSet(){
    var rws = document.getElementById('dadosrateio').tBodies[0].rows
    console.log(rws)
    var arrInps = ['txt_codrecurso___']//'txt_codprojeto___', 'txt_codacao___', 'txt_codrecurso___'
    var arrdivs = ['unidadev']//'projetov', 'acaov', 'unidadev'
    for(i = 1; i < rws.length; i++){
        var inputs = rws[i].getElementsByTagName('input') 
        console.log(inputs)
        for(j = 0; j < inputs.length; j++){
            for(y = 0; y <arrInps.length; y++){
                if(inputs[j].id.indexOf(arrInps[y]) != -1){
                    objXUnidade.arrFininps.push(inputs[j])
                    var dvAk = inputs[j].parentElement.children
                    console.log(objXUnidade.arrFininps)
                    for(k = 0; k < arrdivs.length; k++){
                        for(z = 0; z < dvAk.length; z++){
                            //console.log(dvAk[z])
                            if(dvAk[z].id.indexOf(arrdivs[k]) != -1){
                                var indx = inputs[j].id.split('___')[1]
                                dvAk[z].id = dvAk[z].id+indx
                                objXUnidade.arrFindivs.push(dvAk[z])
                                console.log(objXUnidade.arrFindivs)
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(objXUnidade)
    return objXUnidade
}
function init2(){
    objXUnidadeSet()
    var inP1 = document.getElementsByTagName('input')
    var inP = document.getElementsByTagName('span')
    var rr = 0
    console.log(inP1)
    for(i = 0; i < inP1.length; i++){
        if(inP1[i].id.indexOf('txt_recursos___') != -1 && inP1[i].value != ''){
            inP1[i].parentElement.style.display = 'block'
            console.log('a')
            rr++
        }
    }   
    for(i = 0; i < inP.length; i++){
        if(inP[i].id.indexOf('txt_recursos___') != -1 && inP[i].id.indexOf('txt_recursos___').innerHTML != '' && inP[i].id.indexOf('txt_recursos___').innerHTML != undefined){
            inP[i].parentElement.style.display = 'block'
            rr++
            console.log(rr)
        }   
    }   
    if(rr == 0){
        console.log(' --------------------------------------------------------------------------------------------- <<<<<< s')
        slcArrUn();
        console.log(' --------------------------------------------------------------------------------------------- <<<<<< s')
        /*for(cki = 0; cki < objXUnidade.arrFininps.length; cki++){
            if(objXUnidade.arrFininps[cki].value == ''){
                inpNotInUn();
            }   
        }*/
        console.log(' --------------------------------------------------------------------------------------------- <<<<<< s')
    }
}
window.addEventListener('load', init2)