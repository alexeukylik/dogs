import axios from "axios";
const urlDog = 'https://dog.ceo/api/breeds/image/random/12';

class Service {
    constructor(url) {
    this.url = url;
    };

    getDogs() {
        return axios.get(this.url)
            .then((response)=> response.data.message);
    };
};

export const service = new Service(urlDog);