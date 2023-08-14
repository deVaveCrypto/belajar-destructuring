const DObject = () => {
  // Object
  const user = {
    id: "1a2b3c4d5e6f7g8h9i0j",
    namaUserYangKepanjangan: "Rizky",
    umur: 20,
    // email: ""
  };
  // Destruktur Object Rest parameter
  const ambilDarDatabase = {
    code: "pos",
    name: "PT. Pos Indonesia",
    address: "Jl. Pos No. 1",
    city: "Jakarta",
  };
  const { code, ...rest } = ambilDarDatabase;

  //CATATAN PENTING: rest tidak bisa langsung dipanggil/reder ke jsx harus menggunakan format rest.name, rest.address, rest.city kalau array bisa langsung dipanggil, cohtoh lihat kodeing dibawah ini

  // Alis & Default Value
  const { id, namaUserYangKepanjangan: nama, umur, email = "didi_deras@ymail.com" } = user;

  // Destruktur tanpa deklarasi dak berhasil
  const destrukturTanpaDeklarasi = {
    destrktur: "Rizky",
    tanpa: 20,
    deklarasi: null,
  };
  const { destrktur, tanpa, deklarasi } = destrukturTanpaDeklarasi;

  console.log(destrktur, tanpa, deklarasi);

  // Mengambil field pada object, yang dikirim ke parameter function
  const user2 = {
    id: "1a2b3c4d5e6f7g8h9i0j",
    namaUser: "Farraz",
    age: 20,
  };
  //   const printUser = (user2) => {
  //     return `ID: ${user2.id}, Nama: ${user2.namaUser}, Umur: ${user2.age}`;
  //   };
  //   console.log(printUser(user2));

  const printUser = ({ id, namaUser, age }) => {
    return `ID: ${id}, Nama: ${namaUser}, Umur: ${age}`;
  };
  console.log(printUser(user2));

  return (
    <>
      <main style={{ border: "1px solid blue" }}>
        {/* Destruktur Object */}
        <div>
          <h4>Destructuring Object</h4>
          <p>ID: {id}</p>
        </div>

        {/* Destrukturing & Rest parameter */}
        <div>
          <h4>Destructuring & Rest Parameter</h4>
          <p>Kede Ekspedesi : {code}</p>
          <p>
            {rest.name}, {rest.address}, {rest.city}
          </p>
          {/* <p>{rest}</p> */}
        </div>

        {/* Destruktur tanpa deklarasi */}
        <div>
          <h4>Destruktur tanpa deklarasi</h4>
          <p>
            Nama : {destrktur}, Umur: {tanpa}, Null: {deklarasi}
          </p>
        </div>

        {/*Alis & Default Value */}
        <div>
          <h4>Alis dan Default Value</h4>
          <p>{`Nama: ${nama}`}</p>
          <p>Email: {email}</p>
        </div>
        {/*Mengambil field pada object, yang dikirim ke parameter function */}
        <div>
          <h4>Mengambil field pada object, yang dikirim ke parameter function</h4>
          <p>{printUser(user2)}</p>
        </div>
      </main>
    </>
  );
};
export default DObject;
