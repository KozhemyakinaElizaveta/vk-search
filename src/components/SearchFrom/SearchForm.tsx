import { SEARCH_TERM, getSearch } from "../../services/actions";
import { useAppDispatch } from "../../services/hooks";
import "./styles.css";
import { useEffect, useState } from 'react';

export function SearchForm() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSearch(searchTerm));
  }, []);

  const handleSearch = (query: string) => {
    dispatch({
      type: SEARCH_TERM,
      query: query,
    });
    dispatch(getSearch(query));
  };

  // const handleKeyDown = (e: any) => {
  //   if (e.key === "Enter") {
  //     handleSuccess(e);
  //   }
  // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <input  
          type="text"
          placeholder="Search users"
          value={searchTerm}
          onChange={handleChange}/>
      </form>
    </div>
  );
}
