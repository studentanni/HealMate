const TopLoadingBar = ({ message = "Loading..." }) => {
    return (
      <div className="loading h-1 w-0 bg-primary absolute z-40 top-0 animate-expandWidth opacity-100"></div>
    );
  };
  
  export default TopLoadingBar;