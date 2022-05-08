import React, { Component } from 'react'
import axios from 'axios'

export default class Createstaff extends Component {

constructor(props){
    super(props);
    this.state={
        staffid:"",
        staffname:"",
        phoneno:"",
        address:"",
        joiningdate:"",
        jobtype:"",
       

    }
}
     
    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const{staffid,staffname,phoneno,address,joiningdate,jobtype} = this.state;

        const data ={
            staffid:staffid,
            staffname:staffname,
            phoneno:phoneno,
            address:address,
            joiningdate:joiningdate,
            jobtype:jobtype,
        }
        console.log(data)

        axios.post('/staff/save',data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        staffid:"",
                        staffname:"",
                        phoneno:"",
                        address:"",
                        joiningdate:"",
                        jobtype:"",
                    }
                )
            }
        })


    }

    render(){
        return(
            <div className="col-mb-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add staff Details</h1>
                  <form className="needs-validation" noValidate>
                      <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Staff Id</label>
                          <input type="text"
                          className="form-control"
                          name="staffid"
                          placeholder="Enter Staff id"
                          value={this.state.staffid}
                          onChange={this.handleInputChange}/>
                       </div>   

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Staff Name</label>
                          <input type="text"
                          className="form-control"
                          name="staffname"
                          placeholder="Enter Staffname "
                          value={this.state.staffname}
                          onChange={this.handleInputChange}/>
                       </div>   

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Phone number</label>
                          <input type="text"
                          className="form-control"
                          name="phoneno"
                          placeholder="Enter Phone number"
                          value={this.state.phoneno}
                          onChange={this.handleInputChange}/>
                       </div>   

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Address</label>
                          <input type="text"
                          className="form-control"
                          name="address"
                          placeholder="Enter Address"
                          value={this.state.address}
                          onChange={this.handleInputChange}/>
                       </div>   

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Joining date</label>
                          <input type="date"
                          className="form-control"
                          name="joiningdate"
                          placeholder="Enter Yes or No"
                          value={this.state.joiningdate}
                          onChange={this.handleInputChange}/>
                       </div>   

                  

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Job type</label>
                          <input type="text"
                          className="form-control"
                          name="jobtype"
                          placeholder="Enter job type"
                          value={this.state.jobtype}
                          onChange={this.handleInputChange}/>
                       </div>   

                        

                       <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                           <i className="far fa-check-square"></i>
                           &nbsp; save
                       </button>

                    </form>

                 </div>          
        )
    }
  
}