// util is for utilities we add in our proj...

// we need to sort the data in the table with the number of covid cases 
export const sortData = (data) => {
    let sortedData = [...data];
    // using sort() 
    sortedData.sort((a, b) => {
      if (a.cases > b.cases) {
        return -1;
      } else {
        return 1;
      }
    });
    return sortedData;
  };