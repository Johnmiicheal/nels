const getDateString = (date: string | number | Date) => {
    let myDate = new Date(date);
  
    return `${myDate.getDate()}, ${myDate.toLocaleString("en-US", {
      month: "long",
    })} ${myDate.getFullYear()}`;
  };
  
  export default getDateString;