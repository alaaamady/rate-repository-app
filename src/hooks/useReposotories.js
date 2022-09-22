import { useState, useEffect } from "react";
import Constants from "expo-constants";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const fetchRepositories = async () => {
    return await fetch(`${Constants.manifest.extra.api}/api/repositories`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      });
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, refetch: fetchRepositories };
};

export default useRepositories;
