function DessertsList(props) {
  let desserts = props.data;
  
  // filter and sort
  desserts = desserts.filter( dessert => { return Number(dessert.calories) < 500  });
  desserts.sort( (a, b) => { return a.calories < b.calories ? -1 : 1; });
  
  // generate list items 
  const listItems = desserts.map( (dessert) => { 
    return <li>{`${dessert.name} - ${dessert.calories} cal`}</li>;
  });

  return (
    <ul>{ listItems }</ul>
  );
};

export default DessertsList;
