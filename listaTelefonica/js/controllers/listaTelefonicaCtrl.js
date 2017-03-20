angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope) {
				$scope.app = "Lista Telefonica";
				$scope.contatos = [
					{nome: "Pedro", telefone:"999999999", data: new Date(), cor:"yellow"},
					{nome: "Ana", telefone:"88888888", data: new Date(), cor:"blue"},
					{nome: "Maria", telefone:"77777777", data: new Date(), cor:"red"}
				];

				$scope.operadoras = [
					{nome:"Oi", codigo: 14, categoria:"Movel"},
					{nome:"Vivo", codigo: 15, categoria:"Movel"},
					{nome:"Tim", codigo: 16, categoria:"Movel"},
					{nome:"Gvt", codigo: 17, categoria:"Fixo"},
					{nome:"Embratel", codigo: 18, categoria:"Fixo"},
				];

				$scope.adicionarContato = function(contato) {
					$scope.contatos.push(contato);
					delete $scope.contato
					$scope.contatoForm.$setPristine();
				};

				$scope.apagarContatos = function(contatos) {
					$scope.contatos = contatos.filter(function(contato){
						if(!contato.selecionado) return contato;
					});
				};

				$scope.isContatoSelecionado = function(contatos) {
					return contatos.some(function(contato){
						return contato.selecionado;
					});
				};

				$scope.ordenarPor = function(campo){
					$scope.ordenacao = campo;

				};
		});