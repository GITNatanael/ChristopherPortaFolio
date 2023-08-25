// Header.js
import React from 'react';
import { connect } from 'react-redux';
import { setActiveTab } from '../actions'; // Importa la acción

function Header({ activeTab, setActiveTab }) {
  return (
    <header>
      {/* Contenido del perfil y foto de perfil */}
      <nav>
        <button onClick={() => setActiveTab('photos')}>All</button>
        <button onClick={() => setActiveTab('videos')}>Animations</button>
        <button onClick={() => setActiveTab('illustrations')}>Illustrations</button>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

const mapDispatchToProps = {
  setActiveTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
