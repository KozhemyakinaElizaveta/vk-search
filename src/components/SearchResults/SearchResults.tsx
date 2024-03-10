import { useAppSelector } from "../../services/hooks";
import { getSearchResults } from "../../services/store";
import { UserCard } from "../UserCard/UserCard";
import "./style.css";

export interface User {
  id: number;
  name: string;
  email: string;
}

export function SearchResults() {
  const { results } = useAppSelector(getSearchResults);
  const users = results.users;

  return (
    <div className="usersList">
      {results.total > 0 ? users.map((user: User) => (
        <UserCard {...user} />
      )) : 
        <span>No results</span>}
    </div>
  );
}
