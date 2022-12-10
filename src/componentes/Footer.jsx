import Button from "react-bootstrap/Button";

function Footer({ pie_de_pagina, pie_de_pagina_description }) {
  return (
    <div className="piePagina">
      <h4>{pie_de_pagina}</h4>
      <p>{pie_de_pagina_description}</p>
      <Button variant="primary">Más información</Button>
    </div>
  );
}

export default Footer;
