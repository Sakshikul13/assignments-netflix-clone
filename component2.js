const Card=(props)=>{
    const CardName="John"
    return <div>Card <h4>Name={props.name}</h4>
    <h5>age={props.age}</h5></div>;
    
  };
  const App =() =>{
    return (
      <div>
        <h1>Hwere is an example Sf component.</h1>
        <Card name='sakshi' age='19'></Card>
        <Card name='John' age='29'/>
      </div>
    );
  };      //this function contains what is visible on the screen jsx. this function is called a component 
  export default App; //always export