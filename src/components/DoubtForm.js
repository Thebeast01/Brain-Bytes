import "../index.css";

export const DoubtForm = () => {
  return (
    <div className="w-full bg-blue-300">
      <div className="form-container ">
        <h1 className="text-center">Ask Your Doubts</h1>
        <form>
          <label for="fname">First name:</label>
          <input className="border-2 rounded-xl" type="text" id="fname" name="fname" />
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" />
        </form>
      </div>
    </div>
  );
};
