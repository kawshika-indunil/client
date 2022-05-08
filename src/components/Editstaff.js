import React, { Component } from 'react'
import axios from 'axios'

export default class Editstaff extends Component {


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
        const id = this.props.match.params.id;

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

        axios.put(`/staff/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Updated Successfully")
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


  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/staff/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
              staffid:res.data.staff.staffid,
              staffname:res.data.staff.staffname,
              phoneno:res.data.staff.phoneno,
              address:res.data.staff.address,
              joiningdate:res.data.staff.joiningdate,
              jobtype:res.data.staff.jobtype,
            });

            console.log(this.state.staff);
        }
    })



}


  render(){
    return(
        <div className="col-mb-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Edit staff Details</h1>
              <form className="needs-validation" noValidate>
                  <div className="form-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}} >staffid</label>
                      <input type="text"
                      className="form-control"
                      name="staffid"
                      placeholder="Enter staffid"
                      value={this.state.staffid}
                      onChange={this.handleInputChange}/>
                   </div>   

                   <div className="form-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}} >Staff Name</label>
                      <input type="text"
                      className="form-control"
                      name="staffname"
                      placeholder="Enter staffname"
                      value={this.state.staffname}
                      onChange={this.handleInputChange}/>
                   </div>   

                   <div className="form-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}} >Phone Number</label>
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
                      placeholder="Enter address"
                      value={this.state.address}
                      onChange={this.handleInputChange}/>
                   </div>   

                   <div className="form-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}} >Joiningdate</label>
                      <input type="date"
                      className="form-control"
                      name="joiningdate"
                      placeholder="Enter Joing date"
                      value={this.state.joiningdate}
                      onChange={this.handleInputChange}/>
                   </div>   

                    

                   <div className="form-group" style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}} >Job type</label>
                      <input type="text"
                      className="form-control"
                      name="jobtype"
                      placeholder="Enter Yes or No"
                      value={this.state.jobtype}
                      onChange={this.handleInputChange}/>
                   </div>   

                  

                   <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                       <i className="far fa-check-square"></i>
                       &nbsp; Update
                   </button>

                </form>

             </div>          
    )
}

}