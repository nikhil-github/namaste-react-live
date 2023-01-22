
 const filterData = (searchText, allRestros) => {
    console.log(allRestros);
    return allRestros.filter((restro) =>
      restro?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
 } 

 export default filterData;