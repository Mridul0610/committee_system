import axios from "axios";
import * as qs from"qs"
export const BASE_URL="http://localhost:6002/"
class ApiServices{
    getToken(){
        let obj={
            Authorization:sessionStorage.getItem("token")
        }
        return obj
    }
    login(data){
        return axios.post(BASE_URL+"admin/login",data)
    }
    Register(data){
        return axios.post(BASE_URL+"customer/register",data)
    }
    Dashboard(data){
        return axios.post(BASE_URL+"admin/dashboard",data,{headers:this.getToken()})
    }
    addType(data){
        return axios.post(BASE_URL+"admin/committeType/add",data,{headers:this.getToken()})
    }
    viewCommittee(data){
        return axios.post(BASE_URL+"admin/committeType/all",data,{headers:this.getToken()})
    }
    singleCommittee(data){
        return axios.post(BASE_URL+"admin/committeType/single",data,{headers:this.getToken()})
    }
    UpdateCommittee(data){
        return axios.post(BASE_URL+"admin/committeType/status",qs.stringify(data),{headers:this.getToken()})
    }
    UpdateCommitteeType(data){
        return axios.post(BASE_URL+"admin/committeType/update",data,{headers:this.getToken()})
    }
    addDetails(data){
        return axios.post(BASE_URL+"admin/committeDetail/add",data,{headers:this.getToken()})
    }
    viewDetails(data){
        return axios.post(BASE_URL+"admin/committeDetail/all",data)
    }
    singleDetails(data){
        return axios.post(BASE_URL+"admin/committeDetail/single",data,{headers:this.getToken()})
    }
    updateDetails(data){
        return axios.post(BASE_URL+"admin/committeDetail/update",data,{headers:this.getToken()})
    }
    statusDetails(data){
        return axios.post(BASE_URL+"admin/committeDetail/status",qs.stringify(data),{headers:this.getToken()})
    }
    singleCustomer(data){
        return axios.post(BASE_URL+"customer/profile",data,{headers:this.getToken()})
    }
    chnagePassword(data){
        return axios.post(BASE_URL+"customer/changePassword",data,{headers:this.getToken()})
    }
    addRequest(data){
        return axios.post(BASE_URL+"customer/request/add",data,{headers:this.getToken()})
    }
    allRequest(data){
        return axios.post(BASE_URL+"customer/request/all",data,{headers:this.getToken()})
    }
    adminAllRequest(data){
        return axios.post(BASE_URL+"admin/request/all",data,{headers:this.getToken()})
    }
    adminChangeStatus(data){
        return axios.post(BASE_URL+"admin/request/status",data,{headers:this.getToken()})
    }
    chatAdd(data){
        return axios.post(BASE_URL + "admin/chat/add",data,{headers: this.getToken()});
      }
      chatAddEmpty(data){
        return axios.post(BASE_URL + "admin/chat/addEmptyChat",data,{headers: this.getToken()});
      }
      chatAll(data){
        return axios.post(BASE_URL + "admin/chat/all",data,{headers: this.getToken()});
      }
      chatSingle(data){
        return axios.post(BASE_URL + "admin/chat/single",data,{headers: this.getToken()});
      }
      chatSingleById(data){
        return axios.post(BASE_URL + "admin/chat/singleById",data,{headers: this.getToken()});
      }
      chatdelete(data){
        return axios.post(BASE_URL + "admin/chat/deleteMsg",data,{headers: this.getToken()});
      }

      usersAll(data){
        return axios.post(BASE_URL + "admin/allUsers",data,{headers: this.getToken()});
      }
}
export default new ApiServices