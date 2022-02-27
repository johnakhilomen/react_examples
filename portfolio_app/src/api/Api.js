
import * as axios from "axios"; 

//  Our Api
export default function Api() {
    const github_profile = "johnakhilomen";
    const _url = `https://api.github.com/users/${github_profile}` ;
    const get = async () => axios.get(_url);
    return {
        get
    }
}
