const Shimmer = () => {
  return (
    <div className="restro-list">
            {Array(10).fill("").map(() => <div className="shimmer-card"> </div> )} 
    </div>
  );
};

export default Shimmer;
