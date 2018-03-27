import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import ExampleWork, {ExampleWorkBubble} from '../js/example-work';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
  }
];





describe("ExampleWork component", () => {

  let comp = shallow(<ExampleWork work={myWork}/>);
   it("Just the first test", () => {
     expect("Hello").toEqual("Hello");
    });
   it("Expect it to be a section component", () =>  {
     expect(comp.type()).toEqual=('section');
   });
   it("Check the number of Children", () => {
     expect(comp.find("ExampleWorkBubble").length).toEqual(myWork.length);
   });
   console.log(comp.debug());
 });


 describe("ExampleWorkBubble component", () => {

   let comp = shallow(<ExampleWorkBubble example={myWork[1]}/>);
    it("Just the first test", () => {
      expect("Hello").toEqual("Hello");
     });
     let images = comp.find("img");
    it("Check number of images.", () => {
      expect(images.length).toEqual(1);
    });
    it("Image should have image src set correctly", () => {
      expect(images.find('[src]').props().src).toEqual(myWork[1].img.src);
    });

  });
