import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';
//console.log("Loaded react-dom");
//console.log("Webpack is working.");

const myWork = [
  {
    "title":"Work Example#:-1",
    "img":{
      "desc":"",
      "src":"images/example1.png",
      "comment":`"Chemistry” by Surian Soosay is licensed under CC BY 2.0
                   https://www.flickr.com/photos/ssoosay/4097410999"`
    }
  },
  {
    "title":"Work Example#:-2",
    "img":{
      "desc":"",
      "src":"images/example2.png",
      "comment":"Example of the serverless web design."
    }
  },
  {
    "title":"Work Example#:-3",
    "img":{
      "desc":"",
      "src":"images/example3.png",
      "comment":`"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                  https://www.flickr.com/photos/37287295@N00/2540855181"`
    }
  },
  {
    "title":"Work Example#:-4",
    "img":{
      "desc":"",
      "src":"images/example2.png",
      "comment":"Example of the serverless web design."
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
