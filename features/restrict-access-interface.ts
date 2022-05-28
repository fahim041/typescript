interface makerMap {
  name?: string;
  location: {
    lat: number;
    lng: number;
  };
}

class Googlemap {
  private googleMap: string;

  constructor(divName: string) {
    this.googleMap = "Google map showing on div " + divName;
    console.log(this.googleMap);
  }

  addmarker(makerMap: makerMap) {
    if (makerMap.name) {
      console.log("name", makerMap.name);
    }

    console.log("lat: ", makerMap.location.lat);
    console.log("lng: ", makerMap.location.lng);
  }
}

class Employee {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = "New employee";
    this.location = {
      lat: 855,
      lng: 900,
    };
  }
}

class Company {
  companyName: string;
  location: { lat: number; lng: number };
  constructor() {
    console.log("creating company....");
    this.companyName = "New company";

    this.location = {
      lat: 455,
      lng: 500,
    };
  }
}

const e = new Employee();
const c = new Company();

const m = new Googlemap("map");
m.addmarker(c);
