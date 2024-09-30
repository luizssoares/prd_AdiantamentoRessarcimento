function beforeCancelProcess(colleagueId,processId){
	var Now_State = parseInt(getValue('WKNumState'));
	var user = getValue("WKUser");  
	
	var grupo = DatasetFactory.createConstraint('colleagueGroupPK.groupId', 'ucof_AdiantamentoRessarcimento', 'ucof_AdiantamentoRessarcimento', ConstraintType.MUST)
	var dts = DatasetFactory.getDataset('colleagueGroup',null, new Array(grupo),null)
	
	var gestor = 0 
	for(var i=0; i<dts.values.length; i++){
		var matriculaGrupo = dts.getValue(i, 'colleagueGroupPK.colleagueId')
		if(matriculaGrupo == user){
			gestor = 1
		}
	}
	if((gestor != 1 ) && (Now_State > 19)){ throw '\n'+'Você não tem permissão para cancelar a solicitação, PROCURAR A UCOF.'; } 
}
