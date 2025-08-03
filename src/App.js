import React from 'react';
import { Layout } from './layout';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Galeria from './components/Galeria';
import Habitaciones from './components/Habitaciones';
import Actividades from './components/Actividades';
import Contacto from './components/Contacto';

function App() {
  return (
    <Layout>
      <Hero />
      <Servicios />
      <Galeria />
      <Habitaciones />
      <Actividades />
      <Contacto />
    </Layout>
  );
}

export default App; 