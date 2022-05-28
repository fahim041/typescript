var Googlemap = /** @class */ (function () {
    function Googlemap(divName) {
        this.googleMap = "Google map showing on div " + divName;
        console.log(this.googleMap);
    }
    Googlemap.prototype.addmarker = function (makerMap) {
        if (makerMap.name) {
            console.log("name", makerMap.name);
        }
        console.log("lat: ", makerMap.location.lat);
        console.log("lng: ", makerMap.location.lng);
    };
    return Googlemap;
}());
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = "New employee";
        this.location = {
            lat: 855,
            lng: 900
        };
    }
    return Employee;
}());
var Company = /** @class */ (function () {
    function Company() {
        console.log("creating company....");
        this.companyName = "New company";
        this.location = {
            lat: 455,
            lng: 500
        };
    }
    return Company;
}());
var e = new Employee();
var c = new Company();
var m = new Googlemap("map");
m.addmarker(c);
