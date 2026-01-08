const ShowFinished = ({toggleFinished, showFinished}) => {
  return (
    <div className="fin-show">
      <input
        id="show"
        onChange={toggleFinished}
        type="checkbox"
        checked={showFinished}
      />
      <label htmlFor="show">Show Finished</label>
    </div>
  );
};

export default ShowFinished;