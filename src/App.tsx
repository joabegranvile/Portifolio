import React from "react";
import Header from "./components/Header";
import Portfolio from "./components/Portifolio";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      {/* Cabeçalho da página */}
      <Header />

      {/* Seção principal do portfólio */}
      <Portfolio />

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default App;
