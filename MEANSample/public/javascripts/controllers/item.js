///<reference path="../../../Scripts/typings/tsd.d.ts" />
///<reference path="../models/Person.ts" />
var MEANSample;
(function (MEANSample) {
    var controllerts;
    (function (controllerts) {
        //コントローラ本体
        var item = (function () {
            function item($scope, $location, $resource) {
                var _this = this;
                this.$scope = $scope;
                this.$location = $location;
                this.$resource = $resource;
                // itemidはviewのng-initで渡してもらいます。
                this.$scope.$watch(function () { return _this.$scope.itemid; }, function () { return _this.loadInfo(); });
            }
            item.prototype.loadInfo = function () {
                var self = this;
                var personApi = this.$resource("/person/:id");
                personApi.get({ id: this.$scope.itemid }, function (result) {
                    self.$scope.item = result;
                });
            };
            return item;
        })();
        controllerts.item = item;
    })(controllerts = MEANSample.controllerts || (MEANSample.controllerts = {}));
})(MEANSample || (MEANSample = {}));
//app登録をシンプルにしてみた
var app = angular.module("app", ['ngResource']);
app.controller('controller', MEANSample.controllerts.item);
//# sourceMappingURL=item.js.map