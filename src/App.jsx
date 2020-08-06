import React ,{ Component} from 'react'
import DenseTablePapers from './Papers/DenseTablePapers'
import TitleFilterPaper from './Papers/titleFilter'
import CriterioFitler from './Papers/criterioFilter'
import Paper from './model/Paper'


const baseUrl = 'https://tesisservice.azurewebsites.net/api/Papers/GetPapers' 

class app extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      papers :[],
      title :'',
      ce1 : null,
      ce2 : null,
      ce3 : null,
      ce4 : null,
      ce5 : null,
      ce6 : null,
      ce7 : null,
      ce8 : null
    }; 

    this.changeTitle = this.changeTitle.bind(this);
    this.searchPaper = this.searchPaper.bind(this);
  }

  componentDidMount() {

    this.searchPaper();
  }

  changeTitle(newTitle){
    this.setState({title : newTitle});
  }

  searchPaper(){
    
    const urlPapers = baseUrl +'?title= ' +this.state.title;

    fetch(urlPapers)
      .then((response) => response.json())
      .then((data) => {
        this.setState({papers : data.list}) 
      });
  }



  render(){
    return (
    <div>
      <CriterioFitler></CriterioFitler>
      <TitleFilterPaper paper={this.state.paper} 
                        changeTitle={this.changeTitle}
                        searchPaper={this.searchPaper}></TitleFilterPaper>    
       <DenseTablePapers dataPapers={this.state.papers}></DenseTablePapers>
    </div>
    )

  }
}

export default app;