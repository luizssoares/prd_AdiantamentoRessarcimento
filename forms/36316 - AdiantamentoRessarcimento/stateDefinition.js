
///ainda não exportado
function stateDefinition(){
    this.state          = window.parentOBJ.ECM.workflowView.sequence
    this.statesFlow     = [4, 0, 5, 15, 10, 11, 19, 20, 21, 22, 37, 38, 52, 48, 72, 74, 76, 78, 80, 83, 88, 87, 91]
    this.setFunc();
    this.installment();
};
stateDefinition.prototype.setFunc = function () {
    var tipo    = document.getElementById('slc_PagamentoPara')
    tipo.onclick = function (){ myDefinition.enableFunc() }
    this.enableFunc()
    var tableName   = 'dadosItem'
    var nameButton  = 'addItem'
    var getButton = this.getButtonTable(tableName)
    if(getButton[0].id == nameButton && getButton[0].mark == undefined){ 
        getButton[0].mark = 1
        getButton[0].addEventListener('click',  function (){ myDefinition.enableFunc() })
        console.log('dd')
    };
    gotInputs = document.getElementById('txt_valor')
    gotInputs.addEventListener('change', function (){ myDefinition.installment() })
    //gotInputss = document.getElementById('txt_ValorTotal')
    //gotInputss.addEventListener('change', function (){ myDefinition.installment() }) 

};
stateDefinition.prototype.enableFunc = function () {
    console.log(this.state)
    var tipo    = document.getElementById('slc_PagamentoPara')
    var panel   = document.getElementById('despesas')
    var arrayFields = ['txt_documento___', 'txt_CNPJ_CPF_Item___', 'txt_dataItem___']     
    var tableName   = 'dadosItem'
    var arrayStates = [ 4, 0, 15, 52 ]
    var arrayNone   = [ 1 ]
    var arrayBlock  = 'T'
    this.excludesFieldsTable(tableName, arrayFields, arrayStates, arrayNone, arrayBlock, tipo.value)
    //this.getInsertInput()
    panel.style.display = 'block'
};

stateDefinition.prototype.installment = function () {
    const msgn = {  
                    a: "Valor a ser devolvido para o SEBRAE", 
                    b: "Valor a ressarcir ao funcionário",
                    c: ""         
                }; 
    var got = document.getElementById('txt_valor');var executed = document.getElementById('txt_ValorTotal');
    var insert_div = function (msgn, res){
            var input_neighbor  = document.getElementById('par')
            var text = document.createElement("P"); 
            text.style.color = 'black'  
            text.innerHTML = msgn + '\:  $ '+ res;  
            var b   = document.createElement('B')
            b.appendChild(text)                   
            var _div = document.createElement("div");
            _div.setAttribute('class', 'col-md-2 col-md-offset-10')
            _div.setAttribute('id', 'msgn')
            _div.appendChild(b);
            x = input_neighbor.appendChild(_div);
            return x
    }
    var current =   {  tofloat  : function(textValue) {
                                    textValue = textValue.replace(/\./g, "");
                                    textValue = textValue.replace(/\,/g, ".");
                                    return parseFloat(textValue);
                                }
                    }
    got = current.tofloat(got.value);executed = current.tofloat(executed.value);
    var resultarithmetic =  moeda.formatar(got - executed)
    if(resultarithmetic.search("–") == -1){ // <-- foi necessário copiar o sinal negativo: –, do resultado da func moeda.formatar
        console.log('fgf')
        if(document.getElementById('msgn') != null){
            var input_neighbor  = document.getElementById('txt_ValorTotal').parentElement.parentElement.parentElement
            input_neighbor.removeChild(input_neighbor.childNodes[3])
        }
        return insert_div(msgn.a, resultarithmetic) 
    } else if (resultarithmetic.search("–") == 1 && resultarithmetic != '0,00'){
        if(document.getElementById('msgn') != null){
            var input_neighbor  = document.getElementById('txt_ValorTotal').parentElement.parentElement.parentElement
            input_neighbor.removeChild(input_neighbor.childNodes[3])
        }
        resultarithmetic = resultarithmetic.replace(/–/g, '')
        resultarithmetic = current.tofloat(resultarithmetic)
        resultarithmetic = moeda.formatar(resultarithmetic)
        console.log(resultarithmetic)
        return insert_div(msgn.b, resultarithmetic)
    } else {
        console.log('dsfdfsdf')
        if(document.getElementById('msgn') != null){
            var input_neighbor  = document.getElementById('txt_ValorTotal').parentElement.parentElement.parentElement
            input_neighbor.removeChild(input_neighbor.childNodes[3])
        }
        return insert_div(msgn.c, resultarithmetic) 
    }
    //return resultarithmetic
}

stateDefinition.prototype.getButtonTable = function (tableName){
    var getTables       = document.getElementsByClassName('table-responsive')
    for(i = 0; i < getTables.length; i++){
        console.log('assfd')
        var innerTable      = getTables[i].getElementsByTagName('table')
        console.log(innerTable)
        var getButton = 0;
        for(j = 0; j < innerTable.length; j++){
            if(innerTable[j].id != '' && innerTable[j].id == tableName){
                getButton       = getTables[i].getElementsByTagName('button')
                console.log(getButton)
            }
        }
        return getButton
    }
};

stateDefinition.prototype.getInsertInput = function () {
    var inputsTable    = document.getElementById('dadosItem').getElementsByTagName('input')
    for(i = 1; i < inputsTable.length; i++){
        var inputId = inputsTable[i]
        console.log(inputId)
        if(inputId.id.indexOf('txt_valorItem___') != -1){
            inputId.addEventListener('change', function (){ myDefinition.installment() })
        }
    }
};

stateDefinition.prototype.excludesFieldsTable = function (tableName, arrayFields, arrayStates, arrayNone, arrayBlock, control) {
    var Table    = document.getElementById(tableName)
    var getTbody    = Table.tBodies[0]
    var getRows     = getTbody.rows   
    for(j = 1; j < getRows.length; j++){
        var ckVl    = 0
        var getCells    = getRows[j].cells[1]
        var getChildren = getCells.getElementsByTagName('input')
        for(k = 0; k < getChildren.length; k++){
            for(i = 0; i < arrayFields.length; i++){
                if(getChildren[k].id.indexOf(arrayFields[i]) != -1){                            
                    var getDiv      = getChildren[k].parentElement.parentElement
                    for(y = 0; y < arrayStates.length; y++){
                        for(t = 0; t < arrayNone.length; t++){
                            if(arrayNone[t] != 'N'){    
                                if(arrayNone[t] != 'T'){
                                    if(this.state == arrayStates[y] && arrayNone[t] == control){
                                        console.log(getDiv)
                                        getDiv.style.display = 'none'
                                        ckVl++
                                        console.log(ckVl)
                                        break
                                    }
                                } else { getDiv.style.display = 'none' } 
                            }
                        }
                        for(x = 0; x < arrayBlock.length; x++){
                            if(arrayBlock[x] != 'N'){    
                                if(arrayBlock[x] != 'T'){
                                    if(this.state == arrayStates[y] && arrayBlock[x] == control){
                                        console.log(getDiv)
                                        getDiv.style.display = 'block'
                                        break
                                    }
                                } else if(ckVl == 0) { getDiv.style.display = 'block';console.log('ddddddddd') }
                            }
                        }
                    }
                }    
            }
        }    
    }
};

function initstateDefinition() { myDefinition = new stateDefinition(); };
window.addEventListener('load', initstateDefinition)