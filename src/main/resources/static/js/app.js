
var anModule = angular.module('contactManagerApp', [
        'ngAnimate',
        'ui.bootstrap']);

    anModule.controller('ContactCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.contacts = [];
        $scope.selectedcontact = {};
        $scope.newcontact = {};
        $scope.showEditContact = false;
        $scope.showNewContact = false;


        $scope.initialize = function () {
            $scope.loadData();
        }

        $scope.loadData = function () {
            {
                $http({
                    url: "/rest/contacts/getContacts",
                    method: "GET"
                }).success(
                    function (response) {
                        $scope.contacts = response;
                        $scope.selectedcontact = [];
                        $scope.newcontact = [];
                    })
            }
        }

        //открывает окно с функцией редактирования
        $scope.edit = function (uuid) {
            for (var i = 0; i < $scope.contacts.length; i++) {
                var contact = $scope.contacts[i];
                if (contact.uuid===uuid) {
                    $scope.selectedcontact = {};
                    $scope.selectedcontact.uuid = contact.uuid;
                    $scope.selectedcontact.name = contact.name;
                    $scope.selectedcontact.tel = contact.tel;
                    $scope.selectedcontact.email = contact.email;
                    break;
                }
            }
            $scope.showEditContact = true;
        }

        //открывает окно с вводом нового контакта
        $scope.newContact = function () {
            $scope.showNewContact = true;
        }

        //сохраняет отредактированный контакт
        $scope.save = function () {
            $http({
                url: "/rest/contacts/",
                method: "PUT",
                params: $scope.selectedcontact
            }).success(
                function (response) {
                    $scope.reloadContacts(response);
                });
            $scope.showEditContact = false;

        }

        $scope.delete = function (uuid) {
            $http({
                url: "/rest/contacts/"+uuid,
                method: "DELETE"
            }).success(
                function (response) {
                    $scope.reloadContacts(response);
                });
        }

        //открывает окно с вводом нового контакта
        $scope.newContact = function () {
            $scope.showNewContact = true;
        }


        //добавляет новый контакт
        $scope.add = function () {
            var newContact = {};
            newContact.name = $scope.newcontact.name;
            newContact.tel = $scope.newcontact.tel;
            newContact.email = $scope.newcontact.email;

            $http({
                url: "/rest/contacts/",
                method: "POST",
                params: newContact
            }).success(
                function (response) {
                    $scope.reloadContacts(response);
                });
            $scope.showNewContact = false;

        }

        $scope.cancel = function () {
            $scope.showEditContact = false;
            $scope.showNewContact = false;
        }


        $scope.reloadContacts = function (contacts) {
            $scope.contacts = contacts;
            $scope.selectedcontact = {};
            $scope.newcontact = {};
        }


        $scope.initialize();

    }]);
