///<reference path="../../../Scripts/typings/tsd.d.ts" />
///<reference path="../models/Person.ts" />

module MEANSample.controllerts {
    // ViewModel的なタイプ
    export interface listData extends ng.IScope {
        items: models.Person[];
    }

    interface PersonResourceClass extends ng.resource.IResourceClass<models.Person> {
    }

    //コントローラ本体
    export class list {
        constructor(public $scope: listData, public $resource: ng.resource.IResourceService) {
            $scope.items = Array<models.Person>();
            var personApi = this.$resource<PersonResourceClass>("/person");
            personApi.query(function (result: models.Person[]) {
                result.forEach(function (item, index, items) {
                    $scope.items.push(item);
                });
            });
        }
    }
}

angular.module("app.controller", ['ngResource']).controller("controller", MEANSample.controllerts.list);
angular.module("app", ["app.controller"]);
