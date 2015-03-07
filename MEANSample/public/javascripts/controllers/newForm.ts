///<reference path="../../../Scripts/typings/tsd.d.ts" />
///<reference path="../models/Person.ts" />

module MEANSample.controllerts {
    // ViewModel的なタイプ
    export interface newFormData extends ng.IScope {
        person: models.Person;
        submit: Function;
    }

    interface PersonResourceClass extends ng.resource.IResourceClass<models.Person> {
    }

    //コントローラ本体
    export class newForm {
        constructor(public $scope: newFormData, public $resource: ng.resource.IResourceService) {
            $scope.person = new models.Person();
            // for debug
            $scope.person.name = "おなまえ";
            $scope.person.age = 20;
            $scope.person.comment = "テスト用データです";

            //method
            $scope.submit = angular.bind(this, this.submit);
        }

        //イベントハンドラ
        submit() {
            var self = this;
            var personApi = this.$resource<PersonResourceClass>("/person");
            personApi.save(this.$scope.person, function () {
                // for debug
                self.$scope.person.age++;
            });
        }
    }
}

angular.module("app.controller", ['ngResource']).controller("controller", MEANSample.controllerts.newForm);
angular.module("app", ["app.controller"]);
