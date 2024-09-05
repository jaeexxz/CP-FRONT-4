// src/components/Sobre.jsx
import React from 'react';
import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre">
      <img src="caminho/para/imagem.jpg" alt="Sobre nós" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi est, facilisis ac tellus ac, egestas hendrerit magna. Nullam sed felis nec mauris fermentum aliquet. Vivamus placerat sem sit amet sem vestibulum, nec sodales risus mollis. Integer ornare eget turpis ut tincidunt. Proin semper, dui at suscipit elementum, velit mauris vehicula mi, ut suscipit tortor odio ac sapien. Mauris fermentum urna vitae orci ullamcorper, nec luctus magna hendrerit. Duis varius tellus in massa fermentum, a blandit libero volutpat.
        {/* Continue o texto até completar 20 linhas */}
      </p>
    </div>
  );
}

export default Sobre;
