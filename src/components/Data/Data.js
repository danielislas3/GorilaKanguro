// import app from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import * as firebase from 'firebase';

//cuenta nueva dev
const config = {
    unaConfig: "456453564765",
};

function test(string){
    return string;
}

class Data {
    constructor() {
        this.config = config;
        this.test = test;
    }

    // Auth API
    configuration = () =>
        this.config();

    testFn = () =>
        this.test();

}    

export default Data;