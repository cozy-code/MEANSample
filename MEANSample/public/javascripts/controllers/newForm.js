///<reference path="../../../Scripts/typings/tsd.d.ts" />
///<reference path="../models/Person.ts" />
var MEANSample;
(function (MEANSample) {
    var controllerts;
    (function (controllerts) {
        //コントローラ本体
        var newForm = (function () {
            function newForm($scope, $resource) {
                this.$scope = $scope;
                this.$resource = $resource;
                $scope.person = new MEANSample.models.Person();
                // for debug
                $scope.person.name = "おなまえ";
                $scope.person.age = 20;
                $scope.person.comment = "テスト用データです";
                //method
                $scope.submit = angular.bind(this, this.submit);
            }
            //イベントハンドラ
            newForm.prototype.submit = function () {
                var self = this;
                var personApi = this.$resource("/person");
                personApi.save(this.$scope.person, function () {
                    // for debug
                    self.$scope.person.age++;
                });
            };
            return newForm;
        })();
        controllerts.newForm = newForm;
    })(controllerts = MEANSample.controllerts || (MEANSample.controllerts = {}));
})(MEANSample || (MEANSample = {}));
angular.module("app.controller", ['ngResource']).controller("controller", MEANSample.controllerts.newForm);
angular.module("app", ["app.controller"]);
//# sourceMappingURL=newForm.js.map