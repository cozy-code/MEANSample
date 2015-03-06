///<reference path="../../../Scripts/typings/tsd.d.ts" />
///<reference path="../models/Person.ts" />

module MEANSample.controllerts {
    // ViewModel的なタイプ
    export interface newFormData extends ng.IScope {
        person: models.Person;
        submit: Function;
    }

    //コントローラ本体
    export class newForm {
        constructor(public $scope: newFormData) {
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
            // for debug
            this.$scope.person.age++;
        }
    }
}

angular.module("app.controller", []).controller("controller", MEANSample.controllerts.newForm);
angular.module("app", ["app.controller", 'ngResource']);
