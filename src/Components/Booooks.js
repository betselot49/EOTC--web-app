import "./Boooks.css";
import ethioBook from "./../Assets/Images/ethio bible.png";
import ethioBook1 from "./../Assets/Images/booooks.jpg";

export const Booooks = () => {
  return (
    <div className="home">
      <div className="books">
        <div className="books__item">Ethiopian Orthodox Church Books</div>
        <div className="books__text">
          The Ethiopian Orthodox Church has 46 books of the Old Testament and 35
          books of the New Testament that will bring the total of canonized
          books of the Bible to 81. These are the following A. The Holy Books of
          the Old Testament 1. Genesis 2. Exodus 3. Leviticus 4. Numbers 5.
          Deuteronomy 6. Joshua 7. Judges 8. Ruth 9. I and II Samuel 10.
        </div>
      </div>

      <div className="grid">
        <div className="grid-items">
          <div className="thumbnail">
            <img src={ethioBook} alt="Ethiopian holy bible" />
          </div>
          <p className="grid-text">
            he Ethiopian Orthodox Church has 46 books of the Old Testament and
            35 books of the New Testament that will bring the total of canonized
            books of the Bible to 81.
          </p>
        </div>
        <div className="grid-items">
          <div className="thumbnail">
            <img src={ethioBook1} alt="Ethiopian holy bible" />
          </div>
          <div className="grid-text">The Holy Books of the Old Testament
            <p>1. Genesis</p>
            <p>2. Exodus</p>
            <p>3. Leviticus</p>
            <p>and many more...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
