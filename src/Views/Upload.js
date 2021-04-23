import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import "./Upload.css";
import Loader from "../components/loader";
import CsvError from "../components/csvError";
import Table from "../components/table";

class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      showTable: false,
      error: false,
      tabledata:{}
    };
  }

  // :::::::: CSV parser ::::::::::
  papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };
  //::::::::::::::::::::::::::::::::

  //::::::::: for putting all data in CSV to MySQL :::::::::::
  handleForce = (data, fileInfo) => {
    this.setState({ loading: true });

    let d = JSON.stringify({ ...data });

    fetch("/getall", {
      method: "POST",
      },
      body: d,
    })
      .then((response) => {
        this.setState({ loading: false });

        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        this.setState({ error: true });
        console.log(error, this.state);
      });
  };
  //:::::::::::::::: End of POST call to save data ::::::::::::::



  //::::::::::: GET all data form MySQL table ::::::::::

  loadClickHandler = () => {
    this.setState({loading:true});
    fetch('/getall', {
      method: "GET"
    })
      .then((response) => {
        if (response.ok) {
          this.setState({loading:false});
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        this.setState({tabledata:data});
        this.setState({showTable:true});
        console.log(data);
      })
      .catch((err) => {
        this.setState({error:true});
        console.log(err);

      });

  };

//:::::::::::

deleteClickHandler = ()=>{
  this.setState({ loading: true });
  this.setState({ loaded: false });


  fetch("/getall", {
    method: "DELETE"
  })
    .then((response) => {
      this.setState({ loading: false });
      this.setState({ loaded: true });

      if (response.ok) {
        this.loadClickHandler();
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      this.setState({ error: true });
      console.log(error, this.state);
    });

}

//:::::::::::



  //::::::::::::::::::::::::::::::::::::::::::::::::::



  render() {
    if (this.state.loading) return <Loader />;
    if (this.state.error) return <CsvError />;
    return (
      <div className = "center2">
      <div className="wrapper">
        <div className="section1">
          <div className="container">
                <CSVReader
                  cssClass="react-csv-input"
                  label="Select CSV  :"
                  onFileLoaded={this.handleForce.bind(this)}
                  parserOptions={this.papaparseOptions}
                />
                <p>
                <i className="fas fa-exclamation-triangle" style={{color:"  #e6b800"}} />
                CSV file of customers data should be like :
                <a href="https://github.com/krishankantray/temp/blob/master/test.csv" target="_blank">Sample file</a>
                  <br/>
                  <i className="fas fa-exclamation-triangle" style={{color: " #e6b800"}}/>
                  "id" column is Primary Key in the Postgresql table ( i.e.  duplicates ID not allowed )
                </p>

          </div>
        </div>

        <div className="section2">

          <button className="button" onClick={this.loadClickHandler}>
            <span>Load Table </span>
          </button>


        {
          (this.state.showTable)&&
          <button className="button" style={{backgroundColor:"red"}} onClick={this.deleteClickHandler}>
            <span>Wipe table </span>
          </button>
          }
        </div>


        <div className="section3">{this.state.showTable && <Table tabledata={this.state.tabledata} />}</div>
      </div>

      <button className="button" onClick={this.analyzeData}>
        <span>Analyze data </span>
      </button>
    </div>
    );
  }
}

export default Upload;
