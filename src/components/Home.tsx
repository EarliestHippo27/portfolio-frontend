import VeryImportantDuck from "../assets/johny_tran_duck.jpg";

function Home() {
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <img src={VeryImportantDuck}></img>
        <h3 className="text-center">Look at this dude.</h3>
      </div>
    </>
  );
}

export default Home;
