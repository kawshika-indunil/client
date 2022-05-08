import React, { Component } from 'react';
import axios from 'axios';

export default class staffHome extends Component {
constructor(props){
  super(props);

  this.state={
    staff:[]
  };

}  

componentDidMount(){
  this.retrievestaff()
}

retrievestaff(){
  axios.get("/staff").then(res =>{
    if(res.data.success){
      this.setState({
        staff:res.data.existingstaff
      });

      console.log(this.state.staff);

    }
  });
}

onDelete =(id) =>{
  axios.delete(`/staff/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrievestaff();
  })
}

filterData(staff,searchkey){

  const result = staff.filter((staff)=>
   staff.staffid.includes(searchkey)
   )

   this.setState({staff:result})
}

handleSearchArea = (e) =>{
  const searchkey= e.currentTarget.value;

  
    axios.get("/staff").then(res =>{
      if(res.data.success){
       
        this.filterData(res.data.existingstaff,searchkey)
      }
    });
}


  render() {
    return (
      <div className="container">
       <div className="row">
         <div className="col-lg-9 mt-2 mb-2">
         <h4>Staff Details</h4>  
         </div>
         <div className="col-lg-3 mt-2 mb-2">
           <input
           className="form-control"
           type="search"
           placeholder="Search"
           name="searchQuery"
           onChange={this.handleSearchArea}>

           </input>
           </div>
           </div>
           <table className="table table-hover" style={{marginTop:'40px'}}>
          <thead>
            <tr>
            <th scope="col">#</th>
              <th scope="col">Staff Id</th>
              <th scope="col">Staff Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Address</th>
              <th scope="col">Joining Date</th>
              <th scope="col">Job Type</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {this.state.staff.map((staff,index) =>(
              <tr key={index}>

                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/staff/${staff._id}`} style={{textDecoration:'none'}}>
                    {staff.staffid}
                    </a>
                    
                    </td>     
                <td>{staff.staffname}</td>
                <td>{staff.phoneno}</td>
                <td>{staff.address}</td>
                <td>{staff.joiningdate}</td>
                <td>{staff.jobtype}</td>

                <td>
                  <a className="btn btn-warning" href={`/edit/${staff._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(staff._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}




          </tbody>
        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add</a></button>

        

      </div>
    )
    
  }
}