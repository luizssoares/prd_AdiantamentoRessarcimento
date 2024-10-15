function beforeSendData(customField,customFacts){

    customField[0] = hAPI.getCardValue('txt_dtAlsHidden');  //data da analise
    
    customField[1] = hAPI.getCardValue('dataUtilizacaoHidden'); // data de inicio da utilizacao
    
    customField[2] = hAPI.getCardValue('analistaHidden'); //analista
    
    customField[3] = hAPI.getCardValue('diferencaDiasHidden');// data da analise - data de inicio da utilizacao
    
    customField[4] = hAPI.getCardValue('dataDaMovimentacaoProRM'); //data de movimentação para o rm
    
    customField[5] = hAPI.getCardValue('diferencaDiasHiddenRM'); //data da analise - data de mov pro rm

    customField[6] = hAPI.getCardValue('slc_PagamentoPara');  // 1 = adiantamento | 2 = ressarcimento

}
