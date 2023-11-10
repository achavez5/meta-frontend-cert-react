function DessertsList(props) {
  const desserts = props.data;
  const listItems = desserts.map( (dessert) => { 
    let dessertDescription = `${dessert.name} - ${dessert.calories} cal`;
    return <li>{dessertDescription}</li>;
  });
  console.log(listItems);
  return (
    <ul>
      { listItems }
    </ul>
  );
};

export default DessertsList;
