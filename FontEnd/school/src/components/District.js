import React, { Component } from 'react';
import Banner from './Banner';
import Preview from './Preview';
import bannerImg from '../img/districtBanner.png';

import mk12 from '../img/mk12.png';
import shap from '../img/shap.png';
import sat from '../img/sat.png';


class District extends Component {
  render() {    
   const buttonArr=[{name:'Contact our Districts team', path:'/'}];
   const bannerText="Individual teachers around the country are seeing incredible student gains with Khan Academy. Upgrade and receive the training, support, and analytics necessary to bring Khan Academy to every classroom in your district."
   const bannerHeadline="Upgrade to Khan Academy for Districts and accelerate learning for every student."
   
   const previewItemArr = [
     { img: mk12, title: 'Math, K-12 through early college', text: 'Our personalized learning system rigorously assesses student progress, providing real-time feedback and lessons to help them fill gaps in their understanding and accelerate their learning.' },
     { img: shap, title: 'Science, humanities, AP®, and more', text: 'With Khan Academy’s lessons and practice, students master the knowledge needed to excel in high school and AP® math, science, social studies, art history, and computer science.' },
     { img: sat, title: 'Official SAT® Practice', text:'Khan Academy has partnered with the College Board, creators of the SAT, to provide students with a free, personalized practice plan based on the student’s PSAT/NMSQT® results.' },
   ];
   
 
   
   
    return (
      <div>
        <Banner 
          buttons={buttonArr}
          headline={bannerHeadline}
          text={bannerText}
          img={bannerImg}
          />
        <Preview
        headline='Bring world-class, personalized learning to every student'
        previewArr={previewItemArr}
        />
      </div>
    );
  }
}

export default District;

