import React, { Component } from 'react';
import Banner from './Banner';
import Preview from './Preview';
import bannerImg from '../img/bannerImg.png';

import pl from '../img/pl.png';
import tc from '../img/tc.png';
import tet from '../img/tet.png';

class Home extends Component {
  render() {    
    const bannerText='We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.'
    const bannerHeadline='For every student, every classroom. Real results.'
    
    const buttonArr = [
      //{ name: 'Learners', path: '/Login' },
      { name: 'Teachers', path: '/Login' },
      { name: 'Career', path: '/Home' },
      { name: 'Contact', path: '/Contact' }
    ];
    
    
    const previewItemArr = [
      { img: pl, title: 'Personalized learning', text: 'Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.' },
      { img: tc, title: 'Trusted content', text: 'Created by experts, ABC School’s library of trusted, standards-aligned practice and lessons covers math K-12 through early college, grammar, science, history, AP®, SAT®, and more. It’s all free for learners and teachers.' },
      { img: tet, title: 'Tools to empower teachers', text:'With ABC School, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.' },
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
        headline='ABC College'
        previewArr={previewItemArr}
        />
      </div>
    );
  }
}

export default Home;

