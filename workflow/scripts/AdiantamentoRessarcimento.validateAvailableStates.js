function validateAvailableStates(iCurrentState,stateList){
	var tpSolc = hAPI.getCardValue('slc_PagamentoPara');
    var usRsp = hAPI.getCardValue('hdn_userResp');
    usRsp += 'test'
    log.info('******************************************------------------------------------------------------------------')
    log.info(usRsp)
    
	/*
	 * 2 = Ressarcimento
	 * 1 = Adiantamento
	 */
	var stateArray = new Array();
    var stateNow = getValue('WKNumProces');

    if(iCurrentState == 11){
        log.info('******************************************------------------------------------------------------------------')
        log.info(usRsp)
        log.info('iCurrentState == 11')
        stateList.clear();
        if(tpSolc == 2){
            stateArray.push(115,59);
            stateArray.forEach(function(code) {
                stateList.add(new java.lang.Integer(code));
            });
        }else if(tpSolc == 1 && usRsp != 'test'){
            log.info('******************************************------------------------------------------------------------------')
        log.info(usRsp)
        //hAPI.setCardValue(''hdn_userResp'', ''Pool:Role:UCOFAnaliseDocumentacao'');
       	    stateArray.push(20,59);
            stateArray.forEach(function(code) {
                stateList.add(new java.lang.Integer(code));
            });
       }else if(tpSolc == 1 && usRsp == 'test'){
            stateArray.push(115,20,59);
            stateArray.forEach(function(code) {
                stateList.add(new java.lang.Integer(code));
            });
       }else if(tpSolc == 0){
            log.info('******************************************------------------------------------------------------------------')
            log.info('tpSolc == 0')
            stateArray.push(115,20,59);
            stateArray.forEach(function(code) {
                stateList.add(new java.lang.Integer(code));
            });
        }
    }
    if(iCurrentState == 19){
        stateList.clear();
        if(tpSolc == 2){
        	 stateArray.push(20, 15, 10);
             stateArray.forEach(function(code) {
                 stateList.add(new java.lang.Integer(code));
             });
        }else if(tpSolc == 1){
       	    stateArray.push(11, 15, 10);
            stateArray.forEach(function(code) {
                stateList.add(new java.lang.Integer(code));
            });
       }else if(tpSolc == 0){
            stateArray.push(11, 15, 20, 10);
            stateArray.forEach(function(code) {
                stateList.add(new java.lang.Integer(code));
            });
        }
    }
    return stateList;
}