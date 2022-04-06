import { Button, Input } from "@components/atoms";
import { BiSearch } from "react-icons/bi";

function Search({ onChange, onClick, value }) {
  return (
    <div className="flex flex-1 bg-white rounded-sm overflow-hidden text-black">
      <Input
        placeholder="Search Input"
        className="flex-1"
        onChange={onChange}
        value={value}
      />
      <div>
        <Button onClick={onClick}>
          <BiSearch color="white" />
        </Button>
      </div>
    </div>
  );
}

export default Search;
