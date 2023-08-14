const DArray = () => {
  // Skip items using destructuring
  const salam = ["hallo", "hi", "hola", "merhaba"];
  const [holla, ...value] = salam;
  //  ========================================
  // Swap variables using destructuring
  let a = 1;
  let b = 2;
  [a, b] = [b, a];

  // Destrukturing Array rest operator
  const [first, ...restOfItems] = [10, 20, 30, 40];

  return (
    <>
      <main style={{ border: "1px solid grey" }}>
        <div>
          <h4>Destrukturing Array</h4>
          <p>All Array : {value.join(" ")}</p>
          <p>Singgle Array : {holla}</p>
        </div>

        {/* Sawap */}
        <div>
          <h4>Swap variable using destructuring</h4>
          <p>Hasil swap a : {a}</p>
          <p>Hasil swap b : {b}</p>
        </div>

        {/* Rest Parameter Destructuring */}
        <div>
          <h4>Rest parameter using destructuring</h4>
          <p>{first}</p>
          <p>Rest Parameter : {restOfItems.join(" ")}</p>
        </div>
      </main>
    </>
  );
};
export default DArray;
