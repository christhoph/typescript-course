interface ProfileCoords {
  lat: number;
  lng: number;
}

interface Profile {
  name: string;
  age: number;
  coords: ProfileCoords;
  setAge(age: number): void;
}

const profile: Profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15.123,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const {
  age,
  name: profileName,
  coords: { lat, lng },
}: Profile = profile;
