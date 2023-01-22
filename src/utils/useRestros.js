import { useState, useEffect } from "react";

const useRestro = (id) => {
    const [restro, setRestro] = useState(null);

    useEffect(() => {
        getRestroInfo();
    }, []);

    async function getRestroInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9678217&lng=80.2185006&menuId=" + id)
        const json = await data.json();
        setRestro(json.data)
    }

    // return restro data from here
    return restro;
};

export default useRestro;