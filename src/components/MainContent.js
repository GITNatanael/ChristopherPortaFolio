// MainContent.js
import React from 'react';
import { connect } from 'react-redux';
import Photos from './Photos';
import Animations from './Animations';
import Illustrations from './Illustrations';

function MainContent({ activeTab }) {
  let content;

  switch (activeTab) {
    case 'photos':
      content = <Photos />;
      break;
    case 'videos':
      content = <Animations />;
      break;
    case 'illustrations':
      content = <Illustrations />;
      break;
    default:
      content = null;
  }

  return <main>{content}</main>;
}

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps)(MainContent);
