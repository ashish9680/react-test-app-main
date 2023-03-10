import axios from "axios";

export const HeaderOptions = {
     "Access-Control-Allow-Origin": "*",
     "Access-Control-Allow-Credentials": "true",
     "Access-Control-Allow-Methods": "PUT, GET, HEAD, POST, DELETE, OPTIONS",
     "Access-Control-Allow-Headers": "*",
     "Content-Type": "application/json",
};

const BackendUrl = `https://swayamhealth.info/api`;
// const BackendUrl = "http://43.204.35.128:5000"

// axios.defaults.baseURL = BackendUrl;
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const GettingRequestAxios = async (kioskData) => {
     try {
          const getRequest = await axios.get(`${BackendUrl}/category/gettestfromkiosk/${kioskData}`);
          return await getRequest.data;
     } catch (err) {
          if (err.response) {
               console.log(err.response.data.message);
          }
          console.log(err);
     }
};
const PostingRequestAxios = async (emailData, pinData) => {
     try {
          const postRequest = await axios.post(
               `${BackendUrl}/organisation/orglogin`,
               {
                    email: emailData,
                    password: pinData,
               },
               {
                    headers: HeaderOptions,
               }
          );
          return postRequest.data.data.org;
     } catch (err) {
          if (err.response) {
               console.log(err.response.data.message);
          }
          console.log(err.message);
     }
};
const GettingRequestFetch = async (kioskData) => {
     const data = await fetch(`http://swayamhealth.info/api/category/gettestfromkiosk/${kioskData}`, { method: "GET" })
          .then((res) => {
               console.log(res.json());
          })
          .catch((err) => {
               console.log(err);
          });
     return data;
};

export { GettingRequestAxios, PostingRequestAxios, GettingRequestFetch };
