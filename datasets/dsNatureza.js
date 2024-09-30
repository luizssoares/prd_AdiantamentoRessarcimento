function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
	
	dataset.addColumn("valor");
	dataset.addColumn("sintetica");
    dataset.addColumn("analitica");
    dataset.addColumn("descricao");
    
    dataset.addRow(new Array("0", "0", "0", ""));

    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Selecione", ""));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Consultoria", "Assessoria, consultoria e orientação para a gestão empresarial, incluindo consultorias técnicas especializadas."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Instrutoria", "Serviços de ministração de treinamentos para público externo e instrutoria por pessoas jurídicas."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Advogacia", "Serviços de acompanhamento de processos judiciais e assessoria jurídica fornecidos por pessoa jurídica."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Auditoria Independente", "Serviços de auditorias (contábil, operacional, certificação, compliance, sistemas e outros) e contabilidade."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Tradução", "Conversão de linguagem, revisão ortográfica e tradução simultânea oferecidos por empresas especializadas."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Elaboração e gestão de projetos", "Arquitetura e estrutura de eventos, desenvolvimento de conteúdo e metodologias diversas, mapeamento de processos, textos técnicos, etc."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Estudos, Pesquisas e Análises Técnicas", "Estudos, pesquisas e análises técnicas sobre diversos assuntos, abrangendo tanto atividades meio quanto finalísticas."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Desenvolv. e Manutenção de Software proprios", "Empresas especializadas para produção e implementação de softwares, sistemas, plataformas e aplicativos."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Manut.e suporte tecnico de Software Terceiros", "Manutenção de softwares, sistemas, plataformas etc, incluindo correções, adaptações, evoluções e suporte técnico."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Licença de Uso de Softwares", "Softwares/sistemas/plataformas/aplicativos de propriedade de empresas."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Recrutamento e Seleção", "Seleção de funcionários, bolsistas, estagiários, terceiros, etc."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Capacitação e Treinamento de Pessoal", "Cursos, seminários, congressos e eventos de mercado."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Taquigrafia", "Serviços de conversão de linguagem, revisão ortográfica e tradução simultânea."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Web Designer e soluções Web", "Elaboração, desenvolvimento, execução e produção de sites dinâmicos na internet."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Produção e edição Mat.audiovisuais", "Conteúdos técnicos em roteiros para apresentações em leitura, áudio e vídeo."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Assessoria de Impressa", "Assessoria de imprensa em geral, excluindo contratos de divulgação e publicidade."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Ouvidoria", "Ouvidoria e central de relacionamento do SEBRAE."));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Serv.Tecnicos Especializados por Cooperativas", ""));
    dataset.addRow(new Array("1", "Serviços Especializados - PJ e PF", "Outros Serv.Tecn.Especializados","Serviços técnicos especializados não especificados anteriormente."));
    
    dataset.addRow(new Array("2", "Serviços Contratados - PJ e PF", "Selecione", ""));
    dataset.addRow(new Array("2", "Serviços Contratados - PJ e PF", "Vigilância", "Segurança, vigilância e prevenção de incêndio fornecidos por empresa."));
    dataset.addRow(new Array("2", "Serviços Contratados - PJ e PF", "Limpeza", "Limpeza, conservação geral, jardinagem e remoção de lixo ou entulhos."));
    dataset.addRow(new Array("2", "Serviços Contratados - PJ e PF", "Manutenção de Equip.de Informatica", "Manutenção de equipamentos de informática, oferecidos por empresas especializadas."));
    dataset.addRow(new Array("2", "Serviços Contratados - PJ e PF", "Manutenção de outros equipamentos", "Equipamentos elétricos e eletrônicos, como TV, vídeo, retroprojetor, forno elétrico, fogão, geladeira."));
    dataset.addRow(new Array("2", "Serviços Contratados - PJ e PF", "Manutenção de Instalações", "Instalações prediais, incluindo redes elétrica, hidráulica, telefonia, informática, climatização, elevadores etc."));
    dataset.addRow(new Array("2", "Serviços Contratados - PJ e PF", "Manutenção de Veiculos", "Frotas próprias e veículos locados, excluindo serviços integrados ao contrato de locação, fornecidas por empresas."));
    dataset.addRow(new Array("2", "Serviços Contratados - PJ e PF", "Outros serv.de Manutenção", "Manutenção não listados anteriormente, prestados por empresa."));
    dataset.addRow(new Array("2", "Serviços Contratados - PJ e PF", "Locação de mão de obra", "Mão-de-obra temporária ou recorrente para empregados destinados ao serviço do SEBRAE."));
    dataset.addRow(new Array("2", "Serviços Contratados - PJ e PF", "Estagiários", "Bolsa-auxílio para estagiários e taxas de administração para empresas intermediadoras de estágios."));
    dataset.addRow(new Array("2", "Serviços Contratados - PJ e PF", "Organizações Promoções e eventos", "Organização e promoção de eventos presenciais ou virtuais."));
    dataset.addRow(new Array("2", "Serviços Contratados - PJ e PF", "Contrato e Patrocinio", "Contratação de serviços de patrocínio conforme as diretrizes da Instrução Normativa de cada estado."));
    dataset.addRow(new Array("2", "Serviços Contratados - PJ e PF", "Outros Serv.Contratados", "Despesas contratadas que não sejam de natureza intelectual, filmagens, fotografias etc."));
    
    dataset.addRow(new Array("3", "Encargos Sociais S/ Serviços de Terceiros", "Selecione", ""));
    dataset.addRow(new Array("3", "Encargos Sociais S/ Serviços de Terceiros", "I.N.S.S. s/Serviços de Terceiros", "Contribuição social para a previdência social, correspondendo a 20% sobre todas as remunerações pagas a PF."));
    dataset.addRow(new Array("3", "Encargos Sociais S/ Serviços de Terceiros", "I.N.S.S. s/Serviços de Cooperativas", ""));

    dataset.addRow(new Array("4", "Despesas com Viagens", "Selecione", ""));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Diarias Nacionais de Pessoal", "Viagem em deslocamento nacional da respectiva sede em missão ou serviço."));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Diarias Nacionais de Terceiros", "Viagem em deslocamento nacional da respectiva sede em missão ou serviço."));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Diarias Internacionais de Pessoal", "Viagem internacional sem necessidade de comprovação fiscal."));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Diarias Internacionais de Terceiros", "Viagem de terceiros em deslocamento internacional da respectiva sede em missão ou serviço."));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Hospedagem/Alimentação de Pessoal", "Correspondentes a despesas de viagem, nos casos de deslocamento da respectiva sede em missão ou serviço."));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Hospedagem/Alimentação de Terceiros", "Despesas de viagem para terceiros com comprovação de despesas."));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Ressarc.Desp.Viagem Sebrae/Na", ""));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Outras Despesas de viagens", "Taxas de remarcação de bilhetes aéreos, seguros de viagem etc."));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Passagem Aérea Nacional de Pessoal", "Transporte aéreo nacional para deslocamento de empregados."));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Passagem Aérea Nacional de Terceiros", "Transporte aéreo nacional para deslocamento de terceiros."));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Passagem Aérea Internacional de Pessoal", "Transporte aéreo internacional para deslocamento de empregados."));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Passagem Aérea Internacional de Terceiros", "Transporte aéreo internacional para deslocamento de terceiros."));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Passagem Fluvial", ""));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Passagem Rodoviárias", ""));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Ressarc.de Passagem Sebrae/Na", ""));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Missões Nacionais e Internacionais", ""));
    dataset.addRow(new Array("4", "Despesas com Viagens", "Outros meios de transportes", "Valores pagos por serviços não categorizados previamente, como carros de aplicativos, táxis, pedágios, etc."));

    dataset.addRow(new Array("5", "Aluguéis e Encargos - PJ e PF", "Selecione", ""));
    dataset.addRow(new Array("5", "Aluguéis e Encargos - PJ e PF", "Alugueis de Equipamentos", "Aluguel de diversos equipamentos, como datashow, computadores, impressoras, máquinas de café, etc."));
    dataset.addRow(new Array("5", "Aluguéis e Encargos - PJ e PF", "Alugueis de Espaços em feiras", "Aluguel de espaços em eventos presenciais e/ou virtuais"));
    dataset.addRow(new Array("5", "Aluguéis e Encargos - PJ e PF", "Alugueis de Veiculos", "Aluguel de veículos em geral para empresa."));
    dataset.addRow(new Array("5", "Aluguéis e Encargos - PJ e PF", "Alugueis de Imoveis", "Aluguel de prédios, salas etc."));
    dataset.addRow(new Array("5", "Aluguéis e Encargos - PJ e PF", "Alugueis de Maquinas de Reprografia", "Despesas com parcelas de arrendamento mercantil ou leasing."));
    dataset.addRow(new Array("5", "Aluguéis e Encargos - PJ e PF", "Outros Alugueis e encargos", "Despesas com aluguel não classificadas anteriormente."));
   
    dataset.addRow(new Array("6", "Divulgação, Anúncios, Publicidade e Propaganda - PJ e PF", "Selecione", ""));
    dataset.addRow(new Array("6", "Divulgação, Anúncios, Publicidade e Propaganda - PJ e PF", "Agência Sebrae de Noticias", ""));
    dataset.addRow(new Array("6", "Divulgação, Anúncios, Publicidade e Propaganda - PJ e PF", "Veiculação em Radio", "Rádio para difundir anúncios de campanha publicitária."));
    dataset.addRow(new Array("6", "Divulgação, Anúncios, Publicidade e Propaganda - PJ e PF", "Veiculação em TV", "Difundir anúncios de TV e campanha publicitária."));
    dataset.addRow(new Array("6", "Divulgação, Anúncios, Publicidade e Propaganda - PJ e PF", "Veiculação em Jornal", "Anúncios de campanha publicitária em jornais físicos ou eletrônicos."));
    dataset.addRow(new Array("6", "Divulgação, Anúncios, Publicidade e Propaganda - PJ e PF", "Veiculação em Revista", "Anúncios de campanha publicitária em revistas físicas ou eletrônicas."));
    dataset.addRow(new Array("6", "Divulgação, Anúncios, Publicidade e Propaganda - PJ e PF", "Veiculação de anuncios em Internet", "Anúncios e gerenciamento de mídias online, incluindo mecanismos de pesquisa, redes sociais, plataformas de streaming, etc."));
    dataset.addRow(new Array("6", "Divulgação, Anúncios, Publicidade e Propaganda - PJ e PF", "Veiculação de anuncios em outras Mídias", "Anúncios em mídias alternativas, como outdoors, empenas de LED, front lights, busdoor, etc."));
    dataset.addRow(new Array("6", "Divulgação, Anúncios, Publicidade e Propaganda - PJ e PF", "Produção de Anúncios", "Agências de publicidade para conduzir todas as etapas do desenvolvimento de campanhas publicitárias."));
    dataset.addRow(new Array("6", "Divulgação, Anúncios, Publicidade e Propaganda - PJ e PF", "Produção Institucionais", "Gastos de divulgação interna direcionados ao público interno do Sistema SEBRAE (Endomarketing)."));
    dataset.addRow(new Array("6", "Divulgação, Anúncios, Publicidade e Propaganda - PJ e PF", "Outros serviços de divulgação de publicidade", "Demais serviços não classificados anteriormente.")); 

    dataset.addRow(new Array("7", "Serviços Gráficos e de Reprodução - PJ e PF", "Selecione", ""));
    dataset.addRow(new Array("7", "Serviços Gráficos e de Reprodução - PJ e PF", "Editoração gráfica", "Preparação técnica de originais para publicação, incluindo montagem gráfica, revisão de forma."));
    dataset.addRow(new Array("7", "Serviços Gráficos e de Reprodução - PJ e PF", "Impressão gráfica", "Fixação de texto ou imagem em papel, cartão, prospecto, cartaz, cartilha, livro etc."));
    dataset.addRow(new Array("7", "Serviços Gráficos e de Reprodução - PJ e PF", "Cópias reprograficas", "Serviços de reprodução de documentos efetuados por copiadoras."));
    dataset.addRow(new Array("7", "Serviços Gráficos e de Reprodução - PJ e PF", "Cópias multimidia", "Trabalhos em formatos digitais e analógicos, como fotografia, slides e outros meios não impressos."));
    dataset.addRow(new Array("7", "Serviços Gráficos e de Reprodução - PJ e PF", "Confecção de Mat.prom.Institucional", "Serviços de confecção de bonés, camisetas, agendas etc"));
    dataset.addRow(new Array("7", "Serviços Gráficos e de Reprodução - PJ e PF", "Outros serv.graficos e de reprodução", "Banners, painéis, etc., que não se enquadrem nas descrições anteriores."));

    dataset.addRow(new Array("8", "Serviços de Comunicação em Geral", "Selecione", ""));
    dataset.addRow(new Array("8", "Serviços de Comunicação em Geral", "Telefonia fixa", "Serviços de transmissão à distância por meio de cabos ou fios."));
    dataset.addRow(new Array("8", "Serviços de Comunicação em Geral", "Telefonia móvel", "Transmissão por rádio de baixa potência para cobertura de áreas delimitadas ou restritas."));
    dataset.addRow(new Array("8", "Serviços de Comunicação em Geral", "Serviços de Correios", "Correspondências, telegramas, franquia postal, serviço de Correio Internacional (SEM), SEDEX nacional, serviço de coleta, transporte e entrega de correspondência agrupada (malote), etc."));
    dataset.addRow(new Array("8", "Serviços de Comunicação em Geral", "Serviço de transmissão de dados em rede", "Aluguel de canais para transmissão de dados em rede"));
    dataset.addRow(new Array("8", "Serviços de Comunicação em Geral", "Serviços de transmissão em áudio e video", "Transmissão de dados por voz e imagem, como videoconferências e reuniões online."));
    dataset.addRow(new Array("8", "Serviços de Comunicação em Geral", "Serviços de comunicação em geral", "Outros serviços de comunicação não citados anteriormente."));

    dataset.addRow(new Array("9", "Materiais de Consumo", "Selecione", ""));
    dataset.addRow(new Array("9", "Materiais de Consumo", "Material de limpeza, copa e refeitorio", "Produtos descartáveis, papéis, plásticos, produtos químicos de limpeza, alimentos, pequenos utensílios de cozinha e outros."));
    dataset.addRow(new Array("9", "Materiais de Consumo", "Material de expediente", "Materiais de papelaria, insumos de informática, material gráfico, de filmagem, fotografia, gravação, desenho, etc."));
    dataset.addRow(new Array("9", "Materiais de Consumo", "Material de manutenção e reparos", ""));
    dataset.addRow(new Array("9", "Materiais de Consumo", "Material técnico e didático", "")); 
    dataset.addRow(new Array("9", "Materiais de Consumo", "Material de natureza permanente", "Gastos com aquisição de equipamentos eletroeletrônicos que não serão imobilizados."));
    dataset.addRow(new Array("9", "Materiais de Consumo", "Combustivel e lubrificante", "Gasolina, álcool, óleo e lubrificantes em geral."));
    dataset.addRow(new Array("9", "Materiais de Consumo", "Outros Materiais de consumo", "Consumo de outros materiais não especificados nas contas anteriores."));

    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Selecione", ""));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Serviço de água/esgoto", "Despesas com consumo de água e esgoto."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Energia elétrica", "Despesas pagas no consumo de energia elétrica."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Apoio a comercialização", "Apoio logístico do SEBRAE às entidades parceiras na comercialização de seus produtos."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Comissão sobre vendas e Leilões", "Gratificações de terceiros pela intermediação na venda de serviços ou produtos do SEBRAE, incluindo taxas e comissões de serviços de leilões."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Despesas com representações", "Refeições, locação de veículos e similares, realizadas pelos Diretores do SEBRAE e Presidente do CDN/CDE."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Premios e concursos", "Prêmios em dinheiro, serviços ou bens concedidos por concursos de monografias, Desafio SEBRAE, etc."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Assinatura de Jornais, Revistas e Periodicos", "Assinaturas de boletins, jornais, revistas e outras publicações técnicas, em formato físico ou eletrônico."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Seguros em geral", "Apólices de seguros de imóveis, móveis, responsabilidade civil e outros tipos."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Contribuições e auxilios", "Contribuições e auxílios repassados a entidades representativas e filantrópicas, como mensalidade da ABASE, etc."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Fretes e Carretos", "Transporte nacional e internacional exceto aquelas ligadas diretamente à aquisição de bens móveis."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Publicações Legais", "Divulgação oficial determinadas por lei, publicadas no Diário Oficial ou em jornais de grande circulação."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Custas e emolumentos", "Autenticações, reconhecimento de firmas, procurações, registros, custas judiciais, etc."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Ressaarc.prog.educ.a funcionarios", "Pagamento de capacitações a funcionários, incluindo pós-graduação, cursos de idiomas, etc."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Ressarc.de empresas c/proc.judiciais", "Devolução de contribuição social indevidamente paga ao SEBRAE."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Locomoção urbana", ""));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Custos e despesas gerais com parceiros", "Materiais e serviços de parcerias, excluídas da estrutura do plano de contas do sistema, como kits para amostras, rações, sementes, etc."));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Locomoção urbana por cooperativas", ""));
    dataset.addRow(new Array("10", "Demais Custos e Despesas Gerais", "Outros custos e despesas gerais", "Despesas não classificadas anteriormente na estrutura do grupo."));
    
    dataset.addRow(new Array("11", "Despesas Tributárias", "Selecione", ""));
    dataset.addRow(new Array("11", "Despesas Tributárias", "ISS", "Imposto sobre Serviços prestados pelos SEBRAE UF sem isenção tributária municipal."));
    dataset.addRow(new Array("11", "Despesas Tributárias", "IPVA", "Imposto sobre Propriedade de Veículos Automotores para veículos próprios ou alugados."));
    dataset.addRow(new Array("11", "Despesas Tributárias", "IPTU", "Imposto sobre Propriedade Territorial Urbana para imóveis próprios ou locados e Imposto sobre Transmissão de Bens Imóveis em casos de compra de imóveis."));
    dataset.addRow(new Array("11", "Despesas Tributárias", "IR s/Aplicações Financeiras", "Imposto de Renda Retido na Fonte sobre rendimentos de aplicação financeira."));
    dataset.addRow(new Array("11", "Despesas Tributárias", "IOF", "Imposto sobre Operações Financeiras quando exigido por lei."));
    dataset.addRow(new Array("11", "Despesas Tributárias", "CPMF", ""));
    dataset.addRow(new Array("11", "Despesas Tributárias", "PIS", "PIS sobre os salários dos funcionários."));
    dataset.addRow(new Array("11", "Despesas Tributárias", "Outros Impostos e contribuições", "Outras despesas com impostos e contribuições não classificados anteriormente."));
    dataset.addRow(new Array("11", "Despesas Tributárias", "Taxas", "Taxas de expediente, coleta de lixo, registro no INPI etc."));

    dataset.addRow(new Array("12", "Despesas Financeiras", "Selecione", ""))
    dataset.addRow(new Array("12", "Despesas Financeiras", "Despesas Bancarias", "Despesas bancárias, incluindo tarifas de conta corrente, ordens de pagamento e anuidades de cartões."))
    dataset.addRow(new Array("12", "Despesas Financeiras", "Juros e Multas", ""))
    dataset.addRow(new Array("12", "Despesas Financeiras", "Comissão sobre cartões de credito", ""));

    dataset.addRow(new Array("13", "Transf. Externas - Convênios com Outras Entidades", "Selecione", ""));    
    dataset.addRow(new Array("13", "Transf. Externas - Convênios com Outras Entidades", "Transf. Externas - Convênios com Outras Entidades", ""));

    dataset.addRow(new Array("14", "Bens Móveis", "Selecione", ""));
    dataset.addRow(new Array("14", "Bens Móveis", "Bens Móveis", "Despesas com juros, multas por atraso em pagamentos de encargos e multas de trânsito, sujeitas às normas de controle interno."));
    
    dataset.addRow(new Array("15", "Depósitos Judiciais", "Selecione", ""));
    dataset.addRow(new Array("15", "Depósitos Judiciais", "Depósitos Judiciais", "Despesas com taxa de administração de cartões de crédito em vendas realizadas por essa forma de pagamento."));

    return dataset;
}