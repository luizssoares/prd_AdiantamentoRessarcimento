
function a(){
    var dataset = DatasetFactory.getDataset("dsc_CentroCusto", null, null, null);
    return dataset.values
}
function inp_slc(){
    var divaAll = document.getElementById('projetov')
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codprojeto1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Projeto'

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
    att.value = 'txt_codprojeto1'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'txt_codprojeto1'
    vselect.setAttributeNode(att)
    
    console.log("3")

    if(obju.state != 4 && obju.state != 15 && obju.state != 72 && obju.state != 78){    
        var aa = showDados()
        console.log(aa)
    }else{
        console.log(objXProjeto)
        for(ckiP = 0; ckiP < objXProjeto.arrFininps.length; ckiP++){            // <<< ---------------------------------------------------- Caso tenha valor para apresentar com campo habilitado para modificação
            if(objXProjeto.arrFininps[ckiP].value != ''){
                enabledin = 1
                showDados(enabledin)
            }   
        }
        var arrayOption =   a()  
        for(i = 0; i < arrayOption.length; i++){
        	if(arrayOption[i].CODIGO.length < 7){
                var voption = document.createElement('option')
                att = document.createAttribute('value')
                att.value = arrayOption[i].CODIGO
                voption.setAttributeNode(att)
                voption.innerText = arrayOption[i].NOME+ ' | ' + arrayOption[i].CODIGO
                vselect.appendChild(voption)
            }
        }
    }
    divaAll.appendChild(vselect)
}
var obju = {
    state: window.parentOBJ.ECM.workflowView.sequence
} 
function inp_slc1(divv, nId){
    var divaAll = document.getElementById(divv)
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codprojeto1___'+nId
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Projeto'

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
    att.value = 'txt_codprojeto1___'+nId
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'txt_codprojeto1___'+nId
    vselect.setAttributeNode(att)

    divaAll.appendChild(vselect)
    console.log(divaAll)
    return vselect
}
function showDados(enabled){
    console.log(enabled)
    if(obju.state != 4){
    objX = objXProjeto
    console.log(objX)
    for(k = 0; k < objX.arrFininps.length; k++){
        var inpuTT  = objX.arrFininps[k].id
        nId         = inpuTT.split('___')[1]; 
        var inpa = getINP(inpuTT)
        var slc = inp_slc1(objX.arrFindivs[k].id, nId)
        
        insertINP()             // <<< ---------------------------------------------------- Utilizado para indexar a função de Modificar o selecet de 'ACAO' e modificar o valor do input de Projeto 

        var voption = document.createElement('option')
        att = document.createAttribute('value')
        att.value = inpa[0]
        voption.setAttributeNode(att)
        voption.innerText = inpa[1] + ' | ' + inpa[0]
        slc.appendChild(voption)

        if(enabled == 1){
            console.log(enabled)
            var arrayOption =   a()  
            console.log(arrayOption)
            for(i = 0; i < arrayOption.length; i++){
                if(arrayOption[i].CODIGO !=  inpa[0] && arrayOption[i].NOME != inpa[1]){
                    var voption = document.createElement('option')
                    att = document.createAttribute('value')
                    att.value = arrayOption[i].CODIGO
                    voption.setAttributeNode(att)
                    voption.innerText = arrayOption[i].NOME+ ' | ' + arrayOption[i].CODIGO
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
    return objX
}
function getINP(inp){
    var inpGet = []
    console.log(obju.state)
    if(obju.state != 4){
        var inpNow = document.getElementById(inp)
        var dataset =   a()
        if(inpNow.value != null || inpNow.value != ''){
            for(i = 0; i < dataset.length; i++){
                var cod = dataset[i].CODIGO
                var codInp = inpNow.value
                if(cod.indexOf(codInp) != -1 && cod.length == 5){
                    inpGet[0] = cod
                    inpGet[1] = dataset[i].NOME
                    console.log(cod)
                }
            }
        }
    
    } 
    console.log(inpGet)
return inpGet
}
var objXProjeto = {
    arrFindivs: [],
    arrFininps: []
} 
function objXProjetoSet(){
    var rws = document.getElementById('dadosrateio').tBodies[0].rows
    console.log(rws)
    var arrInps = ['txt_codprojeto___']//'txt_codprojeto___', 'txt_codacao___', 'txt_codrecurso___'
    var arrdivs = ['projetov']//'projetov', 'acaov', 'unidadev'
    
    for(i = 1; i < rws.length; i++){
        var inputs = rws[i].getElementsByTagName('input') 
        console.log(inputs)
        for(j = 0; j < inputs.length; j++){
            for(y = 0; y <arrInps.length; y++){
    
                if(inputs[j].id.indexOf(arrInps[y]) != -1){
                    objXProjeto.arrFininps.push(inputs[j])
                    var dvAk = inputs[j].parentElement.children
                    console.log(objXProjeto.arrFininps)
                    for(k = 0; k < arrdivs.length; k++){
                        for(z = 0; z < dvAk.length; z++){
                            //console.log(dvAk[z])
                            if(dvAk[z].id.indexOf(arrdivs[k]) != -1){
                                var indx = inputs[j].id.split('___')[1]
                                dvAk[z].id = dvAk[z].id+indx
                                objXProjeto.arrFindivs.push(dvAk[z])
                                console.log(objXProjeto.arrFindivs)
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(objXProjeto)
    return objXProjeto
}
function init1(){
    objXProjetoSet()
    var inP1 = document.getElementsByTagName('input')
    var inP = document.getElementsByTagName('span')
    var rr = 0
    console.log(inP1)
    for(i = 0; i < inP1.length; i++){
        if(inP1[i].id.indexOf('txt_projeto___') != -1 && inP1[i].value != ''){
            inP1[i].parentElement.style.display = 'block'
            console.log('a')
            rr++
        }
    }   
    for(i = 0; i < inP.length; i++){
        var inpNow = inP[i].id.indexOf('txt_projeto___')
        if(inP[i].id.indexOf('txt_projeto___') != -1 && inpNow.innerHTML != '' && inpNow.innerHTML != undefined){
            inP[i].parentElement.style.display = 'block'
            console.log(inP[i])
            console.log(inpNow.innerHTML)
            rr++
            console.log(rr)
        }   
    }   
    if(rr == 0){
        inp_slc()
    }
}
window.addEventListener('load', init1)
//window.addEventListener('load', inp_slc)