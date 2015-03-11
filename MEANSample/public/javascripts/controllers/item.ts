///<reference path="../../../Scripts/typings/tsd.d.ts" />
///<reference path="../models/Person.ts" />

module MEANSample.controllerts {
    // ViewModel的なタイプ
    export interface itemData extends ng.IScope {
        itemid: string;         //検索キー
        item: models.Person;    //検索結果
    }

    interface PersonResourceClass extends ng.resource.IResourceClass<models.Person> {
    }
    

    //コントローラ本体
    export class item {
        constructor(public $scope: itemData, public $location: ng.ILocationProvider, public $resource: ng.resource.IResourceService) {
            // itemidはviewのng-initで渡してもらいます。
            this.$scope.$watch(() => this.$scope.itemid,() => this.loadInfo());
        }

        loadInfo() {
            var self = this;
            var personApi = this.$resource<PersonResourceClass>("/person/:id");
            personApi.get({ id: this.$scope.itemid }, function (result: models.Person) {
                self.$scope.item = result;
            });
        }
    }
}
//app登録をシンプルにしてみた
var app = angular.module("app", ['ngResource']);
app.controller('controller', MEANSample.controllerts.item);