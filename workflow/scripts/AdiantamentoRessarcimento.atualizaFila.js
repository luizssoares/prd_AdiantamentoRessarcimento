function rowResponsibility (){ 
    var clientService = fluigAPI.getAuthorizeClientService();
    var data = {
        companyId : getValue("WKCompany") + '',
        serviceCode : 'filaEletronica',
        endpoint : '/responsavel', 
        method : 'get',// 'delete', 'patch', 'put', 'get'     
        timeoutService: '500', // segundos
        options : {
            encoding : 'UTF-8',
            mediaType: 'application/json',
            useSSL : true
        },
    }
    dateNow = new Date()
    var resp_prmsUserNow = clientService.invoke(JSON.stringify(data));
    if(resp_prmsUserNow.getResult()== null || resp_prmsUserNow.getResult().isEmpty()){
        throw new Exception("Retorno está vazio");
    }else{
        var response = JSON.parse(resp_prmsUserNow.getResult());
        hrs = dateNow.getHours()
        log.info('*************************************************************************************************************************************  time '+dateNow) 
        log.info('*************************************************************************************************************************************  '+resp_prmsUserNow.getResult()) 
        if(hrs >= 14 && response.respNow == '00000622'){ // 00000622 matricula RENATA, usuária com hórario de trabalho diferente
            log.info('*************************************************************************************************************************************  new req ')
            log.info('*************************************************************************************************************************************  hr '+hrs) 
            resp_prmsUserNow = clientService.invoke(JSON.stringify(data));
            responseNew = JSON.parse(resp_prmsUserNow.getResult());
            let resValues = responseNew.respNow
            hAPI.setCardValue('hdn_userResp', resValues);        
            log.info('*************************************************************************************************************************************  response'+resValues) 
        }else{
            let resValues = response.respNow
            hAPI.setCardValue('hdn_userResp', resValues);        
            log.info('*************************************************************************************************************************************  response'+resValues) 
        }
    }
}