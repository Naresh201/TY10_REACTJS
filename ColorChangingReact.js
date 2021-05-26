import React, { Component } from 'react'



var yourcolor = "white";

export default class ColorChangingReact extends Component {
        state={
           color:""
        }
    
        handleSubmit=(event)=>{
            event.preventDefault();
            console.log("handle Submit");

             yourcolor = this.state.color;
            

            this.setState({
                color:""
            })
        }
    
        handleChange =(event)=>{
            this.setState({
                [event.target.name] : event.target.value
            })
        }
      render() {
        return (
  
          <div className="container card mt-5 col-md-6" style={{backgroundColor:this.value}}>
            <form  className="card-body"  onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Choose Your color :)</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputColor"
                  aria-describedby="colorlHelp"
                  value={this.state.color}
                  onChange={this.handleChange}
                  name="color"
                />  
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

            <script>
                function name(params) {
                     document.body.style.backgroundColor=yourcolor
                }
         
           

               </script>
          </div>

          
        );
       
    }
}
