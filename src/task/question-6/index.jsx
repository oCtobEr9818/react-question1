/** Please write the sample code to debounce handleOnChange (Do not use
any 3th party libs other than react) **/

let timeoutId;

const SearchBox = () => {
  const handleOnChange = (event) => {
    const value = event.target.value;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      // make ajax call
      fetch(`https://api.sample.com/question-6/search?q=${value}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 400);
  };
  return <input type="search" name="p" onChange={handleOnChange} />;
};

export default SearchBox;
