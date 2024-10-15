function enableFields(form){ 
    var Now_State = parseInt(getValue("WKNumState"));

    if(Now_State == 0 || Now_State == 4 ||  Now_State == 15 ||  Now_State == 52 ||  Now_State == 78){
        fields = ["cmb_NomeSolicita", "dt_dataSolicita","txt_NumProc"]
        disableFieldsFromList(form, fields);
	}
	if(Now_State == 72){
		disableAllFields(form)
		var idxrateio = form.getChildrenIndexes("dadosItem");
		//form.setEnabled("txt_justificativa", true)
		form.setEnabled("slc_naturezaItem", true)
		form.setEnabled("txt_descricaoDespesa", true)
		form.setEnabled("txt_documento", true)
		form.setEnabled("txt_CNPJ_CPF_Item", true)
		form.setEnabled("txt_dataItem", true)
		form.setEnabled("txt_valorItem", true)
		form.setEnabled("naturezaAnalitica", true)
		for (var i = 0; i < idxrateio.length; i++) {
			form.setEnabled("slc_naturezaItem___" + idxrateio[i], true)
			form.setEnabled("txt_descricaoDespesa___" + idxrateio[i], true)
			form.setEnabled("txt_documento___" + idxrateio[i], true)
			form.setEnabled("txt_CNPJ_CPF_Item___" + idxrateio[i], true)
			form.setEnabled("txt_dataItem___" + idxrateio[i], true)
			form.setEnabled("txt_valorItem___" + idxrateio[i], true)
			form.setEnabled("naturezaAnalitica___" + idxrateio[i], true)
		}
	}
	if(Now_State == 10 || Now_State == 5  || Now_State == 37 || Now_State == 38 || Now_State == 20 || Now_State == 74 || Now_State == 76 || Now_State == 83 
		|| Now_State == 87 || Now_State == 88){ //|| Now_State == 91 //|| Now_State == 11
		disableAllFields(form)
	}
	if(Now_State == 19 || Now_State == 80){
		disableAllFields(form)
		var idxrateio = form.getChildrenIndexes("dadosItem");
		for (var i = 0; i < idxrateio.length; i++) {
			form.setEnabled("slc_naturezaItem___" + idxrateio[i], true)
		}
		fields = ["slc_PagamentoPara", "slc_Natureza"]
		enableFieldsFromList(form, fields);
	}
	if(Now_State == 22 || Now_State == 21){
		disableAllFields(form)
		fields = ["txt_dtPag", "txt_dtProv", "txt_nomeAls"]
        enableFieldsFromList(form, fields);
	}
	if(Now_State == 48){
		disableAllFields(form)
		fields = ["txt_dtBaixa", "slc_PagamentoPara"]
        enableFieldsFromList(form, fields);
	}
	if(Now_State == 78 || Now_State == 72){
		fields = ["slc_PagamentoPara", "txt_valor", "txt_justificativa"]
        disableFieldsFromList(form, fields);
	}
    
}

function disableAllFields(form) {
	var fields =    form.getCardData();
	var iterare =   fields.keySet().iterator();
	while (iterare.hasNext()) {
		var key =   iterare.next();
		form.setEnabled(key, false, false);
	}
}

function enableFieldsFromList(form, fields) {
	for (var i = 0; i < fields.length; i++) {
		form.setEnabled(fields[i], true);
	}
}

function disableFieldsFromList(form,fields){
	for(var i = 0; i<fields.length; i++){
		form.setEnabled(fields[i], false);
	}
}
