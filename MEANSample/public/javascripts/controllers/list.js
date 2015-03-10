///<reference path="../../../Scripts/typings/tsd.d.ts" />
///<reference path="../models/Person.ts" />
var MEANSample;
(function (MEANSample) {
    var controllerts;
    (function (controllerts) {
        //コントローラ本体
        var list = (function () {
            function list($scope, $resource) {
                this.$scope = $scope;
                this.$resource = $resource;
                $scope.items = Array();
                var personApi = this.$resource("/person");
                personApi.query(function (result) {
                    result.forEach(function (item, index, items) {
                        $scope.items.push(item);
                    });
                });
            }
            return list;
        })();
        controllerts.list = list;
    })(controllerts = MEANSample.controllerts || (MEANSample.controllerts = {}));
})(MEANSample || (MEANSample = {}));
angular.module("app.controller", ['ngResource']).controller("controller", MEANSample.controllerts.list);
angular.module("app", ["app.controller"]);
//# sourceMappingURL=list.js.map