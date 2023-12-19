/** @format */

import { useEffect, useState } from "react";
import url from "."; // Certifique-se de substituir "." pelo caminho real do seu módulo de URL

function FlagsComponent() {
  // Define um estado para armazenar os dados recuperados da URL
  const [data, setData] = useState([]);

  // Função assíncrona para buscar dados da URL
  const fetchData = async () => {
    try {
      // Chama a função url para obter os dados
      const result = await url();

      // Atualiza o estado com os dados recuperados
      setData(result);
    } catch (error) {
      // Se houver um erro, exibe uma mensagem de erro no console
      console.error("Erro ao buscar dados:", error);
    }
  };

  // Efeito que é executado quando o componente é montado
  useEffect(() => {
    // Chama a função fetchData para buscar dados quando o componente é montado
    fetchData();
  }, []);

  // Exporta o componente FlagsComponent como padrão
  // Certifique-se de usar esse nome ao importar em outros lugares
  return data; // Lembre-se de substituir isso pelo JSX real do seu componente
}

export default FlagsComponent;
