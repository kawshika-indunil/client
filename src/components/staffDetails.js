import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf'
import 'jspdf-autotable'


export default class staffDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            staff:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/staff/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    staff:res.data.staff
                });

                console.log(this.state.staff);
            }
        })



    }

        //Report Generate Function onClick
jspdGenerator=()=>{

        
    //doc obj
    var doc =new jsPDF('p','pt');
    
    doc.autoTable({ html: '#my-table' })
    //add texts
  
    doc.text(200,20,'Project Report')

  
    doc.autoTable({
       
       tableWidth:'auto',
       margin: { top: 10 },
        columnStyles: { europe: { halign: 'center' } },
        theme:'grid',
        head: [['staffid','Bedtype','phoneno','address','joiningdate','Phone','jobtype','Ac']],
        body: [
         
          [this.state.staff.staffid,this.state.staff.bedtype,this.state.staff.phoneno,this.state.staff.address,this.state.staff.joiningdate,this.state.staff.phone,this.state.staff.jobtype,this.state.staff.ac],
  
        
          
        ],
       
        styles: {  fontSize:10 },
     
        
      })
      
    //Save pdf 
    doc.save("Generated.pdf");
  
  
  }
  render() {

    const {staffid,staffname,phoneno,address,joiningdate,jobtype,} = this.state.staff;

    return (
      <div style={{marginTop:'20px'}}>
      <h4>{staffid}</h4>
      <hr/>

      <dl className="row">

          <dt className="col-sm-3">staffid</dt>  
          <dd className="col-sm-9">{staffid}</dd>  

          <dt className="col-sm-3">staffname</dt>  
          <dd className="col-sm-9">{staffname}</dd>  

          <dt className="col-sm-3">phoneno</dt>  
          <dd className="col-sm-9">{phoneno}</dd>  

          <dt className="col-sm-3">address</dt>  
          <dd className="col-sm-9">{address}</dd>  

          <dt className="col-sm-3">joiningdate</dt>  
          <dd className="col-sm-9">{joiningdate}</dd>   

          <dt className="col-sm-3">jobtype</dt>  
          <dd className="col-sm-9">{jobtype}</dd>  
 

      </dl>  

      <button className="btn btn-success" onClick={this.jspdGenerator}>Generate Report</button>

      </div>    

    )
  }
}