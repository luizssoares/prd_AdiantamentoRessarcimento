function displayFields(form,customHTML){ 
        var Now_State = parseInt(getValue("WKNumState"));
        var NumProcesso = getValue("WKNumProces");
        var usuario = getValue("WKUser");
        var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

        switch(Now_State){

                //Solicitação
                case 0:
        
                        form.setValue("cmb_NomeSolicita",usuario);
                        form.setValue("dt_dataSolicita",data.format(new Date()));
                        form.setVisibleById("AnaliseAgendamento",false);
                        form.setVisibleById("PagamentoEfetuado",false);
                        

                break;

                case 4:
                        form.setValue("txt_NumProc",NumProcesso);
                        form.setValue("cmb_NomeSolicita",usuario);
                        form.setValue("dt_dataSolicita",data.format(new Date()));
                        form.setVisibleById("AnaliseAgendamento",false);
                        form.setVisibleById("PagamentoEfetuado",false);
                        

                break;

                case 5:
                        form.setValue("txt_NumProc",NumProcesso);
                        form.setVisibleById("PagamentoEfetuado",false);
                        form.setVisibleById("AnaliseAgendamento",false);
                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem"); 

                break;

                case 15:
                
                        form.setVisibleById("AnaliseAgendamento",false);
                        form.setVisibleById("PagamentoEfetuado",false);

                break;

                case 10:

                        form.setVisibleById("PagamentoEfetuado",false);
                        form.setVisibleById("AnaliseAgendamento",false);
                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem"); 

                break;

                case 11:
                        form.setVisibleById("AnaliseAgendamento",false);
                        form.setVisibleById("PagamentoEfetuado",false);
                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem");

                break;
                
                case 19:

                        form.setVisibleById("AnaliseAgendamento",false);   
                        form.setVisibleById("PagamentoEfetuado",false);
                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");  
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem"); 

                break;

                case 20:
                        form.setVisibleById("AnaliseAgendamento",false);   
                        form.setVisibleById("PagamentoEfetuado",false);
                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem");
                break;

                case 21:
                        form.setValue("txt_nomeAls",usuario);
                        form.setValue("txt_dtAls",data.format(new Date()));  
                        form.setVisibleById("PagamentoEfetuado",false);
                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio"); 
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem");

                break;

                case 22:

                        form.setVisibleById("PagamentoEfetuado",false);
                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem");

                break;

                case 37:

                        form.setVisibleById("PagamentoEfetuado",false);
                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem");

                break;

                case 38:

                        form.setVisibleById("PagamentoEfetuado",false);
                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem");
                        
                break;

                case 52:
                      
                        form.setVisibleById("AnaliseAgendamento",false);     
                        form.setVisibleById("PagamentoEfetuado",false);

                break;
                case 48:

                        form.setValue("txt_nomeAls2",usuario);
                        form.setValue("txt_dtAls2",data.format(new Date())); 
                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem");
                
                break;

                case 74:

                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem");
                
                break;

                case 78:

                        form.setVisibleById("AnaliseAgendamento",false);
                        form.setVisibleById("PagamentoEfetuado",false);
                
                break;

                case 76:

                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem");
                
                break;

                case 80:

                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem");
                
                break;

                case 83:

                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem");
                
                break;

                case 87:

                        //form.setValue("txt_nomeAls2",usuario);
                        //form.setValue("txt_dtAls2",data.format(new Date())); 
                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem");
                
                break;

                case 91:

                        //form.setValue("txt_nomeAls2",usuario);
                        //form.setValue("txt_dtAls2",data.format(new Date())); 
                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        //ocultarCampo(customHTML, "addItem");     
                        //ocultarCampo(customHTML, "delItem");
                
                break;

                case 88:

                        //form.setValue("txt_nomeAls2",usuario);
                        //form.setValue("txt_dtAls2",data.format(new Date())); 
                        ocultarCampo(customHTML, "addRateio");     
                        ocultarCampo(customHTML, "delRateio");   
                        ocultarCampo(customHTML, "addItem");     
                        ocultarCampo(customHTML, "delItem");
                        form.setVisibleById("AnaliseAgendamento",false);
                        form.setVisibleById("PagamentoEfetuado",false);
                
                break;


                default:
        }
        
}