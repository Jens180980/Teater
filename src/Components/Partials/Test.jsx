import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Test = () => {
  const [test, setTest] = useState();
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/events`
      );

      setTest(result.data.items);
    };
    getData();
  }, []);

  console.log(test);

  return <div>Test</div>;
};
