function validateForm(form){
    var Now_State   = parseInt(getValue("WKNumState"));
    var completTask = getValue("WKCompletTask");
    var errorMsg    = "";
    var endofline   = "</br>";

    String.prototype.isEmpty = function(){ 
        return (!this || 0 === this.length); 
    };

    var a       = form.getValue("slc_PagamentoPara");
    var b       = form.getValue("dataUtilizacao");
    var f       = form.getValue("txt_CNPJ_CPF");
    var g       = form.getValue("slc_FormaPagamento");
    var h       = form.getValue("txt_valor");
    var j       = form.getValue("txt_justificativa");
    var k       = form.getValue("slc_Natureza");
    var s       = form.getValue("cmb_GerenteSolicitante");  
    var x       = form.getValue("txt_Favorecido");
    var y       = form.getValue("cbAdiantamento");
    var z       = form.getValue("cbRessarcimento");

    var cll = form.getValue("cmb_NomeSolicita");

    fields  = [s, a, x, f, g, h, j, k ]
    names   = ["Gerente/Diretor Solicitante", "Pedido de Pagamento de", "RAZAO SOCIAL",  "CNPJ/CPF", "Forma de Pagamento", "Valor", 
    "Justificativa do Pedido", "Natureza"] 

    if(Now_State == 0 || Now_State == 4){
        validatesolicitacao();
        if(errorMsg.trim().isEmpty() == false)  {
            throw "\n"+errorMsg; 
        }
    }

    if(cll != 99990006 &&(completTask == "true")){
        if(Now_State == 0 || Now_State == 4 || Now_State == 15 ||  Now_State == 52 ||  Now_State == 72 ||  Now_State == 88 || Now_State == 78 &&(completTask == "true")){

                for(var i = 0; i < fields.length; i++){
                    if(fields[i] == null || fields[i] == '' || fields[i] == "Selecione" || fields[i] == "0,00"
                    || fields[i] == "0"){
                    errorMsg += "Favor preencher campo " +"<b>"+ names[i] +"</b>"+ endofline;
                    }
                }
                if(a == 1 && b == '' && y ==''){
                    errorMsg += "Favor preencher campo " +"<b>"+ "Data Final de Utilização do Valor Bruto" +"</b>"+ endofline;
                    errorMsg += "Favor preencher campo " +"<b>"+ "Estou Ciente!" +"</b>"+ endofline;
                }
                if(a == 2 && z==''){
                    errorMsg += "Favor preencher campo " +"<b>"+ "Estou Ciente!" +"</b>"+ endofline;
                }

                //rateioValidate()
                if(a == 2 || a == 1 ){
                    itemValidate(a, Now_State)
                    if(a==1){
                        var myArray = h.replace(".","")
                        var myArray = myArray.replace(",","." )
                        var valor = parseFloat(myArray)
                        if(valor > 2500){
                            errorMsg += "A Solicitações de adiantamentos pelo Myweb são até o máximo R$2.500,00 " +"</b>"+ endofline;
                        }
                        
                    }
                }
            if (errorMsg.trim().isEmpty() == false) throw "\n"+errorMsg;
        }
    }   
    if(Now_State == 0 &&(completTask == "true")){   rateioValidate1();  if(errorMsg.trim().isEmpty() == false) throw "\n"+errorMsg; }
    if(Now_State == 22 || Now_State == 21 &&(completTask == "true")){
        //validaChecK()
        var pgm     = form.getValue("txt_dtPag")
        var dt      = new Date()
        if(pgm == ""){
            errorMsg += "Favor preencher campo <b>Data de Pagamento</b>."+endofline;
        }
        var Ano = dt.getFullYear();
        var mes = new Array();
            mes[0] = "01"
            mes[1] = "02"
            mes[2] = "03"
            mes[3] = "04"
            mes[4] = "05"
            mes[5] = "06"
            mes[6] = "07"
            mes[7] = "08"
            mes[8] = "09"
            mes[9] = "10"
            mes[10] = "11"
            mes[11] = "12"
        var dia = new Array();
            dia[1] = "01"
            dia[2] = "02"
            dia[3] = "03"
            dia[4] = "04"
            dia[5] = "05"
            dia[6] = "06"
            dia[7] = "07"
            dia[8] = "08"
            dia[9] = "09"
        var Mes = mes[dt.getMonth()];
        if(dt.getDate() <= 9){
        var Dia = dia[dt.getDate()];
        }else{
        var Dia = dt.getDate()
        }
        var dataFinal = [Ano+"-"+Mes+"-"+Dia];
        if(dataFinal  > pgm ){ /*toString(dataFinal)  == toString(pgm) */
            errorMsg += "<b>Data de pagamento</b> não pode ser anterior a data de hoje." +endofline; //+" "+dataFinal+" "+pgm         
        }
        if (errorMsg.trim().isEmpty() == false) throw "\n"+errorMsg;
    }
    
    function rateioValidate(){
        var idxrateio = form.getChildrenIndexes("dadosrateio");
            if(idxrateio.length <= 0){
            errorMsg += "Favor <b>adicionar rateio</b>!"  +endofline;	
            }
            var count = 0;
            var sald = 0
            for (var i = 0; i < idxrateio.length; i++) {
                if (form.getValue("slc_FonteRecursos___" + idxrateio[i]) == "" || form.getValue("slc_FonteRecursos___" + idxrateio[i]) == null ||
                form.getValue("slc_FonteRecursos___" + idxrateio[i]) == "0"){
                count++
                }
                if (form.getValue("txt_projeto___" + idxrateio[i]) == "" || form.getValue("txt_projeto___" + idxrateio[i]) == null){
                count++
                }
                if(form.getValue("txt_acao___" + idxrateio[i]) == "" || form.getValue("txt_acao___" + idxrateio[i]) == null){	
                count++
                }
                if(form.getValue("txt_recursos___" + idxrateio[i]) == "" || form.getValue("txt_recursos___" + idxrateio[i]) == null){
                count++
                }
                if(form.getValue("txt_valorUtil___" + idxrateio[i]) == "" || form.getValue("txt_valorUtil___" + idxrateio[i]) == null){
                count++
                }
                if(form.getValue("txt_saldo___" + idxrateio[i]) == "" || form.getValue("txt_saldo___" + idxrateio[i]) == null){
                    //||form.getValue("txt_saldo___" + idxrateio[i]) == "0,00"
                sald++
                }
            }
            if(count != 0){ errorMsg += "Favor preencher Campo(s) não preenchidos em detalhes do <b>Rateio</b>." +endofline; }
            if(sald != 0){ errorMsg += "Não existe <b>saldo</b> no <b>centro de custo</b>." +endofline; }
    }     
    function rateioValidate1(){
        var idxrateio = form.getChildrenIndexes("dadosrateio");
            if(idxrateio.length <= 0){
            errorMsg += "Favor <b>adicionar rateio</b>!"  +endofline;	
            }
            var count = 0;
            var sald = 0
            var a = 'txt_codprojeto1___'
            var b = 'txt_codacao1___'
            var c = 'txt_codunidade1___'
            for (var i = 0; i < idxrateio.length; i++) {
                if (form.getValue("slc_FonteRecursos___" + idxrateio[i]) == "" || form.getValue("slc_FonteRecursos___" + idxrateio[i]) == null ||
                form.getValue("slc_FonteRecursos___" + idxrateio[i]) == "0"){
                count++
                }
                if (form.getValue(a + idxrateio[i]) == "" || form.getValue(a + idxrateio[i]) == null){
                count++
                }
                if(form.getValue(b + idxrateio[i]) == "" || form.getValue(b + idxrateio[i]) == null){	
                count++
                }
                if(form.getValue(c + idxrateio[i]) == "" || form.getValue(c + idxrateio[i]) == null){
                count++
                }
                if(form.getValue("txt_valorUtil___" + idxrateio[i]) == "" || form.getValue("txt_valorUtil___" + idxrateio[i]) == null){
                count++
                }
                if(form.getValue("txt_saldo___" + idxrateio[i]) == "" || form.getValue("txt_saldo___" + idxrateio[i]) == null){
                    //||form.getValue("txt_saldo___" + idxrateio[i]) == "0,00"
                //sald++
                }
            }
            if(count != 0){ errorMsg += "Favor preencher Campo(s) não preenchidos em detalhes do <b>Rateio</b>." +endofline; }
            if(sald != 0){ errorMsg += "Não existe <b>saldo</b> no <b>centro de custo</b>." +endofline; }
        }

    function itemValidate(a, Now_State){
        var idxrateio = form.getChildrenIndexes("dadosItem");
            if(idxrateio.length <= 0){
            errorMsg += "Favor <b>adicionar itens</b>!"  +endofline;	
            }
            var count = 0;
            for (var i = 0; i < idxrateio.length; i++) {
                if (form.getValue("txt_descricaoDespesa___" + idxrateio[i]) == "" || form.getValue("txt_descricaoDespesa___" + idxrateio[i]) == null){
                count++
                }
                if (form.getValue("slc_naturezaItem___" + idxrateio[i]) == "" || form.getValue("slc_naturezaItem___" + idxrateio[i]) == null ||
                form.getValue("slc_naturezaItem___" + idxrateio[i]) == '0'){
                count++
                }
                if(a != 1 && Now_State == 4 || a != 1 && Now_State == 15 || a == 1 && Now_State == 72 || a == 1 && Now_State == 78 || a == 1 && Now_State == 88){
                    if(form.getValue("txt_documento___" + idxrateio[i]) == "" || form.getValue("txt_documento___" + idxrateio[i]) == null){	
                    count++
                    }
                    if(form.getValue("txt_CNPJ_CPF_Item___" + idxrateio[i]) == "" || form.getValue("txt_CNPJ_CPF_Item___" + idxrateio[i]) == null){
                    count++
                    }
                    if(form.getValue("txt_dataItem___" + idxrateio[i]) == "" || form.getValue("txt_dataItem___" + idxrateio[i]) == null){
                    count++
                    }
                }
                if(Now_State != 72 && Now_State != 88 && form.getValue("txt_valorItem___" + idxrateio[i]) == "0,00"){
                	count++
                }
                if(form.getValue("txt_valorItem___" + idxrateio[i]) == "" || form.getValue("txt_valorItem___" + idxrateio[i]) == null){
                    count++
                }
            }
            if(count != 0){ errorMsg += "Favor preencher Campo(s) não preenchidos em <b>Detalhes das Despesas</b>." +endofline; }
    }

    		// LIMITA DATA
		Date.prototype.addDays = function (days) {
			var date = new Date(this.valueOf());
			date.setDate(date.getDate() + days);
			return date;
		}
		
		/* Prazo de 60 Dias */
		function prazoSocilitacao() {
			var dataAtual = 0;
			var dataInicial = form.getValue("dataUtilizacao2");
			dataInicial = dataInicial.split('T')[0]

			if(Now_State == 4 && form.getValue("slc_PagamentoPara") == "1" && form.getValue("dataUtilizacao2") != "") {
				var data = new Date();
				var date = new Date();
				var diaN = 2
				var d = data.addDays(diaN);
				var Ano = d.getFullYear();
				var mes = new Array();
				mes[0] = "01"
				mes[1] = "02"
				mes[2] = "03"
				mes[3] = "04"
				mes[4] = "05"
				mes[5] = "06"
				mes[6] = "07"
				mes[7] = "08"
				mes[8] = "09"
				mes[9] = "10"
				mes[10] = "11"
				mes[11] = "12"
				var dia = new Array();
				dia[1] = "01"
				dia[2] = "02"
				dia[3] = "03"
				dia[4] = "04"
				dia[5] = "05"
				dia[6] = "06"
				dia[7] = "07"
				dia[8] = "08"
				dia[9] = "09"
				var Mes = mes[d.getMonth()];
				if (d.getDate() <= 9) {
					var Dia = dia[d.getDate()];
				} else {
					var Dia = d.getDate()
				}

				var dataAtual = [Ano + "-" + Mes + "-" + Dia];
			}

			if (dataAtual > dataInicial) {
				throw("<b>Data de Inicio de Utilização do Valor Bruto deve ser de pelo menos 2 dias conforme IN 02 08.</b>")
				/* antes 2 dias */
			} else{
				console.log("parabéns, seu adiantamento está á caminho, meu nobre.")
			}
			//validaDataTermino()
		}
		prazoSocilitacao();

        function validatesolicitacao() {            /// na task 140 (Anexar comprovantes, deve se realizar esta checagem. Se houver solicitações nessa etapa e em aberto, deverá se exibir o erro)

            //var urlInd = "https://mywebhm.am.sebrae.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="
            var urlInd = "https://myweb.am.sebrae.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="
            var urlSec = "&app_ecm_workflowview_taskUserId="
            var x = 0
            var arrayNumSol = []
            var matricula = getValue("WKUser");
            // errorMsg += matricula+endofline

            var today = new Date();
            // var diaDeHoje = today.toLocaleDateString();
            // errorMsg += today+endofline

            var dataUtilizacaoValor = form.getValue("dataUtilizacao");
            var partesData = dataUtilizacaoValor.split("-");
            var ano = partesData[0];
            var mes = partesData[1];
            var dia = partesData[2];
            var dataDeUtilizacao = new Date (ano + "/" + mes + "/" + dia);
            // errorMsg += dataDeUtilizacao+endofline
            // errorMsg += (today > dataDeUtilizacao)+endofline
            
                var c = DatasetFactory.createConstraint("cmb_NomeSolicita", matricula, matricula, ConstraintType.MUST);
                var constraint = new Array(c);
                var dataset = DatasetFactory.getDataset("AdiantamentoRessarcimento", null, constraint, null);
                for (i = 0; i < dataset.rowsCount; i++) {
                    var Nsol = dataset.getValue(i, "txt_NumProc");
                    var Nstate = dataset.getValue(i, "hdn_State")
                    if (Nsol != null || Nsol != "") {
                        var c3 = DatasetFactory.createConstraint("processInstanceId", Nsol, Nsol, ConstraintType.MUST);
                        var c4 = DatasetFactory.createConstraint("status", 0, 0, ConstraintType.MUST);
                        var constraints = new Array(c3, c4);
                        var ddataset = DatasetFactory.getDataset("processTask", null, constraints, null);
                       
                        if(ddataset.rowsCount != 0){
                            for (j = 0; j < ddataset.rowsCount; j++) {
                                var status = ddataset.getValue(j, "active");
                                var colleague = ddataset.getValue(j, "processTaskPK.colleagueId");

                                if (today > dataDeUtilizacao && colleague == matricula && status == true && Nstate == 69 ) {
                                    arrayNumSol.push(ddataset.getValue(j, "processTaskPK.processInstanceId"))
                                    x++
                                }
                            }
                        }   
                    }
                }
            
            if (x != 0) {
                var arraySec = [1]
                for (i = 0; i < arrayNumSol.length; i++) {
                    x = 0
                    for (j = 0; j < arraySec.length; j++) {
                        if (arrayNumSol[i] == arraySec[j]) {
                            x++
                        }
                    }
                    if (x == 0) {
                        if (arraySec[0] == 1) {
                            arraySec[0] = arrayNumSol[i]
                        } else {
                            arraySec.push(arrayNumSol[i])
                        }
                    }
                }
                if (arraySec.length >= 2) {
                    errorMsg += 'fd' + arraySec.length;
                    errorMsg += "<h2 style=\"color:black\">Existe duas ou mais solicitações Adiantamento e Ressarcimento em sua responsabilidade que não estão finalizadas. As seguintes solicitações:</h2>\n";
    
                    for (k = 0; k < arraySec.length; k++) {
                        //errorMsg += "<h2 style=\"color:black\">"+arrayNumSol[i]+"</h2>" + endofline;
                        errorMsg += "<h2>" + "<a href=\"" + urlInd + arraySec[k] + urlSec + matricula + "\"" + "class=\"cad-link\"" + "target=\"_blank\"" + "style=\"color:blue\">" + "<i class=\"flaticon flaticon-link icon-md\"></i>" +
                            arrayNumSol[k] + "</a>" + "</h2>\n";
                    }
    
                }
            } 
        }
  
}